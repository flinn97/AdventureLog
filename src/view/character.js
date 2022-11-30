import { Component } from 'react';
import "../App.css"


export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    let app = this.props.app

    let dispatch = app.dispatch;
    let state = app.state;
    let list = state.componentList?.getList("character")
    return (
      <div style={{width:"100vw", paddingTop: "10px"}}>
          <div onClick= {dispatch.bind(this, { operation: "cleanPrepare", operate: "addcharacter" , myswitch: "upload", uploadKey:"add" })}> Add Character</div>
          <div >{list?.map((character, index)=>
          
          <div>{character?.getJson().name}<img src={character.getJson().picURL}/></div>
          )}</div>
      </div>
    )
  }
}
