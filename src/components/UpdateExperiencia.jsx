import {useState,useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const UpdateExperiencia = () => {

const navigate = useNavigate();

const initialState = {
    cargo: "",
    empresa: "",
    añoInicio: "",
    añoFinal: "",
    estadoActual: "",
    desempeño: ""
}
const [datos, setDatos]=useState(initialState)
 const {id} = useParams();

 const getDatos = async()=>{
let response = await axios.get("http://localhost:3001/Experiencia/"+id)
setDatos(response.data)}

const handleSubmit = async(e) =>{
e.preventDefault()
try{
  let response = await axios.put("http://localhost:3001/Experiencia/"+id,{
    cargo: datos.cargo,
    empresa: datos.empresa,
    añoInicio: datos.añoInicio,
    añoFinal: datos.añoFinal,
    estadoActual: datos.estadoActual,
    desempeño: datos.desempeño
  })
  if(response){
alert("Actualizacion correcta")
navigate("/home")
  }}catch (error){
    console.log(error);
  }}
const handleChange=(e)=>{
setDatos({...datos,[e.target.name]:e.target.value})
}
useEffect(()=>{getDatos()},[])
return (
    <div>
       <br/>
      <br/>
      <h3>Agregar Experiencia Laboral</h3>
      <br/>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Cargo : </label>
        <input type="text" onChange={handleChange} name="cargo" value={datos.cargo}/>
        <br/><br/>
        <label htmlFor="">Empresa : </label>
        <input type="text" onChange={handleChange} name="empresa" value={datos.empresa}/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="añoInicio" value={datos.añoInicio}/>
        <br/><br/>
        <label htmlFor="">Año de Finalizacion : </label>
        <input type="text" onChange={handleChange} name="añoFinal" value={datos.añoFinal}/>
        <br/><br/>
        <label htmlFor="">Estado Actual : </label>
        <input type="text" onChange={handleChange} name="estadoActual" value={datos.estadoActual}/>
        <br/><br/>
        <label htmlFor="">Tarea : </label>
        <input type="text" onChange={handleChange} name="desempeño" value={datos.desempeño}/>
        <br/><br/>
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default UpdateExperiencia
