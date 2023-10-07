import React from 'react';
import Image from 'next/image';
const ProductImage = ({product,fill}) => {
  return (
    <>
      {
       fill ? (
       <Image 
       src={product.image}  
       alt={product.title} 
       fill
       className='object-contain duration-700  ease-in-out'/>):
        (<Image 
            src={product.image}
            alt={product.title}
            width={400}
            height={1000}
            className='object-contain duration-700  ease-in-out'/>
        )
       }
    </>
  );
}

export default ProductImage;
