import {memo} from "react";
import FOTO from '../Img/FOTO.jpg';
import "../CSS/Header.css"

const Header = memo(function Header() {
// utilizo menos para que el componente se muestre una sola vez y no se este rereenderizando


  return (
    <body >
      <div className="landscape">
      
      <div className="perfil">
<img src={FOTO} alt="/home/formacion"  className="fotoperfil" width={"100%"} />
<h1  className="text-white">Chocobar Matias Sebastian</h1>
<br />
<h3  className="text-white">Programador Universitario - UTN</h3>
<br /><br />
<h3  className="text-white">Acerca de mi</h3>
<hr /><br />
<h2 className="text-white">Soy un apasionado del mundo de la programación, la tecnología, los ecosistemas emprendedores y los nuevos desafios.</h2>
<br /><br />
    </div></div>
    <div className="glass"></div>
    </body>
  
  )
})

export default Header