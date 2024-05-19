import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSkill = () => {
  const navigate = useNavigate();
  const initialState = {
    nombreSkill: "",
    porcentaje: "",
    color: "",
    icono: "",
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
        porcentaje: datos.porcentaje,
        color: datos.color,
        icono: datos.icono,
      });
      if (response) {
        alert("Skill actualizado correctamente");
        navigate("/home");
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
      <form action="" onSubmit={handleSubmit}>
        <br />
        <br />
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
        <label htmlFor="">Color : </label>
        <input type="text" onChange={handleChange} name="color" value={datos.color}/>
        <br />
        <br />
        <label htmlFor="">Icono : </label>
        <input type="text" onChange={handleChange} name="icono" value={datos.icono}/>
        <br />
        <br />
        <button type="submit" className="btn btn-success">
          GUARDAR
        </button>
      </form>
    </div>
  );
};

export default UpdateSkill;
