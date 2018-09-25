# PG Engineer Homework
NICHOLAS GENCO

Thanks for taking the time to give me this assignment. I wrote this service using Node and Express. The web is moving toward rest architecture so I decided to make this a rest service called tacoservice. I also think its a great idea to get paid in Tacos! haha

Regards
-Nick 

## Getting started

1. Install and setup Node 
`npm -version 6.4.1`
2. Clone this repo and navigate to `pg-hw/pg-hw-app`
3. run `npm install`
4. run `node app`
5. you should see `app running on port. 3000`
6. open a new terminal 
7. you can access the api by curl, postman, etc.

`curl "http://localhost:3000/tacoservice?name=Brad&age=20&gender=male&condition=Heart%20Disease"`

The following query params are required:
```
name
age
gender
condition
```

## The Tests

Made using Frisby.js:

1. Install and setup Node 
2. make sure api is running:
3. `npm test`

