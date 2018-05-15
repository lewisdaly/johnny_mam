const request = require('request-promise-native');

return request('https://google.com')
  .then(res => console.log(res))