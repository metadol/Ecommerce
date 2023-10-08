import { useContext } from 'react';
import { ProductContext } from '../Context/context';
import { RiDeleteBin7Line } from 'react-icons/ri'
import Link from 'next/link';
import ProductImage from './ProductImage';


export default function ProductCard({ product }) {

const { handleDelete } = useContext(ProductContext);

  return (
    <Link
      href={`./Info/${product.id}`}
      className='select-none h-80 flex flex-col bg-white rounded-[40px] md:rounded-2xl  md:border shadow p-8 group hover:scale-105 hover:shadow-xl transition transform ease-out duration-500'
    >
      <div className='relative flex-1 bg-white border-gray-400  rounded-t-2xl'>
        <ProductImage product={product}  />
      </div>

      <div className='flex items-center justify-between bg-white p-4 rounded-b-2xl'>
        <h2 className='w-46 truncate text-black font-black text-base'>{product.title}</h2>
      </div>

      <div className='flex items-center justify-between bg-white px-4 rounded-b-2xl'>
        <p className='text-blue-800 font-black text-base'>${product.price}</p>
        <RiDeleteBin7Line size={20} onClick={(e) => { e.preventDefault(); handleDelete(product.id) }} className='text-gray-400 hover:text-red-600 ' />
      </div>

    </Link>
  );
}
