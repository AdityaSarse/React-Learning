import React from 'react'
import RightCard from './rightCard'

const RightContent = (props) => {
    return (
        <div id='right' className='w-9/12 h-full mr-[35px] px-[20px] py-[10px] ml-[20px] mt-[15px] flex flex-nowrap gap-[10px] justify-between overflow-x-auto '>

            {
                props.users.map(function (user) {
                    return <RightCard key={user.id} user={user} />
                })
            }

        </div >

    )
}

export default RightContent