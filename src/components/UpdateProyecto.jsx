import {useState,useEffect} from "react"
import {useNavigate,useParams,Link} from "react-router-dom"
import axios from "axios"

const UpdateProyecto = () => {
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

  const {id} = useParams();

  const getProyecto = async() =>{
   let response = await axios.get("http://localhost:3001/Proyectos/"+id);
   setDatos(response.data)
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
     try{
      let response = await axios.put("http://localhost:3001/Proyectos/"+id,{
      nombreProyecto: datos.nombreProyecto,
      detalle: datos.detalle,
      imagenProyecto: datos.imagenProyecto,
      videoProyecto: datos.videoProyecto,
      urlGitHubProyecto: datos.urlGitHubProyecto,
      urlProyecto:datos.urlProyecto
      })
      if(response){
        alert("Proyecto Actualizado")
        navigate("/home/proyectos")
      }
     }catch (error){
       console.log(error)
     }
  }
  const handleChange =(e)=>{
    setDatos({...datos,[e.target.name]:e.target.value})
  }
  useEffect(()=>{getProyecto()},[]);
    return (
      <div>
        <br />
        <br />
        <h3 className="form text-white">Actualizar Proyectos</h3>
      <hr />
     <br />
     <div className="actualizarproyecto">
        <form action="" onSubmit={handleSubmit}>
           <label htmlFor=""><h4 className="form text-white">Nombre del Proyecto : </h4></label>
           <input type="text" onChange={handleChange} name ="nombreProyecto" value={datos.nombreProyecto} />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Desccripcion : </h4></label>
           <input type="text" onChange={handleChange} name ="descripcion" value={datos.descripcion} />
           <br /><br />
           <label htmlFor=""><h4 className="form text-white">Repositorio : </h4></label>
           <input type="text" onChange={handleChange} name ="repositorio" value={datos.repositorio} />
           <br /><br />
        <button type="submit" className="btn btn-danger">Guardar</button>
        <Link to={"/home/proyectos"} className="btn btn-warning">VOLVER</Link>
        </form>
        </div>
      </div>
    )
  }
  
  export default UpdateProyecto