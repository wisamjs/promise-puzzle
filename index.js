var Promise = require('bluebird');

var url = 'site.com/api/product/';
var requestIds = [105, 234, 1204, 152];

var urlRequests = requestIds.map(function(id){
  return url + id;
});

function apiCall(url){
  console.log('PROCESSING: ' + url);
  return new Promise(function(resolve) {
    return setTimeout(function(){
  console.log('DONE: ' + url);
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

/*
 * Sequentially call each request and get result
 */
Promise.reduce(urlRequests, function(total, req){
  return apiCall(req)
  .then(function(res){
    return total+= 1;
  })
}, 0)
.then(function(calls){
  console.log('successful calls: ' + calls);

})


