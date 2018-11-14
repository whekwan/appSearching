import React, { Component } from 'react';
import SearchInput from './SearchInput';
import AppListing from './AppListing';
import AppRecommend from './AppRecommend';
import Sticky from 'react-stickynode';
import filterAppRecommend from './filterAppRecommend';
import './App.css';
//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredAppList: [],
      filteredRecommend:filterAppRecommend("", 10)
    };
  }
  handleSearchChange = event =>{
    this.setState({
                  filteredRecommend:filterAppRecommend(event.target.value,10)
                });
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Sticky><SearchInput textChange={this.handleSearchChange} /></Sticky>
        
          <div className="App-recommendation">
          App Recommendation
            <AppRecommend appRecommendData={this.state.filteredRecommend}/>
            
          </div>
          <div className="App-Listing">
          Top 100 apps
            <AppListing/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
