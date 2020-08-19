import React, { Component } from 'react';

class ErrorBoundary extends Component{
  constructor(props){
      super(props);
      this.state ={
          hasError: false
      }
  }
  componentDidCatch(error){
    this.props.componentDidMount()  
    console.log(error + ' jhgfdsa')
      this.setState({ hasError: true});
    return  <h1>An error occured</h1>
       
      
  }
   render(){
      
     if(this.state.hasError){
         return <h1>An error occured</h1>
         
     }
     return <div style={{display:'none'}}><h6>a</h6></div>
     
}
 }
export default ErrorBoundary;
