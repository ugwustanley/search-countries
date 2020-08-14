import React, { Component } from 'react';

class Select extends Component{

   render(){
      return(
         <div className="selection">
             <select className="py-2 pr-5 pl-2 bg-light" onChange={this.props.SearchHandler} >
                 <option defaultValue="Filter by region" disabled>Filter by region</option>
                 <option value="africa">Africa</option>
                 <option value="americas">America</option>
                 <option value="asia">Asia</option>
                 <option value="europe">Europe</option>
                 <option value="oceania">Oceania</option>
             </select>
         </div>
      );
   }
}
export default Select;
