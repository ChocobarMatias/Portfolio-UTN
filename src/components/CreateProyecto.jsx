import {useState} from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"

const CreateProyecto = () => {
const navigate = useNavigate();
const initialState = {
      nombreProyecto: "",
      detalle: "",
      imagenProyecto: "",
      videoProyecto: "",
      urlGitHubProyecto: "",
      urlProyecto: ""
}
const [datos,setDatos] = useState(initialState);
const handleChange = (e)=>{
 setDatos({...datos,[e.target.name]:e.target.value})
}
const handleSubmit = async(e) =>{
  e.preventDefault()
  try{
   let response = await axios.post("http://localhost:3001/Proyectos",{
      nombreProyecto: datos.nombreProyecto,
      detalle: datos.detalle,
      imagenProyecto: datos.imagenProyecto,
      videoProyecto: datos.videoProyecto,
      urlGitHubProyecto: datos.urlGitHubProyecto,
      urlProyecto: datos.urlProyecto
   })
   if(response){
    alert("Proyecto Nuevo Guardado correctamente")
    navigate("/home/proyectos")
   }
  }catch (error){
    console.log(error)
  }
}
    return (
      <div>
        <br/>
      <br/>
      <h3 className="text-white">Agregar Proyecto</h3>
      <br/>
      <div className="contenedorcrear">
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor=""><h4 className="form text-white">Nombre del Proyecto : </h4></label>
           <input type="text" onChange={handleChange} name ="nombreProyecto"/>
        <br /><br />
           <label htmlFor=""><h4 className="form text-white">Desccripcion : </h4></label>
           <input type="text" onChange={handleChange} name ="descripcion" />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Repositorio : </h4></label>
           <input type="text" onChange={handleChange} name ="repositorio"/>
           <br /><br />
        <button type="submit" className="btn btn-success">GUARDAR</button>
        <Link to={"/home/proyectos"} className="btn btn-warning">VOLVER</Link>
        </form></div>
      </div>
    )
  }
  
  export default CreateProyecto