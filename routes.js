let express = require('express');
let router = express.Router();

let meetupController = require('./controller/Meetup');


router.post('/meetups', meetupController.createMeetup);




router.route('*')
   .get((req, res) => {
      res.json({
         status: 404,
         message: 'Incorrect API endpoint; please check your api URL (even for as little thing as spelling)'
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