import { Component } from 'react';
import "../App.css"
import DelButton from '../componentListNPM/componentForms/deleteButton';
import RunButton from '../componentListNPM/componentForms/runButton';
import ParentFormComponent from '../componentListNPM/parentFormComponent';


export default class AdventureLog extends Component {
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
    let list = state.componentList?.getList("adventureLog")

    return (
      <div style={{width:"100vw", paddingTop: "10px"}}>
          <ParentFormComponent style={{height:"200px", border:"1px solid black"}} type="richEditor" name="html" app={app} prepareOnClick={{operation: "cleanJsonPrepare", operate:"addadventureLog"}} obj={{owner:state?.user?.getJson()._id, type:"adventureLog"}} />
          <RunButton app={app} />
          <div >{list?.map((log, index)=>
          
          <div ><div onClick={()=>{
            this.setState({
              [index+"edit"]:!this.state[index+"edit"]})
              dispatch({operate: "update", operation: "cleanPrepare", obj: log})
            }
            
          
          }>edit</div> <DelButton obj={log}/> {this.state[index+ "edit"]?(  <>       
            <ParentFormComponent style={{height:"200px", border:"1px solid black"}} type="richEditor" name="html" app={app}  obj={log} /><RunButton onChange={()=>{this.setState({[index+"edit"]:false})}} app={app} /></> 
            ):( <div dangerouslySetInnerHTML={{__html: log.getJson().html}}  />)}</div>
          )}</div>
      </div>
    )
  }
}

