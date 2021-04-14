import React from 'react'


const Card = ({title, img, authors, link, dataid, desc}) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="img-fluid img" alt={title}/>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Authors: {authors}</p>
        <p className="card-text">Description: {desc}</p>
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Link</a>
      </div>
    </div>
  )
}

export default Card
