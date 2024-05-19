import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import NavOpciones from "./NavOpciones";

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
  {skills.map(skill =>
  <form action="" key={skill.id}  style={{ width: '10rem' }} >

<ProgressBar animated now={skill.porcentaje} />;

<CircularProgressbar value={skill.porcentaje} text={`${skill.porcentaje}%`} />;
  <Link to={`/home/update/skill/${skill.id}`} className="btn btn-warning"><FaEdit /></Link> 
<Button onClick={(()=>handleClick(skill.id))} className="btn btn-danger"><MdDelete /></Button>
</form>)}</div>
  )
}

export default Skill