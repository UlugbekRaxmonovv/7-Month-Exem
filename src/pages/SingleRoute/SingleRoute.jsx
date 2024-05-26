import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleRouter.scss'
import { FaStar } from "react-icons/fa6";
import rasm1 from '../../assets/img/rasm5.png'
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import {useGetDetialProductQuery} from '../../Components/context/productApi'

const SingleRoute = () => {
    let {id} = useParams()
    let {data,isError,isLoading,error} = useGetDetialProductQuery(id)
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
          <div className="single_row_link container">
          <div className="single_week">
            <div className="img">
            <img src={data?.image} alt="" />
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

            
           </div>
        </div>
        <div className="single_week">
           <h2>BEST SELLER</h2>
    <img src={rasm1} alt="" />
        </div>
    </div>

        </div>
    );
}

export default SingleRoute;
