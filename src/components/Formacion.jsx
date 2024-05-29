import {Card,Button} from "react-bootstrap"
import {useState, useEffect} from "react"
import axios from "axios"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import {Link} from "react-router-dom";
import "../CSS/Formacion.css";
import NavOpciones from "./NavOpciones";
import {Row,Col} from "react-bootstrap"
import Footer from "./Footer"


function Formacion() {

const [formaciones, setFormaciones] = useState([]);
 
  const getFormaciones = async () =>{
  let response = await axios.get("http://localhost:3001/Formacion")
  console.log(response.data);
  setFormaciones(response.data)
}

const handleClick= async (id)=>{

try {

      let response = await axios.delete("http://localhost:3001/Formacion/"+id)
  if(response){
    alert("Eliminado Correctamente")
    getFormaciones()
    } 
  }catch(error){
console.log(error);}}

useEffect(()=>{getFormaciones()},[]);

  return (
    <div>
      <br />
      <br />
      <div>
      <NavOpciones/></div>
      <br />
      <br />
  
      <hr />
      <div>
      <h3 className="formacion text-white">FORMACION <Link to={"/home/create/formacion"}><IoMdAddCircleOutline/></Link></h3>
      </div>
      <br />
      <br />
     
      <div className="contenedorFormacion">
        <div className="Card">
          <div><br /><br /></div>
      {formaciones.map(formacion => <Card className="CardF text-white" key={formacion.id} style={{ width: '40rem'  }} >
          <Card.Body >
            <Row>
              <Col md={1}>
                <br /><br />
            <Card.Img variant="top" src={formacion.logo} style={{ width: "50px", height: "50px" }} />
            </Col>
            <Col md={10}>
            <Card.Title>{formacion.id} - {formacion.titulo}</Card.Title>
            <Card.Subtitle className="mb-2 text-center">{formacion.institucionEducativa}</Card.Subtitle>
            <Card.Text>
              Año Inicio : {formacion.añoInicio} – Año Finalizacion : {formacion.añoFinEstimado} </Card.Text>
            <Card.Text>(Estado : {formacion.estado})</Card.Text>
            </Col>
            <Col md={1}>
            <Link to={`/home/update/formacion/${formacion.id}`} className="btn btn-warning" ><FaEdit /></Link> 
            <br /><br /><br /><br />
            <Button onClick={(()=>handleClick(formacion.id))} className="btn btn-danger"><MdDelete /></Button>
            </Col>
            </Row>
          </Card.Body></Card> )}
          <br/></div>
          </div><Footer/>
              
    </div>
  );
}

export default Formacion