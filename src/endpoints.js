import { query, Router } from 'express'
import { dobro, somar, medirtemperatura, media, tabuada, maiornumero, ingressocinema, frequenciaCaracter, corprimaria } from './services.js'
const server = Router()

server.get('/dobro/:numero', (req, resp) => {
    let numero = req.params.numero;
    let dobrinho = dobro(numero);
    resp.send({
        x: dobrinho
    })
})

server.get('/somar/q', (req, resp) => {
    let a = Number(req.query.a)
    let b = Number(req.query.b)
    let calc = somar(a, b);
    resp.send({
        x: calc
    })
})

server.post('/somar', (req, resp) => {
    try {
        let a = Number(req.body.a)
        let b = Number(req.body.b)
        let calc = somar(a, b);
        resp.send({
            x: calc
        })
    } catch (err) {
        resp.status(404)
    }
})

server.post('/media', (req,resp) =>{
    try {
        let nota1 = Number(req.body.nota1);
        let nota2 = Number(req.body.nota2);
        let nota3 = Number(req.body.nota3);
        let calc = media(nota1, nota2, nota3)

        resp.send({
            x:calc
        })
    } catch (err) {
        resp.status(404)
    }
})

server.get('/medirtemperatura/q', (req,resp) =>{
    let febre = req.query.t;
    let resul = medirtemperatura(febre);
    resp.send({
        x:resul
    })
})

server.get('/tabuada/q', (req,resp) => {
    let numero = req.query.numero;
    let resul = tabuada(numero);
    resp.send({
        x:resul
    })
})

server.post('/dia2/maiornumero', (req,resp) =>{
    try {
       let numero = req.body.numero;
       let resul = maiornumero(numero);
       resp.send({
           x:resul
       })
    } catch (err) {
        resp.status(404);
    }
})

server.get('/dia2/frequencia/:texto/:char', (req, resp) => {
    let texto = req.params.texto;
    let char = req.params.char;
    let result = frequenciaCaracter(texto, char);

    resp.send({
        x: result
    })
})

server.post('/dia2/ingressocinema', (req, resp) => {
    let ingresso = req.body;
    let result = ingressocinema(ingresso.dia, ingresso.nacionalidade, ingresso.qtdinteiras, ingresso.qtdmeias);

    resp.send({
        x: result
    })
})

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    let cor = req.params.cor;
    let result = corprimaria(cor);
    
    resp.send({
        x: result
    })
})
export default server;