import {useState, useEffect} from "react";
import {useParams, useNavigate,Link} from "react-router-dom";
import axios from "axios";
import "../CSS/UpdateFormacion.css"
import {Row, Col} from "react-bootstrap"

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
navigate("/home/formacion")
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
      <h3 className="text-white">Agregar Formacion Academica</h3>
      <br/>
      <Row>
      <form action="" className="text-white"onSubmit={handleSubmit}>
        <br />
      <Col md={1}></Col>
        <Col md={10}>
        <div className="actualizarFormacion"> 
        <label className="label" htmlFor=""><h3>Titulo : </h3></label>
        <input className="input" type="text" onChange={handleChange} name="titulo" value={datos.titulo}/>
        <br/><br/>
        <label className="label" htmlFor=""><h3>Entidad Academica : </h3></label>
        <input className="input" type="text" onChange={handleChange} name="institucionEducativa" value={datos.institucionEducativa}/>
        <br/><br/>
        <label className="label" htmlFor=""><h3>Año de Inicio : </h3></label>
        <input className="input" type="text" onChange={handleChange} name="añoInicio" value={datos.añoInicio}/>
        <br/><br/>
        <label className="label" htmlFor=""><h3>Año de Fin Estimado : </h3></label>
        <input className="input" type="text" onChange={handleChange} name="añoFinEstimado" value={datos.añoFinEstimado}/>
        <br/><br/>
        <label className="label" htmlFor=""><h3>Estado : </h3></label>
        <input className="input" type="text" onChange={handleChange} name="estado" value={datos.estado}/>
        <br/><br/>
        <label className="label" htmlFor=""><h3>Logo : </h3></label>
        <input className="input" type="text" onChange={handleChange} name="logo" value={datos.logo}/>
        <br/></div><br/>
        <br />
        </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={3}></Col>
        <Col md={3}>
        <button type="submit" className="btnactfor btn btn-success">Guardar</button>
        </Col>
        <Col md={1}>
        <div>
        
        <Link to={"/home/formacion"} className="btnactfor btn btn-warning">Volver</Link>
        </div></Col> </Row>
        </form></Row>
    </div>
  )
}

export default UpdateFormacion
