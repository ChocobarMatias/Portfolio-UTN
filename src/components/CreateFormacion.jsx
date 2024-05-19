import {useState} from "react"
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"
 
const CreateFormacion = () => {

  const navigate = useNavigate()

const initialState = {
  titulo: "",
  institucionEducativa: "",
  añoInicio: "",
  añoFinEstimado: "",
  estado: "",
  logo:""
}

const [datos, setDatos] = useState(initialState)

const handleChange=(e)=>{
setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSubmit= async (e)=>{
  e.preventDefault()
  try{
let response = await axios.post("http://localhost:3001/Formacion",{
  titulo: datos.titulo,
  institucionEducativa: datos.institucionEducativa,
  añoInicio: datos.añoInicio,
  añoFinEstimado: datos.añoFinEstimado,
  estado: datos.estado,
  logo: datos.logo
})
if(response){
  alert("Formacion Academica Agregada Correctamente");
  navigate("/home")
}
}catch (error){
  console.log(error)
}}
    
  return (
    <div>
      <br/>
      <br/>
      <h3>Agregar Formacion Academica</h3>
      <br/>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Titulo : </label>
        <input type="text" onChange={handleChange} name="titulo"/>
        <br/><br/>
        <label htmlFor="">Entidad Academica : </label>
        <input type="text" onChange={handleChange} name="institucionEducativa"/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="añoInicio"/>
        <br/><br/>
        <label htmlFor="">Año de Fin Estimado : </label>
        <input type="text" onChange={handleChange} name="añoFinEstimado"/>
        <br/><br/>
        <label htmlFor="">Estado : </label>
        <input type="text" onChange={handleChange} name="estado"/>
        <br/><br/>
        <label htmlFor="">Logo : </label>
        <input type="text" onChange={handleChange} name="logo"/>
        <br/><br/>
        <br/>
        <button type="submit" className="btn btn-success">Guardar</button>
        <Link to={"/home"} className="btn btn-warning">Volver</Link>

        </form>
    </div>
  )
}

export default CreateFormacion
