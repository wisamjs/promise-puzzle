var Promise = require('bluebird');

var url = 'site.com/api/product/';
var requestIds = [105,234,1204, 152];

var urlRequests = requestIds.map(function(id){
  return url + id;
});

function apiCall(url){
  console.log('PROCESSING: ' + url);
  return new Promise(function(resolve) {
    return setTimeout(function(){
      resolve(200)
    }, 3000);
  });
}


/*
 * Simulate single API call
 */
apiCall(urlRequests[0])
.then(function(res){
  console.log('Response: ' + res);

})


