import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import "../CSS/Skill.css"

const UpdateSkill = () => {
  const navigate = useNavigate();
  const initialState = {
    nombreSkill: "",
    porcentaje: ""
  };
  const [datos, setDatos] = useState(initialState);
  const { id } = useParams();
  const getSkill = async () => {
    let response = await axios.get("http://localhost:3001/Skill/" + id);
    setDatos(response.data);
  };
  const handleSubmit = async (e) => {
    e.perventDefault();
    try {
      let response = await axios.put("http://localhost:3001/Skill/" + id, {
        nombreSkill: datos.nombreSkill,
        porcentaje: datos.porcentaje
      });
      if (response) {
        alert("Skill actualizado correctamente");
        navigate("/home/skills");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setDatos({...datos, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getSkill();
  }, []);
  return (
    <div>
      <br />
        <br />
      <div className="actualizarskill">
      <form action="" onSubmit={handleSubmit}>
        
        <h3>Actualizar Skill</h3>
        <br />
        <br />
        <label htmlFor="">Nombre del Skill : </label>
        <input type="text" onChange={handleChange} name="nombreSkill" value={datos.nombreSkill}/>
        <br />
        <br />
        <label htmlFor="">Porcentaje : </label>
        <input type="number" onChange={handleChange} name="porcentaje" value={datos.porcentaje}/>
        <br />
        <br />
        <div className="botones">
        <button type="submit" className="btn btn-success"> GUARDAR</button>
        <Link to={"/home/skills"} className="btn btn-warning">VOLVER</Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateSkill;
