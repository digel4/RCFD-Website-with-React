const passport = require("passport");
const jwt = require("jsonwebtoken");
// const { useResolvedPath } = require("react-router-dom")
const admin = require("./models/admin");
const dev = process.env.NODE_ENV !== "production";

exports.COOKIE_OPTIONS = {
  httpOnly: true,
  // Since localhost is not having https protocol,
  // secure cookies do not work correctly (in postman)
  // secure: !dev,
  secure: true,
  signed: true,
  maxAge: eval(process.env.REFRESH_TOKEN_EXPIRY) * 1000,
  // maxAge: process.env,
  sameSite: "none",
}
console.log("hello from autenticate")
// console.log(process.env.SESSION_EXPIRY)
// console.log(typeof process.env.SESSION_EXPIRY)
// console.log(typeof eval(process.env.SESSION_EXPIRY))
console.log(typeof process.env.REFRESH_TOKEN_EXPIRY)
console.log(typeof eval(process.env.REFRESH_TOKEN_EXPIRY))
console.log( eval(process.env.REFRESH_TOKEN_EXPIRY) * 1000)
// console.log(process.env)

exports.getToken = admin => {
  return jwt.sign(admin, process.env.JWT_SECRET, {
    expiresIn: eval(process.env.SESSION_EXPIRY),
  })
}

exports.getRefreshToken = admin => {
  const refreshToken = jwt.sign(admin, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: eval(process.env.REFRESH_TOKEN_EXPIRY),
  })
  return refreshToken
}


exports.verifyUser = passport.authenticate("jwt", { session: false })