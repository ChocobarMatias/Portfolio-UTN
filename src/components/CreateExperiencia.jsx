import {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"



const CreateExperiencia = () => {

const navigate = useNavigate();

 const initialState ={
      cargo: "",
      empresa: "",
      añoInicio: "",
      añoFinal: "",
      estadoActual: "",
      desempeño: ""
 }
const [datos,setDatos] = useState(initialState)

const handleChange = (e) => {
setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSubmit = async(e)=>{
e.preventDefault()
try{
  let response = await axios.post("http://localhost:3001/Experiencia",{
    cargo: datos.cargo,
    empresa: datos.empresa,
    añoInicio: datos.añoInicio,
    añoFinal: datos.añoFinal,
    estadoActual: datos.estadoActual,
    desempeño: datos.desempeño
})
if(response){
alert("Experiencia Creada Correctamente");
navigate("/home");
}
}catch (error){
  console.log(error)
}}
  return (
    <div>
      <br/>
      <br/>
      <h3>Agregar Experiencia Laboral</h3>
      <br/>
       <form action="" onSubmit={handleSubmit}>
       <label htmlFor="">Cargo : </label>
        <input type="text" onChange={handleChange} name="cargo"/>
        <br/><br/>
        <label htmlFor="">Empresa : </label>
        <input type="text" onChange={handleChange} name="empresa"/>
        <br/><br/>
        <label htmlFor="">Año Inicio : </label>
        <input type="text" onChange={handleChange} name="añoInicio"/>
        <br/><br/>
        <label htmlFor="">Año Finalizacion : </label>
        <input type="text" onChange={handleChange} name="añoFinal"/>
        <br/><br/>
        <label htmlFor="">Estado Actual : </label>
        <input type="text" onChange={handleChange} name="estadoActual"/>
        <br/><br/>
        <label htmlFor="">Tarea : </label>
        <input type="text" onChange={handleChange} name="desempeño"/>
        <br/><br/>
         <button type="submit" className="btn btn-success">Guardar</button>
         <Link to={"/home"} className="btn btn-warning">Volver</Link>
       </form>  
    </div>
  )
}

export default CreateExperiencia
