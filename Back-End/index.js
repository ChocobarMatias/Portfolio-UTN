//ocupo las bibliotecas o framework
const express = require("express")
const mysql = require("mysql")

const app = express()

//instancio express
app.use(express.json())

//conexion a mysql
const connection = mysql.createConnection({
    host     :"localhost",
    user     :"root",
    password :"",
    database :""

})

connection.connect()

//peticiones http

app.get("/",(req,res)=>{
    res.send("Bien venido a mi app")
})

app.listen(8000,()=>{
    console.log("escuchando en el puerto 8000")
}
)