import React ,{ useState } from 'react';
import './Navbar.css'
import {NavDropdown} from 'react-bootstrap'
//import {Button} from './Button.css'
import {Link } from 'react-router-dom';
//import * as Icons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai"


function Navbar() {
  
  
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu =() => setClick(false);

    

    return (
        <>
         <nav className="Navbar">
              <div className="navbar-container">
                
                   <img src="/maofNew3.png" className="maof-logo" alt="logo"/>  
                 
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                
                 
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                 <Link to='/התחברות' className='nav-links-1' onClick={closeMobileMenu}>
                         כניסת לקוח
                      </Link>
                      
                    </li>
                    <li className='nav-item'>
                      <Link to='/צור קשר' className='nav-links' onClick={closeMobileMenu}>
                        צור קשר
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/אודות' className='nav-links' onClick={closeMobileMenu}>
                        אודות
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/שירותים' className='nav-links' onClick={closeMobileMenu}>
                         שירותים
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/התהליך' className='nav-links' onClick={closeMobileMenu}>
                        התהליך
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/פרויקטים' className='nav-links' onClick={closeMobileMenu}>
                        פרויקטים
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                         דף הבית
                      </Link>
                    </li>
                  </ul>
                  
                
                 
              </div>

         </nav> 
         
        </>
    );
}

export default Navbar
//  {button && <button buttonStyle='btn--outline' >כניסת לקוח</button>}
