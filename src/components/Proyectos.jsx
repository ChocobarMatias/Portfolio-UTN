import {useState,useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavOpciones from "./NavOpciones";
import {Card} from 'react-bootstrap';
import { FaGithubSquare } from "react-icons/fa";
import proyecto1 from "../assets/proyecto1.jpg"
import proyecto2 from "../assets/proyecto2.jpg"
import proyecto3 from "../assets/proyecto3.jpg"
import "../CSS/Proyectos.css"

const Proyectos = () => {

  const [proyectos,setProyectos] = useState([]);

  const getProyectos = async() =>{
    let response = await axios.get("http://localhost:3001/Proyectos");
    console.log(response.data);
    setProyectos(response.data)
  }
  const handleClick = async(id) =>{
  try{
  let response = await axios.delete("http://localhost:3001/Proyectos/"+id)
 
  if(response){
   alert("Proyectos Eliminados")
   getProyectos()
  }
  }catch (error){
    console.log(error)
  }}

  useEffect(()=>{getProyectos()},[])
  return (
    <div>
      <br /><br />
      <NavOpciones/><br />
      <h3 className="text-white">PROYECTOS : <Link to="/home/create/proyectos"><IoMdAddCircleOutline className="iconcrearproyecto"/></Link></h3>
      <hr />
      <div className="contenedorProyecto">
      {proyectos.map(proyecto=>
        <form action="" key={proyecto.id}>
          <Card className="cardproyecto" style={{ width: '70rem' }}>
      <Card.Img variant="top" src={proyecto.id ==1 ? proyecto1:proyecto.id ==2 ? proyecto2 :proyecto.id ==3 ? proyecto3:proyecto3} />
      <Card.Body>
        <Card.Title><h2 className="text-white"><b>Proyecto : </b>{proyecto.nombreProyecto}</h2></Card.Title>
        <Card.Text>
         <h3 className="text-white"><b>Descripcion :</b> {proyecto.descripcion}</h3>
        </Card.Text>
        <Card.Text className="text-white">
        <h2 ><FaGithubSquare  className="icon" /><Link to={proyecto.repositorio}>{proyecto.repositorio}</Link></h2>
        </Card.Text>
      </Card.Body>
    </Card>
    <div className="botonesProyecto">
    <Link to={`/home/update/proyectos/${proyecto.id}`} className="btn btn-warning"><FaEdit className="icon2"/></Link>
        <Button onClick={(()=>handleClick(proyecto.id))} className="btn btn-danger"><MdDelete className="icon2"/></Button>
        </div>
        </form>
      )}</div>
    </div>
  )
}

export default Proyectos