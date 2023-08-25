//2

export function Registro(){
    app.post('/api/registro/ciudadanos', (req, res) => {
        const ciudadano = req.body
        ciudadanos.push(ciudadano)
        res.send(ciudadano);
    })
}
