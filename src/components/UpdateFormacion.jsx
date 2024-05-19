import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";


const UpdateFormacion = () => {

const navigate = useNavigate()

  const initialState = {
    titulo: "",
    institucionEducativa: "",
    añoInicio: "",
    añoFinEstimado: "",
    estado: "",
    logo:""
  }

const [datos,setDatos]=useState(initialState)

const {id} = useParams();

const getDatos = async ()=>{
  let response = await axios.get("http://localhost:3001/Formacion/"+id)
  setDatos(response.data)
}

const handleSubmit = async (e) =>{
e.preventDefault()
try{
let response = await axios.put("http://localhost:3001/Formacion/"+id,{
  titulo: datos.titulo,
  institucionEducativa: datos.institucionEducativa,
  añoInicio: datos.añoInicio,
  añoFinEstimado: datos.añoFinEstimado,
  estado: datos.estado,
  logo: datos.logo
})
if(response){
alert("Actualizado correctamente")
navigate("/home")
}
}catch (error){
  console.log(error)
}}

const handleChange =(e)=>{
  setDatos({...datos,[e.target.name]:e.target.value})
}

useEffect(()=>{getDatos()},[]);
  return (
    <div>
      <br/>
      <br/>
      <h3>Agregar Formacion Academica</h3>
      <br/>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Titulo : </label>
        <input type="text" onChange={handleChange} name="titulo" value={datos.titulo}/>
        <br/><br/>
        <label htmlFor="">Entidad Academica : </label>
        <input type="text" onChange={handleChange} name="institucionEducativa" value={datos.institucionEducativa}/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="añoInicio" value={datos.añoInicio}/>
        <br/><br/>
        <label htmlFor="">Año de Fin Estimado : </label>
        <input type="text" onChange={handleChange} name="añoFinEstimado" value={datos.añoFinEstimado}/>
        <br/><br/>
        <label htmlFor="">Estado : </label>
        <input type="text" onChange={handleChange} name="estado" value={datos.estado}/>
        <br/><br/>
        <label htmlFor="">Logo : </label>
        <input type="text" onChange={handleChange} name="logo" value={datos.logo}/>
        <br/><br/>
        
        <button type="submit" className="btn btn-success">Guardar</button>
        </form>
    </div>
  )
}

export default UpdateFormacion
