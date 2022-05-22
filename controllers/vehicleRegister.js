const conexion = require ('../database/db')
const {promisify} = require ('util')

// registro vehiculo
exports.vehicleRegister = (req,res)=>{
    try {
        const plate = req.body.plate
        
        // guardar en la BD, id pago e id usuario quemados
        conexion.query('INSERT INTO login_node_jwt.vehicle SET ?', {Placa:plate,id_pago:1, id_usuario:1 },(error, results)=>{
            if (error){console.log(error)}
            res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }
}