/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./AppListingRow.css";

class AppListingRow extends PureComponent {
  render() {
    return (
        <div className="component-app-listing-result-row">
        <img src={this.props.imgSource} className="odd"/>
        <span className="app-listing-result-title"> {this.props.title}</span>
    </div>
    );
  }
}
//getting title and image source from AppListing Component
AppListingRow.propTypes = {
  title: PropTypes.string,
  imgSource: PropTypes.string
};
export default AppListingRow;
