// components/Card.js
'use client'
import React, { useState,useEffect } from 'react';
import { IconStarFilled } from '@tabler/icons-react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { px } from 'framer-motion';

const Card = ({ product }) => {
  const router=useRouter();
  

  if (!product) {
    return null; // or return a placeholder component
  }
  
  // Truncate the product name to 20 characters and add "..." if it exceeds the limit
  const truncatedName = product.name.length > 20 ? product.name.slice(0, 25) + '...' : product.name;

  return (
    
<>
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
    <img
      alt="A detailed image of the product showing its features and design"
      className="w-[300px] h-[300px] object-cover object-center p-3 rounded-lg"
      src={product.image}
      
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{truncatedName}</div>
      <p className="text-gray-700 text-base">
        This is a brief description of the product highlighting its key features
        and benefits.
      </p>
      
    </div>
     <span className="text-yellow-500 flex ml-6">
              <IconStarFilled/>
              <IconStarFilled/>
              <IconStarFilled/>
              <IconStarFilled/>
              
            </span>
    
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-green-500 text-white rounded-full px-4 py-2 text-lg font-semibold">
        RS {product.price}
        
      </span>
      <span className=" line-through ml-2 text-lg text-red-500 font-semibold p-5">RS {product.price+product.price*0.4}</span>
      <span></span>
      <div className="mt-4">
        <button onClick={()=>{

          router.push(`/view-product/${product._id}?name=${encodeURIComponent(product.name)}`);

        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          <i className="fas fa-cart-plus"></i>
          
            View Product
          
        </button>
      </div>
    </div>
  </div>



</>


  );
};

export default Card;