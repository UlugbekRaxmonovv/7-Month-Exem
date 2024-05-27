import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Featured.scss';
import 'swiper/css/navigation';
import rasm2 from '../../assets/img/rasm8.png';
import rasm3 from '../../assets/img/rasm9.png';
import rasm1 from '../../assets/img/rasm7.png';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";

const data = [
    {
        id: 1,
        h1: 'Blue Swade Nike Sneakers',
        p: '$499',
        span: '$599',
        img: rasm1,
    },
    {
        id: 2,
        h1: 'Essence Mascara Lash Princess',
        p: '$499',
        span: '$599',
        img: rasm2,
    },
    {
        id: 3,
        h1: 'Eyeshadow Palette with Mirror',
        p: '$499',
        span: '$599',
        img: rasm3,
    },
    {
        id: 4,
        h1: 'Red Lipstick Powder Canister',
        p: '$499',
        span: '$599',
        img: rasm1,
    },
];

const Featured = () => {
    const [name, setName] = useState('');

    let links = data.filter((link) => {
        return link.h1.toLowerCase().includes(name.toLowerCase());
    }).map((link) => (
        <div key={link.id} className="featur_all">
            <div className="img">
                <img src={link.img} alt={link.h1} />
            </div>
            <div className="img">
                <h1>{link.h1}</h1>
                <div className="start">
                    <div className="star_all"><FaStar /></div>
                    <div className="star_all"><FaStar /></div>
                    <div className="star_all"><FaStar /></div>
                    <div className="star_all"><FaStar /></div>
                    <div className="star_all"><FaStar style={{ color: 'gray' }} /></div>
                </div>
                <p>{link.p} <span>{link.span}</span></p>
            </div>
        </div>
    ));

    return (
        <div>
            <section>
                <div className="container">
                    <div className="alt">
                        <h1>FEATURED PRODUCTS</h1>
                    </div>
                    <Swiper
                        loop={true}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ display: 'flex' }}>
                            <div className="all">
                                {links}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex' }}>
                            <div className="all">
                                {links}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex' }}>
                            <div className="all">
                                {links}
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="bannir_input">
                        <div className="alt">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Search query..."
                            />
                        </div>
                        <div className="alt">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Featured;
