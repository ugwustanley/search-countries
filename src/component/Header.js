import React, { Component } from 'react';

class Header extends Component{
  
   handleClick = () =>{
     this.props.changeMode();
   }
   // header style
   headers = () =>{
        if(this.props.modal){
         return  {
            backgroundColor: 'hsl(209, 23%, 22%)',
            boxShadow: '1px 1px 1px transparent',
            border: 'none'
          }
        }
        
      
   }
   render(){
      const { changeMode } =  this.props ;
    const Header2 = {
      display: 'flex',
      justifyContent : 'space-between',
      flexWrap:"wrap"
    }
    const mode = {
        fontSize: '18px',
        fontWeight: 600    
    }
      return(
         <div className="p-3 Header" style={this.headers()}>
            <div className="container" style={Header2}>
            <div >
             <h4 className="where">Where in the World?</h4>
             </div>
            <div style={mode} onClick={changeMode} className="mode"> 
             <i className="fas fa-moon"></i>
             <i className="pl-2" onClick={ () => this.props.changeMode}>{this.props.modal?<i>Light</i> : <i>Dark</i>} mode</i>
             </div>
             </div>
         </div>
      );
   }
}
export default Header;
