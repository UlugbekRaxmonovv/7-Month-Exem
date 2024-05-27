import React from 'react';
import './Footer.scss'
import rasm1 from '../../assets/img/logo.png'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import rasm2 from '../../assets/img/rasm6.png'


let links =[
    {
        id:1,
        h1:'Infomation',
        links:["About Us","Infomation","Privacy Policy","Terms & Conditions"]
    },
    {
        id:1,
        h1:'Service',
        links:["About Us","Infomation","Privacy Policy","Terms & Conditions"]
    },
    {
        id:1,
        h1:'My Account',
        links:["About Us","Infomation","Privacy Policy","Terms & Conditions"]
    },
    {
        id:1,
        h1:'Our Offers',
        links:["About Us","Infomation","Privacy Policy","Terms & Conditions"]
    },
]


let javob = links?.map((link) =>(
    <div className="footir_well" key={link.id}>
                        <ul>
                            <h1>{link.h1}</h1>
                            <li>
                                <a href="">{link.links}</a>
                            </li>
                        </ul>
                    </div>
))
const Footer = () => {
    return (
        <div>
           <footer>
            <div className="container">
                <div className="footir_all">
                <div className="footir_row">
                      <img src={rasm1} alt="" />
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                      
                    </div>
                    <div className="footir_row">
                    <h1>Follow Us</h1>
                      <h5>Since the 1500s, when an unknown printer took a galley of type and scrambled.</h5>
                   <div className="icons">
                   <RiFacebookFill />
                   <FaTwitter />
                    </div>           
                    </div>
                    <div className="footir_row">
                    <h1>Contact Us</h1>
                      <h4>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</h4>
                      
                    </div>
                </div>
                <div className="footir_alt">
           {javob}
                </div>
                <div className="footir_bottom">
                <div className="footir_bottom_lift">
                         <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                    </div>
                    <div className="footir_bottom_lift">
                    <img src={rasm2} alt="" />
                    </div>
                </div>
            </div>
           </footer>
        </div>
    );
}

export default Footer;



