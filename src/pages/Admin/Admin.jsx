import React from 'react';
import './Admin.scss'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
// import ProductTop from '../../Components/ProductTop';

const Admin = () => {
    return (
        <div>
            <ProductTop/>
            <div className="single">
            <div className="container">
              <div className="single_row">
              <div className="single_alt">
                    <Link to={'/'}>Home</Link>
                </div>
                <div className="single_alt">
                    <p>Contact Us</p> 
                </div>
              </div>
            </div>
    
          </div>
          <div className="admin_all container">
             <div className="admin_all_row">
            <h1>Admin panel</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>

            <div className="btn_alt">
                <button>Log out</button>
            </div>
             </div>
          </div>
          <Footer />
        </div>
    );
}

export default Admin;
