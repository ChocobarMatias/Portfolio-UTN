import {useState} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import "../CSS/Idioma.css"
import {Row, Col} from "react-bootstrap"

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
      navigate("/home/idiomas")
    } 
    
  } catch (error) {
    console.log(error)
  }}
  return (
    <div>
      <br/>
      <br/>
      <h3 className="text-white">Agregar Idioma que maneja</h3>
      <br/>
      <hr />
      <br />
      <Row>
      <form action="" onSubmit={handleSubmit}>
      <Col md={1}></Col>
        <Col md={10}>
      <div className="crearIdioma text-white"> 
      <label htmlFor="">Idioma Nuevo : </label>
        <input type="text" onChange={handleChange} name="idiomaNuevo"/>
        <br /><br />
        <label htmlFor="">Nivel : </label>
        <input type="text" onChange={handleChange} name="nivel"/>
        <br /><br /></div>
        </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={3}></Col>
        <Col md={3}>
          <br />
          <div>
        <button type="submit" className="iconcrearidioma btn btn-success">GUARDAR</button>
        <br /></div></Col>
        <Col md={1}>
        <div><br />
          <div>
        <Link to={"/home/idiomas"} className="iconcrearidioma btn btn-warning">VOLVER</Link></div>
        </div></Col></Row>
      </form></Row>
    </div>
  )
}

export default CreateIdioma
