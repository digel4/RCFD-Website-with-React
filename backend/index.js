const express = require("express"),
      app = express(),
      body = require("body-parser"),
      mongoose = require("mongoose"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      methodOverride = require("method-override"),
      Event = require("./models/event"),
      User           = require("./models/user");
	  const cors = require("cors");

      //useCreateIndex: true

// To connect with your mongoDB database
console.log("attempting to connect to DB")
mongoose.connect('mongodb+srv://admin:hello@cluster0.e4jqp.mongodb.net/rcf-d?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
	console.log("connected to DB");
}).catch(err => {
	console.log('ERROR triggered:', err.message)
});



app.use(body.urlencoded({limit: '10mb',extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/jHtmlArea"));
app.use(methodOverride("_method"));
app.use(cors());



//==============================
// PASSPORT CONFIGURATION
//==============================

app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate())); //this coresponds to the middleware used later on on login

passport.use('local', new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

// app.use( (req, res, next) => {
// 	res.locals.currentUser = req.user;
// 	res.locals.error = req.flash("error");
// 	res.locals.success = req.flash("success");
// 	next();
// });


app.get("/", (req, res) => {
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
			console.log(sortedArray)
			console.log("hello from backend")
			console.log(`${typeof sortedArray}`)
			console.log(typeof sortedArray)
			res.send(sortedArray)

		}
	})
});

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