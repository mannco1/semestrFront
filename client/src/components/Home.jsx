import React from 'react';
import '../css/style.css'
import me from '../images/me.png';
import BurgerScript from './BurgerScript';

const Home = () => {
    return (
        <div>
            <header className="header">
                <div className="header_contant">
                    <div className="Header__flex">
                        <a href="/">
                            <div className="top">
                                <img src={me} alt="" />
                                
                                
                                <div className="nick">
                                    <div className="header_name">Mudritsyn<br />Mikhail</div>
                                    <div className="header_rank">Fullstack</div>
                                </div>
                            </div>
                        </a>
                        
                        <nav className="nav">
            <ul className="horizon_ul">
               <li className="menu-item active"><a href="/">Home</a></li>
               <li className="menu-item"><a href="about">About</a></li>
               <li className="menu-item"><a href="contacts">Contacts</a></li>
            </ul>
         </nav>
                        <div className="burger">
                            <span><BurgerScript/></span>
                        </div>
                    </div>
                    
                </div>
                <div className="line_down"></div>
            </header>

            <div className="centralframe">
                <div className="centralframe__centraltext fade-in" id="home">
                    <div className="ct__name">Mikhail Mudritsyn</div>
                    <div className="ct_name2">Front and back developer</div>
                    <div className="ct_button">
                        <a href="/about"><button className="button">Get started </button></a>
                    </div>
                </div>
                <script src="script.js"></script>
            </div>
        </div>
    );
};

export default Home;
