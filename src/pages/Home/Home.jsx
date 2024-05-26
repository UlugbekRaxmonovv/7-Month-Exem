import React from 'react';
import Main from '../../Components/Main/Main'
import {useGetProductsQuery} from '../../Components/context/productApi';
import Product from '../../Components/Product/Product'

const Home = () => {
    const { data,isLoading } = useGetProductsQuery();
    console.log(data);
    return (
        <div>
          <Main/>
            <Product data={data}  loading={isLoading}/>

        </div>
    );
}

export default Home;
