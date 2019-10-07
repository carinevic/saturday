const express = require('express')
let mongoose = require('mongoose');
const app = express()
let Post = require('./models/post').Post;

mongoose.connect('mongodb://localhost/city', { useNewUrlParser: true });

app.get('/post',async (req,res) =>{
    let posts = await Post.find();
    res.send(posts);
})

app.use(express.static('public'));
app.listen(3000,()=>{

})