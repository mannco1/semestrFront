import React from 'react';
import '../css/style_2portfolio.css' 
import me from '../images/me.png';
import BurgerScript from './BurgerScript';
import pic_proj from "../images/coming_soon.jpg";


const Portfolio = () => {
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
               <li className="menu-item"><a href="/">Home</a></li>
               <li className="menu-item active"><a href="about">About</a></li>
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








<div className="portfolio__frame">
   <h1 className="page__name">Portfoli</h1>

   <div className="class_9cubsflex">

      <div className="proj_cube">

         <div className="gif__1">
            <a href="/soon"><img src={pic_proj} alt=""/></a>
         </div>

         <div className="text_cube">
            <a href="/soon"><h1>Project #1 : Google 2.0 in progress</h1></a>
            <h2>small annotation</h2>
         </div>
      </div>

      <div className="proj_cube">

         <div className="gif__1">
            <a href="/soon"><img src={pic_proj} alt=""/></a>
         </div>

         <div className="text_cube">
            <a href="/soon"><h1>Project #2 : SOme in progress</h1></a>
            <h2>small annotation</h2>
         </div>
      </div>
      <div className="proj_cube">

         <div className="gif__1">
            <a href="/soon"><img src={pic_proj} alt=""/></a>
         </div>

         <div className="text_cube">
            <a href="/soon"><h1>Project #3 : Maybe in progress</h1></a>
            <h2>small annotation</h2>
         </div>
      </div>
      <div className="proj_cube">

         <div className="gif__1">
            <a href="/soon"><img src={pic_proj} alt=""/></a>
         </div>

         <div className="text_cube">
            <a href="/soon"><h1>Project #4 : Probably in progress</h1></a>
            <h2>small annotation</h2>
         </div>
      </div>
      <div className="proj_cube">

         <div className="gif__1">
            <a href="/soon"><img src={pic_proj} alt=""/></a>
         </div>

         <div className="text_cube">
            <a href="/soon"><h1>Project #5 : Never Sterted</h1></a>
            <h2>small annotation</h2>
         </div>
      </div>
      <div className="proj_cube">

         <div className="gif__1">
            <a href="/soon"><img src={pic_proj} alt=""/></a>
         </div>

         <div className="text_cube">
            <a href="/soon"><h1>Project #6 : Never end </h1></a>
            <h2>small annotation</h2>
         </div>
      </div>
      

      

      </div>

     
   </div>
</div>

    );
};

export default Portfolio;