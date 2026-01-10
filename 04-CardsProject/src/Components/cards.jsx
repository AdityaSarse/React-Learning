import React from 'react'

const cards = ({ data }) => {
    return (
        <div className="cards">
            <div className="top">
                <tag>{data.status}</tag>
                <p>{data.rate}</p>
            </div>
            <div className="middel">
                <img src={data.image} alt={data.name} />
                <h2>{data.name}</h2>
                <h5>{data.role}</h5>
                <tag>{data.company}</tag>
                <div className="skills">
                    {data.skills.map((skill, index) => (
                        <tag key={index} id={index === data.skills.length - 1 ? "t4" : ""}>{skill}</tag>
                    ))}
                </div>
                <p>{data.description}</p>
            </div>
            <div className="bottom">
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default cards