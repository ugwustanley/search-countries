import React, { Component } from 'react';

class Details extends Component{
   SelectColor = () =>{
      if(this.props.modal){
       return {
           color:'#fff',
           backgroundColor: 'hsl(207, 26%, 17%)',
        }
      }else{
         return{
            color: '#444444'
         }
      }
   }
   buttonColor = () =>{
    if(this.props.modal){
     return {
         color:'#fff',
         backgroundColor:'hsl(209, 23%, 22%)',
         boxShadow: '1px 1px 2px hsl(209, 10%, 22%)'
      }
    }else{
       return{
          color: '#000',
          backgroundColor : 'gray'
       }
    }
   }
   render(){
    const {index , dataSet} = this.props
      return(
          
         <div style={this.SelectColor()}  >
            <div className="main-details" style={this.SelectColor()}>
        <button onClick={this.props.popupUpdate} style={this.buttonColor()} className="btn px-4 py-2">Back</button>
        <div className="details">
            <div className="img-box">
                <img className="pop-img" src={dataSet[index].flag} alt="country flag"></img>
                
            </div>
            <div className="message">
      <h2 className="mt-3 dete1">{dataSet[index].name}</h2>
      <h4 className="mt-5 dete">Native Name: <i>{dataSet[index].nativeName}</i></h4>
      <h4 className="mt-3 dete"> Country Code: <i>{dataSet[index].callingCodes}</i></h4>
      <h4 className="mt-3 dete">Capital: <i>{dataSet[index].capital}</i></h4>
      <h4 className="mt-3 dete">Area: <i>{dataSet[index].area}</i></h4>
      <h4 className="mt-3 dete">Populaton <i>{dataSet[index].population}</i></h4>
      <h4 className="mt-3 dete">Time Zone: <i>{dataSet[index].timezones}</i></h4>
      <h4 className="mt-3 dete">Subregion: <i>{dataSet[index].subregion}</i></h4>
            </div>
        </div>
       </div>
         </div>
      );
   }
}
export default Details;