import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const ProductImage = ({product}) => {

  const [imgSrc, setImgSrc] = useState(product.image);

  const handleError =()=>{
    setImgSrc('https://cdn.dribbble.com/users/201049/screenshots/2990855/media/01bbe4c7d3026c03d313aa83bee946ed.gif')
  }
  
 
  return (
    <>
       <Image 
       src={imgSrc}  
       alt={product.title} 
       onError={handleError}
       priority={true}
       fill
       sizes="(max-width: 768px) 100vw"
       className='object-contain duration-700  ease-in-out'/>
    </>
  );
}

export default ProductImage;
