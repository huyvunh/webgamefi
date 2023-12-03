//const twit = require('twit');


// const twitterConfig = {
//   consumer_key: 'S7f2KhDBlJ77SyQPms6D4SoNV',
//   consumer_secret: 'Qs1BVoiUlAI0smcvFfoFVbVef5PTGRnA0IDRb7t4fU6lD1AHLy',
//   access_token: '1461187046798622722-PEnz1ZzkNBAdLY2oCSPZk59IED1Q1G',
//   access_token_secret: '7tNybH2DPsttnQwt192d3otka47Tg1YhbmZte6hWqDADN'
// };

const { TwitterApi } = require('twitter-api-v2')
const twitterClient = new TwitterApi({
  appKey: 'S7f2KhDBlJ77SyQPms6D4SoNV',
  appSecret: 'Qs1BVoiUlAI0smcvFfoFVbVef5PTGRnA0IDRb7t4fU6lD1AHLy',
  accessToken: '1461187046798622722-PEnz1ZzkNBAdLY2oCSPZk59IED1Q1G',
  accessSecret: '7tNybH2DPsttnQwt192d3otka47Tg1YhbmZte6hWqDADN',
});


exports.getAPIX = (req, res, next) => {
  // Lấy danh sách retweeter cho một tweet dựa trên ID tweet
  const getRetweeters = async (tweetId) => {
    try {
      const retweets = await T.get('statuses/retweeters/ids', { id: tweetId });
      const retweeterIds = retweets.data.ids;
      return retweeterIds;
    } catch (error) {
      return res.status(200).json({
        isSuccess: true,
        status: 200
      });
    };
  };

  // const tweetIdToCheck = process.env.YOUR_TWEET_ID;
  // getRetweeters(tweetIdToCheck)
  //   .then((retweeterIds) => {
  //     console.log('Retweeters:', retweeterIds);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error.message);
  //   });

  //callback
  //async await - Promise
}

exports.getListDataRetweet = async (req, res, next) => {
  const tweet_post_id = '1723546183120077236';
  try {

    //const acvv = await twitterClient.v2.singleTweet(tweet_post_id);
    const tweet = await twitterClient.v2.singleTweet(tweet_post_id, {
      "user.fields": ["created_at"]
    });

    console.log(tweet)

    return res.status(200).json({
      isSuccess: true,
      status: 200,
      // data: retweeterIds
    });

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      isSuccess: false,
      status: 400
    });
  }
}