import { Component } from 'react';
import "../App.css"
import DelButton from '../componentListNPM/componentForms/deleteButton';
import RunButton from '../componentListNPM/componentForms/runButton';
import ParentFormComponent from '../componentListNPM/parentFormComponent';
import LogMap from './logMap';

export default class Lore extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    let app = this.props.app
    let pic = app.state.componentList?.getComponents();
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
    let state = app.state;
    let styles =state.styles;
    let list = state.componentList?.getList("gmLog")

    return (
      <div style={{width:"100vw", paddingTop: "10px"}}>
        <div style={{cursor:"pointer"}} onClick={()=>{dispatch({myswitch: "gameAdd"})}} >Add Character To Game</div>
          MORE TO COME ON THIS PAGE!
          <LogMap app={app} name="gmLog" />
      </div>
    )
  }
}