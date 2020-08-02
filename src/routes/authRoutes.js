const express = require('express');
const mongoose = require('mongoose');

const router =express.Router();
const User = mongoose.model('User');

router.post('/signup',async(req,res,next)=>{
    const {email,password} = req.body;

    console.log(email,password);

    // if(password.length >32) return res.json({message:"Password Can atmost contain 32 characters"});
    // if(password.length < 6) return res.json({message:"Password must contain atleast 6 characters"});

    try{
        const user = new User({email,password});
        await user.save();
        return res.json({message:"Account created successfully"});
    }
    catch(err){
        return res.json({message:"Account Already exists"});
    }
});

router.post('/signin',async(req,res,next)=>{
    const {email,password} = req.body;

    console.log(email,password);

    // if(password.length >32) return res.json({message:"Password Can atmost contain 32 characters"});
    // if(password.length < 6) return res.json({message:"Password must contain atleast 6 characters"});

    try{
        const user = await User.findOne({email});
        
        if(user.password === password) return res.json({message:"Logged In Successfully"});

        return res.json({message:"Invalid Credentials"});
    }
    catch(err){
        return res.json({message:"Create an account"});
    }
});

module.exports= router;