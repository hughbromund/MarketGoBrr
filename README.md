# Market Go Brr

## Inspiration

After Donald Trump [tweeted](https://twitter.com/realDonaldTrump/status/1311892190680014849) that he had contracted COVID-19, the markets fell dramatically. Based on this observation we wanted to see if a similar effect could be observed with specific stocks and Twitter Users.

## What It Does

Market Go Brr is designed to show the correlation between tweets and changes in the market. It takes in a Twitter Handle, analyzes all of that users Tweets, and compares them to changes in the market.

## How It Works

Our web app does the majority of its processing in the cloud using python to call Twitter and Finnhub’s API’s. We pull a user’s tweets and feed them into our hosted Google Cloud function that runs an NLP algorithm. This algorithm outputs a net positivity rating (how much positive or negative language is used in the tweet) and a magnitude (how emotional a given tweet was). It then compares these to changes in stock price around the same time using a regression model and outputs its effect as a percentage. We then pass these through an Express.js API to both connect to our frontend when a request is sent, as well as to store high relationships in a SQL server.

## Technologies

**Google Cloud is the backbone of Market Go Brr.**

Our frontend and backend server are hosted using Google App Engine. More specifically, our frontend is written in React.js and is connected to our Google Cloud services through an Express.js REST API. We use Google Cloud Functions for serverless Twitter and stock data processing. In addition, we keep a scoreboard of the highest correlations between Twitter users and specific stocks, which is powered by Google Cloud SQL. Our application uses Google Cloud’s NLP services to perform sentiment analysis on Tweets sent out by a specified user.

## Developers

[Hugh Bromund](https://hughbromund.com)

[Aditya Naik](https://aditya-naik.com/)

[Nathan Ashta](https://www.nathanashta.com/)

[Peyton Williams](https://peyton.tech/)
