var config = require('./_config.js');
var request= require('request');

request.get(config.zomato_baseurl + '/search', {headers: {'user-key': config.zomato_api} , parameters: {'city': config.city , 'entity_id': config.zomato_enid , 'entity_type': config.zomato_enty , 'lat': config.zomato_lat , 'lon': config.zomato_lon , 'cuisines': config.cuisines , 'establishment_type': config.zomato_estab , 'start': config.start , 'count': config.count , 'collection_id': config.zomato_coll , 'category': config.zomato_category , 'sort': config.zomato_sort , 'order': config.zomato_order},function(err,res,body){
     
    if (!err && res.statusCode == 200) {

  console.log(body);
var fs = require('fs'); 
// var obj = JSON.parse(body);
// document.getElementById("demo").innerHTML = obj.name;
// console.log(obj.name);
const Json2csvParser = require('json2csv').Parser;
const fields = ['name', 'rating' , 'address'];
 
const json2csvParser = new Json2csvParser({ fields });
const csv = json2csvParser.parse(body);
 
console.log(csv);
 fs.writeFile('data/' + config.city + '.csv', csv , function (err) {
  if (err) {
	
    console.log('Some error occured - file either not saved or corrupted file saved.');
  } else{
    console.log('It\'s saved!');
  }
});
 }}
});




   
