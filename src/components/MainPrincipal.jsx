import Contactame from "./Contactame";
import formacion from "../Img/formacion.jpg";
import experiencia from "../Img/experiencia.jpeg";
import idioma from "../Img/idioma.jpeg";
import skill from "../Img/skill.jpg";
import certificado from "../Img/certificado.jpeg";
import proyecto from "../Img/proyecto.jpeg";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../CSS/MainPrincipal.css";

const MainPrincipal = () => {
  return (
    <div>
    <div className="contenedormain">
      <Row >
        <Col md={3}><div className="formaciionMain"> <br />
            <br /><br /><br />
            <br /><h2 className="form text-white">Formacion</h2><Link to="/home/formacion"><img className="imagenFormacion"  height="50" src={formacion} alt="" width={"40%"} /></Link></div>
        </Col>
        
        <Col md={1}>
        <br /><br /><br /><br /><br />
          <div className="idiomamain text-white"><h2>Idioma</h2><Link to="/home/idiomas"><img className="imagenIdioma" src={idioma} alt="" width={"30%"} /></Link>
          </div>
          <br /><br /><br /> <br /><br /><br />
        </Col>
        <Col md={2}></Col>
        <Col md={1}>
        <br /><br /><br />
          <div className="certificadomain">
            <br /><br />
            <h2 className="experiencia text-white">Certificados</h2><Link to="/home/certificados"><img className="imagenCertificado" src={certificado} alt="" width={"80%"} /></Link>
          </div>
          <br /><br /><br /><br /><br />
        </Col>
       
      <br /><br /><br />
      </Row>
      <Row>
        <Col md={1}>
          {" "}
          <div className="experienciamain text-white"><h2>Experiencia</h2><Link to="/home/experiencias"><img className="imagenExperiencia" src={experiencia} alt="" width={"40%"} /></Link>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col md={1}>
          {" "}
          <div className="skillmain text-white"><h2>Soft Skill</h2><Link to="/home/skills"><img className="imagenSkill" src={skill} alt="" width={"40%"} /></Link>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col md={1}>
          <div className="proyectomain text-white"><h2>Proyectos</h2><Link to="/home/proyectos"><img className="imagenFormacion" src={proyecto} alt="" width={"40%"} /></Link>
          </div>
        </Col>
        {/* <Col md={2}></Col> */}
      </Row>
      </div>
      <br /><br /><br /><br /><br /><br /><hr />
      <hr />
      <Contactame />
      <hr />
    </div>
  );
};

export default MainPrincipal;
