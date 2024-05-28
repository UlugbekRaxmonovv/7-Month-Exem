import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './Card.scss'
import { useSelector } from 'react-redux';


const Card = () => {
  const carts = useSelector(state => state.cart.value);
  console.log(carts);

    let links = carts?.map((inx) =>(
      <>
      <tr key={inx.id}>
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
          <td><h1>{inx.price}</h1></td>
          <td>
            <div className="span">
            <div className="span_all">
                <button>-</button>
              </div>
              <div className="span_all">
              <span>2</span>
              </div>
              <div className="span_all">
                <button>+</button>
              </div>
            </div>
          </td>
          <td> <h1>salom</h1></td>
         
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
    <th>PRODUCT</th>
    <th>PRICE</th>
    <th>QTY</th>
    <th>UNIT PRICE</th>
  </tr>


{links}



</table>
</div>
        
          <Footer/>
        </div>
    );
}

export default Card;
