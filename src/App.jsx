
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Error from "./components/Error"
import CrearFormacion from "./pages/CrearFormacion"
import EditarFormacion from "./pages/EditarFormacion"
import CrearExperiencia from "./pages/CrearExperiencia"
import EditarExperiencia from "./pages/EditarExperiencia"
import CrearIdioma from "./pages/CrearIdioma"
import EditarIdioma from "./pages/EditarIdioma"
import CrearCertificado from "./pages/CrearCertificado"
import CrearSkill from "./pages/CrearSkill"
import EditarSkill from "./pages/EditarSkill"
import EditarCertificado from "./pages/EditarCertificado"
import CrearProyecto from "./pages/CrearProyecto"
import EditarProyecto from "./pages/EditarProyecto"
import Formacion from "./components/Formacion"
import Experiencia from "./components/Experiencia"
import Idioma from "./components/Idioma"
import Skill from "./components/Skill"
import Certificacion from "./components/Certificacion"
import Proyectos from "./components/Proyectos"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login/>}/>
      <Route path ="/home" element={<Home/>}/>
      <Route path ="/home/formacion" element={<Formacion/>}/>
      <Route path ="/home/experiencias" element={<Experiencia/>}/>
      <Route path ="/home/idiomas" element={<Idioma/>}/>
      <Route path ="/home/skills" element={<Skill/>}/>
      <Route path ="/home/certificados" element={<Certificacion/>}/>
      <Route path ="/home/proyectos" element={<Proyectos/>}/>
      <Route path ="/home/create/formacion" element={<CrearFormacion/>}/>
      <Route path ="/home/update/formacion/:id" element={<EditarFormacion/>}/>
      <Route path ="/home/create/experiencia" element={<CrearExperiencia/>}/>
      <Route path ="/home/update/experiencia/:id" element={<EditarExperiencia/>}/>
      <Route path ="/home/create/idioma" element={<CrearIdioma/>}/>
      <Route path ="/home/update/idioma/:id" element={<EditarIdioma/>}/>
      <Route path ="/home/create/skill" element={<CrearSkill/>}/>
      <Route path="/home/update/skill/:id" element={<EditarSkill/>}/>
      <Route path ="/home/create/certificado" element={<CrearCertificado/>}/>
      <Route path="/home/update/certificado/:id" element={<EditarCertificado/>}/>
      <Route path="/home/create/proyectos" element={<CrearProyecto/>}/>
      <Route path="/home/update/proyectos/:id" element={<EditarProyecto/>}/>
      <Route path ="*" element={<Error/>}/>
      {/* <Route path ="/" element={}/>
      <Route path ="/" element={}/>  */}
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
