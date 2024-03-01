import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react'

export default function 
() {
  return (
    <div>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} width="100" />
      </Link>
      <form>
        <input type="text" placeholder='Search'/>
        <button>Search</button>
      </form>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}
