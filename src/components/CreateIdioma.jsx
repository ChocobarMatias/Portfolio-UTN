import {useState} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

const CreateIdioma = () => {
const navigate = useNavigate();

const initialState = {
      idiomaNuevo: "",
      nivel: ""
}
const [datos,setDatos] = useState(initialState)

const handleChange = (e)=>{
setDatos({...datos,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
    let response = await axios.post("http://localhost:3001/Idioma",{
      idiomaNuevo: datos.idiomaNuevo,
      nivel: datos.nivel
    })
    if (response) {
      alert("Idioma creado de forma existente")
      navigate("/home")
    } 
    
  } catch (error) {
    console.log(error)
  }}
  return (
    <div>
      <br/>
      <br/>
      <h3>Agregar Idioma que maneja</h3>
      <br/>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Idioma Nuevo : </label>
        <input type="text" onChange={handleChange} name="idiomaNuevo"/>
        <br /><br />
        <label htmlFor="">Nivel : </label>
        <input type="text" onChange={handleChange} name="nivel"/>
        <br /><br />
        <button type="submit" className="btn btn-success">GUARDAR</button>
        <Link to={"/home"} className="btn btn-warning">VOLVER</Link>
      </form>
    </div>
  )
}

export default CreateIdioma
