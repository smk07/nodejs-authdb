require('./src/models/User');
const express = require('express');
const mongoose = require('mongoose');
const body_parser =require('body-parser');

const app= express();
const authRoutes = require('./src/routes/authRoutes');

app.use(body_parser.json());
app.use('/',authRoutes);

app.get('/',(req,res)=>{
    return res.json({message:"Hello vanakam!"});
});

const mongoUri= "mongodb+srv://smk07:ungalNaan@cluster0.dqvyq.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
