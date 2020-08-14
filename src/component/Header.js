import React, { Component } from 'react';

class Header extends Component{
  
   handleClick = () =>{
     this.props.changeMode();
   }
   render(){
      const { changeMode } =  this.props ;
    const Header = {
         borderBottom: '1px solid lightgray',
         boxShadow: '1px 1px 2px lightgray',
         minHeight:'70px',
         display: 'flex',
         justifyContent : 'space-between',
         flexWrap:"wrap"
    }
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
         <div className="p-3 Header" style={Header}>
            <div className="container" style={Header2}>
            <div >
             <h4 className="where">Where in the World?</h4>
             </div>
            <div style={mode} onClick={changeMode} className="mode"> 
             <i className="fas fa-moon"></i>
             <i className="pl-2" onClick={ () => this.props.changeMode}>Dark mode</i>
             </div>
             </div>
         </div>
      );
   }
}
export default Header;
