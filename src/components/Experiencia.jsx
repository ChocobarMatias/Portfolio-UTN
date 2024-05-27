import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios"
import {Card,Button} from "react-bootstrap"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import NavOpciones from "./NavOpciones";
import "../CSS/Experiencia.css"

const Experiencia = () => {

const [experiencias,setExperiencias] = useState([]);

const getExperiencia = async() =>{
let response = await axios.get("http://localhost:3001/Experiencia")
console.log(response.data);
setExperiencias(response.data)
}

const handleClick = async(id) =>{
  try {
    let response = await axios.delete("http://localhost:3001/Experiencia/"+id);
if(response){
  alert("Eliminado Correctamente")
  getExperiencia()
}

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{getExperiencia()},[]);
  return (
    <div>
      <br /><br />
      <NavOpciones/><br />
      <h3 className="text-white">Experiencia Laboral : <Link to={"/home/create/experiencia"}><IoMdAddCircleOutline className="iconcrearexperiencia"/></Link></h3>
      <hr/>
      <div className="contenedorexperiencia">
      
      <div><br /><br /></div>
      {experiencias.map(experiencia =><Card className="CardE" key={experiencia.id} style={{ width: '30rem' }} >
      
          <Card.Body >
            <Card.Img variant="top" src="" style={{ width: "50px", height: "50px" }} />
            <Card.Title className="text-white">{experiencia.id} - {experiencia.cargo}</Card.Title>
            <Card.Subtitle className="mb-2 text-center text-white">{experiencia.empresa}</Card.Subtitle>
            <Card.Text className="text-white">
              {experiencia.añoInicio} – {experiencia.añoFinal} - ({experiencia.estadoActual})
            </Card.Text>
         
            <Link to={`/home/update/experiencia/${experiencia.id}`} className="btn btn-warning"><FaEdit className="iconcrearexperiencia" /></Link> 
            <Button onClick={(()=>handleClick(experiencia.id))} className="btn btn-danger"><MdDelete className="iconcrearexperiencia"/></Button>
          </Card.Body>
          
        </Card>)}
        </div>

      </div>
  )
}

export default Experiencia