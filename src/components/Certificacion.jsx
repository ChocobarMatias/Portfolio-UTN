import axios from "axios";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap"
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavOpciones from "./NavOpciones";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.jpg";
import imagen5 from "../assets/imagen5.jpg";
import imagen6 from "../assets/imagen6.jpg";
import imagen7 from "../assets/imagen7.jpg";
import imagen8 from "../assets/imagen8.jpg";
import imagen9 from "../assets/imagen9.jpg";
import imagen10 from "../assets/imagen10.jpg";
import imagen11 from "../assets/imagen11.jpg";
import "../CSS/Certificado.css"
import Caurosel from "../components/Caurosel"
import Footer from '../components/Footer'


// import {Certif1} from "../Img/1.jpg"


const Certificacion = () => {



const [certificados,setCertificados] = useState([]);
const getCertificacion = async() =>{
let response = await axios.get("http://localhost:3001/Certificacion");
console.log(response.data);
setCertificados(response.data)
}
const handleClick = async(id) =>{
try{
let response = await axios.delete("http://localhost:3001/Certificacion/"+id)
if(response){
alert("Certificacion Eliminada")
getCertificacion()
}
}catch (error){
console.log(error)
}
}
useEffect(()=>{getCertificacion()},[])
  return (
    <div>
      <br /><br />
      <NavOpciones/><br /><br /><br />
      <h3 className="text-white">CERTIFICADOS : <Link to={"/home/create/certificado"}><IoMdAddCircleOutline className="iconcertificado"/></Link></h3>
      <br /><br />
      <hr />

      <div className="contcertificado">
      {certificados.map(certificado=>
        <form action="" key={certificado.id}>
        <br /><br />
        
        <img  className="d-block w-100" id="certificadoimg" width={"30%"}  src={certificado.fotoCertificado == 1 ? imagen1 : certificado.fotoCertificado == 2 ?
          imagen2 : certificado.fotoCertificado == 3 ? imagen3 : certificado.fotoCertificado == 4 ? imagen4 :certificado.fotoCertificado == 5 ? imagen5 :
          certificado.fotoCertificado == 6 ? imagen6 : certificado.fotoCertificado == 7 ? imagen7 :certificado.fotoCertificado == 8 ? imagen8 :
          certificado.fotoCertificado == 9 ? imagen9 :certificado.fotoCertificado == 10 ? imagen10 :certificado.fotoCertificado == 11 ? imagen11 :imagen11 } alt="First slide" />
        
        <br /><br />
        <div className="Descripcion text-center">
        <br /><br /><br />
        <h3 className="text-white">Titulo del Certificado : {certificado.titulo}</h3>
        <h4 className="text-white">Academia :{certificado.institucionEducativa}</h4>
        <h4 className="text-white">Año :{certificado.añoInicio}</h4>
        <h4 className="text-white">Horas Catedra : {certificado.horasAcademica}</h4>
        <br /><br />
        </div>
   
    <br />
    <div className="contenedor2">
          <div className="boton1">
          <Link to={`/home/update/certificado/${certificado.id}`} className="btn btn-warning"><FaEdit className="iconcertificado"/></Link> 
          </div>
          <div className="boton2">
          <Button onClick={(()=>handleClick(certificado.id))} className="btn btn-danger"><MdDelete className="iconcertificado"/></Button>
          </div> 
          </div>
        </form>
      )}</div>
      <Footer/>
    </div>
  )
}

export default Certificacion