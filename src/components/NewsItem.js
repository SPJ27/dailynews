import React from 'react'

export default function NewsItem({img, title, description, url}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${title.slice(0, 45)}...`}</h5>
          <p className="card-text">{`${description}`}</p>
          <a href={url} className="btn btn-success btn-sm" target="_blank" rel="noreferrer">
            Continue Reading
          </a>
        </div>
      </div>
  )
}
