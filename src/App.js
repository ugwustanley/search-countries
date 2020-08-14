import React, { Component } from 'react';
import Header from './component/Header.js';
import './App.css'
import SectionTwo from './component/SectionTwo.js';
class App extends Component{
  // states 
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            modal: false,
            details: false,
            dataSet: [] , 
            error: false,
            fetch:'all'};
    }
    // fetch from an api 
    componentDidMount(){
      this.setState({isLoading: true})
      fetch('https://restcountries.eu/rest/v2/' + this.state.fetch)
      .then(response => response.json())

      .then((data) => {this.setState({dataSet: data, isLoading: false , error: false});})
      .catch(error =>{
        this.setState({isLoading: true})
        console.log(error)
         this.setState({ error: true,fetch:'all' , isLoading: false}, function(){
           this.componentDidMount()
         })

      })
   } 
   // select an option from the dropdown
    SearchHandler = (event) =>{
        var query =event.target.value;
        console.log(query)
        this.setState({fetch:`region/${query}`},function(){
          console.log(this.state.fetch)
          this.componentDidMount()
        })
        
        
      }
      // Search for a name in the search box
      SearchNames = (event) =>{
        console.log(event.target.value);
        var query =event.target.value;
        console.log(query)
        this.setState({fetch:`name/${query}`},function(){
          console.log(this.state.fetch)
          this.componentDidMount()
        })
         
      }
    // change mode
     changeMode = () =>{
       console.log("testing this out");
       if(this.state.modal){
        this.setState({modal: false})
       }else{
         this.setState({modal: true})
       }
       
     }
   render(){
     const body_style = {
       backgroundColor: 'rgb(243, 241, 241)',
     }
     const box = {

     }
     const main_box = {
       backgroundColor: 'rgb(243, 241, 241)'
     }
     if(this.state.modal){
      body_style.backgroundColor = 'hsl(207, 26%, 17%)';
      main_box.backgroundColor = 'hsl(207, 26%, 17%)';
      box.backgroundColor = 'hsl(209, 23%, 22%)';
      box.boxShadow = '1px 1px 2px transparent';
      body_style.color = "#fff"
    }
     if(this.state.isLoading){
       return <div style={body_style}>
            <Header changeMode = {this.changeMode.bind(this)} />
            <SectionTwo  SearchHandler = {this.SearchHandler} SearchNames = {this.SearchNames} state={this.state}/>  
            <h1 className="text-center pt-5">Loading ....</h1>
       </div> 
     }
      return(
        
         <div style={body_style}>
             <Header changeMode = {this.changeMode.bind(this)} />
            <SectionTwo  SearchHandler = {this.SearchHandler} SearchNames = {this.SearchNames} state={this.state}/>  
            <div className="main-box" style={main_box}>
             {this.state.dataSet.map((data) =>{
             if(data.status || this.state.error){
               return <h3>Item not found</h3>
             }else{
             
               return  <div>
                 <div key = {data.name} className="box" style={box}>
               <img src={data.flag} className="box-img" alt="country flag"></img>
               <h4 className="px-3 pt-2 pb-2">{data.name}</h4>
             <div className="datas"><h5 className="pl-3">Populatioin: </h5> <p className="pl-2">{data.population}</p></div>
             <div className="datas"><h5 className="pl-3">Region:</h5><p className="pl-2">{data.region}</p></div>
             <div className="datas"><h5 className="pl-3">Capital:</h5><p className="pl-2">{data.capital}</p></div>
                </div>
               </div> 
             }})}</div>  
         </div>
         
      );
   }
}
export default App;
