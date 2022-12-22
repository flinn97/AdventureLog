import { Component } from 'react';
import "../App.css"
import ProfileTag from './profile';


export default class TopNav extends Component {
  constructor(props){
    super(props);
  }

  


  render(){
    let app=this.props.app;
    let state = app.state;
    let styles =state.styles;
    
  return (
    
        <div style={{width:"100%",  height:"100px", display:"flex", flexDirection:"row",  justifyContent:"space-between"}}>
          <div>Logo Goes here</div>
          <h1>Adventurer's Log</h1>
      <ProfileTag app={app} />

        </div>
  )}
}


//           {/* <Gallery state = {this.props.state} handlechange = {this.props.handlechange} /> */}