const express = require("express")
const router = express.Router()
const Admin = require("../models/admin")

const { getToken, COOKIE_OPTIONS, getRefreshToken } = require("../authenticate")

router.post("/signup", (req, res, next) => {
  // Verify that first name is not empty
  if (!req.body.firstName) {
    res.statusCode = 500
    res.send({
      name: "FirstNameError",
      message: "The first name is required",
    })
  } else {
    Admin.register(
      new Admin({ AdminName: req.body.adminname }),
      req.body.password,
      (err, admin) => {
        if (err) {
          res.statusCode = 500
          res.send(err)
        } else {
            admin.firstName = req.body.firstName
            admin.lastName = req.body.lastName || ""
          const token = getToken({ _id: admin._id })
          const refreshToken = getRefreshToken({ _id: admin._id })
          admin.refreshToken.push({ refreshToken })
          admin.save((err, admin) => {
            if (err) {
              res.statusCode = 500
              res.send(err)
            } else {
              res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
              res.send({ success: true, token })
            }
          })
        }
      }
    )
  }
})

module.exports = router