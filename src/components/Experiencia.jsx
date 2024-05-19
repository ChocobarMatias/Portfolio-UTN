import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios"
import {Card,Button} from "react-bootstrap"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import NavOpciones from "./NavOpciones";

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
      <h3>Experiencia<Link to={"/home/create/experiencia"}><IoMdAddCircleOutline/></Link></h3>
      <hr/>
      {experiencias.map(experiencia =><Card key={experiencia.id} style={{ width: '30rem' }} >
          <Card.Body >
            <Card.Img variant="top" src="" style={{ width: "50px", height: "50px" }} />
            <Card.Title>{experiencia.id} - {experiencia.cargo}</Card.Title>
            <Card.Subtitle className="mb-2 text-center">{experiencia.empresa}</Card.Subtitle>
            <Card.Text>
              {experiencia.añoInicio} – {experiencia.añoFinal} - ({experiencia.estadoActual})
            </Card.Text>
         
            <Link to={`/home/update/experiencia/${experiencia.id}`} className="btn btn-warning"><FaEdit /></Link> 
            <Button onClick={(()=>handleClick(experiencia.id))} className="btn btn-danger"><MdDelete /></Button>
          </Card.Body>
          
        </Card>)}


      </div>
  )
}

export default Experiencia