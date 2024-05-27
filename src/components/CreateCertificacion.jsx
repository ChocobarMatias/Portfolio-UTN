import axios from "axios"
import { useState} from "react"
import { useNavigate, Link } from "react-router-dom"


const CreateCertificacion = () => {

  const navigate = useNavigate();

  const initialState = {
      titulo: "",
      institucionEducativa: "",
      añoInicio: "",
      horasAcademica: "",
      codigo: "",
      url: "",
      fotoCertificado: ""
  }
const [datos,setDatos] = useState(initialState)

const handleChange =(e)=>{
  setDatos({...datos,[e.target.name]:e.target.value})
  }
const handleSubmit = async(e) =>{
  e.preventDefault()
  try {
    let response = await axios.post("http://localhost:3001/Certificacion",{
      titulo: datos.titulo,
      institucionEducativa: datos.institucionEducativa,
      añoInicio: datos.añoInicio,
      horasAcademica: datos.horasAcademica,
      codigo: datos.codigo,
      url: datos.url,
      fotoCertificado: datos.fotoCertificado
    })
    if(response){
    alert("Nuevo Certificado Agregado")
     navigate("/home/certificados");
    }
    
  } catch (error) {
    console.log(error)
  }
}

    return (
      <div>
        <br/>
        <br/>
        <h3>Agregar Nuevo Certificado</h3>
        <br/>
        <hr />
        <br />
        <div className="crearcertificado">
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Titulo : </label>
        <input type="text" onChange={handleChange} name="titulo"/>
        <br/><br/>
        <label htmlFor="">Institucion Educativa : </label>
        <input type="text" onChange={handleChange} name="institucionEducativa"/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="añoInicio"/>
        <br/><br/>
        <label htmlFor="">Horas Academia : </label>
        <input type="text" onChange={handleChange} name="horasAcademica"/>
        <br/><br/>
        <label htmlFor="">Codigo : </label>
        <input type="text" onChange={handleChange} name="codigo"/>
        <br/><br/>
        <label htmlFor="">url : </label>
        <input type="text" onChange={handleChange} name="url"/>
        <br/><br/>
        <label htmlFor="">Certificado : </label>
        <input type="text" onChange={handleChange} name="fotoCertificado"/>
        <br/><br/>
        <div className="botones">
        <button type="submit" className="btn btn-success">GUARDAR</button>
        <Link to={"/home/certificados"} className="btn btn-warning">VOLVER</Link>
        </div>
        </form>
        </div>
        </div>
    )
  }
  
  export default CreateCertificacion