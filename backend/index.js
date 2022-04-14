const express        = require("express"),
      app            = express(),
      body           = require("body-parser"),
	  cookieParser   = require("cookie-parser"),
      mongoose       = require("mongoose"),
      passport       = require("passport"),
      methodOverride = require("method-override"),
	  cors           = require("cors");




if (process.env.NODE_ENV !== "production") {
	// Load environment variables from .env file in non prod environments
	require("dotenv").config()
  }


// To connect with your mongoDB database
console.log("attempting to connect to DB")
mongoose.connect(MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true }).then(() => {
	console.log("connected to DB");
}).catch(err => {
	console.log('ERROR triggered:', err.message)
});

app.use(body.urlencoded({limit: '10mb',extended: true}));
app.use(body.json())
console.log(`cookie secret is ${process.env} `)
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(methodOverride("_method"));

require("./strategies/JwtStrategy")
require("./strategies/LocalStrategy")
require("./authenticate")


// Add the client URL to the CORS policy

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },

  credentials: true,
}

app.use(cors(corsOptions))

app.use(passport.initialize())

// Routes
const adminAuthRouter = require("./routes/adminAuthRoutes")
const adminCRUDRouter = require("./routes/adminCRUDRoutes")
const eventsRouter = require("./routes/eventsRoutes")
const mailChimpRoutes = require("./routes/mailChimpRoutes")
app.use(adminAuthRouter, adminCRUDRouter, eventsRouter, mailChimpRoutes )

app.listen(3001, () => {
	console.log("server listening on port 3001");
});
