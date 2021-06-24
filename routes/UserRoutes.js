const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const passport = require("passport");


router.get('/users', async (req, res) => {
    const users = await UserModel.find({})
    try{
        (res.send(users))
    }
    catch(err){
        res.status(500).send(err)
    }
})

// router.post('/user', async(req, res) => {
//     const user = new UserModel(req.body)
//     try{
//         await user.save()
//         res.send(user)
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// })

router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      if (!user) {
        return res.status(400).json({ errors: "No user found" });
      }
      req.logIn(user, function (err) {
        if (err) {
          return res.status(400).json({ errors: err });
        }
        return res.status(200).json({ authenticatedUser: user });
      });
    })(req, res, next);
  });

  //the logedin Middleware
function loggedIn(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect("/");
    }
  }
  router.get("/logout", (req, re) => {
    req.logout();
    req.session = null;
  });

router.delete('/user/:id', async (req, res) => {
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id)
        if(!user) {
            res.status(404).send("Not Found!")
        }
        res.status(200).send();
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = router


