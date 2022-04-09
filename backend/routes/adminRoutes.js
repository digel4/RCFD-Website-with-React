const express = require("express")
const router = express.Router()
const Admin = require("../models/admin")
const Event = require("../models/event")
const passport = require("passport")
const jwt = require("jsonwebtoken")
const cors = require("cors");
const body = require("body-parser");


const { getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser } = require("../authenticate")

router.post("/signup", (req, res, next) => {
  // Verify that first name is not empty
  if (!req.body.adminName) {
    res.statusCode = 500
    res.send({
      name: "Admin Name Error",
      message: "The admin name is required",
    })
  } else {
    Admin.register(
      new Admin({ username: req.body.adminName }),
      req.body.password,
      (err, admin) => {
        if (err) {
          console.log("err hit")
          res.statusCode = 500
          res.send(err)
        } else {
          admin.adminName = req.body.adminName || ""
          const token = getToken({ _id: admin._id })
          const refreshToken = getRefreshToken({ _id: admin._id })
          admin.refreshToken.push({ refreshToken })
          admin.save((err, admin) => {
            if (err) {
              res.statusCode = 500
              res.send(err)
            } else {
              console.log(COOKIE_OPTIONS)
              res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
              res.send({ success: true, token })
            }
          })
        }
      }
    )
  }
})

// router.post("/login", passport.authenticate("local"), (req, res, next) => {
//   const token = getToken({ _id: req.user._id })
//   const refreshToken = getRefreshToken({ _id: req.user._id })
//   Admin.findById(req.user._id).then(
//     admin => {
//       admin.refreshToken.push({ refreshToken })
//       admin.save((err, user) => {
//         if (err) {
//           res.statusCode = 500
//           res.send(err)
//         } else {
//           res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
//           res.send({ success: true, token })
//         }
//       })
//     },
//     err => next(err)
//   )
// })

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  // console.log(req)
  const token = getToken({ _id: req.user._id })
  const refreshToken = getRefreshToken({ _id: req.user._id })
  console.log("token IS:")
  console.log(token)
  console.log("refreshToken IS:")
  console.log(refreshToken)
  // console.log("login post hit!")
  // console.log(req.body)
  // res.send("success")
  // console.log(req.body.password)
  // res.send("success")
  Admin.findById(req.user._id).then(
    admin => {
      admin.refreshToken.push({ refreshToken })
      admin.save((err, user) => {
        if (err) {
          res.statusCode = 500
          res.send(err)
        } else {
          res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
          res.send({ success: true, token })
        }
      })
    },
    err => next(err)
  )
})

// router.post("/login", passport.authenticate("local"), (req, res, next) => {


//   // const token = getToken({ _id: req.user._id })
//   // const refreshToken = getRefreshToken({ _id: req.user._id })

//   console.log("login post hit!")
//   // Admin.findById(req.user._id).then(
//   //   admin => {
//   //     admin.refreshToken.push({ refreshToken })
//   //     admin.save((err, user) => {
//   //       if (err) {
//   //         res.statusCode = 500
//   //         res.send(err)
//   //       } else {
//   //         res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
//   //         res.send({ success: true, token })
//   //       }
//   //     })
//   //   },
//   //   err => next(err)
//   // )
// })
// passport.authenticate("local"),
router.delete("/login", (req, res, next) => {


  // const token = getToken({ _id: req.user._id })
  // const refreshToken = getRefreshToken({ _id: req.user._id })

  console.log("login get hit!")
  // Admin.findById(req.user._id).then(
  //   admin => {
  //     admin.refreshToken.push({ refreshToken })
  //     admin.save((err, user) => {
  //       if (err) {
  //         res.statusCode = 500
  //         res.send(err)
  //       } else {
  //         res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
  //         res.send({ success: true, token })
  //       }
  //     })
  //   },
  //   err => next(err)
  // )
})


