import React from 'react'
import LeftTxt from './leftTxt'
import RightContent from './rightContent'
const PageContent = (props) => {
    return (
        <div className='py-[10px] flex justify-between items-center h-[80vh]'>
            <LeftTxt />
            <RightContent users={props.users} />
        </div>
    )
}

export default PageContent