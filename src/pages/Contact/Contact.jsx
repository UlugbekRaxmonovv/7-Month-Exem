import React from 'react';
import './Contact.scss'
import { Link } from 'react-router-dom';
import rasm1 from '../../assets/img/contact.png'
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
    return (
        <div>
           <div className="single">
            <div className="container">
              <div className="single_row">
              <div className="single_alt">
              <Link to={'/'}>Home</Link> /
                </div>
                <div className="single_alt">
                <Link to={'/'}>Contact Us</Link>
                </div>
              </div>
            </div>
   
          </div>
          <div className="container">
            <div className="contact">
                <div className="contact_all">
                      <img src={rasm1} alt="" />
                     <div className="text">
                     <h1>Get in touch</h1>
                     <p>contact@e-comm.ng</p>
                     <h6>+234 4556 6665 34</h6>
                      <h5>20 Prince Hakerem Lekki
Phase 1, Lagos.</h5>
                     </div>
                </div>
                <div className="contact_all">
                    <div className="input">
                        <form action="">
                        <div className="inpu_alt">
                           <label htmlFor="">Fullname</label><br />
                            <input type="text" placeholder='James Doe' />
                           </div>
                           <div className="inpu_alt">
                           <label htmlFor="">Email</label> <br />
                            <input type="text" placeholder='jamesdoe@gmail.com' />
                           </div>

                           <div className="inpu_alt">
                         <label htmlFor="">Message</label> <br />
                           <textarea name="" id="" cols="30" rows="10">
                           </textarea>
                           
                           </div>
                           <div className="inpu_alt">
                            <button>submit</button>
                            </div>
                           

                        </form>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
        </div>
    );
}

export default Contact;
