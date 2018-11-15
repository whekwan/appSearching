import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import AppListing from './components/AppListing';
import AppRecommend from './components/AppRecommend';
import filterAppRecommend from './components/filterAppRecommend';
import filterAppList from './components/filterAppList';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //storing the filtered result
      filteredAppList: [],
      filteredRecommend:[]
    };
  }
  async componentDidMount() {
    const [filteredRecommend,filteredAppList] = await Promise.all([filterAppRecommend("",10),filterAppList("",100)]);
    this.setState({ filteredRecommend });
    this.setState({filteredAppList});
 }
  async handleSearchChange(e){
    const [filteredRecommend,filteredAppList] = await Promise.all([filterAppRecommend(e.target.value,10),filterAppList(e.target.value,100)]);
    this.setState({filteredRecommend});
    this.setState({filteredAppList});
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
        <div className="search-bar"><SearchInput textChange={this.handleSearchChange.bind(this)} /></div>     
          <div className="App-recommendation">
          <div className = "App-recommendation-title">App Recommendation</div>
            <AppRecommend appRecommendData={this.state.filteredRecommend}/>
          </div>
          <div className="App-Listing">
          <div className = "App-listing-title">Top 100 apps</div>
            <AppListing appListingData={this.state.filteredAppList}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
