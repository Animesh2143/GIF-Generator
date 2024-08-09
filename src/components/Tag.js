import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';


const Tag = () => {

    const [tag,setTag]=useState('');
    const {gif,loading,fetchData}=useGif(tag);


  return (
    <div className='w-1/2 max-h-fit min-h-[450px] bg-blue-500  rounded-lg border border-black flex flex-col justify-between items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline mt-2 uppercase font-bold'>Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width='450'></img>)
        }

        <div className='w-full flex flex-col items-center '>
            <input onChange={(event)=>setTag(event.target.value)}  value={tag} 
            className='w-10/12 py-2 text-center mb-5 rounded-lg'/>

            <button className='bg-green-300 w-10/12 text-lg py-2 mb-5 rounded-lg' 
            onClick={()=> fetchData(tag)}>Generate</button>
        </div>
    </div>
  )
}

export default Tag