"""Demonstrates how to make a simple call to the Natural Language API."""

import argparse

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import twitter


def print_result(annotations):
    score = annotations.document_sentiment.score
    magnitude = annotations.document_sentiment.magnitude

    for index, sentence in enumerate(annotations.sentences):
        sentence_sentiment = sentence.sentiment.score
        # print(
        #     "Sentence {} has a sentiment score of {}".format(
        #         index, sentence_sentiment)
        # )

    print(
        "Overall Sentiment: score of {} with magnitude of {}".format(
            score, magnitude)
    )
    return 0


def analyze(user_handle):
    """Run a sentiment analysis request on text within a passed filename."""
    client = language.LanguageServiceClient()

    tweet_list = twitter.get_tweets(handle=user_handle)

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

        print(tweet_list[i])

    return tweet_list


if __name__ == "__main__":
    # parser = argparse.ArgumentParser(
    #     description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    # )
    # parser.add_argument(
    #     "movie_review_filename",
    #     help="The filename of the movie review you'd like to analyze.",
    # )
    # args = parser.parse_args()

    # analyze(args.movie_review_filename)

    analyze("realDonaldTrump")
