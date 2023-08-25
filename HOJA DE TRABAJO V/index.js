
const express = require('express');
const app = express();
const PORT = 3000

let ciudadanos = []

app.use(express.json());

app.listen(PORT, () => {
    console.log('Servidor iniciado en puerto ' + PORT);
});

//#2
app.post('/api/registro/ciudadanos', (req, res) => {
    const ciudadano = req.body
    ciudadanos.push(ciudadano)
    res.send(ciudadano);
})

//#3
app.put('/api/registro/ciudadanos/:dpi', (req, res) => {
    const dpi = parseInt(req.params.dpi)
    ciudadanos = ciudadanos.map(c => dpi == c.dpi? {...c, ...req.body} : c);
    res.send(ciudadanos)
    })

//#4
app.delete('/api/registro/ciudadanos/:dpi', (req, res) => {
    ciudadanos = ciudadanos.filter(c => c.dpi != req.params.dpi);
    res.json(ciudadanos);
})

//#5
app.get('/api/registro/ciudadanos/:dpi', (req, res) => {
    res.send(ciudadanos.find( c => req.params.dpi == c.dpi))
})

//#6
app.get('/api/registro/ciudadanos', (req, res) => {
    res.json(ciudadanos);
})



