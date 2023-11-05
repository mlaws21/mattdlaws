import './style/Navbar.css'
// import logo from './images/headshot.JPG';
import logo from './images/williamslogoDM.png';

import React from 'react';



function Navbar() {
    
    return (
        
        <header>
            <div id="namePic">
                <img id="imgDiv" src={logo} alt='williams logo'></img>
                <a id="me" className="font-loader"  href='/'>Matt Laws</a>

            </div>
                
            <div id="pages" className="font-loader">
                <ul>
                    <li>
                        <a className="navItem" href='/'>Home</a>
                    </li>

                    <li>
                        <a className="navItem" href='/projects'>Projects</a>
                    </li>

                    <li>
                        <a className="navItem" href='/about'>About</a>
                    </li>

                    <li>
                        <a className="navItem" href='/contact'>Contact</a>
                    </li>

                </ul>
            </div>
        </header>
    )
}

// class Navbar extends React.Component {
//     render(){
//         return NavbarHelp
//     } 
// }

export default Navbar;