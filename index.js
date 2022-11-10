const  express = require('express');
const { runInThisContext } = require('vm');

class Server{
    app = express()
    port = process.env.port

    constructor(){
        this.routers();
    }
        routers(){

            this.app.evento('/Evento',(req,res) => res.send('Este es el evento del evento'))
            this.app.fecha('/Fecha',(req,res) => res.send('Esta es la fecha del evento'))
            this.app.horario('/horario',(req,res) => res.send('Este es el horario del evento'))
            this.app.lugar('/Lugar',(req,res) => res.send('Este es el lugar del evento'))
            this.app.Capacidad('/Capacidad',(req,res) => res.send('Esta es la capacidad que tendra el evento'))
        }

        listen(){
            this.app.listen(this.port, () => console.log('Servidor HTT port: ${this.port}'))
        }
}
module.exports = Server;

