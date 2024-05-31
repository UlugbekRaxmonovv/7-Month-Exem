import React,{useState,useEffect} from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';
import PruductTop from '../../Components/PruductTop'
import Footer from '../../Components/Footer/Footer';
import {usePostSignInMutation} from  '../../Components/context/productApi'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  let [signUp, {data, isLoading, isSuccess, isError}] = usePostSignInMutation()
  const Navigate = useNavigate()
  if(isSuccess){
    localStorage.setItem("token", data.token)
    console.log(data);
    Navigate("/admin")
    toast.success('Marhamat')
  }
  if(isError){
    toast.error('Xato kiritingiz')
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    signUp({
      username, 
      password
    }) 
   }
    return (
        <div>
  <PruductTop/>
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
                <button>
                  {
                    isLoading ? "Loading..." 
                      : 
                    "Login"
              
                  }
                </button>
              </div>
              
            </div>
           </form>
          </div>
          <Footer />
        </div>
    );
}

export default Login;
