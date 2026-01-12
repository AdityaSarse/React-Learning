import React from 'react'

const RightCardContent = ({ id = 1, tag = "Satisfied", desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat dolores temporibus quaerat necessitatibus aperiam provident iusto libero omnis eos voluptatem velit." }) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full px-[30px] py-[20px] flex flex-col justify-between '>
            <h1 className='text-4xl font-bold rounded-full bg-white w-[50px] h-[50px] flex items-center justify-center'>{id}</h1>
            <div className='flex flex-col gap-[10px] mb-[10px]'>
                <p className='text-lg font-medium opacity-70 leading-[1.7] mb-[20px]' style={{ color: 'white' }}>{desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat dolores temporibus quaerat necessitatibus aperiam provident iusto libero omnis eos voluptatem velit."}</p>
                <div className='flex gap-[10px] flex justify-between'>
                    <button className='bg-blue-500 px-[20px] py-[10px] rounded-full font-medium' style={{ color: 'white' }}>{tag}</button>
                    <button className='bg-blue-500 px-[20px] py-[10px] rounded-full' style={{ color: 'white' }}><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent