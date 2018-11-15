/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./AppRecommendCol.css";

class AppRecommendCol extends PureComponent {
  render() {
    return (
        <div className="component-app-recommend-result-col">
        <img src={this.props.imgSource} className="odd"/>
        <br/>
        <span className="app-recommend-title"> {this.props.title}</span>
    </div>
    );
  }
}
//getting app title and image source(icon) from AppRecommend component
AppRecommendCol.propTypes = {
  title: PropTypes.string,
  imgSource: PropTypes.string
};
export default AppRecommendCol;
