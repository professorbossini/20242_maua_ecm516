import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())

const {
  PORT
} = process.env

/*
  {
    "1": {
      "id": "1",
      "texto": "Fazer café"
    },
    "2": {
      "id": "2",
      "texto": "Natação"
    }
  }
*/

interface Lembrete{
  id: string;
  texto: string;
}
let id: string = "1";
const lembretes: Record<string, Lembrete> = {
  
}

app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

app.post('/lembretes', (req, res) => {
  const { texto } = req.body
  console.log(texto)
  const lembrete: Lembrete = {
    id: id,
    texto: texto
  }
  lembretes[id] = lembrete
  id = (+id + 1).toString()
  axios.post('http://barramento-service:10000/eventos', {
    type: 'LembreteCriado',
    payload: lembrete
  })
  res.json(lembrete)
})

app.post('/eventos', (req, res) => {
  try{
    console.log(req.body)
  }catch(e){} //descarta eventos não interessantes
  res.end()
})

app.listen(PORT, () => {
  console.log('Nova versão')
  console.log('Yet another version')
  console.log(`Lembretes. Porta ${PORT}.`)
})