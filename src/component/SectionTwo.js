import React, { Component } from 'react';
import Select from './Select.js'
import Search from './Search.js'
class SectionTwo extends Component{
   
   render(){
      return(
         <div className="container SectionTwo">
             <Search SearchNames = {this.props.SearchNames} modal = {this.props.modal} />
             <Select SearchHandler = {this.props.SearchHandler} state={this.props.state} modal={this.props.modal} />
         </div>
      );
   }
}
export default SectionTwo;
