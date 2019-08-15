;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])
let bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

let getDatos = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let postDatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    db(tabla).returning('id').insert(datos)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let updateDatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    datos.forEach( element => {
        db(tabla).where('id', element.id).update(element)
        .then( resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}` 
            })
        })
    })
}

let deleteDatos = (req, res) => {
    let tabla = req.query.tabla
    let id = req.query.id
    db(tabla).where('id', id).delete()
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let getDatosbyID = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    let id = req.query.id
    db.select(campo).from(tabla).where('id', id)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

//SELECT DE DETALLES SISTEMA
let getDatosPedidos_detalles = (req, res) => {
    let idpedido = req.query.idpedido
    db.raw(`select * from detalle_pedido where idpedido = ${idpedido}`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}
let getDatosAlbaran_detalles = (req, res) => {
    let idalbaran = req.query.idalbaran
    db.raw(`select * from detalle_albaran where idalbaran = ${idalbaran}`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let getDatosReclamo_detalles = (req, res) => {
    let idreclamo = req.query.idreclamo
    db.raw(`select * from detalle_reclamo where idreclamo = ${idreclamo}`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let getDatosFactura_detalles = (req, res) => {
    let idfactura = req.query.idfactura
    db.raw(`select * from detalle_factura where idfactura = ${idfactura}`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

//POST LOGEO 
let postLogin = (req, res) => {
    console.log(req.body)
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    let password = req.body.password
    console.log(nombre)
    console.log(apellido)
    db('login').where({ 'nombre': nombre, 'apellido': apellido })
        .then(resultado => {
            console.log(resultado)
            if (resultado.length > 0) {
                bcrypt.compare(password, resultado[0].password).then(ok => {
                    if (ok) {
                        resultado[0].password = '********ll';
                        console.log(resultado[0])
                        let tokenC = jwt.sign(resultado[0], 'jkskskajsj');

                        console.log(tokenC);
                        return res.status(200).json({
                            ok: true,
                            datos: resultado,
                            token: tokenC,
                            mensaje: `Existen ${resultado.length} registros en la consulta`,
                            mensaje2: `Haz iniciado sesion`
                        })
                    } else {
                        return res.status(200).json({
                            ok: false,
                            datos: null,
                            mensaje: `Alguno de los datos estan incorrectos`
                        })
                    }
                })
            }
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}`
            })
        })
}

//POST REGISTRO
let postRegistro = (req, res) => {
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    let password = ''
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        password = hash;
        console.log(password)
        db('login').insert({
                nombre: nombre,
                apellido: apellido,
                password: password
            })
            .then(resultado => {
                return res.status(200).json({
                    ok: true,
                    datos: resultado,
                    mensaje: `Existen ${resultado.length} registros en la consulta`
                })
            })
            .catch((error) => {
                return res.status(500).json({
                    ok: false,
                    datos: null,
                    mensaje: `Error del servidor: ${error}`
                })
            })
    })
}

//SELECT DE DETALLES SISTEMA

module.exports = {
    getDatos,
    postDatos,
    updateDatos,
    deleteDatos,
    getDatosbyID,
    getDatosPedidos_detalles,
    getDatosReclamo_detalles,
    getDatosFactura_detalles,
    getDatosAlbaran_detalles,
    postLogin,
    postRegistro
}