import React from 'react';
import './NotFound.scss'
import Footer from '../../Components/Footer/Footer'

const NotFound = () => {
    return (
        <div>
            <div className="node">
                <div className="node_all">
                <img src="https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
