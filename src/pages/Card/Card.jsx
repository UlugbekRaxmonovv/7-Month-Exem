import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { VscBrowser } from "react-icons/vsc";
import rasm1 from '../../assets/img/Paypal.png'
import rasm2 from '../../assets/img/Group.png'
import { VscChromeClose } from "react-icons/vsc";
import { FaArrowLeftLong } from "react-icons/fa6";
import './Card.scss'
import { useSelector,useDispatch } from 'react-redux';
import {incremented,decrementCart,removeFromCart,deleteAllCart} from '../../Components/context/Card/index'
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"



const Card = () => {
  const [count, setCount] = useState(false);
  // document.body.style.overflow =  count ? "hidden" : "auto"
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [textarea,setTextarea] = useState('')
  const [lastname,setLastname] = useState('')
  const [phone,setPhone] = useState('')
  const [adress,setAdress] = useState('')
  // document.body.style.overflow =  count ? "hidden" : "auto"



  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.value);

  let javob1 =carts?.reduce((a,b) => a + (b.price  * b.quantity),0)
  let javob = Math.floor(javob1)
    let links = carts?.filter((inx)=>{
      return inx.title.toLowerCase().includes(adress.toLowerCase())
    })?.map((inx) =>(
      <>
      <tr key={inx.id}>
        <td onClick={() =>dispatch(removeFromCart(inx))}><VscChromeClose style={{fontSize:'20px',marginLeft:'15%',color:'red'}} /></td>
      <td >
              <div className="tr">
              <div className="tr_th">
             <div className="alt">
             <img src={inx.image} alt="img" />
             </div>
                  </div>
                  <div className="tr_th">  
                  <h1>{inx.title}</h1>
                  </div>
              </div>
              </td>
          <td><h1>${inx.price * inx.quantity}</h1></td>
          <td>
            <div className="span">
            <div className="span_all">
                <button disabled={inx.quantity <= 1} onClick={() => dispatch(decrementCart(inx))}>-</button>
              </div>
              <div className="span_all">
              <span>{inx.quantity}</span>
              </div>
              <div className="span_all">
                <button onClick={() =>dispatch(incremented(inx))}>+</button>
              </div>
            </div>
          </td>
          <td> <h1>${inx.price}</h1></td>
         
          </tr>
      </> 
    ))


    const handelSubmit = (e) => {
      e.preventDefault()
      let text = "Buyurtma %0A%0A"
      text +=`Ismi:${name}%0A`
      text +=`Email:${email}%0A`
      text +=`Text:${textarea}%0A`
      text +=`LastName:${lastname}%0A`
      text +=`Phone:${phone}%0A`
      
      let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`
  
      let api = new XMLHttpRequest()
      api.open("GET", url, true)
      api.send()
  
      setName('')
      setEmail('')
      setLastname('')
      setTextarea('')
      setPhone('')
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
                    <Link to={'/'}>Hot Deal</Link> /
                </div>
                <div className="single_alt">
                    <p>Nike Airmax 270 React</p> 
                </div>
              </div>
            </div>
   
          </div>
<div className="container">
  
<div className="aj">
<table >
  <tr>
    <th>Delet</th>
    <th>PRODUCT</th>
    <th>PRICE</th>
    <th>QTY</th>
    <th>UNIT PRICE</th>
    {/* <th onClick={() => dispatch(deleteAllCart(inx))} style={{fontSize:'30px',color:'red',backgroundColor:'white'}}><AiTwotoneDelete /></th> */}
  </tr>
{links}

</table>
</div>

<div className="tabli container">
  <div className="tabli_all">
  <div className="tabli_alt">
  <div className="tabli_row">
      <input
      value={adress}
      onChange={(e) => setAdress(e.target.value)}
      type="text"  placeholder='Voucher code'/>
    </div>
    <div className="tabli_row">
    <button>Redeem</button>
    </div>
  </div>
  </div>
  <div className="tabli_all">
   <div className="price">
   <div className="price_all">
    <p>Subtotal</p>
    </div>
    <div className="price_all">
    <p>$998</p>
    </div>
    
   </div>

   <div className="price">
   <div className="price_all">
    <p>Shipping fee</p>
    </div>
    <div className="price_all">
    <p>$20</p>
    </div>
    
   </div>


   <div className="price">
   <div className="price_all">
    <p>Coupon</p>
    </div>
    <div className="price_all">
    <p>No</p>
    </div>
    
   </div>
  <div className="kol"></div>
  <div className="jami">
  <div className="price">
   <div className="price_all">
   <h5>TOTAL</h5>
    </div>
    <div className="price_all">
    <h5>${javob}</h5>
    </div>
    
   </div>

   <div className="price">
   <div className="price_all">
     <button onClick={() => setCount(!count)}>Check out</button>
    </div>  
   </div>

  

  </div>
    </div>
</div>
<div className="location">
<div className={`iframe ${count ? "show" : ""}`}>
                 <div className="paymi">
                <div className="xt">
                <div className="xt1">
               <Link to={'/'}> <FaArrowLeftLong /></Link>
                </div>
                <button className='btnx' onClick={() => setCount(!count)}>
                  <VscChromeClose />
                </button>
                </div>
                <h1>Make Payment</h1>
              <form action="" onSubmit={handelSubmit}>
                   <div className="paymi_alt_row">

                 <div className="paymi_all">
                  <label htmlFor="">First Name</label>
                  <div className="paymi_row">
                       <input type="text"  
                       required
                        value={name}
                        onChange={(e) =>setName(e.target.value)}
                       placeholder='First Name' />
                    </div>
                    <label htmlFor="">Email Address</label>
                    <div className="paymi_row">
                       <input
                       required
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                       type="text"  placeholder='Email Address' />
                    </div>
                    <div className="alk">
                     <h5>Select Method of Payment</h5>
                    <div className="paymi_roww">
                    <div className="ol">
                    <VscBrowser/>
                       <p>Credit Card Or Debit</p>
                    </div>
                       <input  type="checkbox"  className='checkbox' defaultChecked/>
                    </div>

                    <div className="paymi_roww1">
                    <div className="ol">
                    <img src={rasm1} alt="" />
                       <p>Credit Card Or Debit</p>
                    </div>
                       <input type="checkbox"  className='checkbox' />
                    </div>

                    <div className="paymi_roww1">
                    <div className="ol">
                 <img src={rasm2} alt="" />
                       <p>Credit Card Or Debit</p>
                    </div>
                       <input type="checkbox"  className='checkbox' />
                    </div>
                    </div>
                  </div>
                  <div className="paymi_all">
                    <label htmlFor="">Last Name</label>
                  <div className="paymi_row">
                       <input
                       value={lastname}
                       required
                       onChange={(e) =>setLastname(e.target.value)}
                       type="text"  placeholder='Last Name' />
                    </div>
                    <label htmlFor="">Address for Delivery</label>
                    <div className="paymi_rows">
                     <textarea
                     required
                     value={textarea}
                     onChange={(e) =>setTextarea(e.target.value)}
                     name="" id="" cols="30" rows="10">
                  Address for Delivery
                     </textarea>
                    </div>
                    <label htmlFor="">Mobile Phone</label>
                    <div className="paymi_row">
                       <input
                       required
                       value={phone}
                       onChange={(e) =>setPhone(e.target.value)}
                       type="text"  placeholder='Mobile Phone' />
                    </div>
                   
                  </div>

                  
                 </div>
                   <button>Go to Payment</button>
              
              </form>
                
                 </div>
              </div>
              </div>
</div>
        
          <Footer/>
        </div>
    );
}

export default Card;
