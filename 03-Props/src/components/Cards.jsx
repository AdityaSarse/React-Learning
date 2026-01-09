import React from 'react'

const Cards = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user},{props.age},{props.gender}</h1>
            <button>know more</button>
        </div>
    )
}

export default Cards