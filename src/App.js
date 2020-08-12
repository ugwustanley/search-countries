import React, { Component } from 'react';
import Header from './component/Header.js';
import './App.css'
import SectionTwo from './component/SectionTwo.js';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            modal: true,
            dataSet: [] , 
            error:null,
            fetch:'all'};
    }
    componentDidMount(){
      this.setState({isLoading: true})
      console.log(this.state.fetch)
      console.log('https://restcountries.eu/rest/v2/' + this.state.fetch)
      fetch('https://restcountries.eu/rest/v2/' + this.state.fetch)
      .then(response => response.json())

      .then((data) => {this.setState({dataSet: data, isLoading: false});})
      .catch(error =>{
        this.setState({isLoading: true})
        console.log(error)
         this.setState({fetch:'all' , isLoading: false}, function(){
           this.componentDidMount()
         })

      })
   } 
    SearchHandler = (event) =>{
        var query =event.target.value;
        console.log(query)
        this.setState({fetch:`region/${query}`},function(){
          console.log(this.state.fetch)
          this.componentDidMount()
        })
        
        
      }
      SearchNames = (event) =>{
        console.log(event.target.value);
        var query =event.target.value;
        console.log(query)
        this.setState({fetch:`name/${query}`},function(){
          console.log(this.state.fetch)
          this.componentDidMount()
        })
         
      }
    
   render(){
     console.log(this.state.isLoading)
     const body_style = {
       backgroundColor: 'rgb(243, 241, 241)',
     }
     if(this.state.isLoading){
       return <div>
            <Header />
            <SectionTwo  SearchHandler = {this.SearchHandler} SearchNames = {this.SearchNames} state={this.state}/>  
            <h1 className="text-center pt-5">Loading ....</h1>
       </div> 
     }
      return(
         <div style={body_style}>
             <Header />
            <SectionTwo  SearchHandler = {this.SearchHandler} SearchNames = {this.SearchNames} state={this.state}/>  
            <div className="main-box">
             {this.state.dataSet.map((data) =>{
               
             if(data.status){
               return <h3>Item not found</h3>
             }else{
             
               return  <div>
                 <div key = {data.name} className="box">
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
