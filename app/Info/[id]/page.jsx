'use client'
import { useContext } from 'react';
import { ProductContext } from '@/app/Context/context';
import Header from '@/app/Components/Header';
import ProductImage from '@/app/Components/ProductImage';
import Error from '@/app/error';
import Loading from '@/app/loading';

export default function ProductDetails({ params }) {

  const y = params.id
  const { products } = useContext(ProductContext);
  const product = products.find(x => String(x.id) === String(y));
  
  return (
    <>
      {
        product ?
          <div className='h-screen w-screen bg-bgcolor'>
            <Header page={false} />
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-10 pt-32 md:px-36 md:pb-40 md:pt-48'>
              <div className='h-90 flex flex-col  bg-white rounded-2xl  border shadow-xl  p-10'>
                <div className='relative  w-64 h-64   border-gray-600  rounded-t-2xl'>
                  <ProductImage product={product} fill />
                </div>
              </div>

              <div className='divide-y w-full'>
                <div className='flex flex-col md:space-y-4 pb-6'>
                  <h1 className='text-black font-black text-2xl md:text-3xl'>{product.title}</h1>
                  <div className=' flex flex-row justify-between items-center mt-3'>
                    <h1 className='text-blue-800 font-black  text-2xl md: text-3xl'>${product.price}</h1>
                    <button className='font-semibold border-2 border-green-400 text-green-500 bg-green-100 px-4 py-2 rounded-2xl'>{product.category}</button>
                  </div>
                </div>
                <div className=' pt-4 md:pt-8 pb-8'>
                  <p className='text-gray-500 font-semibold text-sm  md:text-base'>{product.description}</p>
                </div>
              </div>

            </div>
          </div>
          : (y > 20) ? (<Error />) : (<Loading />)
      }
    </>

  );
}