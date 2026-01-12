import React from 'react'

const navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-20 bg-white px-[20px]'>
            <button className='text-[14px] font-medium bg-black px-[20px] py-[10px] rounded-[25px] text-white border border-black font-light tracking-wider ml-[20px]'>Target Audience</button>
            <button className='text-[14px] font-medium bg-gray-200 px-[20px] py-[10px] rounded-[25px] text-black border border-gray-600 uppercase font-light tracking-wider mr-[20px]'>Digital Banking platform</button>
        </div>

    )
}

export default navbar