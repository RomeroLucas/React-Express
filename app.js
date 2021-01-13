const express = require('express')
const app = express()
const conexao = require('./conexao')
const cors = require('cors')

app.use(cors())

app.listen(4000, (error) => {
    if(!error) {
        console.log("Servidor rodando em: http://localhost:4000")
    }
})

app.get('/', (req, res) => {
    conexao.query('select * from produtos', (err, result)=> { 
        res.json(result)
    })
})