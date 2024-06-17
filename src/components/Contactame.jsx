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
      <h3 className="text-white">CONTACTAME</h3>
      <hr />
      <br />
      <br />
      
      <form action="" method="" onSubmit={handleSubmit}>
      
        <fieldset>
        <h3 className="text-white">Si te gusto mis proyecto y queres ofrecerme un trabajo, o necesitas alguna
         coloboracion o ayuda te inivito que llenes el siguiente fomulario en la brevedad me estare comunicando</h3>
          <label htmlFor="" className="text-white"><h3>Nombre : </h3></label>
          <input type="text"  onChange={handleChange} name="nombre"/>
          <br />
          <br />
          <label htmlFor="" className="text-white"><h3>E-Mail : </h3></label>
          <input type="email" onChange={handleChange} name="email"/>
          <br />
          <br />

          <label htmlFor="" className="text-white"><h3>Motivo : </h3></label>
          <h3 className="text-white"><select onChange={handleChange} name="motivo">
            <option onChange={handleChange} name="trabajo"><h3>Trabajo</h3> </option>

            <option onChange={handleChange} name="consulta"><h3>Consulta de Proyecto </h3></option>

            <option ><h3  className="text-white">Colaboracion </h3></option>
          </select></h3>
          <br />
          <br />
          <legend><h3 className="text-white">Formulario de comentarios.</h3></legend>

          <h3><textarea rows="5" cols="60"  name="comentario"><h3></h3></textarea></h3>
        </fieldset>
        <br />
          <br />
        <Button type="submit" className="btnEnviar">ENVIAR</Button>
      </form>
    </div>
  );
};

export default Contactame;
