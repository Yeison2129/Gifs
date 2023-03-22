
import React, { useState } from 'react'
import { SearchGifs } from './SearchGifs';

export const Category = () => {

    const [category, setCategory] = useState("");
    const [value,setValue]=useState("");
    const [error, setError]=useState(false);

    const searchGiff = e =>{
        e.preventDefault();
        if (value=="") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");

  }


  return (
    <>
   <form onSubmit={searchGiff}>
    <input type="text" placeholder='Search....' 
        onChange={e=>setValue(e.target.value)}
        value={value}
    />
   </form>
   {error ?  <p className='error'>El campo de busqueda no puede estar vacio</p>:""}

   <SearchGifs cat={category} />
    
   
  
    </>
  )
}

