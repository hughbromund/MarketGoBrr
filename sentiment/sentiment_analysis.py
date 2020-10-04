"""Demonstrates how to make a simple call to the Natural Language API."""

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import twitter


# def print_result(annotations):
#     score = annotations.document_sentiment.score
#     magnitude = annotations.document_sentiment.magnitude

#     for index, sentence in enumerate(annotations.sentences):
#         sentence_sentiment = sentence.sentiment.score
#         # print(
#         #     "Sentence {} has a sentiment score of {}".format(
#         #         index, sentence_sentiment)
#         # )

#     print(
#         "Overall Sentiment: score of {} with magnitude of {}".format(
#             score, magnitude)
#     )
#     return 0


def get_tweet_list(user_handle):
    """Run a sentiment analysis request on text within a passed filename."""
    client = language.LanguageServiceClient()

    tweet_list = twitter.get_tweets(handle=user_handle)

    if tweet_list[0] == "34":
        return tweet_list

    for i in range(len(tweet_list)):

        content = tweet_list[i].get("text")

        document = types.Document(
            content=content, type=enums.Document.Type.PLAIN_TEXT)
        annotations = client.analyze_sentiment(document=document)

        # Print the results
        # print_result(annotations)

        score = annotations.document_sentiment.score
        magnitude = annotations.document_sentiment.magnitude

        tweet_list[i]["score"] = score
        tweet_list[i]["magnitude"] = magnitude

        # print(tweet_list[i])

    return tweet_list


# if __name__ == "__main__":
#     # parser = argparse.ArgumentParser(
#     #     description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
#     # )
#     # parser.add_argument(
#     #     "movie_review_filename",
#     #     help="The filename of the movie review you'd like to analyze.",
#     # )
#     # args = parser.parse_args()

#     # analyze(args.movie_review_filename)

#     tweet_arr = analyze("realDonaldTrump")

#     x_arr = []
#     y_arr = []
#     for i in range(len(tweet_arr)):
#         x_arr.append(tweet_arr[i].get("score"))
#         print(tweet_arr[i].get("score"))
#         y_arr.append(i)

#     slope, intercept, r_value, p_value, std_err = stats.linregress(
#         x_arr, y_arr)

#     print(str(r_value**2))

#     plt.plot(x_arr, y_arr, 'o', label='original data')
#     plt.plot(x_arr, intercept + slope *
#              np.asarray(x_arr), 'r', label='fitted line')
#     plt.legend()
#     plt.show()
