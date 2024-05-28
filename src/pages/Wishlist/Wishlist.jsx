import React from 'react';
import './Wishlist.scss'
import { useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {toggleEvent} from '../../Components/context/Heart'
import { useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
    let wishlist = useSelector(s => s.heart.value)
    const dispatch = useDispatch();

    let links = wishlist?.map((link) =>(
        <div className="wrapper" key={link.id}>
            
        <div className="card">
        <div className="like">
        <div className="all1">
        <div className="like">
        <button onClick={() =>dispatch(toggleEvent(link))}>
        {
            wishlist?.some(item => item.id === link.id) ? <FaHeart  style={{color:'red',fontSize:'25px'}} />
            : <CiHeart className="svg" />
          }
        </button>
        <button onClick={() => dispatch(addToCart(link)) }><AiOutlineShoppingCart className="svg" /></button>
      </div>
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
                <p>$5463<span>$266</span> <span className='span'>366 Off</span></p>
            </div>
        </div>
      </div>
    ))
    return (
        <div>
           <div className="hammasi">
           {
            wishlist.length ? 
            links
            :
            <div className='not_found'>
               <h1>Not Found</h1>
            <img src="https://i.ytimg.com/vi/49Zj3rqFIxU/maxresdefault.jpg" alt="" />
            </div>
           }
         
            </div>
        </div>
    );
}

export default Wishlist;
