//instantiation
//import package impress
//----
//npm init -y
//npm i express
//npm i nodemon

const express =  require('express')
const app = express()
//port number of our js
const PORT = process.env.PORT || 6001
const path = require('path')
// //route
// //link api
// //it will accept request and response 

// app.get('/myhomeAPI/',(req,res)=>{
//     res.send("<H1>Hello World! Bscs</H1>")
// })

//specifiying the location of the public folder
app.use(express.static(path.join(__dirname,'public')))

app.listen(6001,()=>{
    console.log(`server is running on port ${PORT}`)
})