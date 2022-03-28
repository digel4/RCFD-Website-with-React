const express = require("express"),
      app = express(),
      body = require("body-parser"),
	  cookieParser = require("cookie-parser"),
      mongoose = require("mongoose"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      methodOverride = require("method-override"),
      Event = require("./models/event"),
      Admin           = require("./models/admin");
	  const cors = require("cors");
const admin = require("./models/admin");
const adminRouter = require("./routes/adminRoutes")


if (process.env.NODE_ENV !== "production") {
	// Load environment variables from .env file in non prod environments
	require("dotenv").config()
  }
// const JwtStrategy = require("passport-jwt").Strategy,
//   ExtractJwt = require("passport-jwt").ExtractJwt

      //useCreateIndex: true

// To connect with your mongoDB database
console.log("attempting to connect to DB")
mongoose.connect('mongodb+srv://admin:hello@cluster0.e4jqp.mongodb.net/rcf-d?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
	console.log("connected to DB");
}).catch(err => {
	console.log('ERROR triggered:', err.message)
});

app.use(body.urlencoded({limit: '10mb',extended: true}));
app.use(body.json())
console.log(`cookie secret is ${process.env.COOKIE_SECRET} `)
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/jHtmlArea"));
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

// app.use("/admin", adminRouter)

app.use(adminRouter)

app.get("/madeup2", (req, res) => {
    res.send("app is working!")
})
// app.get("/", function (req, res) {
//   res.send({ status: "success" })
// })
//==============================
// PASSPORT CONFIGURATION
//==============================

// app.use(require("express-session")({
// 	secret: "Once again Rusty wins cutest dog!",
// 	resave: false,
// 	saveUninitialized: false
// }));

// app.use(passport.initialize());

// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate())); //this coresponds to the middleware used later on on login



// app.use( (req, res, next) => {
// 	res.locals.currentUser = req.user;
// 	res.locals.error = req.flash("error");
// 	res.locals.success = req.flash("success");
// 	next();
// });



app.get("/", (req, res) => {
	console.log("hello from main")
    res.send("app is working!")
	
})
// app.get("/events", (req, res) => {
//     res.send("You have hit events")
// })

// app.get("/events", (req, res) => {
// 	// Get all events from DB
// 	Event.find({longDate: {$gte: new Date()}}, (err, allEvents) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			const sortedArray = allEvents.sort((a, b) => {
//       			return new Date(a.longDate) - new Date(b.longDate);
// 			}); 
// 			res.send(sortedArray);
// 		}
		
// 	})
// });


	// const pastEvents = Event.find({longDate: {$lt: new Date()}}, (err, allEvents) => {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			const sortedArray = allEvents.sort((a, b) => {
	// 				  return new Date(a.longDate) - new Date(b.longDate);
	// 			});
	// 			return sortedArray;
	// 			// res.send(sortedArray)
	// 		}
	// })
	// res.send({currEvents, pastEvents});
// });

app.get("/pastevents", (req, res) => {
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
app.get("/madeup", (req, res) => {
	// Verify that first name is not empty
	// if (req.body.firstName === "hello") {
	//   res.statusCode = 500
	//   res.send("success!")
	// }
	console.log("hello from post")
	res.send("success!")
})

app.get("/events", (req, res) => {
	// Get all events from DB
	Event.find({longDate: {$gte: new Date()}}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			const sortedArray = allEvents.sort((a, b) => {
      			return new Date(a.longDate) - new Date(b.longDate);
		});
			res.send(sortedArray);
		}
	})	
});
app.get("/events/:id", (req, res) => {
	// Get all events from DB
	Event.findById(req.params.id, (err, foundEvent) => {
		if (err) {
			console.log(err)
		} else {
			const longOption= {weekday: "long", day: '2-digit', month: 'long', year: "numeric"};
			var longDate = new Date(foundEvent.longDate).toLocaleString('en-GB', longOption);
				//render show template with that event
			// res.render("events/show", {event: foundEvent, longDate:longDate});
			// console.log(foundEvent)
			res.send(foundEvent)
		}
	});
});

// app.post("/login", (req, res, next) => {
// 	  // const token = getToken({ _id: req.user._id })
// 	  // const refreshToken = getRefreshToken({ _id: req.user._id })
	
// 	  console.log("login post hit!")
// 	  console.log(req.body)
// 	  console.log(req.body.password)
// 	  res.send("success")
// 	  // Admin.findById(req.user._id).then(
// 	  //   admin => {
// 	  //     admin.refreshToken.push({ refreshToken })
// 	  //     admin.save((err, user) => {
// 	  //       if (err) {
// 	  //         res.statusCode = 500
// 	  //         res.send(err)
// 	  //       } else {
// 	  //         res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
// 	  //         res.send({ success: true, token })
// 	  //       }
// 	  //     })
// 	  //   },
// 	  //   err => next(err)
// 	  // )
// 	})


app.listen(3001, () => {
	console.log("server listening on port 3001");
});




// const User = mongoose.model('users', UserSchema);
// User.createIndexes();

// // For backend and express
// const express = require('express');
// const app = express();
// const cors = require("cors");
// console.log("App listen at port 5000");
// app.use(express.json());
// app.use(cors());
// app.get("/", (req, resp) => {

//     resp.send("App is Working");
//     // You can check backend is working or not by 
//     // entering http://loacalhost:5000
    
//     // If you see App is working means
//     // backend working properly
// });

// app.post("/register", async (req, resp) => {
//     try {
//         const user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         if (result) {
//             delete result.password;
//             resp.send(req.body);
//             console.log(result);
//         } else {
//             console.log("User already register");
//         }

//     } catch (e) {
//         resp.send("Something Went Wrong");
//     }
// });
// app.listen(5000)