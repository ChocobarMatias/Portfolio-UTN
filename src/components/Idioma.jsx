import {useState, useEffect} from "react"
import axios from "axios";
import {Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import NavOpciones from "./NavOpciones";
import Footer from "./Footer"
import "../CSS/Idioma.css"


const Idioma = () => {

const [idiomas, setIdiomas] = useState([]);

const getIdioma = async() =>{
let response = await axios.get("http://localhost:3001/Idioma");
console.log(response.data);
setIdiomas(response.data);
}
const handleClick = async(id) =>{
try {
  let response = await axios.delete("http://localhost:3001/Idioma/"+id);
  if (response) {
    alert("Eliminado Correctamente")
    getIdioma()
  }
} catch (error) {
  console.log(error)
}}
useEffect(()=>{getIdioma()},[])

  return (
    <div>
      <br /><br />
      <NavOpciones/>
      <br />
      <h3 className="idioma text-success">IDIOMAS <Link to={"/home/create/idioma"}><IoMdAddCircleOutline/></Link></h3>
      <hr />
      <div className="contenedorIdioma">
        <div className="Card">
          <div><br /><br /></div>
      {idiomas.map(idioma =><Card className="CardIdioma" key={idioma.id} style={{ width: '30rem' }} >
          <Card.Body >
            
            <Card.Title>{idioma.id} - Idioma : {idioma.idiomaNuevo}</Card.Title>
            <Card.Subtitle className="mb-2 text-center">Nivel : {idioma.nivel}</Card.Subtitle>
            <Link to={`/home/update/idioma/${idioma.id}`} className="btn btn-warning"><FaEdit /></Link> 
            <Button onClick={(()=>handleClick(idioma.id))} className="btn btn-danger"><MdDelete /></Button>
          </Card.Body>
          
        </Card>)}
        </div></div>
      <Footer/>
    </div>
  )
}

export default Idioma