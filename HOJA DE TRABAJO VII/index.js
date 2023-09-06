
const { verify } = require('crypto');
const express = require('express');
const jwt = require('jsonwebtoken');



const app = express();
const PORT = process.env.PORT || 3000;
var password = 'aaaaaa';

app.use(express.json());


app.post('/proyecto/login/:DPI', async (req, res) => {

const Verify = {
    nomusuario: req.body.nomusuario,
    pass: req.body.pass,
}

const token = jwt.sign(Verify, password, { expiresIn: '1h'});
res.json({token});

});

app.get('/proyecto/data', async (req, res) => {
    const token = req.header('token');
  
    if (!token) {
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }
  
    jwt.verify(token, password, (err, decoded) => {
      if (err) {
        return res.status(401).json({ mensaje: 'Token inválido' });
      }
  
      // El token es válido, puedes realizar acciones en esta ruta.
      res.json({ mensaje: 'Acceso permitido', nomusuario: decoded });
    });
  });
  

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
  });