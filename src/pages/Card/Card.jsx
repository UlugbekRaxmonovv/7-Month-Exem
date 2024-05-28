import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { VscChromeClose } from "react-icons/vsc";
import './Card.scss'
import { useSelector,useDispatch } from 'react-redux';

import {incremented,decrementCart,removeFromCart,deleteAllCart} from '../../Components/context/Card/index'

const Card = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.value);


  let javob1 =carts?.reduce((a,b) => a + (b.price  * b.quantity),0)
  let javob = Math.floor(javob1)
    let links = carts?.map((inx) =>(
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
              <span>2</span>
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

<div className="tabli container">
  <div className="tabli_all">
  <div className="tabli_alt">
  <div className="tabli_row">
      <input type="text"  placeholder='Voucher code'/>
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
     <button>Check out</button>
    </div>  
   </div>
  </div>
    </div>
</div>
</div>
        
          <Footer/>
        </div>
    );
}

export default Card;
