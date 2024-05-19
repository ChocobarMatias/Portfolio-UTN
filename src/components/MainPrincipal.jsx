import Contactame from "./Contactame";
import formacion from "../Img/formacion.jpg";
import experiencia from "../Img/experiencia.jpeg";
import idioma from "../Img/idioma.jpeg";
import skill from "../Img/skill.jpg";
import certificado from "../Img/certificado.jpeg";
import proyecto from "../Img/proyecto.jpeg";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import "../CSS/MainPrincipal.css";

const MainPrincipal = () => {
  return (
    <>
      <Row>
       
        <Col md={2}>
          <br />
          <br />
          <br />
          <br />
          <div className="formacion">
            <Link to="/home/formacion">
              <h2>Formacion</h2>
              <img src={formacion} alt="" width={"40%"} />
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>
        <Col md={2}></Col>
        <Col md={2}>
          <div className="idioma">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4>Idioma</h4>
            <Link to="/home/idiomas">
              <img src={idioma} alt="" width={"30%"} />
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>
        <Col md={2}></Col>
        <Col md={2}>
          <br />
          <br />
          <br />
          <div className="certificado">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4>Certificados</h4>
            <Link to="/home/certificados">
              <img src={certificado} alt="" width={"80%"} />
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
   
        <Col md={2}>
          {" "}
          <div className="experiencia">
            <h3>Experiencia</h3>
            <Link to="/home/experiencias">
              <img src={experiencia} alt="" width={"40%"} />
            </Link>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col md={2}>
          {" "}
          <div className="skill">
            <h4>Soft Skill</h4>
            <Link to="/home/skills">
              <img src={skill} alt="" width={"40%"} />
            </Link>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col md={2}>
          <div className="proyecto">
            <h4>Proyectos</h4>
            <Link to="/home/proyectos">
              <img src={proyecto} alt="" width={"40%"} />
            </Link>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <br />
      <br />
      <hr />
      <Contactame />
      <hr />
    </>
  );
};

export default MainPrincipal;
