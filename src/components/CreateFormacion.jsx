import {useState} from "react"
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"
import "../CSS/CreateFormacion.css" 
import {Row, Col} from "react-bootstrap"

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
  navigate("/home/formacion")
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
      <hr/>
      <br/>
      <Row>
      <form  action="" onSubmit={handleSubmit}>
        <Col md={1}></Col>
        <Col md={10}>
       <div className="crearFormacion"> 
        <label htmlFor=""><h3>Titulo :</h3> </label>
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
        <br/> </div> <br />
        </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={3}></Col>
        <Col md={3}>
        <div>
        <button type="submit" className="btn btn-success">Guardar</button>
        <br /><br /></div></Col>
       
        <Col md={1}>
        <div>
        <Link to={"/home/formacion"} className="btn btn-warning">Volver</Link>
        </div></Col></Row>
        </form></Row>
    </div>
  )
}

export default CreateFormacion
