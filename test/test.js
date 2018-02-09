
var convert = require('../_config.js')
var assert = require('assert');

Response response = httpRequest.get("version");
Response response = httpRequest.get("baseurl");
Response response = httpRequest.get("serviceurl");
Response response = httpRequest.get("filesdir");
Response response = httpRequest.get("filespri");
Response response = httpRequest.get("onet_serviceurl");
Response response = httpRequest.get("onet_baseurl");
Response response = httpRequest.get("onet_client");
Response response = httpRequest.get("onet_auth_token");
Response response = httpRequest.get("hes_baseurl");
Response response = httpRequest.get("gmap_api_key");
Response response = httpRequest.get("google_client_secret");
Response response = httpRequest.get("google_client_ID");
	
		int statusCode = response.getStatusCode();

		
		Assert.assertEquals(statusCode , 200, "Correct status code returned");
	}

