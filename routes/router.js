const express = require ('express')
const router = express.Router()

const authController = require('../controllers/authController')
const vehicleRegister = require('../controllers/vehicleRegister')

//const conexion = require ('../database/db')



// router para vistas
router.get ('/',(req,res) => {
    res.render('index')
})

router.get ('/login',(req,res) => {
    res.render('login',{alert:false})
})

router.get ('/register',(req,res) => {
   res.render('register')
})

router.get ('/vehicle',(req,res) => {
    res.render('vehicle')
})


// routes para controller
router.post('/register', authController.register)
router.post('/vehicleRegister',vehicleRegister.vehicleRegister )
router.post('/login', authController.login)
router.post('/dashboard', authController.dashboard)

module.exports = router