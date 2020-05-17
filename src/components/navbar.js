import React from 'react'

const Navbar = () => {
    return (

        <>
        {/* Navbar */}
        {/* <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"> */}
        <nav class="navbar fixed-top navbar-dark scrolling-navbar">
            <div className="container">
        
              {/* Logo */}
              <a class="navbar-brand" href="/" target="_blank">
                <strong>WorldWineSearch</strong>
              </a>
        
              {/* Collapse */}
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
        
              {/* Links */}
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
                {/* Left */}
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      {/*
                        <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
                        </a>
                     */}
                  </li>
                </ul>
        
                {/* Right */}
                <ul class="navbar-nav nav-flex-icons">
                  <li class="nav-item">
                    <a href="#" class="nav-link" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/ranking" target="_blank">Ranking</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/countries" target="_blank">Countries</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about" target="_blank">About</a>
                  </li>
                </ul>
        
              </div>
        
            </div>
          </nav>
          {/* Navbar */}
          </>


    )
};

export default Navbar