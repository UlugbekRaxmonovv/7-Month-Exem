import React,{useState,useEffect} from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data,setData] =useState('');
  console.log(data);
  

  const handelSubmit = (e) => {
    e.preventDefault();
   let usr = {
     username:username,
     password: password
   }
  //  axios
  //  .post('https://fakestoreapi.com/auth/login',usr)
  //  .then((res) => {
  //     // console.log(res.data);
  //     setData(res.data);
  //   })
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
                    <p>Contact Us</p> 
                </div>
              </div>
            </div>
    
          </div>
          <div className="login container">
           <form action="" onSubmit={handelSubmit}>
           <div className="login_all">
                <label htmlFor="">Username</label> <br />
              <div className="login_row">
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"  placeholder='Username'/>
              </div>
                <label htmlFor="">Password</label> <br />
              <div className="login_row">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"  placeholder='Password'/>
              </div>

              <div className="login_row1">
                <button>LOGIN</button>
              </div>
              
            </div>
           </form>
          </div>
          <Footer />
        </div>
    );
}

export default Login;
