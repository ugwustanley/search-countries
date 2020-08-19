import React, { Component } from 'react';

class Select extends Component{
   SelectColor = () =>{
      if(this.props.modal){
       return {
           color:'#fff',
           backgroundColor: 'hsl(209, 23%, 22%)',
           boxShadow: '1px 1px 2px transparent',
           
        }
      }else{
         return{
            color: '#444444',
            backgroundColor: '#fff'
         }
      }
   }
   render(){
      return(
         <div className="selection" >
             <select style={this.SelectColor()} className="py-2 pr-2 pl-2" onChange={this.props.SearchHandler} >
                 <option  defaultValue="Filter by region" selected disabled>Filter by region</option>
                 <option  value="africa">Africa</option>
                 <option  value="americas">America</option>
                 <option  value="asia">Asia</option>
                 <option  value="europe">Europe</option>
                 <option  value="oceania">Oceania</option>
             </select>
         </div>
      );
   }
}
export default Select;
