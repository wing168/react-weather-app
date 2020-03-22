import React from 'react';
import './App.css';

import { getWeatherDataCurrLoc, getWeatherDataSearched } from './data-request';

import HomePage from './pages/homepage.component';
import MainMenu from './pages/menupage.component';
import ErrorMsg from './components/error-msg/error-msg.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currweatherdata: [],
      data5days: [],
      loading: true,
      error: false,
      mainMenu: true,
      isCelsius: null
    }
  }

   currentWeather = async () => {
    this.setState({mainMenu: false})    
    const data = await getWeatherDataCurrLoc();
    this.setState({
      currweatherdata: data[0],
      data5days: data[1],
      loading: false,
      mainMenu: false
    })
  }

  searchedWeather = async (e) => {
      e.preventDefault();
      this.setState({loading: true, mainMenu: false});
      const location = e.target.elements.city.value;
      try{
        const data = await getWeatherDataSearched(location);
        this.setState({
          currweatherdata: data[0],
          data5days: data[1],
          loading: false
        })
      }
      
      catch(error) {
        this.setState({
          error: true,
          loading: false
        })
      }
  };

  removeErrorOnClick = () => {
    this.setState({
      error: false
    })
  }

  mainMenuSelect = () => {
    this.setState({
      mainMenu: true
    })
  }

  handleTempSelection = (e) => {
      const tempType = e.target.value;
      
      if (tempType==="celsius") {
        this.setState({isCelsius: true})
      } else {
        this.setState({isCelsius: false})
      }
  }


  render () {
    const { mainMenu, error } = this.state;
    return (
      <div className="App" onClick={this.removeErrorOnClick}>
        {error ? <ErrorMsg /> : null}
        {mainMenu ? 
        <MainMenu currentWeather={this.currentWeather} searchedWeather={this.searchedWeather} handleTempSelection={this.handleTempSelection} /> : 
        <HomePage {...this.state} searchedWeather={this.searchedWeather} mainMenuSelect={this.mainMenuSelect} />}
      </div>
    );
  }

}
export default App;


/* THINGS TO DO 

1) Show error message if user types in incorrect city - DONE
2) Create an initial option box for user to either use current location or search location - DONE
3) Toggle show / hide search bar
4) Change background depending on whether it is day or night
5) Upcase the first letter in the five day weather forecast - DONE
6) Show current date and time
7) Change search to icon - DONE
8) Allow country to be used in search field eg when typing Redhill it shows Redhill in Aus

*/