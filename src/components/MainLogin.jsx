import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const MainLogin = () => {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("holaaaaa")
if(usuario==="matias" && pass==="12345"){
  navigate("/home")
}else {alert("Usuario incorrecto")}
 
  };

  return (
    <div>
      <p>Te invito a que le heches un vistazo a mi porfolio y proyectos</p>
      Usuario : invitado <br />
      contraseña: 12345 <br />
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar Nombre de Usuario"
          onChange={(e)=> setUsuario(e.target.value)}
        />
        <br />
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="**************"
          onChange={(e)=>setPass(e.target.value)}
        />
        <br /> <Button type="submit">Boton</Button>
      </Form>
    </div>
  );
};

export default MainLogin;
