import { Component } from 'react';
// import auth from '../services/auth';
import NavThemeFactory from '../componentListNPM/themes/navThemes/navThemeFactory';
import "../App.css";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';




export default class Nav extends Component {
  constructor(props){
    super(props);
    this.changePic=this.changePic.bind(this);
  }
  changePic(type){
    let app = this.props.app;
    //debugger
    let comp = app.state.componentList.getComponent(type);
    app.dispatch({switchcase: type, myswitch:"feed", picChange:true, pic: comp, index: 0})
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    // let styles =state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch=app.dispatch;
    let style = state.navStyle;
    // if(this.props.theme){
    //   let f = new NavThemeFactory().getNavThemeFactory();
    //   style= f.style
    // }
    // let types={
    //   topBar: <div style={style?.spacing}>{state.switchCase.map((obj, index)=> 
    //     <Link style={style?.link}  to={obj.path} >{obj.name}</Link>
    //     )}</div>,
    //     sidBar: <div style={style?.spacing}>{state.switchCase.map((obj, index)=> 
    //       <Link style={style?.link} to={obj.path} >{obj.name}</Link>
    //       )}</div>,
    // }
  return (
    <div style={{position:"absolute", top:"100", left:"0", display:"flex", flexDirection:"row", }}>
      {state.switchCase.map((obj, index)=> 
      <Link to={obj.path} >{obj.name}</Link>
      )}

        </div>
    // <div style={this.props.containerStyle? this.props.containerStyle: state.navStyle?.bar}>
    //   {types[this.props.type? this.props.type: state.navType]}
      
    //     </div>
        
  )}
}
