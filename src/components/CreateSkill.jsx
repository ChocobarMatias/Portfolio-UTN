import axios from "axios"
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

const CreateSkill = () => {
const navigate = useNavigate();

const initialState = {
      nombreSkill: "",
      porcentaje: "",
      color: "",
      icono: ""
}

const [datos, setDatos] = useState(initialState)

const handleChange = (e)=>{
setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSubmit = async(e)=>{
  e.preventDefault()
  try{
    let response = await axios.post("http://localhost:3001/Skill",{
      nombreSkill: datos.nombreSkill,
      porcentaje: datos.porcentaje,
      color: datos.color,
      icono: datos.icono
    })
    if(response){
        alert("Skill Creado correctamente")
        navigate("/home")
    }

  }catch (error){
    console.log(error)
  }
}
  return (
    <div>
      <br/>
      <br/>
      <h3>Agregar Nuevo Skill</h3>
      <br/>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Nombre del Skill : </label>
        <input type="text" onChange={handleChange} name="nombreSkill"/>
        <br /><br />
        <label htmlFor="">Porcentaje : </label>
        <input type="number" onChange={handleChange} name="porcentaje"/>
        <br /><br />
        <label htmlFor="">Color : </label>
        <input type="color" onChange={handleChange} name="color"/>
        <br /><br />
        <label htmlFor="">Icono : </label>
        <input type="text" onChange={handleChange} name="icono"/>
        <br /><br />
        <button type="submit" className="btn btn-success">GUARDAR</button>
        <Link to={"/home"} className="btn btn-warning">VOLVER</Link>
      </form>
    </div>
  )
}

export default CreateSkill
