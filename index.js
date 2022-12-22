const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

console.log(process.env); 

//crear el servidor/aplicacion de express
const app = express(); 

//Directorio publico
app.use(express.static('public'));

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));

/*
//GET
app.get('/', (req, res)=>{
    console.log('Peticion en el /')

    res.json({
        ok: true,
        msg: 'Todo salio bien',
        uid: 1234 
    });
});
*/


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`); 
});


//console.log('Hola desde Node - de nuevo!!')
