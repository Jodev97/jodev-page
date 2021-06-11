const express = require('express')
const path  = require('path')
const morgan = require('morgan')
//Initializations
const app = express()
//Settings
app.set('port', process.env.PORT || 3000)
//Middlewars
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api',require('./routes'))
//Global variables
//Public
app.use(express.static(path.join(__dirname,'public')))
//Start Server
app.listen(app.get('port'),()=>{
    console.log('Server on port:',app.get('port'))
})
