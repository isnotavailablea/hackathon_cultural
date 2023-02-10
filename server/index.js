require('dotenv').config()
const { response } = require('express')
const exp=require('express')
const app=exp()
const cors=require('cors')
const mongo=require('mongoose')
// const =require('./Routes/usersignup')
const identification = require('./Routes/usersignup')
const finduser = require('./Routes/userlogin')
const port ='8000'
mongo.connect(process.env.CONNECTION_URL)
app.use(exp.json())
app.use(exp.urlencoded({extended:true}))
app.use(cors())
app.use('/signup',identification)
app.use('/login',finduser)
app.listen(port,()=>{
    console.log(`${port} is listening`);
})