router.post("/refreshToken", (req, res, next) => {
  const { signedCookies = {} } = req
  const { refreshToken } = signedCookies

  console.log("hit refreshToken")
  // console.log("req:")
  // console.log(req)
  console.log("signedCookies:")
  console.log(signedCookies)
  console.log("refresshToken:")
  console.log(refreshToken)

  if (refreshToken) {
    try {
      const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
      const adminId = payload._id
      Admin.findOne({ _id: adminId }).then(
        admin => {
          if (admin) {
            // Find the refresh token against the user record in database
            const tokenIndex = admin.refreshToken.findIndex(
              item => item.refreshToken === refreshToken
            )

            if (tokenIndex === -1) {
              res.statusCode = 401
              res.send("Unauthorized")
            } else {
              const token = getToken({ _id: adminId })
              // If the refresh token exists, then create new one and replace it.
              const newRefreshToken = getRefreshToken({ _id: adminId })
              admin.refreshToken[tokenIndex] = { refreshToken: newRefreshToken }
              admin.save((err, admin) => {
                if (err) {
                  res.statusCode = 500
                  res.send(err)
                } else {
                  res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS)
                  res.send({ success: true, token })
                }
              })
            }
          } else {
            res.statusCode = 401
            res.send("Unauthorized")
          }
        },
        err => next(err)
      )
    } catch (err) {
      res.statusCode = 401
      res.send("Unauthorized")
    }
  } else {
    res.statusCode = 401
    res.send("Unauthorized")
  }
})



// ...
router.get("/me", verifyUser, (req, res, next) => {
  res.send(req.user)
})

router.get("/logout", verifyUser, (req, res, next) => {

  const { signedCookies = {} } = req
  const { refreshToken } = signedCookies
  Admin.findById(req.user._id).then(
    admin => {
      const tokenIndex = admin.refreshToken.findIndex(
        item => item.refreshToken === refreshToken
      )

      if (tokenIndex !== -1) {
        admin.refreshToken.id(admin.refreshToken[tokenIndex]._id).remove()
      }

      admin.save((err, admin) => {
        if (err) {
          res.statusCode = 500
          res.send(err)
        } else {
          res.clearCookie("refreshToken", COOKIE_OPTIONS)
          res.send({ success: true })
        }
      })
    },
    err => next(err)
  )
})

router.post(`/events/:id`)

router.post('/admin/createEvent', verifyUser, (req, res) => {
  console.log(req.body)
  const shortOption= {day: '2-digit', month: 'short'}

  const { name, image, desc, endTime, startTime, businessName, streetName, streetNumber, city, postcode, eventURL, excerpt } = req.body
  
	const longDate = req.body.date;
	const shortDate = new Date(req.body.date).toLocaleString('en-GB', shortOption);

	const newEvent = {name, longDate, shortDate, image, description: desc, endTime, startTime, businessName, streetNumber, streetName, city, postcode, eventURL, excerpt  };
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

})

router.post('/admin/editEvent/:id', (req, res) => {
  console.log(req.body)


})

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

router.put("/admin/:id", (req,res) => {
	//find and update the correct campround
	const shortOption= {day: '2-digit', month: 'short'};
  console.log(req.body)
	
	 Event.findByIdAndUpdate(req.params.id, req.body, (err) => {
     //console.log(updatedEvent)
		//  updatedEvent.shortDate = new Date(req.body.date).toLocaleString('en-GB', shortOption); 
		//  updatedEvent.longDate = req.body.date;
		//  console.log(`event body description is ${req.body.description}`)
		//  updatedEvent.name = req.body.name;
		//  updatedEvent.image = req.body.image;
		//  updatedEvent.description = req.body.desc;
		//  updatedEvent.endTime = req.body.endTime;
		//  updatedEvent.startTime = req.body.startTime;
		//  updatedEvent.businessName = req.body.businessName;
		//  updatedEvent.streetNumber = req.body.streetNumber;
		//  updatedEvent.streetName = req.body.streetName;
		//  updatedEvent.city = req.body.city;
		//  updatedEvent.postcode = req.body.postcode;
		//  updatedEvent.eventURL = req.body.eventURL;
		//  updatedEvent.excerpt = req.body.excerpt;
		//  console.log(`Updated event body description is ${updatedEvent.description}`)
		//  updatedEvent.save();
		if(err) {
			console.log(err)
		} else {
			console.log("success")
		}
	});
});

// const shortOption= {day: '2-digit', month: 'short'}

//   const { name, image, desc, endTime, startTime, businessName, streetName, streetNumber, city, postcode, eventURL, excerpt } = req.body

// 	const longDate = req.body.date;
// 	const shortDate = new Date(req.body.date).toLocaleString('en-GB', shortOption);

// 	const newEvent = {name, longDate, shortDate, image, desc, endTime, startTime, businessName, streetNumber, streetName, city, postcode, eventURL, excerpt  };
// 	//Create a new event and save to DB
// 	Event.create(newEvent, (err, newlyCreated) => {
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			//redirect back to events page
// 			console.log(newlyCreated);
// 			// res.redirect("/events");
// 			console.log("added to database");
// 		}
// 	})




module.exports = router