
import { Link} from "react-router-dom";
const NavBar = () => {
    const name = "DORAEMON CLASSBOARD";
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
             <Link className="linklist" to="/dora">Task</Link>
            
        </div>
      

     
    </div>
    
    </>
)
}

export default NavBar