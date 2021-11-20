import React ,{ useState } from 'react';
import './Navbar.css'
import {Link } from 'react-router-dom';
//import * as Icons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai"


function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu =() => setClick(false);

 

  

    return (
        <>
         <nav className="navbar">
              <div className="navbar-container">
                
                   <img src="logomaof.png" className="maof-logo" alt="logo"/>  
                 
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                

                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        צור קשר
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        אודות
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        פרויקטים
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                         דך הבית
                      </Link>
                    </li>
                  </ul>
                 
              </div>

         </nav> 
        </>
    );
}

export default Navbar
