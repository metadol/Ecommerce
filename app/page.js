'use client'
import React from 'react';
import Header from './Components/Header';
import { useContext } from 'react';
import { ProductContext } from './Context/context';
import ProductCard from './Components/Product';
import Modal from './Components/Modal';
import Loading from './loading';

const page = () => {

  const { products, loading } = useContext(ProductContext);

  return (
  <>
    {loading ? <Loading /> :
      <div className='flex flex-col gap-24  p-10 md:p-24  mt-24 bg-bgcolor '>
        <Header page={true} />
        <Modal />
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
         ))}
        </div>
      </div>}

  </>
  );
}

export default page;
