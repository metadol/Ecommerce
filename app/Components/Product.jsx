// components/ProductCard.js
import { useContext } from 'react';
import { ProductContext } from '../Context/context';
import {RiDeleteBin7Line} from 'react-icons/ri'
import Image from 'next/image';
import Link from 'next/link';
import ProductImage from './ProductImage';
export default function ProductCard({ product }) {
  const { handleDelete} = useContext(ProductContext);

  return (
    <Link 
    //  prefetch={false}
     href={`./Info/${product.id}`}
     className='select-none h-80 flex flex-col  bg-white  rounded-[40px] md:rounded-2xl  md:border shadow p-8 group hover:scale-105 hover:shadow-xl transition transform ease-out duration-500'
     >
        <div className='relative flex-1 bg-white border-gray-400  rounded-t-2xl'>
            <ProductImage product={product} fill/>
        </div>

        <div className='flex items-center justify-between bg-white p-4 rounded-b-2xl'>   
            <h2 className='w-46 truncate text-black font-black text-base'>{product.title}</h2>
              
        </div>
        <div className='flex items-center justify-between bg-white px-4 rounded-b-2xl'>
        <p className='text-blue-800 font-black text-base'>${product.price}</p>
        {/* <button onClick={() => deleteProduct(product.id)} className='flex  justify-center text-gray-400 p-2 border font-semibold rounded-2xl hover:text-white hover:border-red-700 hover:bg-red-500'> */}
          <RiDeleteBin7Line size={20} onClick={(e) => {e.preventDefault();handleDelete(product.id,e)} } className='text-gray-400 hover:text-red-600 '/>
        {/* </button> */}
        </div>

    </Link>
  );
}
