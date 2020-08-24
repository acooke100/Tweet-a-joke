var Twitter = require('twitter');

//Fill in these details from your twitter developer account
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var joke;
  
var request = require('request');
request('https://icanhazdadjoke.com', {json: true}, function (error, response, body)
{
	console.log('error:', error);
	console.log('statusCode: ', response && response.statusCode);
	console.log('body:', body);
	joke = body.joke;
	
	
	client.post('statuses/update', {status: joke},  function(error, tweet, response) {
	
	if(error) throw error;
	console.log(tweet);  // Tweet body. 
	console.log(response);  // Raw response object.
	});
});






