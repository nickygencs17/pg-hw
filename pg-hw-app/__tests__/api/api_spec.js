const frisby = require('frisby');
//./node_modules/.bin/jest
it('should be a teapot', function () {
  return frisby.get('http://httpbin.org/status/418')
    .expect('status', 418);
});