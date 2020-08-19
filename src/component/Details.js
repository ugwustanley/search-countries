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
            color: '#444444',
            backgroundColor: 'rgb(240, 241, 245)',
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
            <div className="messages">
            <div className="message">
      <h5 className="mt-3  dete1">{dataSet[index].name}</h5>
      <h6 className="mt-3 dete">Native Name:</h6> <i>{dataSet[index].nativeName}</i>
      <h6 className="mt-3"> Country Code:</h6> <i>{dataSet[index].callingCodes}</i>
      <h6 className="mt-3">Capital:</h6> <i>{dataSet[index].capital}</i>
     
      </div>
      <div className="message mt-5">
      <h6 className="mt-4 dete">Populaton:</h6> <i>{dataSet[index].population}</i>
      <h6 className="mt-3">Time Zone:</h6> <i>{dataSet[index].timezones}</i>
      <h6 className="mt-3">Subregion:</h6> <i>{dataSet[index].subregion}</i>
            </div >
          <div className="message mt-5"> <h6 className="mt-4 dete area">Area:</h6> <i>{dataSet[index].area}</i></div>
          </div>
        </div>
       </div>
         </div>
      );
   }
}
export default Details;