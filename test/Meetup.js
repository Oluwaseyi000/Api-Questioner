let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = chai.assert;
let sinon = require('sinon');


let server = require('../server');
let Meetups = require('../model/Meetup');
let meetupController = require('../controller/Meetup');
let routes = require('../routes');

chai.use(chaiHttp);


describe('/NON-PERSISTENCE DATABASE', () => {
   it('Assert non-persistence database using array', done => {
      assert.isArray(Meetups);
      done();
   })
})

describe('/ROUTES', () => {

});
describe('/controller has getAllMeetups function', done => {
   it('Assert controller has a getAllMeetups function ', done => {
      assert.isFunction(meetupController.getASpecificMeetupRecord);
      done();
   })
})


         describe('/GET A SPECIFIC MEETUP', () => {
         it('get a specific record in the database', done => {
            chai.request(server)
               .get('/api/v1/meetups/:meetupId')
               .end((err, res) => {

                  assert.isObject(res.body);
                  assert.equal(res.status, 200);
                  assert.isArray(res.body.data);

                  if (res.body.data.length === 0) {
                     assert.equal(res.body.status, 204);
                     assert.equal(res.body.message, 'Request successful but result contains no data, probably a case of non existence meetup id');

                  } else {
                     assert.equal(count(res.body.data), 1);
                     assert.equal(res.body.status, 200);
                     //for (let i = 0; i < res.body.data.length; i++) {

                     assert.isNotEmpty(res.body.data[0].location);
                     assert.isNotEmpty(res.body.data[0].topic);
                     assert.isNumber(res.body.data[0].id);
                     assert.nestedProperty(res.body.data[0], 'host');
                     assert.nestedProperty(res.body.data[0], 'details');
                     assert.nestedProperty(res.body.data[0], 'coverImage');
                     assert.isNotEmpty(res.body.data[0].happeningOn);
                     assert.isArray(res.body.data[0].tags);

                     //               }

                  }


               });
            done();
         })

      })