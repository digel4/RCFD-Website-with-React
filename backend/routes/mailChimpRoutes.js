const express = require("express");
const router = express.Router();
const mailchimpInstance = "us8",
	  listUniqueId      = "c1337e3581",
	  mailchimpApiKey   ="e577a2d1e9b4d9d13ca14e87499f1b28";


router.post('/subscribe', function (req, res) {
    console.log(req.body);
    request
    .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
    .send({
        'email_address': req.body.emailAddress,
        'status': 'subscribed',
        'merge_fields': {
        'FNAME': req.body.firstName,
        'LNAME': req.body.lastName
        }
    })
    .end(function(err, response) {
        if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
        console.log("subscribe worked!");
        res.status(204).send();
        } else {
        console.log("subscribe worked!")
        res.status(204).send();
        }
    });
});

module.exports = router
