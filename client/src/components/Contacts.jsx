import React from 'react';
import '../css/style.css'
import '../css/style_proj.css'
import me from '../images/me.png';
import BurgerScript from './BurgerScript';
import mailpic from "../images/icons__contacts/icons8-почта-50 1.png"
import phone from "../images/icons__contacts/free-icon-whatsapp-2111774 1.png"
import VK from "../images/icons__contacts/free-icon-vk-2111828 1.png"
import telergram from "../images/icons__contacts/free-icon-telegram-739260 1.png"
import git from "../images/icons__contacts/icons8-github-96 1.png"

import useInput from '../hooks/useInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm';


const Contacts = () => {
   const name = useInput('', { isEmpty: true, })
   const email = useInput('', { isEmpty: true, isEmail: true , isPhone:true})
   const messege = useInput('', { isEmpty: true, })
 


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
               <li className="menu-item"><a href="about">About</a></li>
               <li className="menu-item active"><a href="contacts">Contacts</a></li>
            </ul>
         </nav>
                        <div className="burger">
                            <span><BurgerScript/></span>
                        </div>
                    </div>
                    
                </div>
                <div className="line_down"></div>
            </header>

            <div class="contactsframe">
   <div class="contacts__flex">

<div class="block__getintouch">
   <div class="Get_intouch__flex">
   <h1 class="contact_h1">Get in touch</h1>
   <div class="contacts__text">Conntact me every time day and night,<br/>
      there man ways u can do it  </div>
      <div class="contacts__socialmedia">
         
      <ul>
         <li><img src={mailpic} alt=""/> f.mannco@yandex.ru</li>
         <li><img src={phone} alt=""/>+79772599137</li>
         <li><a href="https://vk.com/mudritsyn" target="_blank" ><img src={VK} alt=""/></a><a href="https://vk.com/mudritsyn" target="_blank">vk.com/mudritsyn</a></li>
         <li><a href="https://t.me/ncmannco" target="_blank" ><img src={telergram} alt=""/></a> <a href="https://t.me/ncmannco" target="_blank">t.me/ncmannco</a></li>
         <li><a href="https://github.com/mannco1" target="_blank" ><img src={git} alt=""/></a><a href="https://github.com/mannco1" target="_blank">github.com/mannco1</a></li>
      </ul>
      </div>
   </div>

</div>

<ContactForm/>



  

</div>
</div>

        </div>
    );
};

export default Contacts;