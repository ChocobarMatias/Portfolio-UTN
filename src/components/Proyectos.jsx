import {useState,useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavOpciones from "./NavOpciones";
import {Card} from 'react-bootstrap';

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
      <h3>PROYECTOS<Link to="/home/create/proyectos"><IoMdAddCircleOutline/></Link></h3>
      <hr />
      {proyectos.map(proyecto=>
        <form action="" key={proyecto.id}>
         
          <h4>Nombre del Proyecto: {proyecto.nombreProyecto}</h4>

          <h4>proyecto.detalle</h4>

          <h4>proyecto.imagenProyecto</h4>

          <h4>proyecto.videoProyecto</h4>

          <h4>proyecto.urlGitHubProyecto</h4>

          <h4>proyecto.urlProyecto</h4>


          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        <Link to={`/home/update/proyectos/${proyecto.id}`} className="btn btn-warning"><FaEdit /></Link>
        <Button onClick={(()=>handleClick(proyecto.id))} className="btn btn-danger"><MdDelete /></Button>
        </form>
      )}
    </div>
  )
}

export default Proyectos