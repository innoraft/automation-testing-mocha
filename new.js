 
$http({
    method: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/search?',
    headers: {'user_key' : '8316e598b8ff025cf80fa870bc7f2563'},
    params: {
        entity_type: 'city', 
        city: "bangalore" ,
		cuisine: "chinese" ,
		categories: "cafes"

    }
});


