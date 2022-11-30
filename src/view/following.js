import { Component } from 'react';
import "../App.css"
export default class Follower extends Component {
  constructor(props){
    super(props);

  }

  render(){
    let app = this.props.app
    let pic = this.props.app.state.componentList?.getComponents();
    let state = app.state;
    let styles =state.styles;
    let switchcase = app.state.switchcase;
    let dispatch= app.dispatch
  return (
    <div>
      
  
      {pic?.map((picture, index)=>
      <div>
        {(picture.getJson().type!=="comment" &&picture.getJson().type!=="follow" )&&(<>
        {(picture.getJson().owner===app.state.currentFollowing.getJson()._id && !picture.getJson().type.includes("keep") && !picture.getJson().type.includes("user")) &&(
          <div key={index} style={{display: "flex", flexDirection: "column", flexWrap: "nowrap", height:"fit-content" }}>
          <img style= {{objectFit: "cover",
                      maxWidth: styles.mySpawn.imgW, 
                      minWidth: styles.mySpawn.imgW,
                      maxHeight: styles.mySpawn.imgW, 
                      marginBottom: styles.margins.marginSmallH, }} src={picture.getJson().picURL} /><div>
                        
                        <div onClick={dispatch.bind(this, {myswitch: "feed", pic: picture, picChange:true  })}>{picture.getJson().name}</div>
                      
                      <div>{picture.getJson().description}</div> 
          
          </div> 
        </div>
)}
      </>  )}
  </div>
      )}
    </div>
  )}
}
//           {/* <Gallery state = {this.props.state} handlechange = {this.props.handlechange} /> */}