// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FOTO from '../Img/FOTO.jpg';
import "../CSS/NavOpciones.css"

function NavOpciones() {
  return (
    <>
      <br />
      <Navbar bg="primary" data-bs-theme="dark" className='navOpciones'>
      <img src={FOTO} alt=""  className="fotoNavbar"  />
          <Navbar.Brand href="/home"><h2>Home</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home/formacion"><h3>Formacion</h3></Nav.Link>
            <Nav.Link href="/home/idiomas"><h3>Idioma</h3></Nav.Link>
            <Nav.Link href="/home/certificados"><h3>Certificados</h3></Nav.Link>
            <Nav.Link href="/home/experiencias"><h3>Experiencia</h3></Nav.Link>
            <Nav.Link href="/home/skills"><h3>Soft Skill</h3></Nav.Link>
            <Nav.Link href="/home/proyectos"><h3>Proyectos</h3></Nav.Link>
          </Nav>
      </Navbar>
     
    </>
  );
}

export default NavOpciones;