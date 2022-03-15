const mongoose              = require("mongoose"),
	  passportLocalMongoose = require("passport-local-mongoose");


const Session = new mongoose.Schema({
	refreshToken: {
		type: String,
		default:""
	}
})


const AdminSchema = new mongoose.Schema({
	AdminName: {
	  type: String,
	  default: "",
	},
	authStrategy: {
	  type: String,
	  default: "local",
	},
	refreshToken: {
	  type: [Session],
	},
});

//Remove refreshToken from the response
AdminSchema.set("toJSON", {
	transform: function (doc, ret, options) {
	  delete ret.refreshToken
	  return ret
	},
  })

AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin", AdminSchema);