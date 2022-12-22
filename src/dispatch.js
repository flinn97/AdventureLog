import './App.css';
import { Component } from 'react';
import Nav from './view/nav.js';
import Upload from './view/upload';

import './index.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GameConnect from './view/gameConnectPopup';
import TopNav from './view/TopNav';


//model
export default class Dispatch extends Component {
  constructor(props){
    super(props);
  
  }


  render(){
    let app = this.props.app;
    let state = app.state;
    let styles =state.styles;
    let dispatch=app.dispatch;
  return (

        <BrowserRouter>
        {state.myswitch==="upload" &&<Upload app={app} handleClose={()=>{dispatch({myswitch:""})}}/>}
        {state.myswitch==="gameAdd" &&<GameConnect app={app} handleClose={()=>{dispatch({myswitch:""})}}/>}

    <div style={{
      width:"100%", 
      height:"96vh",
      }}>
        


      <TopNav app={app} />
     <Nav app={app}/> 
     <div style={{paddingTop:"50px",paddingLeft:"50px", width:"100%", height:"100%"}}>
     <Routes>
      {state.switchCase?.map((obj, index)=>
        <Route path={obj.path} element={<obj.comp app={app}/>} />
      )}
      

</Routes>
</div>
     </div>

     
     </BrowserRouter>

    
  )}
}