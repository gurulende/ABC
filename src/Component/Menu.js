import { Link } from "react-router-dom";

function Menu(){
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ABC Automobiles</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to = {"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/About"} >About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Vehicle"} >Vehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = {"/"}>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = {"/"} >Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}




export default Menu;
