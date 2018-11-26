/* eslint-disable jsx-a11y/alt-text */
import React,{PureComponent} from 'react';
import PropTypes from "prop-types";
import './AppListing.css';
import AppListingRow from './AppListingRow';

class AppListing extends PureComponent{
    constructor(){
        super();
        this.state = {
            isLoading:false
        };
    }
    render(){
        //render the App Listing
        //let listLength = this.props.appListingData.length;
        //console.log("listLength is "+listLength);
        return(
        <div className="component-AppListing">
        {this.props.appListingData.map((appListingData,index)=>(
            <AppListingRow
            index ={index+1}
            imgSource={appListingData["im:image"][1].label}
            title={appListingData["im:name"].label}/>
        ))}
        </div>
    );}
}
// getting the appListData array from App component
AppListing.propTypes = {
   appListData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
  ])
}
AppListing.defaultProps = {
    appListingData : []
    }
export default AppListing
