let User = require('../models/users').User;
let express = require('express');
let router = express.Router();

router.post('/login',async (req,resp) =>{
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email: email}).where({password: password});
    if(user.length > 0){
        resp.send('Logged In');
    }else{
        resp.send('Rejected');
    }
})

router.post('/register',async (req,resp) =>{
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email: email});
    if(!user.length === 0){
        let newUser = new User({
            email: email,
            password: password
        })
        await newUser.save();
        resp.send('Done');
    }else{
        resp.send('Rejected');
    }
})

module.exports = router;