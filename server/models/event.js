const mongoose = require("mongoose");
// EVENT SCHEMA

const eventSchema = new mongoose.Schema({
	name: String,
	longDate: Date,
	shortDate: String,
	image: String,
	description: String,
	startTime: String,
	endTime: String,
	businessName: String,
	streetNumber: String,
	streetName: String,
	city: String,
	postcode: String,
	eventURL: String,
	excerpt: String,
});


module.exports = mongoose.model("Event", eventSchema);