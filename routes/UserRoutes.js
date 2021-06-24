const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')

router.get('/users', async (req, res) => {
    const users = await UserModel.find({})
    try{
        (res.send(users))
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.post('/user', async(req, res) => {
    const user = new UserModel(req.body)
    try{
        await user.save()
        res.send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})

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


