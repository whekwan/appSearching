/* eslint-disable jsx-a11y/alt-text */
import React,{PureComponent} from 'react';
import PropTypes from "prop-types";
import AppRecommmendCol from "./AppRecommendCol";
import './AppRecommend.css';

class AppRecommmend extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
        };
    }
    render(){
        return(
        <div className="component-AppRecommend">
        {this.props.appRecommendData.map(appRecommendData=>(
            <AppRecommmendCol
            imgSource={appRecommendData["im:image"][1].label}
            title={appRecommendData["im:name"].label}/>
        ))}
        </div>
    );}
}
AppRecommmend.propTypes = {
  appRecommendData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
  ])
}
AppRecommmend.defaultProps = {
    appRecommendData : []
    }
export default AppRecommmend
