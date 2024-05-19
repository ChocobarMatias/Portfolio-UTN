import {useState,useEffect} from "react"
import {useNavigate,useParams} from "react-router-dom"
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
        navigate("/home")
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
        <h3>Actualizar PROYECTOS</h3>
      <hr />
     <br />
        <form action="" onSubmit={handleSubmit}>
         
          {/* <h4>Nombre del Proyecto: {proyecto.nombreProyecto}</h4> */}
           <label htmlFor=""></label>
           <input type="text" onChange={handleChange} name ="nombreProyecto" value={datos.nombreProyecto} />

          {/* <h4>proyecto.detalle</h4>

          <h4>proyecto.imagenProyecto</h4>

          <h4>proyecto.videoProyecto</h4>

          <h4>proyecto.urlGitHubProyecto</h4>

          <h4>proyecto.urlProyecto</h4> */}
        
        <button type="submit" className="btn btn-danger">Guardar</button>
        </form>
      </div>
    )
  }
  
  export default UpdateProyecto