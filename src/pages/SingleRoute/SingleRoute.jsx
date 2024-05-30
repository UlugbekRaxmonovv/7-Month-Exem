import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';
import { CiHeart } from "react-icons/ci";
import './SingleRouter.scss'
import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import rasm1 from '../../assets/img/rasm5.png'
import { Link } from 'react-router-dom';
import rasm2 from  '../../assets/img/rasm4.png'
import rasm3 from  '../../assets/img/rasm2.png'
import rasm4 from  '../../assets/img/rasm3.png'
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import rasm5 from '../../assets/img/rasm10.png'
import Footer from '../../Components/Footer/Footer';
import LoadingAll from '../../Components/LoadingALL/LoadingAll';
import {useGetDetialProductQuery} from '../../Components/context/productApi'
import Loading from '../../Components/Loading/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useGetProductsQuery} from '../../Components/context/productApi';
import PruductTop from '../../Components/PruductTop/index'
const SingleRoute = () => {
    const {data:data1 } = useGetProductsQuery();
    const[count1,setCount1] = useState(true);
    const[count,setCount] = useState(0)
    const onclick = () =>{
      setCount(count + 1)
    }
    const go = () =>{
      setCount(count - 1)
    }



    let links = data1?.slice(0,4)?.map((link) =>(
        <div className="wrapper" key={link.id}>
            
        <div className="card">
        <div className="like">
        <div className="all1">
        </div>
      </div>
           <div className="all">HOT</div>
       
          <img src={link.image} alt="" />
        </div>
        <div className="h1" title={link.title}>
               <Link to={`/product/${link.id}`}>
               <h1>{link.title}</h1>
               </Link>
            <div className="start">
            <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar />
                </div>
                <div className="star_all">
                <FaStar  style={{color:'gray'}}/>
                </div>
            </div>
            <div className="p1">
                <p>${link.rating.count}<span>${link.price}</span> <span className='span'>{link.rating.rate} Off</span></p>
            </div>
        </div>
      </div>
    ))


    let {id} = useParams()
    let {data,isError,isLoading,error} = useGetDetialProductQuery(id)
    return (
        <div >
            <PruductTop/>
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
          {
            isLoading ? <LoadingAll/> : ""
          }
          <div className="single_row_link container">
          <div className="single_week">
            <div className="img">
              <img src={data?.image } alt="" />
              
            </div>
             <div className="bot">
             <div className="bot_all">
                    <img src={rasm2} alt="" />
                </div>
                <div className="bot_all">
                    <img src={rasm3} alt="" />
                </div>
                <div className="bot_all">
                    <img src={rasm4} alt="" />
                </div>
                <div className="bot_all">
                    <img src={rasm2} alt="" />
                </div>
             </div>

        </div>
        <div className="single_week">
           <div className="tig">
            <h1>Nike Airmax 270 React</h1>
            <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
                <div className="ikon_all">
                   <p>0 reviews</p>                
                </div>
                <div className="ikon_all">
                    <span>Submit a review</span>                   
                </div>
            </div>
            <div className="all"></div>
            <div className="p1">
                <p>${data?.rating.count}<span>${data?.price}</span> <span className='span'>{data?.rating.rate} Off</span></p>
            </div>
            <div className="strok">
            <div className="strok_all">
                    <p>Availability:</p>
                </div>
                <div className="strok_all">
                    <p>In stock</p>
                </div>
            </div>
            <div className="strok">
            <div className="strok_all">
                    <p>Category::</p>
                </div>
                <div className="strok_all">
                    <p style={{marginLeft:'31%'}}> Accessories</p>
                </div>
            </div>
            <div className="strok">
            <div className="strok_all">
                    <p>Free shipping</p>
                </div>
            </div>
            <div className="all"></div>

            <div className="color">
                <p>Select Color:</p>
                <div className="color_all">
            <div className="al5">
            <div className="al"></div>
            </div>
                </div>
                <div className="color_all">
                  <div className="al1"></div>
                </div>
                <div className="color_all">
                  <div className="al2"></div>
                </div>
                <div className="color_all">
                  <div className="al3"></div>
                </div>
            </div>

            <div className="siz">
            <div className="siz_all">
                    <p>Size</p>
                </div>
                <div className="siz_all">
                    <select name="" id="">
                    <option value="">XS</option>
                    <option value="">XML</option>
                    <option value="">XSS</option>
                    </select>
                </div>
            </div>
            <div className="all"></div>

  <div className="hammasi_alt">
  <div className="column">
        <div className="span-son">
        <button onClick={onclick}><VscChevronUp /></button>
  </div>
  <div className="span-son">
  <span>{count}</span>
    
  </div>
  <div className="span-son">
     <button disabled={count <= 0} onClick={go}><VscChevronDown /></button>
        </div>
     </div>
    <div className="olll">
    <div className="cart">
     <div className="cart_all">
      <LuShoppingCart />
      </div>
      <div className="cart_all">
     <p>Add To Cart</p>
      </div>
     </div>
     <div className="lik">
     <GoHeart />
     </div>
    </div>
  </div>
  <div className="all"></div>
<div className="facebook">
<div className="facebook_all">
<div className="facebook_row">
    <FaFacebookF />
    </div>
    <div className="facebook_row">
   <p>Share on Facebook</p>
    </div>
</div>


<div className="facebook_all">
<div className="facebook_row">
<FaTwitter />
    </div>
    <div className="facebook_row">
   <p>Share on Twitter</p>
    </div>
</div>
</div>

            
           </div>
        </div>
        <div className="single_week">
          <h2>BEST SELLER</h2>
          <Swiper
        cssMode={true}
        navigation={false}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="alr">
    <img src={rasm5} alt="" />
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="alr">
    <img src={rasm1} alt="" />
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="alr">
    <img src={rasm1} alt="" />
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="alr">
    <img src={rasm5} alt="" />
    <div className="ikon">
            <div className="ikon_all">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />                     
                    <FaStar style={{color:'gray'}} />                     
                </div>
            </div>
            <div className="pri">
                <p>$499 <span>$599</span></p>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
          </div>
        </div>
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
        <Link to={'/another'}>  <p>Another tab</p></Link>
          
        </div>
        </div>
   <div className="single_week_row_all">
     <div className="all"></div>
   </div>
   <div className="p">
   <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
   </div>
  
   <div className="p">
   <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
   </div>
   <div className="p">
   <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
   </div>
  
       </div>
      </div>
   <div className="container">
    <div className="alt1">
    <h1>RELATED PRODUCTS</h1>
    </div>
    {
      isLoading ? <Loading/>
      : ""
    }
    <div className="hammasi">
            {links}
            </div>
   </div>
   <Footer/>
    </div>

    );
}

export default SingleRoute;
