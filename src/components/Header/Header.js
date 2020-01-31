import React from 'react'
import './Header.css'

const Header = () => (
  <header>
    <span className="logo">ce broker</span>
    <nav>
      <a href="#">Features</a>

      <a href="#">Plans</a>

      <a href="#">Organizations</a>

      <a className="active" href="#">
        Browse courses
      </a>

      <a href="#">Support</a>
    </nav>
    <div>
      <a className="sing-in" href="#">
        Sing In
      </a>
      <a className="trial" href="#">
        7 day trial
      </a>
    </div>
  </header>
)

export default Header
