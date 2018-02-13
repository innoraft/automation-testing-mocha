var config = require('./_config.js');
var request=require('request');


request.get(config.zomato_baseurl + '/categories', {headers: {'user-key': config.zomato_api}},function(err,res,body){
  
  console.log(body);
 
  
});