import './App.css';
import { Component } from 'react';


import Dispatch from './dispatch';
import ComponentListInterface from './componentListNPM/componentListInterface';
import auth from './services/auth';
import Logo from './pics/spawnLogo.png'

import styleService from './services/styleService';
import Character from './view/character';
import CharacterJournal from './view/characterJournal';
import CharacterStrategy from './view/characterStrategy';
import Lore from './view/lore';
import AdventureLog from './view/adventureLog';
import NavThemeFactory from './componentListNPM/themes/navThemes/navThemeFactory';
import ThemeFactory from './componentListNPM/themes/themeFactory';
import Register from './componentListNPM/register';
import Login from './componentListNPM/componentForms/login';
//fonts


//model
export default class App extends Component {
  constructor(props){
    super(props);
        this.handleChange=this.handleChange.bind(this);
        this.dispatch=this.dispatch.bind(this);

    this.state={
      styles: styleService.getstyles(),
      loginPage: false,
      registerPage:false,
      user: undefined,
      componentListInterface: new ComponentListInterface(this.dispatch),
      componentList: undefined,
      currentCharacter: undefined,
      themeFactory: new ThemeFactory(),
      navFactory: new NavThemeFactory(),
      navType:"topBar",
      // switchcase: "home",
      defaultTheme: "legato",
      globalTheme: "",
      login : true,
      
      
      operate: undefined,
      operation: "cleanJsonPrepare",
      object: undefined,
      currentComponent: undefined,
      backend: false,
      backendUpdate: undefined,
      
      backendUpdate:[],
      backend: false,
      // myswitch: "home",
      switchCase:[
        {path:"/", comp:Character, name: "Home" },
        {path: "/log", comp:AdventureLog, name: "Adventure Log"},
        {path: "/journal", comp:CharacterJournal, name: "Character Journal"},
        {path: "/lore", comp:Lore, name:"GM Lore"},
        {path:"/strategy", comp:CharacterStrategy, name: "Character Strategy" },

      ]


    }
  }

  async componentDidUpdate(props, state){
    if(this.state.backend){
      await this.setState({backend: false});
      auth.dispatch(this.state.backendUpdate, this.state.email);
    }
    
    if(this.state.operate!==undefined){
      let operate = this.state.operate;
      let operation= this.state.operation;
      let object= this.state.object;
      await this.setState({operate:undefined, object:undefined, operation:"cleanJsonPrepare"});

      
      let currentComponent = await this.state.componentListInterface.getOperationsFactory().operationsFactoryListener({operate: operate, object:object, operation: operation});
      
      console.log(currentComponent);
      let key = await this.state.componentListInterface.getOperationsFactory().getSplice(operate);
      if(currentComponent!==undefined){
        this.setState({currentComponent: currentComponent[key][0]});
      }
    }

    
    
    

  }

  async dispatch(obj){

    await this.setState(obj)
}

handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
        [name]: value,
    })
}

  async componentDidMount(){
    let list;
    if(this.state.componentListInterface && this.state.componentList===undefined){
        list= await this.state.componentListInterface.createComponentList();
        await this.setState({
          componentList:list
        })
      
    }

    

  if(this.state.navFactory){
    let f = this.state.navFactory.getNavThemeFactory();
    let styles = f["defaultTopNav"];
    
    this.setState({navStyles:styles, linkStyleDefault: styles?.link});

  }
  if(this.state.themeFactory){
    let f = this.state.themeFactory.getThemeFactory();
    let styles = f[this.state.globalTheme!==""? this.state.globalTheme: this.state.defaultTheme!==""? this.state.defaultTheme: "default"];
    
    this.setState({styles:styles});
  }
    
    
  }

  //ENTIRE view
  render(){
    let styles = this.state.styles;
  return (

    <div className= "fontNormal" style={{
      width:"100vw", 
      height:"100vh", 
      display:"flex", 
      
      zIndex:"100",

       
      flexDirection:"column"}}>
        

      <div style={{
        
        width: "100vw",
       
        }}>
      </div>
      {this.state.login && <div onClick={()=>{this.setState({login:false, registerPage:true})}}>Register</div>}
      {this.state.registerPage && <div onClick={()=>{this.setState({login:true, registerPage:false})}}>Login</div>}

      {this.state.login && <Login app={{run:this.run, state:this.state, handlechange:this.handleChange, dispatch:this.dispatch, factory:this.factory}} />}
      {this.state.registerPage && <Register app={{run:this.run, state:this.state, handlechange:this.handleChange, dispatch:this.dispatch, factory:this.factory}} />}

      {(!this.state.login && !this.state.registerPage) &&<Dispatch app={{run:this.run, state:this.state, handlechange:this.handleChange, dispatch:this.dispatch, factory:this.factory}} />}
    </div>
  )}
}
