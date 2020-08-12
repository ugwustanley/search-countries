import React, { Component } from 'react';
import Select from './Select.js'
import Search from './Search.js'
class SectionTwo extends Component{
   
   render(){
      return(
         <div className="container SectionTwo">
             <Search SearchNames = {this.props.SearchNames} />
             <Select SearchHandler = {this.props.SearchHandler} state={this.props.state} />
         </div>
      );
   }
}
export default SectionTwo;
