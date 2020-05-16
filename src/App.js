import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Wines from './components/wines';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scrolled: false,
      title: '', 
      country: '', 
      wines: [] 
    };

    this.handleChangeScroll = this.handleChangeScroll.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeScroll(event){
      if (this.scrollTop > 500) {
        this.setState({scrolled: true});
      } else {
        this.setState({scrolled: false});
      }
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    /*
    http://192.168.1.44:3000/wines?filter={"where":{"and":{"title":{"like":"bru%25","options":"i"}},{"country":{"like":"bra%25","options":"i"}}},"limit":3}
    http://192.168.1.44:3000/wines?filter[where][title][like]=Bru%25&filter[where][country][like]=US%25&filter[limit]=3
    */
    // fetch('http://192.168.1.44:3000/wines?filter={"where":{"title":{"like":"'+ this.state.title + '%25","options":"i"}},"limit":3}')
    fetch('http://192.168.1.44:3000/wines?filter[where][title][like]=%25'+ this.state.title + '%25&filter[where][country][like]='+ this.state.country + '%25&filter[limit]=30')
    .then(res => res.json())
    .then((data) => {
        this.setState({ wines: data })
    })
    .catch(console.log)
        
  }
  
  componentDidMount(){      
    window.addEventListener('scroll',() => {
      const isTop = window.scrollY < 50;
      if(isTop !== true) {
        this.setState({scrolled: true});
      } else {
        this.setState({scrolled: false});
      }
    });
      
  }

  
  render() {
    return (
      <>
  <div className={this.state.scrolled ? 'header-scrolled' : 'header'} id="header">
      <h1>World Wine Search</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" className={'search-wine'} value={this.state.title} onChange={this.handleChangeTitle} placeholder="Search for a wine" />
        </label>
        <label>
          <input type="text" className={'search-country'} value={this.state.country} onChange={this.handleChangeCountry} placeholder="Country" />
        </label>
        <button type="submit" value="Submit" class="btn-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="75%" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
        </button>
      </form>    
  </div>


  <Wines wines={this.state.wines} />

  


      </>
    );
  }
}


export default App;
