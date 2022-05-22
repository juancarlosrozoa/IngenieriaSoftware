const express = require('express')
const dotenv = require ('dotenv')
const cookieParser = require ('cookie-parser')

const app = express ()

//set motor de plantillas
app.set('view engine','ejs')

//set carpeta public
app.use(express.static('public'))

// configurar para procesar datos login
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// set variables de entorno
dotenv.config({path:'./env/env'})

// set cookies
app.use(cookieParser())

//llamar al router
app.use('/',require('./routes/router'))



app.listen (3000,()=>{
    console.log('SERVER Up running in http: localhost:3000')
})