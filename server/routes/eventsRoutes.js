const express = require("express")
const router = express.Router()
const Event = require("../models/event");
const { verifyUser } = require("../authenticate")

router.get("/pastevents", (req, res) => {
	// Get all events from DB
	Event.find({longDate: {$lt: new Date()}}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			const sortedArray = allEvents.sort((a, b) => {
				return new Date(a.longDate) - new Date(b.longDate);
		});
			console.log(sortedArray);
			res.send(sortedArray)

		}
	})
});

router.get("/events", (req, res) => {
	// Get all events from DB
	Event.find({longDate: {$gte: new Date()}}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			const sortedArray = allEvents.sort((a, b) => {
      			return new Date(a.longDate) - new Date(b.longDate);
		});
			console.log("sending Sorted Array")
			res.send(sortedArray);
		}
	})	
});

router.get("/events/:id", (req, res) => {
	// Get event from DB
	Event.findById(req.params.id, (err, foundEvent) => {
		if (err) {
			console.log(err)
		} else {
			res.send(foundEvent)
		}
	});
});

module.exports = router