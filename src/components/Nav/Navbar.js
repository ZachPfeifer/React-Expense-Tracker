import React from 'react'


const NavBar = () => {

  const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('onClick', () => {
      //toggle nav
      nav.classList.toggle('nav-active')

      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards %${index / 7 + 1.5}s`
        }
      })
      //burger animation
      burger.classList.toggle('toggle')
    })
  }


  return (
    <nav>
      <div className="logo">
        <h4>Transaction Tracker</h4>
      </div>
      <ul className="nav-links">
        <li><a href="!#"> Home</a></li>
        <li><a href="!#"> Login</a></li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  );
}

export default NavBar;