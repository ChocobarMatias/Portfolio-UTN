import axios from "axios"
import {useState,useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom"

const UpdateIdioma = () => {
const navigate = useNavigate();

const initialState ={
  idiomaNuevo :"",
  nivel:""
}
const [datos,setDatos] = useState(initialState)
const {id} = useParams();

const getDatos = async() =>{
let response = await axios.get("http://localhost:3001/Idioma/"+id)
setDatos(response.data)
}
const handleSubmit = async(e) =>{
e.preventDefault()
try {
  let response = await axios.put("http://localhost:3001/Idioma/"+id,{
    idiomaNuevo: datos.idiomaNuevo,
    nivel: datos.nivel
  })
  if (response) {
    alert("Idioma Actualizado")
    navigate("/home")
  }
} catch (error) {
  console.log(error)
}
}

const handleChange = (e) =>{
setDatos({...datos,[e.target.name]:e.target.value})
}


useEffect(()=>{getDatos()},[]);
    return (
      <div>
<form action="" onSubmit={handleSubmit}>
  <br /><br />
  <h3>Actualizar Idioma</h3>
  <br /><br />
  <label htmlFor="">Idioma Nuevo : </label>
  <input type="text" onChange={handleChange} name="idiomaNuevo" value={datos.idiomaNuevo}/>
  <br /><br />
  <label htmlFor="">Nivel</label>
  <input type="text" onChange={handleChange} name="nivel" value={datos.nivel}/>
  <br /><br />
  <button type="submit" className="btn btn-success">GUARDAR</button>
</form>
      </div>
    )
  }
  
  export default UpdateIdioma