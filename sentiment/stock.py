import finnhub
from datetime import datetime
from dateutil.relativedelta import relativedelta
import config
from datetime import timedelta


finn_client = finnhub.Client(api_key=config.finnhub_api_key)

val = 1590988249


def stocks(ticker, start, end):
    res = finn_client.stock_candles(ticker, '15', start, end, adjusted=True)
    return res


def closest_time_index(arr, target):
    n = len(arr)
    left = 0
    right = n - 1
    mid = 0

    while (left < right):
        mid = int((left + right) / 2)
        if target < arr[mid]:
            right = mid
        elif target > arr[mid]:
            left = mid + 1
        else:
            return mid

    while (target < arr[mid]):
        if mid == 0:
            return 0
        mid -= 1

    return mid


def stock_change(stock_data, time):

    index = closest_time_index(stock_data["t"], time)

    # print(datetime.fromtimestamp(stock_data["t"][index]))
    # print(datetime.fromtimestamp(time))
    # print()

    yes_or_no = "yes"

    if datetime.fromtimestamp(stock_data["t"][index]) > datetime.fromtimestamp(time) + timedelta(minutes=15) or \
            datetime.fromtimestamp(stock_data["t"][index]) < datetime.fromtimestamp(time) - timedelta(minutes=15):
        yes_or_no = "no"

    percent_change = ((stock_data["o"][index + 1] - stock_data["o"]
                       [index]) / stock_data["o"][index]) * 100

    return [percent_change, yes_or_no]


def get_stock_data_and_time_list(stock_symbol, time_list):

    dt = datetime.now()
    dt_month = dt.replace(month=dt.month - 1)
    stock = stocks(stock_symbol, int(
        dt_month.timestamp()), int(dt.timestamp()))

    if stock["s"] == "no_data":
        return {"stock_data": []}

    change_list = []

    for time in time_list:
        change_list.append(stock_change(stock_data=stock, time=time))

    # print(change_list)

    # Get 5 times with highest % change (after minimum stock time)
    min_time_ind = closest_time_index(stock["t"], min(time_list))

    max_change_list = []

    for i in range(len(stock["t"]) - min_time_ind - 1):
        if len(max_change_list) < 5:
            max_change_list.append(
                [stock["t"][i + min_time_ind], stock_change(stock, stock["t"][i + min_time_ind])[0]])
        else:
            min_change_ind = 0
            curr_change = stock_change(stock, stock["t"][i + min_time_ind])[0]
            # Find minimum in max and replace if necessary
            for j in range(len(max_change_list)):
                if max_change_list[j] < max_change_list[min_change_ind]:
                    min_change_ind = j
            if max_change_list[min_change_ind][1] < curr_change:
                max_change_list[min_change_ind] = [
                    stock["t"][i + min_time_ind], curr_change]

    # print(max_change_list)

    ret_dict = {
        "stock_data": stock,
        "change_data": change_list,
        "max_change_list": max_change_list
    }

    return ret_dict

# if __name__ == "__main__":
#     dt = datetime.now()
#     dt_year = dt.replace(year=dt.year - 1)
#     stock = stocks("aapl", int(dt_year.timestamp()), int(dt.timestamp()))
#     ex_date = datetime.now() + relativedelta(months=-3)

#     print("change is: " + str(stock_change(stock, ex_date.timestamp())) + "%")

#     # print(stock["c"][delta.days - 1])
