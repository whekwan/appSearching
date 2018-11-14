import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";
/*TODO:
  1. searching the apps displayed in app listing 
    and recommendation section by matching the keyword
  2. search keyword text field is located at the top 
    of the page, and remains the position even app listing is scrolled
  3. app listing and recommendation section only shows the apps 
    whose app name, category, author or summary contains the keyword
    search=>text match the json=>render the result
*/
class SearchInput extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      TextInput :''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = event => {
    this.setState({
      TextInput : event.target.value
    });
    this.props.textChange(event);
  };


  render() {
    return (
      <div className="component-search-input">
          <input type="text" value={this.state.TextInput} onChange={this.handleChange} placeholder = "search"/>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
