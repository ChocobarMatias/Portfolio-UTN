import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from "./Footer";
import ProgressBar from 'react-bootstrap/ProgressBar';
import NavOpciones from "./NavOpciones";
import skill1 from "../assets/skill1.png";
import skill2 from "../assets/kill2.jpeg";
import skill3 from "../assets/skill3.jpeg";
import skill4 from "../assets/skill4.jpeg";
import skill5 from "../assets/skill5.jpeg";
import skill6 from "../assets/skill6.jpeg";
import skill7 from "../assets/skill7.png";
import skill8 from "../assets/skill8.png";
import skill9 from "../assets/skill9.png";
import {Row, Col} from "react-bootstrap"
import "../CSS/Skill.css"

const Skill = () => {

const [skills, setSkills] = useState([]);

const getSkill = async()=>{
let response = await axios.get("http://localhost:3001/Skill");
console.log(response.data);
setSkills(response.data);
}
const handleClick = async(id)=>{
try {
  let response = await axios.delete("http://localhost:3001/skill/"+id)
if (response) {
  alert("Skill eliminado")
  getSkill()
}
} catch (error) {
  console.log(error)
}}
useEffect(()=>{getSkill()},[])
  return (
    <div>
      <br /><br />
      <NavOpciones/><br />
  <h3>SKILL<Link to = {"/home/create/skill"}><IoMdAddCircleOutline/></Link></h3>
  <hr />
  
    <div className="containerSkill">
    <Row md={3}>
   {skills.map(skill =>
   <div key={skill.id}>
  <form action="" key={skill.id}  style={{ width: '10rem' }} >

<br /><br />
  <Col ><img width="200" height="200" src={skill.id ==1 ? skill1 :skill.id ==2 ? skill2:skill.id ==3 ?skill3:skill.id ==4 ? skill4:skill.id ==5 ?skill5 :skill.id ==6 ? skill6 :skill.id ==7 ?
    skill7:skill.id ==8 ? skill8 :skill.id ==9 ? skill9:skill9
     } alt=""/></Col>
  <h3 className="text-white">{skill.nombreSkill}</h3>
  <br /><br />
<CircularProgressbar className="circulpro text-white" value={skill.porcentaje} text={`${skill.porcentaje}%`} />;
<br /><br />
  <Link to={`/home/update/skill/${skill.id}`} className="btn btn-warning"><FaEdit /></Link> 
<Button onClick={(()=>handleClick(skill.id))} className="btn btn-danger"><MdDelete /></Button>
</form></div>)}

</Row></div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer/>
</div>
  )
}

export default Skill