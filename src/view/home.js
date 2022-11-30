import { Component } from 'react';
import "../App.css"
import AdventureLog from './adventureLog';

import Character from './character';
import CharacterJournal from './characterJournal';
import CharacterStrategy from './characterStrategy';
import Lore from './lore';
import Upload from './upload';


export default class Home extends Component {
  constructor(props){
    super(props);
  }

  


  render(){
    let app=this.props.app;
    let state = app.state;
    let styles =state.styles;
    
  return (
    
        <div style={{
          overflow: "visible",
          width: "100vw",
          borderRadius: styles.borders.radius1,
          display: "flex", 
          justifyContent: "left", 
          marginLeft: styles.menu.marginLeft,
          marginRight: styles.menu.marginLeft,
          userSelect: "none",
          marginTop: styles.logoTop.stripHalved,
          }}>
            {/* {state.popupSwitch==="editUser"&&(<EditUser app={app}/>)} */}

        
       <div style={{
        width: styles.menu.remainderW, 
        borderRadius: styles.borders.radius1,
        minHeight: "88vh",
        height: "fit-content",
        background: styles.colors.Grey1,
        boxShadow: styles.shadows.homeShadow,}} >
      
        <div style={{
          display: "flex",
          padding: styles.menu.innerPad,
          alignItems: "center", alignSelf: "center", justifyContent: "center"
        }}>
       <Switchcase app={app} />
       </div>
       </div>
    </div>
  )}
}

function Switchcase(props) {
  
  let app=props.app;
   let view={
    home: <Character app={app} />,
    adventure: <AdventureLog app={app}/>,
    journal: <CharacterJournal app={app} />,
    lore: <Lore app={app}/>,
    strategy: <CharacterStrategy app={app}/>,
    upload: <Upload app={app}/>
    
   }
   let myswitch= !app.state.myswitch.includes("keep")||!app.state.myswitch.includes("spawn")? app.state.myswitch : "feed";
   return view[myswitch];
 }
//           {/* <Gallery state = {this.props.state} handlechange = {this.props.handlechange} /> */}