const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt
const Admin = require("../models/admin")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET
// console.log(opts)


passport.use(
	new JwtStrategy(opts, function (jwt_payload, done) {
	  // Check against the DB only if necessary.
	  // This can be avoided if you don't want to fetch admin details in each request.
	  Admin.findOne({ _id: jwt_payload._id }, function (err, admin) {
		if (err) {
		  return done(err, false)
		}
		if (admin) {
		  return done(null, admin)
		} else {
		  return done(null, false)
		  // or you could create a new account
		}
	  })
	})
  )