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
      <div className="idiomaprincipal">
      <div className="idioma">
      <h3 className=" text-white text-center">IDIOMAS : <Link to={"/home/create/idioma"}><IoMdAddCircleOutline className="iconidioma"/></Link></h3>
      </div>
      <hr />
      <div className="contenedorIdioma text-white">
          
      {idiomas.map(idioma =><Card className="CardIdioma text-white" key={idioma.id} style={{ width: '80rem' }} >
          <Card.Body >
            
            <Card.Title><h2>{idioma.id} - Idioma : {idioma.idiomaNuevo}</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-center"><h2>Nivel : {idioma.nivel}</h2></Card.Subtitle>
            <Link to={`/home/update/idioma/${idioma.id}`} className="btn btn-warning"><FaEdit className="iconidioma"/></Link> 
            <Button onClick={(()=>handleClick(idioma.id))} className="btn btn-danger"><MdDelete className="iconidioma"/></Button>
          </Card.Body>
        </Card>)}
        </div></div>
      <Footer/>
    </div>
  )
}

export default Idioma