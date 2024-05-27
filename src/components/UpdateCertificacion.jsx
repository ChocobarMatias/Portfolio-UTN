import axios from "axios"
import {useState, useEffect} from "react"
import {useNavigate, useParams,Link} from "react-router-dom"
import "../CSS/Certificado.css"

const UpdateCertificacion = () => {
const navigate = useNavigate();
const initialState = {
      titulo: "",
      institucionEducativa: "",
      añoInicio: "",
      horasAcademica: "",
      codigo: "",
      url: "",
      fotoCertificado: ""
};
const [datos,setDatos] = useState(initialState);
const {id} = useParams();
const getDatos = async() =>{
  let response = await axios.get("http://localhost:3001/Certificacion/"+id)
  setDatos(response.data)
};
const handleSubmit = async(e) =>{
  e.preventDefault();
  try {
    let response = await axios.put("http://localhost:3001/Certificacion/"+id,{
      titulo: datos.titulo,
      institucionEducativa: datos.institucionEducativa,
      añoInicio: datos.añoInicio,
      horasAcademica: datos.horasAcademica,
      codigo: datos.codigo,
      url: datos.url,
      fotoCertificado: datos.fotoCertificado
    });
    if(response){
    alert("Certificado Actualizado");
    navigate("/home/certificados")
    }
  } catch (error) {
    console.log(error)
  }}

const handleChange = (e) =>{
  setDatos({...datos,[e.target.name]:e.target.value});
}
useEffect(()=>{getDatos()},[])  

    return (
      <div>
        <br/>
        <br/>
        <h3>Actualizar Certificacion</h3>
        <br/>
        <hr />
        <br />
        <div className="actualizarcertificado">
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Titulo : </label>
        <input type="text" onChange={handleChange} name="titulo" value={datos.titulo}/>
        <br/><br/>
        <label htmlFor="">Institucion Educativa : </label>
        <input type="text" onChange={handleChange} name="institucionEducativa" value={datos.institucionEducativa}/>
        <br/><br/>
        <label htmlFor="">Año de Inicio : </label>
        <input type="text" onChange={handleChange} name="añoInicio"value={datos.añoInicio}/>
        <br/><br/>
        <label htmlFor="">Horas Academia : </label>
        <input type="text" onChange={handleChange} name="horasAcademica" value={datos.horasAcademica}/>
        <br/><br/>
        <label htmlFor="">Codigo : </label>
        <input type="text" onChange={handleChange} name="codigo" value={datos.codigo}/>
        <br/><br/>
        <label htmlFor="">url : </label>
        <input type="text" onChange={handleChange} name="url" value={datos.url}/>
        <br/><br/>
        <label htmlFor="">Certificado : </label>
        <input type="text" onChange={handleChange} name="fotoCertificado" value={datos.fotoCertificado}/>
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
  
  export default UpdateCertificacion