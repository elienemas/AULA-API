const express = require("express")
const app = express()
//rotas
const index = require("./routes/index")

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Acess-Control-Allow-Origin", "*") //informo que minha api poderá ser chamada
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
)
next()
// como criei uma função dentro do app.use, preciso dar um next() para mandar ele seguir
// se eu não faço isso, a requisição vai ficar travada aí.
  })

app.use("/", index) 

module.exports = app