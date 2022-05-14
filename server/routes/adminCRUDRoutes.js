const express = require("express")
const router = express.Router()
const Event = require("../models/event")

const { verifyUser } = require("../authenticate")

const convertDateToShortDate = (dateToShorten) => {
    return new Date(dateToShorten).toLocaleString('en-GB', {day: '2-digit', month: 'short'})
  }

  // Create Event Route
router.post('/admin/createEvent', (req, res) => {
    console.log(req.body)
    const shortOption= {day: '2-digit', month: 'short'}
  
    const { name, image, description, endTime, startTime, businessName, streetName, streetNumber, city, postcode, eventURL, excerpt } = req.body
    
      const longDate = req.body.date;
      const shortDate = new Date(req.body.date).toLocaleString('en-GB', shortOption);
  
      const newEvent = {name, longDate, shortDate, image, description, endTime, startTime, businessName, streetNumber, streetName, city, postcode, eventURL, excerpt  };
      console.log("event about to be submitted to database on backend")
      console.log(newEvent)
    // Create a new event and save to DB
      Event.create(newEvent, (err, newlyCreated) => {
          if (err) {
              console.log(err)
          } else {
              //redirect back to events page
              console.log(newlyCreated);
              // res.redirect("/events");
              console.log("added to database");
          }
      })
  
  });
  
  // DELETE EVENT ROUTE
  router.delete('/admin/:id', (req, res) => {
      // res.send("you have reached the delete route");
    console.log("hit delte route")
    console.log(req.params)
      Event.findByIdAndRemove(req.params.id, (err) => {
          if(err) {
          console.log("failure")
      } else {
          console.log("success")
      }
      });
  });

  //UPDATE EVENT ROUTE
  
  router.put("/admin/:id", (req,res) => {
      // Find and update the correct event with the updatedEventObj
    console.log(req.body)
    const updatedEventObj = {...req.body,longDate: req.body.date, shortDate: convertDateToShortDate(req.body.date) }
    console.log(updatedEventObj)
  
      
       Event.findByIdAndUpdate(req.params.id, updatedEventObj, (err) => {
          if(err) {
              console.log(err)
          } else {
              console.log("success")
          }
      });
  });

  module.exports = router