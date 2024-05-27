import axios from "axios"
import {useState,useEffect} from "react"
import { useParams,useNavigate,Link } from "react-router-dom"
import {Row, Col} from "react-bootstrap"
import "../CSS/Idioma.css"

const UpdateIdioma = () => {
const navigate = useNavigate();

const initialState ={
  idiomaNuevo :"",
  nivel:""
}
const [datos,setDatos] = useState(initialState)
const {id} = useParams();

const getDatos = async() =>{
let response = await axios.get("http://localhost:3001/Idioma/"+id)
setDatos(response.data)
}
const handleSubmit = async(e) =>{
e.preventDefault()
try {
  let response = await axios.put("http://localhost:3001/Idioma/"+id,{
    idiomaNuevo: datos.idiomaNuevo,
    nivel: datos.nivel
  })
  if (response) {
    alert("Idioma Actualizado")
    navigate("/home/idiomas")
  }
} catch (error) {
  console.log(error)
}
}

const handleChange = (e) =>{
setDatos({...datos,[e.target.name]:e.target.value})
}


useEffect(()=>{getDatos()},[]);
    return (
      <div>
        <br /><br />
        <h3 className="text-white">Actualizar Idioma</h3>
        <br/>
        <hr />
        <br />
         <Row>
<form action="" onSubmit={handleSubmit}>
<Col md={1}></Col>
        <Col md={10}>
        <div className="actualizarIdioma text-white"> 

  <br /><br />
  <label htmlFor="">Idioma Nuevo : </label>
  <input type="text" onChange={handleChange} name="idiomaNuevo" value={datos.idiomaNuevo}/>
  <br /><br />
  <label htmlFor="">Nivel</label>
  <input type="text" onChange={handleChange} name="nivel" value={datos.nivel}/>
  <br /></div><br />
  </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={3}></Col>
        <Col md={3}>
  <button type="submit" className="idiomabotonact btn btn-success">GUARDAR</button>
  <Link to={"/home/idiomas"} className="idiomabotonact  iconcrearidioma btn btn-warning">VOLVER</Link>
  </Col></Row>
</form></Row>
      </div>
    )
  }
  
  export default UpdateIdioma