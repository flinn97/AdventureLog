import { Component } from 'react';
import "../App.css"
import auth from '../services/auth';
import Notes from './comment';
export default class Following extends Component {
  constructor(props){
    super(props);
    
    this.handleClose = this.handleClose.bind(this)

    this.addnote = this.addnote.bind(this)
      this.state={

      }
  }

  addnote(obj){
      this.setState({[obj.getJson()._id + "note"]: true})
      this.props.app.dispatch({operation: "cleanPrepare", operate: "update", object: obj})
  }
  handleClose(key){
    
    this.setState({[key]: false})
  }
  render(){
    let app = this.props.app
    let state = app.state;
    let styles =state.styles;
    let following = app.state.componentList?.getList("follow");
    let switchcase = app.state.switchcase;
    let dispatch= app.dispatch
  return (
    <div style={{width:"80vw"}}> 
      
      {following?.map((followinger, index)=>
      <div style={{
        width:"26.67vw",
        fontFamily:styles.fonts.fontBold, 
        
        fontSize: styles.fonts.fontSubheader1, 
        marginLeft: ".2vw"}} key={index }>{followinger.getJson().following &&( 
        <div style={{
          width:"26.67vw"}}>
          <div style={{
            
        marginLeft: ".2vw", marginTop: ".2vh",
        fontFamily:styles.fonts.fontBold, 
        
        fontSize: styles.fonts.fontSubheader1,  cursor: "pointer",}}
        onClick={async ()=>{
        //debugger
        let user = await auth.getPicOwner(app.state.componentList, followinger.getJson().followID);
        dispatch({currentFollowing: user, myswitch: "following"})
      }}>{followinger.getJson().name} </div>
      </div>)}
      
      <div style={{...styles.buttons.buttonUnfollow}}onClick={followinger.unFollow?.bind(this, app.state.componentList)}>Unfollow</div></div>
      )}
    </div>
  )}
}
//           {/* <Gallery state = {this.props.state} handlechange = {this.props.handlechange} /> */}