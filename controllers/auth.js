
const {response} = require('express'); 

const crearUsuario = (req, res = response) => {
    
    console.log(req.body); 
    //para desestructurarlos hago lo siguiente:
    const {email, name, password } = req.body; 
    console.log(email, name, password);
    //hasta aqui la desestructuracion

    return res.json({
        ok: true, 
        msg: 'Crear usuario /new'
    }); 
}

const loginUsuario = (req, res = response) => {

    console.log(req.body); 
    //para desestructurarlos hago lo siguiente:
    const {email, password } = req.body; 
    console.log(email, password);
    //hasta aqui la desestructuracion

    return res.json({
        ok: true, 
        msg: 'Login de usuario /'
    }); 
}

const revalidarToken = (req, res = response) => {
    return res.json({
        ok: true, 
        msg: 'Renew'
    }); 
}

module.exports = {
    crearUsuario, 
    loginUsuario,
    revalidarToken 
} 
