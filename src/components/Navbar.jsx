import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link className="title" to='/'>
            <h1 >
                Super Blog
            </h1>
            </Link>
            <div className="nav-comp">
                <Link to='addblogs'>Add Blogs</Link>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
                
            </div>
        </div>
     );
}
 
export default Navbar;