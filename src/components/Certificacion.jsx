import axios from "axios";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap"
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavOpciones from "./NavOpciones";


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
      <NavOpciones/><br />
      <h3>CERTIFICADOS<Link to={"/home/create/certificado"}><IoMdAddCircleOutline/></Link></h3>
      <hr />
      
      {certificados.map(certificado=>
        <form action="" key={certificado.id}>
        <h3>hola : {certificado.titulo}</h3>
         
          <Link to={`/home/update/certificado/${certificado.id}`} className="btn btn-warning"><FaEdit /></Link> 
          <Button onClick={(()=>handleClick(certificado.id))} className="btn btn-danger"><MdDelete /></Button>
        </form>
      )}
    </div>
  )
}

export default Certificacion