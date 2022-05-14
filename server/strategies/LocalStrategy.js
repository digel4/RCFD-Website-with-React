const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Admin = require("../models/admin")


//Called during login/sign up.
passport.use(new LocalStrategy(Admin.authenticate()));

//called while after logging in / signing up to set user details in req.user
passport.serializeUser(Admin.serializeUser());

passport.deserializeUser(Admin.deserializeUser());