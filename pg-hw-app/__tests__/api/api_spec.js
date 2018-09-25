const frisby = require('frisby');

const url = 'http://localhost:3000/tacoservice'

it('GET Valid case should return a status of 200 OK', function () {
  return frisby
    .get(url + '?name=Kelly&age=50&gender=female&condition=Allergies')
    .expect('status', 200);
});

it('GET InValid case should return a status of 500 BAD REQUEST', function () {
  return frisby
    .get(url + '?name=Kelly&age=50&gender=female')
    .expect('status', 500);
});

it('GET should return a status of 404 NOT FOUND', function () {
  return frisby
    .get(url + 'NotFound').expect('status', 404);
});



