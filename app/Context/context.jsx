'use client'
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  //sort the producst 
  const handleSort = (option) => {
    let sorted = [];
    if (option === 'l') {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (option === 'h') {
      sorted = [...products].sort((a, b) => b.price - a.price);
    }
    else {
      sorted = [...products]
    }
    setProducts(sorted);
  };

  //delete the product
  const handleDelete = (id) => {
    setProducts(products.filter(x => x.id != id))
  }

  return (
    <ProductContext.Provider value={{ products, setProducts, modal, setModal, handleSort, handleDelete, loading }}>
      {children}
    </ProductContext.Provider>
  );

};
