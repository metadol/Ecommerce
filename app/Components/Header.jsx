import React, { useContext } from 'react';
import { ProductContext } from '../Context/context';
import Link from 'next/link';

const Header = ({ page }) => {

  const { setModal, handleSort } = useContext(ProductContext);

  return (
    <div className=' select-none bg-bgcolor flex justify-between fixed top-0 left-0 right-0 z-50 py-10 px-10 md:py-10 md:px-28 w-screen'>
      <div className=' text-2xl md:text-4xl font-bold text-blue-700'>xmart</div>
      {page ?
        <>
          <div className='flex gap-2'>
            <select  defaultValue={'d'} onChange={(e) => handleSort(e.target.value)} className='px-3 py-3 appearance-none text-white outline-none cursor-pointer md:px-6 md:py-2 bg-blue-600 rounded-lg text-xs md:text-sm font-semibold hover:bg-bgcolor hover:text-blue-600 hover:border-2 hover:border-blue-500 '>
              <option value="d"  className='display-none'>Sort by Price</option> 
              <option value="h" className='p-2'>High to Low</option>
              <option value="l" className='p-2 mt-2'>Low to High</option>
            </select>
            <button className='md:px-6 md:py-2 bg-blue-600 text-xs px-3 py-3 rounded-lg md:text-sm font-semibold text-white  hover:bg-bgcolor hover:text-blue-600 hover:border-2 hover:border-blue-500 ' onClick={() => setModal(true)}>
              Add Product
            </button>
          </div>
        </>
        : <Link href={'/'} className='px-10 py-2 bg-blue-600 rounded-lg text-sm text-white font-semibold'> Back</Link>}


    </div>
  );
}

export default Header;
