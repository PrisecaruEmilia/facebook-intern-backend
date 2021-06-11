// const { response } = require('express')
const express = require('express')
const router = express.Router()
const PostModel = require('../models/post')

router.get('/posts', async (req, res) => {
    const posts = await PostModel.find({})
    try{
        (res.send(posts))
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.post('/post', async(req, res) => {
    const post = new PostModel(req.body)
    try{
        await post.save()
        res.send(post)
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.patch('/post/:id', async (req, res) => {
    try{
        const updatePost = await PostModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatePost);
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.delete('/post/:id', async (req, res) => {
    try{
        const post = await PostModel.findByIdAndDelete(req.params.id)
        if(!post) {
            res.status(404).send("Not Found!")
        }
        res.status(200).send();
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = router


