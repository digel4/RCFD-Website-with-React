const express = require("express")
const router = express.Router()
const Admin = require("../models/admin")
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
router.get("/login", (req, res, next) => {


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




module.exports = router