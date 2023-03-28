import React, { useState } from 'react'
import Weathermap from './Weathermap';

const Form = ({newLocation}) =>{
    const [city, setCity] = useState("");

    const onSumbit = (e)=>{
        e.preventDefault();

       
        if(city==="" || !city) return;
        newLocation(city)

    }
    
    return(
        <div>
            <form onSubmit={onSumbit}>
                <div>
                    <input type="text" className='p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file' placeholder='ciudad' onChange={(e)=>setCity(e.target.value)}></input>
                    <button  className='m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='sumbit'>buscar</button>
                </div>
            </form>
        </div>
         
    )
    
}




export default Form;