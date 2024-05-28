import React,{useState} from 'react';
import './Contact.scss'
import { Link } from 'react-router-dom';
import rasm1 from '../../assets/img/contact.png'
import Footer from '../../Components/Footer/Footer';
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"

const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [textarea,setTextarea] = useState('')



    const handelSubmit = (e) => {
        e.preventDefault()
        let text = "Buyurtma %0A%0A"
        text +=`Ismi:${name}%0A`
        text +=`Email:${email}%0A`
        text +=`Text:${textarea}%0A`
        
        let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`
 
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        setName('')
        setSurname('')
        setEmail('')
        setTextarea('')
    }
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
                        <form action=""  onSubmit={handelSubmit}>
                        <div className="inpu_alt">
                           <label htmlFor="">Fullname</label><br />
                            <input
                             value={name}
                             onChange={(e) =>setName(e.target.value)}
                            type="text" placeholder='James Doe' />
                           </div>
                           <div className="inpu_alt">
                           <label htmlFor="">Email</label> <br />
                            <input
                             value={email}
                             onChange={(e) =>setEmail(e.target.value)}
                            type="text" placeholder='jamesdoe@gmail.com' />
                           </div>

                           <div className="inpu_alt">
                         <label htmlFor="">Message</label> <br />
                           <textarea 
                            value={textarea}
                            onChange={(e) =>setTextarea(e.target.value)}
                           name="" id="" cols="30" rows="10">
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
          
        <div className="alt4">
        <Footer />
        </div>
        </div>
    );
}

export default Contact;
