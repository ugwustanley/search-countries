import React, { Component } from 'react';

class Details extends Component{
   SelectColor = () =>{
      if(this.props.modal){
          console.log("testinf")
       return {
           color:'#fff',
           backgroundColor: 'hsl(207, 26%, 17%)',
        }
      }else{
        console.log("tnf")
         return{
            color: '#444444'
         }
      }
   }
   buttonColor = () =>{
    if(this.props.modal){
        console.log(this.props.dataSet)
     return {
         color:'#fff',
         backgroundColor:'hsl(209, 23%, 22%)',
         boxShadow: '1px 1px 2px hsl(209, 10%, 22%)'
      }
    }else{
       return{
          color: '#444444',
          backgroundColor : 'rgb(243, 241, 241)'
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
      <h2 className="mt-3">{dataSet[index].name}</h2>
      <h4 className="mt-5">Native Name: <i>{dataSet[index].nativeName}</i></h4>
      <h4 className="mt-3"> Country Code: <i>{dataSet[index].callingCodes}</i></h4>
      <h4 className="mt-3">Capital: <i>{dataSet[index].capital}</i></h4>
      <h4 className="mt-3">Area: <i>{dataSet[index].area}</i></h4>
      <h4 className="mt-3">Populaton <i>{dataSet[index].population}</i></h4>
      <h4 className="mt-3">Time Zone: <i>{dataSet[index].timezones}</i></h4>
      <h4 className="mt-3">Subregion: <i>{dataSet[index].subregion}</i></h4>
            </div>
        </div>
       </div>
         </div>
      );
   }
}
export default Details;