const frisby = require('frisby');

const url = 'http://localhost:3000/'

it('it\'s all okay', function () {
  return frisby.get(url)
    .expect('status', 200);
});

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get(url,{
      title: 'My New Blog Post',
      content: '<p>A cool blog post!</p>'
    }).expect('status', 200);
});

it ('GET should return a status of 404 NOT FOUND', function () {
  return frisby
    .get(url+'NotFound').expect('status', 404);
});
