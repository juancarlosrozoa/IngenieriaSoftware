const jwt = require ('jsonwebtoken')
const bcryptjs = require ('bcryptjs')
const conexion = require ('../database/db')
const {promisify} = require ('util')

// registro usuario
exports.register = async (req,res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        let passHash = await bcryptjs.hash(pass,8)  

        // guardar en la BD
        conexion.query('INSERT INTO login_node_jwt.users SET ?', {user:user, pass:passHash},(error, results)=>{
            if (error){console.log(error)}
            res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }
}

exports.login = async (req,res)=>{
    res.render('index')
    /*try {
        const user = req.body.user
        const pass = req.body.pass
        
        if (!user || !pass){
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y clave",
                alertIcon: 'info',
                showConfirmButton:true,
                timer : false,
                ruta: 'login'
            })
        }else {
            conexion.query('SELET * FROM login_node_jwt.user WHERE user = ?', [user],async (error, result)=>{
                if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
                    res.render('login',{
                        alert:true,
                        alertTitle: "Error",
                        alertMessage: "Usuario o clave no validas",
                        alertIcon: 'error',
                        showConfirmButton:true,
                        timer : false,
                        ruta: 'login'
                    })
                }else{
                    // en caso de que conincidan se valida con el token
                    const id = results [0].id
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO,{
                        expiresIn : process.env.JWT_TIEMPO_EXPIRA
                    })
                    console.log("TOKEN: "+token+" para el USUARIO :"+user)

                    const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions)
                    res.render('login', {
                        alert:true,
                        alertTitle : "Conexion exitosa",
                        alertMessage : "Login exitoso",
                        alertIcon : 'success',
                        showConfirmButton : false,
                        timer : 800,
                        ruta : ''
                    })

                }
            })
        }
    } catch (error) {
        console.log(error)
    }*/
}

exports.dashboard = async (req,res)=>{
    res.render('vehicle')
}