import React from 'react'
import RightCardContent from './rightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-[73vh] w-80 overflow-hidden rounded-4xl mt-[15px] relative shrink-0 '>
            <img className='h-full w-full object-cover' src={props.user.img} alt="Card background" />
            <RightCardContent id={props.user.id} tag={props.user.tag} desc={props.user.desc} />
        </div>
    )
}

export default RightCard    