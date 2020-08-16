import React, { Component } from 'react';
import Header from './component/Header.js';
import ErrorBoundary from './component/Error';
import Details from './component/Details'
import './App.css'
import SectionTwo from './component/SectionTwo.js';

class App extends Component{

    // states 

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            index: 0,
            modal: true,
            details: false,
            dataSet: [] , 
            error: false,
            popup: false,
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
     
       // get target element

       captures = (e) =>{
         let index = e.target.id;
         console.log(e.target);
         
         console.log(this.state.dataSet[index].name)
         this.setState({index:index , popup: true}, function(){
          console.log(this.state.index)
         })
         
       }
      // details state check 
        displayCheck = () =>{
          if(this.state.popup){
            return {
                  display: 'none'
            }
          }else{
            return {display: 'block'}
          }
        }
        // popup update
         popupUpdate = () =>{
           this.setState({popup: false})
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
                  box.boxShadow = '1px 1px 1px hsl(209, 10%, 22%)';
                   box.border =  'none';
                  body_style.color = "#fff"
        }
        if(this.state.isLoading){
                   return <div style={body_style}>

                               <Header changeMode = {this.changeMode.bind(this)} modal={this.state.modal} Headers = {this.Headers} />
                               <SectionTwo  SearchHandler = {this.SearchHandler} SearchNames = {this.SearchNames} modal={this.state.modal} state={this.state}/>  
                               <h1 className="text-center pt-5" style={{width:'100%',height:'80vh'}}>Loading ....</h1>

                          </div> 
                   }
                   return(
        
                          <div style={body_style}>
                                <Header changeMode = {this.changeMode.bind(this)} Headers = {this.Headers} modal={this.state.modal}/>
                                <SectionTwo  SearchHandler = {this.SearchHandler} SearchNames = {this.SearchNames} modal={this.state.modal}/>  
                                <div className="main-box" style={main_box}>
                                  <ErrorBoundary />
                                   {this.state.dataSet.map((data , i) =>{

                                       if(data.status || this.state.error){
                                                return <h3 key={data.name}>Item not found</h3>
                                       }else{
             
                                            return  <div key = {data.name} style={this.displayCheck()} onClick={this.captures}>
                                                
                                                         <div id={i} key = {data.name} className="box" style={box}>
                                                         <img id={i} src={data.flag} className="box-img" alt="country flag"></img>
                                                         <h4 id={i} className="px-3 pt-2 pb-2">{data.name}</h4>
                                                         <div id={i} className="datas"><h5 className="pl-3">Populatioin: </h5> <p className="pl-2">{data.population}</p></div>
                                                         <div id={i} className="datas"><h5 className="pl-3">Region:</h5><p className="pl-2">{data.region}</p></div>
                                                         <div id={i} className="datas"><h5 className="pl-3">Capital:</h5><p className="pl-2">{data.capital}</p></div>
                                                         </div>
                                                          
                                                   </div> 
                                        }})}
                                        <ErrorBoundary />
                                        {this.state.popup? <Details modal={this.state.modal} index={this.state.index} popupUpdate = {this.popupUpdate} dataSet={this.state.dataSet} /> : <div>test</div>}
                                        </div>  
                           </div>
         
          );
        }
      }
export default App;
