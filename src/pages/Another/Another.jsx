import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import PruductTop from '../../Components/PruductTop/index'

const Another = () => {
    return (
        <div>
             <PruductTop/> 
               <div className="container">
       <div className="single_week_all">
        <div className="single_week_link">
        <div className="single_week_row">
        <p><Link to={'/product/:id'}>Product Infomation</Link></p>
        </div>
        <div className="single_week_row">
        <p><Link to={'/reviews'}>Reviews</Link><span>0</span></p>
        </div>
        <div className="single_week_row">
        <Link to={'/another'}> <p>Another tab</p></Link>
        </div>
        </div>
   <div className="single_week_row_all">
     <div className="all"></div>
   </div>
   <div className="p">
   <p>The The Essence Mascara Lash 
    Princess is a popular mascara known for its volumizing and 
     lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formulaThe Essence Mascara Lash Princess is a popular mascara
     known for its volumizing and lengthening effects. Achieve dramatic lashes</p>
   </div>
  
   <div className="p">
   <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
   </div>
   <div className="p">
   <p>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula
    
   </p>
   </div>
  
       </div>
      </div>
      <Footer/>
        </div>
    );
}

export default Another;
