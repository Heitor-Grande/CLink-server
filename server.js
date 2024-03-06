const app = require("./src/app")
require("dotenv").config()

const porta = process.env.PORT || process.env.PORTA_DEV
app.listen(porta, function(){

    console.log("Servidor rodando: http://localhost:" + porta)
})