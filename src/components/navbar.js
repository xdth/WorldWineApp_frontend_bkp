import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        let x = props.scrolled == true ? "true" : "false";
        console.log("state is: " + x);
    }
    
    handleChange(e) {
        //this.props.onTemperatureChange(e.target.value);  
    }

    render() {

        return (
        <>
        {/* Navbar */}
        {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"> */}
        <nav className="navbar fixed-top navbar-dark scrolling-navbar">
            <div className="container">
        
              {/* Logo */}
              <a className="navbar-brand" href="/" target="_blank">
                <strong>WorldWineSearch{this.props.scrolled ? 'header header-scrolled' : 'header header-unscrolled'}</strong>
              </a>
        
              {/* Collapse */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
        
              {/* Links */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                {/* Left */}
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      {/*
                        <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                        </a>
                     */}
                  </li>
                </ul>
        
                {/* Right */}
                <ul className="navbar-nav nav-flex-icons">
                  <li className="nav-item">
                    <a href="#" className="nav-link" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/ranking" target="_blank">Ranking</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/countries" target="_blank">Countries</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about" target="_blank">About</a>
                  </li>
                </ul>
        
              </div>
        
            </div>
          </nav>
          {/* Navbar */}
          </>


    )}
};

export default Navbar