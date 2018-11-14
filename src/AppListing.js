/* eslint-disable jsx-a11y/alt-text */
import React,{PureComponent} from 'react';
//import PropTypes from "prop-types";
import './AppListing.css';

/*TODO:
    1. display top 100 app
    2. load the json data from API:https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json
    3. extract useful data to render the element
    4. For every odd row, app icon is cropped with round corner. 
        For every even row, app icon is cropped in circle;
    5. Support vertical scrolling with pagination (10 records per page) and lazy load;
*/
//const API = "https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json";

class AppListing extends PureComponent{
    constructor(){
        super();
        this.state = {
            apps:[],
            isLoading:false
        };
    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch("https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json")
        .then(results=>{
            return results.json();
        }).then(data=>{
            let a = data.feed.entry.map((p)=>{
                return(
                    <div className="component-app-listing-result-row">
                        <img src={p["im:image"][0].label} className="odd"/>
                        <span className="title"> {p["im:name"].label}</span>
                    </div>
                )
            })
            this.setState({apps:a,isLoading:false});
            //console.log("apps is"+this.state.apps);
        });
            

    }
    render(){
        const isLoading = this.state.isLoading;
        if(isLoading){
            return(
                <div className="component-AppRecommend">is Loading....</div>
            );}
        return(
        <div className="component-AppListing">
        <span>{this.state.apps}</span>
        </div>
    );}
}
//AppListing.propTypes = {
  //  appListData: PropTypes.array
//}
export default AppListing
