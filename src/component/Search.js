import React, { Component } from 'react';

class Select extends Component{
  
   render(){
      return(
         <div className="SearchBox  pr-3">
             <div className="SearchShadow">
             <div className="search-icon px-3" ><i className="fas fa-search"></i></div>
           <div> <input type="text" onChange={this.props.SearchNames} placeholder="Search for a country..." className="px-4 py-2 input-box"  /></div>
         </div>
         </div>
      );
   }
} 
export default Select;
