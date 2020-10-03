# import argparse

# from google.cloud import language
# from google.cloud.language import enums
# from google.cloud.language import types

import config
import tweepy


def get_tweets(handle):

    auth = tweepy.OAuthHandler(
        config.twitter_api_key, config.twitter_api_secret)
    auth.set_access_token(config.twitter_access_token,
                          config.twitter_token_secret)

    api = tweepy.API(auth)

    timeline = api.user_timeline(id=handle, count=100)

    tweet_list = []
    for obj in timeline:
        new_tweet_dict = {
            "text": obj.text,
            "date": obj.created_at,
            "id": obj.id_str
        }
        tweet_list.append(new_tweet_dict)

    return tweet_list
