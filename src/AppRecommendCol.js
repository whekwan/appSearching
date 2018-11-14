import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./AppRecommendCol.css";

class AppRecommendCol extends PureComponent {
  render() {
    console.log("calling function for"+this.props.title);
    return (
        <div className="component-app-recommend-result-col">
        <img src={this.props.imgSource} className="odd"/>
        <br/>
        <span className="app-recommend-title"> {this.props.title}</span>
    </div>
    );
  }
}
AppRecommendCol.propTypes = {
  title: PropTypes.string,
  imgSource: PropTypes.string
};
export default AppRecommendCol;
