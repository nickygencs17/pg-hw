const frisby = require('frisby');

it('it\'s all okay', function () {
  return frisby.get('http://localhost')
    .expect('status', 200);
});

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost',{
      title: 'My New Blog Post',
      content: '<p>A cool blog post!</p>'
    }).expect('status', 200);
});

it ('GET should return a status of 404 NOT FOUND', function () {
  return frisby
    .get('http://localhost/dosentwork').expect('status', 404);
});
