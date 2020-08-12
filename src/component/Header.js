import React, { Component } from 'react';

class Header extends Component{
   
   render(){
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
            <div style={mode} className=""> 
             <i className="fas fa-moon"></i>
             <i className="pl-2">Dark mode</i>
             </div>
             </div>
         </div>
      );
   }
}
export default Header;
