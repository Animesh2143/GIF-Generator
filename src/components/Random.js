import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif,loading,fetchData}=useGif();

  return (
    <div className='w-1/2 max-h-fit min-h-[450px] bg-green-500  rounded-lg border border-black flex flex-col justify-between items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline mt-2 uppercase font-bold'>A Random Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width='450'></img>)
        }
        
        <button className='bg-green-300 w-10/12 text-lg py-2 mb-5 rounded-lg' 
        onClick={()=> fetchData()}>Generate</button>
    </div>
  )
}

export default Random