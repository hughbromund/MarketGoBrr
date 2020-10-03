import twitter
import stock
import sentiment_analysis

from scipy import stats
import matplotlib.pyplot as plt
import numpy as np
from datetime import timedelta


def perform_linear_regression(x_arr, y_arr):
    slope, intercept, r_value, p_value, std_err = stats.linregress(
        x_arr, y_arr)

    # print("\nR^2: " + str(r_value**2))
    # print("\nR: " + str(r_value))

    # plt.plot(x_arr, y_arr, 'o', label='original data')
    # plt.plot(x_arr, intercept + slope *
    #          np.asarray(x_arr), 'r', label='fitted line')
    # plt.legend()
    # plt.show()

    return r_value


def get_sentiment_data(twitter_handle, stock_ticker):

    # Get list of tweets with name, id, score, magnitude, text
    tweet_list = sentiment_analysis.get_tweet_list(user_handle=twitter_handle)

    if tweet_list[0] == "34":
        return {"status": 400, "message": "Invalid twitter handle"}

    tweet_time_list = []
    tweet_score_list = []
    mag_id_list = []
    mag_date_list = []

    curr_time = None
    curr_score = 0
    curr_count = 0
    max_mag_ind = 0

    # for tweet in tweet_list:
    for i in range(len(tweet_list)):

        # if curr_time != None:
            # print(curr_time)
            # print(tweet.get("date"))
            # print(tweet.get("date") > (curr_time + timedelta(minutes=15)))

        if curr_time == None:
            curr_time = tweet_list[i].get("date")
            curr_count = 1
            curr_score = tweet_list[i].get(
                "score") * tweet_list[i].get("magnitude")
            max_mag_ind = i
        elif tweet_list[i].get("date") < (curr_time - timedelta(minutes=15)):
            # Average score and add to array
            tweet_score_list.append(curr_score / curr_count)
            tweet_time_list.append(int(curr_time.timestamp()))
            mag_id_list.append(tweet_list[max_mag_ind].get("id"))
            mag_date_list.append(
                int(tweet_list[max_mag_ind].get("date").timestamp()))

            curr_time = tweet_list[i].get("date")
            curr_count = 1
            curr_score = tweet_list[i].get(
                "score") * tweet_list[i].get("magnitude")
            max_mag_ind = i
        else:
            curr_score += tweet_list[i].get("score") * \
                tweet_list[i].get("magnitude")
            curr_count += 1
            if tweet_list[i].get("magnitude") > tweet_list[max_mag_ind].get("magnitude"):
                max_mag_ind = i

    tweet_score_list.append(curr_score / curr_count)
    tweet_time_list.append(int(curr_time.timestamp()))
    mag_id_list.append(tweet_list[max_mag_ind].get("id"))
    mag_date_list.append(
        int(tweet_list[max_mag_ind].get("date").timestamp()))

    # tweet_time_list.append(int(tweet.get("date").timestamp()))
    # tweet_score_list.append(tweet.get("score"))

    stock_vals = stock.get_stock_data_and_time_list(
        stock_symbol=stock_ticker, time_list=tweet_time_list)

    if len(stock_vals.get("stock_data")) == 0:
        return {"status": 400, "message": "Invalid stock ticker"}

    aggregate_list = []

    x_arr = []
    y_arr = []
    data_arr = stock_vals.get("change_data")
    for i in range(len(tweet_score_list)):
        if data_arr[i][1] == "yes":
            x_arr.append(tweet_score_list[i])
            y_arr.append(data_arr[i][0])

            aggregate_list.append({
                "score": tweet_score_list[i],
                "change": data_arr[i][0],
                "id": mag_id_list[i],
                "timestamp": mag_date_list[i]
            })

    # print(tweet_time_list)

    if len(x_arr) != len(y_arr) or len(x_arr) < 10 or len(y_arr) < 10:
        return {"status": 400, "message": "User does not have enough tweets."}

    r = perform_linear_regression(x_arr=x_arr,
                                  y_arr=y_arr)

    # Information to return: stock data, tweet data, R value,
    final_dict = {}

    final_dict["stock_data"] = stock_vals.get("stock_data")
    final_dict["tweet_list"] = tweet_list
    final_dict["aggregate_data"] = aggregate_list
    final_dict["r_value"] = r

    # print(final_dict)

    return final_dict


def post_analysis(request):

    request_json = request.get_json(silent=True)
    request_args = request.args

    if request_json and 'user' in request_json:
        user = request_json['user']
    elif request_args and 'user' in request_args:
        user = request_args['user']
    else:
        user = 'BarackObama'

    if request_json and 'stock' in request_json:
        stock = request_json['stock']
    elif request_args and 'stock' in request_args:
        stock = request_args['stock']
    else:
        stock = 'spy'

    return get_sentiment_data(twitter_handle=user, stock_ticker=stock)


if __name__ == "__main__":
    # get_sentiment_data("realDonaldTrump", "aapl")
    print(get_sentiment_data("BarackObama", "spy"))
