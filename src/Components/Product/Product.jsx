import React from 'react';
import './Product.scss'
import { FaStar } from "react-icons/fa6";
import Loading from '../Loading/Loading';
import { Link} from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const Product = ({data,loading}) => {
    let links = data?.map((link) =>(
        <div className="wrapper" key={link.id}>
            
        <div className="card">
        <div className="like">
        <div className="all1">
        <div className="like">
        <button><CiHeart className="svg" /></button>
        <button><AiOutlineShoppingCart className="svg" /></button>
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
                <p>${link.rating.count}<span>${link.price}</span> <span className='span'>{link.rating.rate} Off</span></p>
            </div>
        </div>
      </div>
    ))

    return (
        <div>
            <div className="container">
                <h1 className='teg_all'>BEST SELLER</h1>
                <div className="category">
                <div className="category_all">
                    <button>
                        All
                    </button>
                    </div>
                    <div className="category_all">
                    <button>
                        Bags
                    </button>
                    </div>
                    <div className="category_all">
                    <button>
                    Sneakers  
                    </button>
                    </div>
                    <div className="category_all">
                    <button>
                        Belt
                    </button>
                    </div>
                    <div className="category_all">
                    <button>
                       Sunglasses
                    </button>
                    </div>
                </div>

             {
                loading ?  <Loading  count={8}/>  : ""
             }
            <div className="hammasi">
            {links}
            </div>
            <h1 className='h1_link'>LOAD MORE</h1>
            </div>
              
        </div>
    );
}

export default Product;
