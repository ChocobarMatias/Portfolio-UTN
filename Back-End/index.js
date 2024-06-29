//ocupo las bibliotecas o framework
const express = require("express")
// const mysql = require("mysql") con este cliente usamos para el curso de react
const mysql = require("mysql2") //use este cliente y lo instale con npm por que es la solucion que encontre                                         
const app = express()

//instancio express
app.use(express.json())

//conexion a mysql
const connection = mysql.createConnection({
    host     :"localhost",
    user     :"root",
    password :"Matias1234!",
    database :"BD_Portfolio_Matias"
})

connection.connect((error) => {
    if (error) {
        console.error("Error conectando a MySQL:", error);
        return;
    }
    console.log("Conectado a MySQL");
});


//peticiones http


// Este Get es para todos los datos
app.get("/",(req,res)=>{
    res.send("Bienvenido a mi app")
})

app.get("/Usuarios",(req,res)=>{
    connection.query("SELECT * FROM Usuarios",(error,results) =>{
        if(error) throw error
        res.json(results)
    })
})

app.get("/Administradores",(req,res)=>{
    connection.query("SELECT*FROM Administradores",(error,results)=>{
        if(error) throw error
        res.json(results)
    })
})

// Este Get es para un datos en particular osea un elemente de la tabla llamado por su id
app.get("/Usuarios/:id",(req,res)=>{
    const id= req.params.id
    connection.query("SELECT * FROM Usuarios where id_Usuario="+id,(error,results)=>{
        if(error) throw error
        res.json(results)
    })
});

// POST (guarda datos en la base de datos)
app.post("/Usuarios",(req,res)=>{

    const query = `insert into Usuarios(Nombre,Apellido,Email,Contraseña,Activo) values(?,?,?,?,?)`;
    const values = [Nombre,Apellido,Email,Contraseña,Activo];

    connection.query(query,values,(error,results)=>{
        if(error) throw error
        res.json(results);
    })
});

//PUT Actualizar
app.put();

// DELETE Eliminar
app.delete();

app.listen(8000,()=>{
    console.log("escuchando en el puerto 8000")
}
)