var config = require('./_config.js');
var request= require('request');

request.get(config.zomato_baseurl + '/search', {headers: {'user-key': config.zomato_api}},function(err,res,body){
     
    if (!err && res.statusCode == 200) {

  console.log(body);
var fs = require('fs'); 
var obj = JSON.parse(body);
// document.getElementById("demo").innerHTML = obj.name;
// console.log(obj.name);
 fs.writeFile('data/' + config.city + '.csv', document.getElementById("demo").innerHTML = obj.name , function (err) {
  if (err) {
	
    console.log('Some error occured - file either not saved or corrupted file saved.');
  } else{
    console.log('It\'s saved!');
  }
});
 }
 
});

