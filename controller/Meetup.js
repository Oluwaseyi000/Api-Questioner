let Meetups = require('../model/Meetup');

getASpecificMeetupRecord = (req, res) => {
  //const  id=  req.params.meetupId;
  
   if(!req.params.meetupId){
      res.json({ 
         status: 400,
         data: [Meetups],
         message: 'Bad Request, please include meetup Id in your request as parameter'
         
      })
   }
   else{
      const meetup= Meetups.find((meetup)=>meetup.id === Number(req.params.meetupId));
      console.log(Meetups);
      if(meetup){
         res.json({
            status: 200,
            data: [meetup]
         })
      }
      else{
         res.json({
            status:204,
            message: 'Request successful but result contains no data, probably a case of non existence meetup id',
            data:[]
         })
      }
     
   }
      
   
}



module.exports = {getASpecificMeetupRecord}