import React from 'react';
import './Banner.scss'
import rasm1 from '../../assets/img/bannir.png'
import rasm2 from '../../assets/img/bannir1.png'
import rasm3 from '../../assets/img/bannir2.png'
import rasm4 from '../../assets/img/bannir3.png'
import rasm5 from '../../assets/img/img.png'
import rasm6 from '../../assets/img/img1.png'
import rasm7 from '../../assets/img/img2.png'
const data = [
    {
        id:1,
        h1:'FREE SHIPPING',
        img:rasm2,
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
    {
        id:1,
        h1:'100% REFUND',
        img:rasm3,
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
    {
        id:1,
        h1:'SUPPORT 24/7',
        img:rasm4,
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
]


let links = data?.map((link) =>(
    <div className="bannir_lif" key={link.id}>
  <img src={link.img} alt="" />
   <h1>{link.h1}</h1>
   <p>{link.p}</p>
    </div>
))


const linkAll= [
    {
        id:1,
        h1:'Fashion Industry',
        img:rasm5,
        span:'01 Jan, 2015',
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id:1,
        h1:'Best Design Tools',
        img:rasm6,
        span:'01 Jan, 2015',
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        id:1,
        h1:'HR Community',
        img:rasm7,
        span:'01 Jan, 2015',
        p:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
]


let javob = linkAll?.map((el) =>(
    <div className="bannir_top_rigth" key={el.id}>
        <div className="img">
            <img src={el.img} alt="" />
        </div>
        <div className="img">
           <span>{el.span}</span>
           <h1>{el.h1}</h1>
           <p>{el.p}</p>
        </div>
    </div>
))
const Banner = () => {
    return (
        <div>
            <section className='banner'>
                <div className="container">
                     <div className="banner_all">
                        <div className="banner_row">
                            <h1>Adidas Men Running Sneakers</h1>
                            <p>Performance and design. Taken right to the edge.</p>
                            <h5>SHOP NOW</h5>
                            <div className="br"></div>
                        </div>
                        <div className="banner_row">
                            <img src={rasm1} alt="" />
                        </div>
                     </div>
                </div>
            </section>
<div className="container">
    <div className="bannir_top">
   {links}
    </div>
   <div className="tixt">
    <h1>LATEST NEWS</h1>
   </div>
<div className="banir_all">
   {javob}
</div>
</div>
        </div>
    );
}

export default Banner;
