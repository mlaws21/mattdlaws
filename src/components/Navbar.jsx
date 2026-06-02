import style from './style/Navbar.module.css'
// import logo from './images/headshot.JPG';
import logo from './images/neulogo.png';
import React from 'react';

function Navbar() {
    return (
        
        <header id={style.navbar}>
            <div id={style.namePic}>
                <img id={style.imgDiv} src={logo} alt='Northeastern logo' ></img>
                <a id={style.me} className={style.fontloader} href='/'>Matt Laws</a>

            </div>
                
            <div id={style.pages} className={style.fontloader}>
                <ul>
                    <li>
                        <a className={style.navItem} href='/'>Home</a>
                    </li>

                    <li>
                        <a className={style.navItem} href='/projects'>Projects</a>
                    </li>

                    <li>
                        <a className={style.navItem} href='/about'>About</a>
                    </li>

                    <li>
                        <a className={style.navItem} href='/contact'>Contact</a>
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