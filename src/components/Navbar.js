import React from 'react'
import { useState } from 'react'

export default function Navbar(props) {
  let [name, setName] = useState('');
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">DailyNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
      </ul>
      <div className="d-flex">
        <input onChange={(e) => {setName(e.target.value)}} className="form-control me-2" type="search" placeholder="Search by topic..." aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={()=>{props.setCategory(name)}}>Search</button>
      </div>
    </div>
  </div>
</nav>
  )
}
