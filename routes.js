let express = require('express');
let router = express.Router();
let meetupController=require('./controller/Meetup');

// router.route('/meetups/:meetupId')
//    .get(meetupController.getASpecificMeetupRecord);

router.get('/meetups/:meetupId', meetupController.getASpecificMeetupRecord)

router.route('*')
   .get((req, res) => {
      res.json({
         status: 404,
         message: 'Incorrect API endpoint; please check your api URL (even for as little things as spelling)'
      });
   })

   .post((req, res) => {
      res.json({
         status: 404,
         message: 'Incorrect API endpoint, please check your api  URL(even for as little things as spelling)'
      });
   })
   .put((req, res) => {
      res.json({
         status: 404,
         message: 'Incorrect API endpoint, please check your api URL (even for as little things as spelling)'
      });
   })
   .delete((req, res) => {
      res.json({
         status: 404,
         message: 'Incorrect API endpoint, please check your api  URL(even for as little things as spelling)'
      });
   });

module.exports = router;