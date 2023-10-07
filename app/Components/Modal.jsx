import React, { useContext, useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { ProductContext } from '../Context/context';


const Modal = () => {

   const { modal, setModal , setProducts} = useContext(ProductContext);

   const [Add, setAdd] = useState({
      title: '',
      price: '',
      category: '',
      image: '',
      description: ''
    });
    const [Alert, setAlert] = useState(false)

    const handleChange = (e) => {
      console.log('pare',Add.category)
      setAdd({
        ...Add,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {

      e.preventDefault();
      if (!Add.title || !Add.price || !Add.category || !Add.image || !Add.description) {
          setAlert(true)
          setTimeout(() => {
            setAlert(false);
          }, 1000);
      }
      else{
         setProducts((prevProducts) => [ ...prevProducts,{ id: Date.now(), ...Add }, ]);
      setModal(false);

      }
         
      
    }

   

   

   return (

      <>
         {modal && (

            <div id="defaultModal" class=" flex overflow-y-auto overflow-x-hidden bg-gcolo backdrop-blur fixed inset-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
               <div class="relative p-4 w-full max-w-2xl h-auto">
               {Alert &&<div class="z-60 mt-20 p-4 mb-4  text-sm text-red-800 rounded-xl bg-red-100 " role="alert">
                            <span class="font-medium">I like smartness </span>Dont be oversmart
               </div>}

                  <div class="relative p-4 bg-white md:rounded-3xl rounded-xl  shadow sm:p-8">

                     <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                        <h3 class="text-lg font-semibold text-gray-900 ">
                           Add Product
                        </h3>
                        <button onClick={() => setModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-blue-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                           <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                           <span class="sr-only">Close modal</span>
                        </button>
                     </div>

                     <form onSubmit={handleSubmit}>
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                           <div>
                              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                              <input 
                                 type="text" 
                                 name="title"
                                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-2 focus:border-blue-600 block w-full p-2.5 " 
                                 placeholder="Type product name"
                                 required=""
                                 value={Add.title}
                                 onChange={handleChange} />
                           </div>
                           <div>
                              <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Image</label>
                              <input 
                                 type="url" 
                                 name="image"
                                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-2 focus:border-blue-600 block w-full p-2.5 " 
                                 placeholder=" Image URL 🔗" 
                                 required=""
                                 value={Add.image}
                                 onChange={handleChange} />
                           </div>
                           <div>
                              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                              <input 
                                 type="number" 
                                 name="price" 
                                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-2 focus:border-blue-600 block w-full p-2.5 " 
                                 placeholder="$2999" 
                                 required=""
                                 value={Add.price} 
                                 onChange={handleChange}/>
                           </div>
                           <div>
                              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                              <select 
                                 id="category" 
                                 class=" appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 outline-none focus:border-2 focus:border-blue-600 block w-full p-2.5 "
                                 name='category'
                                 value={Add.category}category
                                 onChange={handleChange}>
                                 <option selected="" >Select category</option>
                                 <option value="Electronics">Electronics</option>
                                 <option value="Clothing">Clothing</option>
                                 <option value="jewellery">jewellery</option>
                                 <option value="Art">Art</option>
                              </select>
                           </div>
                           <div class="sm:col-span-2">
                              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                              <textarea 
                                 name='description' 
                                 rows="4" 
                                 class="resize-none xs:max-h-20 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 outline-none focus:border-2 focus:border-blue-600 " 
                                 placeholder="Write product description here"
                                 value={Add.description}
                                 onChange={handleChange}></textarea>
                           </div>
                        </div>
                        <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-primary-800 focus:ring-4 outline-none focus:border-2 focus:border-blue-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center ">
                           <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                           Add new product
                        </button>
                     </form>
                  </div>
               </div>
            </div>)}
      </>
   );
}

export default Modal;
