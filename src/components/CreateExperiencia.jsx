import {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"
import "../CSS/Experiencia.css"



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
navigate("/home/experiencias");
}
}catch (error){
  console.log(error)
}}
  return (
    <div>
      <br/>
      <br/>
      <h3 className="text-white">Agregar Experiencia Laboral</h3>
      <br/>

      <div className="crearexperiencia text-white">
       <form action="" onSubmit={handleSubmit}>
       <label htmlFor=""><h3>Cargo : </h3></label>
        <input type="text" onChange={handleChange} name="cargo"/>
        <br/><br/>
        <label htmlFor=""><h3>Empresa : </h3></label>
        <input type="text" onChange={handleChange} name="empresa"/>
        <br/><br/>
        <label htmlFor=""><h3>Año Inicio : </h3></label>
        <input type="text" onChange={handleChange} name="añoInicio"/>
        <br/><br/>
        <label htmlFor=""><h3>Año Finalizacion : </h3></label>
        <input type="text" onChange={handleChange} name="añoFinal"/>
        <br/><br/>
        <label htmlFor=""><h3>Estado Actual : </h3></label>
        <input type="text" onChange={handleChange} name="estadoActual"/>
        <br/><br/>
        <label htmlFor=""><h3>Tarea : </h3></label>
        <input type="text" onChange={handleChange} name="desempeño"/>
        <br/><br/>
        <div className="botones">
         <button type="submit" className="btnexpcrea btn btn-success">Guardar</button>
         <Link to={"/home/experiencias"} className="btnexpcrea btn btn-warning">Volver</Link>
         </div>
       </form>  
    </div>
    </div>
  )
}

export default CreateExperiencia
