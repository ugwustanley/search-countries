import React, { Component } from 'react';

class Select extends Component{
   SelectColor = () =>{
      if(this.props.modal){
       return {
           color:'#fff',
           backgroundColor: 'hsl(209, 23%, 22%)',
           boxShadow: '1px 1px 2px hsl(209, 10%, 22%)'
        }
      }else{
         return{
            color: '#444444'
         }
      }
   }
   render(){
      return(
         <div className="SearchBox  pr-3" >
             <div className="SearchShadow" style={this.SelectColor()}>
             <div className="search-icon px-3"style={this.SelectColor()} ><i className="fas fa-search"></i></div>
           <div> <input type="text" style={this.SelectColor()} onChange={this.props.SearchNames} placeholder="Search for a country..." className="px-4 py-2 input-box"  /></div>
         </div>
         </div>
      );
   }
} 
export default Select;
