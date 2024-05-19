import {memo} from "react";
import FOTO from '../Img/FOTO.jpg';
import "../CSS/Header.css"

const Header = memo(function Header() {
// utilizo menos para que el componente se muestre una sola vez y no se este rereenderizando


  return (
    <div>
      <div className="perfil">
<img src={FOTO} alt="/home/formacion"  className="fotoperfil" width={"100%"} />
<h1>Chocobar Matias Sebastian</h1>
<br />
<h3>Programador Universitario</h3>
<br /><br />
<h3>Acerca de mi</h3>
<hr /><br />
<h2 className="text-danger">Soy un apasionado del mundo de la programación, la tecnología y los ecosistemas emprendedores y los nuevos desafios.</h2>
<br /><br />
    </div></div>
  
  )
})

export default Header