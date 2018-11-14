/* eslint-disable jsx-a11y/alt-text */
import React,{PureComponent} from 'react';
import PropTypes from "prop-types";
import AppRecommmendCol from "./AppRecommendCol";
import './AppRecommend.css';
/*TODO:
    1. display recommend
    2. load the json data from API:https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json
    3. extract useful data to render the element
    4. For every odd row, app icon is cropped with round corner. 
        For every even row, app icon is cropped in circle;
    5. Support vertical scrolling with pagination (10 records per page) and lazy load;
*/
class AppRecommmend extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            apps:[],
            dat:[],
            isLoading:false,
            datas:[]
        };
    }
    componentDidMount(){
        //this.setState({isLoading:true});
        /*fetch("https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json")
            .then(results=>{
                return results.json();
            }).then(data=>{
            this.setState({apps:data.feed.entry,datas:data});
            console.log(this.state.datas); //real data
            let a = this.state.apps.map((p)=>{
                return(
                    <div className="component-app-recommend-result-col">
                        <img src={p["im:image"][1].label} className="odd"/>
                        <br/>
                        <span className="app-recommend-title"> {p["im:name"].label}</span>
                    </div>
                )
            })
            this.setState({dat:a,isLoading:false});
        
            let b = data.feed.entry[0]["im:name"].label;
            
            //console.log("app name is "+this.state.dat);}
           
            
        });*/
            

    }
    render(){
        const isLoading = this.state.isLoading;
        if(isLoading){
            return(
                <div className="component-AppRecommend">
        is Loading....
        </div>
            );
        }
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
  appRecommendData: PropTypes.array
}
export default AppRecommmend
