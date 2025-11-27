
import { Link} from "react-router-dom";
const NavBar = () => {
    
      const links=[{link:"/home" },{link:"/about"}];
  return (
    <>
  
    <div className="navbar">
        <div className="childnav">
            <h1>{name}</h1> 
        </div>
        <div className="linkstyle">
           
            <Link className="linklist" to="/"> Home</Link>
             <Link className="linklist" to="/about">About </Link>
             <Link className="linklist" to="/state">State</Link>
             <Link className="linklist" to="/dora">State process</Link>
             <Link className="linklist" to="/parent">Props</Link>
             <Link className="linklist" to="/form">Form</Link>
              
             <Link className="linklist" to="/formshow">Display</Link>
            
        </div>
      

     
    </div>
    
    </>
)
}

export default NavBar