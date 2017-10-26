var TwitterPackage = require('twitter');
 
// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: 'key',
  consumer_secret: 'secret',
  access_token_key: 'acess_key',
  access_token_secret: 'access_secret'
}
 
var Twitter = new TwitterPackage(secret);
 
var query = "linkedin";
Twitter.get('search/tweets', {q: query, count: 1, lang:"en"}, function(error, tweets, response) {
    
   var tweet_list = tweets['statuses'];
   
   for (var i = 0; i < tweet_list.length; i++) {
      /*  if ('retweeted_status' in tweet_list[i]) {
            continue;
        } */
        var screen_name = tweet_list[i].user.screen_name;
        //console.log(screen_name);
        var message = "@" + screen_name + "Excuse me for this! I'm building a super cool twitter bot and this tweet is posted by it.";
        var tweet_id = tweet_list[i].id_str
 
        try {
            Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
                 console.log("Tweet posted successfully!")
            });
        }
 
        catch(err) {
            console.log(err);
        }
   }
});