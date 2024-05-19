import {Button} from "react-bootstrap"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "../CSS/Contactame.css"

const Contactame = () => {

const navigate = useNavigate()

const initialState = {
      nombre: "",
      email:"",
      motivo:"",
      comentario:""
}

const [datos,setDatos] = useState(initialState);

const handleChange = (e) =>{
setDatos({...datos,[e.target.name]:e.target.value})
}

const handleSubmit = async(e) =>{
e.preventDefault()
  try{
let response = await axios.post("http://localhost:3001/Contactame",{
    nombre: datos.nombre,
    email:datos.email,
    motivo:datos.motivo,
    comentario:datos.comentario
})
if(response){
  alert("Mensaje Enviado correctamente");
  navigate("/home");}
  }catch (error){
    console.log(error)
  }
}
  return (
    <div className="contacto">
      <h3>CONTACTAME</h3>
      <hr />
      <br />
      <br />
      
      <form action="" method="" onSubmit={handleSubmit}>
      
        <fieldset>
        <h4>Si te gusto mis proyecto y queres ofrecerme un trabajo, o necesitas alguna coloboracion o ayuda te inivito que llenes el siguiente fomulario en la brevedad me estare comunicando</h4>
          <label htmlFor="">Nombre : </label>
          <input type="text"  onChange={handleChange} name="nombre"/>
          <br />
          <br />
          <label htmlFor="">E-Mail : </label>
          <input type="email" onChange={handleChange} name="email"/>
          <br />
          <br />

          <label htmlFor="">Motivo : </label>
          <select onChange={handleChange} name="motivo">
            <option onChange={handleChange} name="trabajo">Trabajo </option>

            <option onChange={handleChange} name="consulta">Consulta de Proyecto </option>

            <option >Colaboracion </option>
          </select>
          <br />
          <br />
          <legend>Formulario de comentarios.</legend>

          <textarea rows="5" cols="60"  name="comentario"></textarea>
        </fieldset>
        <Button type="submit">ENVIAR</Button>
      </form>
    </div>
  );
};

export default Contactame;
