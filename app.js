const express = require('express')
const app = express()
const conn = require('./conexao.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(4000,()=> {
    console.log("Servidor ok: http://localhost:4000/")
})

app.get('/', (req, res) => {
    conn.query('select * from produtos', (error, result) => {
        res.json(result)
    })
})

app.get('/:id', (req, res) => {
    let dados = req.params.id
    conn.query(`select * from produtos where id=${dados}`, (error, result) => {
        res.json(result)
    })
})

app.post('/', (req, res, next) => {
    let dados = {
            nome : req.body.nome,
            img : req.body.img,
            valor : req.body.valor,
            categoria : req.body.categoria,
            localimg : req.body.localimg
        }

    conn.query('insert into produtos set?', dados, ()=> {
        res.json({log : 'produto cadastrado com sucesso!'})
    })
})

app.delete('/id=:id', (req, res, next) => {
    let jogo =  req.params.id

    conn.query(`delete from produtos where id=${jogo}`, () => {
        res.json({mensagem : 'jogo excluído com sucesso!'})
    })
})

app.put("/:id", (req, res) => {
    let dados = {
            id : req.params.id,
            nome : req.body.nome,
        }
    
    conn.query(`UPDATE produtos SET nome='${dados.nome}' WHERE id=${dados.id};`, () => {
        return res.json({msg : 'jogo atualizado com sucesso!'})
    })
})
