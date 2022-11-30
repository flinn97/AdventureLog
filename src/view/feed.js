import { Component } from 'react';
import "../App.css"
// import Gallery from './pictures';
import left from '../pics/left_arrow.png'
import right from '../pics/right.png'
import picservice from '../services/picservice';
import Beholder from "../pics/beholder.webp";
import Notes from './comment';
import Keep from '../pics/keep.png';
import LikeHeart from '../pics/likeheart.png';
import styleService from '../services/styleService';
import EditQuill from '../pics/EditQuill.png';

export default class Feed extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      comment: false
    }
  }



  render() {
    let app = this.props.app;
    let state = app.state;
    let styles =state.styles;
    let dispatch = app.dispatch;
    let complist = app.state.componentList.getList("follow");
    let followIDarr = [];
    
     for(const key in complist){
      followIDarr.push(complist[key]?.getJson().followID);
     }
    let currentComponent = app.state.currentComponent;
    let user = app.state.componentList?.getComponent("user");
    return (
      <div style={{ 
        display:"flex", flexDirection: "column", alignItems: "center", alignSelf: "center", justifyContent: "center", width:"fit-content"}}>
        <div style={{ 
          alignItems: "center", justifyContent: "center", }}>
          <div style={{
            display:"flex", flexDirection:"row", justifyContent:"space-between",}}>


            <div style={{marginBottom:styles.margins.marginSmallH, justifyContent:"center", }}>
  {/* TITLE */}
          <div style={{justifyContent:"center", 
                fontSize: styles.fonts.fontHeader4,
                fontWeight: styles.fonts.fontweightMed,
                fontFamily: styles.fonts.fontNormal,
                userSelect: "text",
                marginLeft: styles.margins.marginSmallW,
                textTransform: "capitalize",
                textDecoration: "underline "+ styles.colors.Grey2,
                marginBottom: ".2vh",

        }}>{app.state.pic?.getJson().name}</div>
{/* SUBTITLE */}
          <div 
          style={{ 
                width: styles.myFeed.subWidth,
                fontSize: styles.fonts.fontHeader1,
                fontWeight: styles.fonts.fontweightMed,
                fontFamily: styles.fonts.fontLight,
                marginLeft: styles.margins.marginMediumW,
                
                userSelect: "text",}}
          >{app.state.pic?.getJson().description}</div>
          </div>

{/* KEEP HERE */}
          <div 
          style={{
          display: "flex", 
          flexDirection:"column",
          justifyContent:"center", 
          alignItems: "center",
          width:styles.myFeed.keepItemW}}>


{(Object.keys(app.state.pic?.getJson().keepers).includes(app.state.user?.getJson()._id))
                  ||(app.state.pic?.getJson().owner === app.state.email) ? (
                    
                    <img
                    
                    style={{
                      width:"auto", 
                      height: styles.myFeed.keepH, 
                      cursor: "pointer", 
                      objectFit:"contain"}} 
                src={Keep}/>
                  ):(
                  
                  <img
                  onClick={currentComponent?.keep?.bind(this, app.state.user)}  
                   style={{
                    width:"auto", 
                    height: styles.myFeed.keepH, 
                    cursor: "pointer", 
                    objectFit:"contain",
                    filter: styles.mySpawn.satFilter,}}
              src={Keep}/>)
            }
            {
          (Object.keys(app.state.pic?.getJson().keepers).includes(app.state.user?.getJson()._id))
          ||(app.state.pic?.getJson().owner === app.state.email) ? (  <div 
            style={{
              color:styles.colors.linkVisitedColor, 
              fontWeight: "600", 
              fontSize: styles.fonts.fontHeader1,
                fontWeight: styles.fonts.fontweightMed,
                fontFamily: styles.fonts.fontTitle,
              cursor: "pointer"}}>
                {app.state.pic?.getJson().keep} Keeps</div>):(
        <div onClick={currentComponent?.keep?.bind(this, app.state.user)}   style={{
          color:styles.colors.lightFontColor, 
          fontWeight: "600", 
          fontSize: styles.fonts.fontSubheader1,
            fontWeight: styles.fonts.fontweightMed,
            fontFamily: styles.fonts.fontTitle,
          cursor: "pointer"}}>{app.state.pic?.getJson().keep} Keeps</div>)}
        </div>


          </div>
          <hr style={{marginBottom:styles.margins.marginSmallH}}></hr>
          

        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>

        
        <img  onClick={() => {
            let list = app.state.componentList.getList(app.state.switchcase)
            let i = app.state.index;
            if (i - 1 <= 0 ) {
              i = 0
            }
            else {
              i = i - 1
            }


            dispatch({ pic: list[i], index: i, picChange: true })
          }} 
          ///ARROW LEFT
          style={{ width: styles.myFeed.arrowSizeW, height: styles.myFeed.arrowSizeH, marginRight: styles.myFeed.arrowMargin, cursor:"pointer" }} src={left} />

        <img style={{ 
          width: styles.myFeed.feedW, 
          height: styles.myFeed.feedH,
          objectFit: "scale-down", 
          background: "black"}} 
          className="picture" id="pic" src={app.state.pic?.getJson().picURL} />
        <img
          onClick={() => {
            //debugger
            let list = app.state.componentList.getList(app.state.switchcase)
            let i = app.state.index;
            if (i + 1 === list.length) {
              i = 0
            }
            else {
              i = i + 1
            }


            dispatch({ pic: list[i], index: i, picChange: true })
          }}

          ///ARROW RIGHT
          style={{ width: styles.myFeed.arrowSizeW, height: styles.myFeed.arrowSizeH, marginLeft: styles.myFeed.arrowMargin, cursor:"pointer" }} src={right} />
          </div>

{/* ///below the image\\\ */}
          <div style={{display:"flex", flexDirection:'row', justifyContent:"space-between",}}>


{/* THIS IS NAME AND FOLLOW BUTTON */}
<div style={{display:"flex", flexDirection:'column', justifyContent:"space-between"}}>
          <div style={{
            fontWeight: styles.fonts.fontweightMed,
            fontFamily: styles.fonts.fontLight,
            fontSize: styles.fonts.fontSubheader1,
            marginBottom: styles.margins.marginSmallH
}}>{app.state.picOwner?.getJson().name} 
          
          </div>
      
{app.state.pic?.getJson().owner !== app.state.user?.getJson()._id && 
(<div style={{...styles.buttons.buttonFollow, }}>{followIDarr.includes(app.state.picOwner?.getJson()._id)?(<div style={{ ...styles.buttons.buttonFollowing
}}>Following</div>):(<div   style={{ ...styles.buttons.buttonFollow, border: ".1rem solid rgba(15,15,15,.00)",
}}onClick= {() => {
            let complist = app.state.componentList.getList("follow");
          let arr = [];
          //debugger
           for(const key in complist){
            arr.push(complist[key]?.getJson().followID);
           }
           if(!arr.includes(app.state.picOwner?.getJson()._id)){
            app.state.user?.follow(app.state.picOwner)
           }
           }}>
        Follow</div>)}</div>)}
        
  </div>

{/* ///LIKES\\\ */}
        <div style={{display: "flex", justifyContent: "center", cursor:"pointer" }}>
{app.state.pic?.getJson().owner === app.state.email?(<div style={{color:styles.colors.linkVisitedColor}}>{app.state.pic?.getJson().keep}</div>):(<>
                  
        {(Object.keys(app.state.pic?.getJson().likers).includes(app.state.user?.getJson()._id))  ? (
// LIKED
        (<div onClick={(app.state.pic?.unlike.bind(this, app.state.user))}  style={{ position:"relative", width: styles.myFeed.likeItemW, justifyContent: "center", height:"100%", }}> <img style={{ 
          width: "100%",
          objectFit: "contain",
        }} 
          src={LikeHeart} />
          
          <div 
          
          style={{
                      position:"absolute",
                      display: "flex",
                      justifyContent: "center",
                      color: styles.colors.linkVisitedColor,
                      fontSize: styles.fonts.fontSubheader2,
                      fontFamily: styles.fonts.fontBold,
                      fontWeight: styles.fonts.fontweightMed,
                      width:"100%",
                      top: "23%",
        
        }}> 
        
        
        {app.state.pic?.getJson().like}</div></div>)):(
// NOT LIKED
        (<div onClick={(app.state.pic?.like.bind(this, app.state.user))} style={{ position:"relative", width: styles.myFeed.likeItemW, justifyContent: "center",}}> <img style={{ 
          width: "100%",
          objectFit: "contain",
          filter: styles.mySpawn.satFilter,
        }} 
          src={LikeHeart} />
          
          <div style={{
                      position:"absolute",
                      display: "flex",
                      justifyContent: "center",
                      
                      color: styles.colors.linkLightColor,
                      fontSize: styles.fonts.fontSubheader2,
                      fontFamily: styles.fonts.fontNormal,
                      width:"100%",
                      top: styles.myFeed.likeCounter
                      
        }}> 
        
        
        {app.state.pic?.getJson().like}</div></div>))
          }</>)}
        </div>
        </div>


        </div>


        {/* ///COMMENTS\\\ */}
        <div  style={{background:"white", marginTop:styles.margins.marginMediumH, borderRadius: "2vw", padding:"1.8vw", width: styles.myFeed.feedW,}}> 

        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", verticalAlign:"center", marginTop: styles.margins.marginSmallH, 
            marginBottom: styles.margins.marginMediumH, 
            margins:styles.margins.marginSmallW ,
            }}>
          
          <div style={{
            fontFamily: styles.fonts.fontBold,
            fontSize: styles.fonts.fontHeader3
            }}>Comments:</div>

        {!this.state.comment ? (
          <div style={{
            ...styles.buttons.buttonComment,
            fontFamily: styles.fonts.fontNormal,
          }} onClick={() => {
            dispatch({ operate: "addcomment", object: { picOwner: app.state.pic?.getJson()._id, owner: app.state.user?.getJson()._id, name: app.state.user?.getJson().name } })
            this.setState({ comment: !this.state.comment })
          }}>Add a Comment</div>) : (<Notes app={app}  handleClose={() => { this.setState({ comment: !this.state.comment }) }} />)}

</div>

        {app.state.componentList.getList("comment", app.state.pic?.getJson()._id, "picOwner")?.map((comment, index) =>
          <div style={{ ...styles.comments,
            
            
          }} key={index}>
            {!this.state[index + "comment"] ? (
              <div style={{display:"flex", flexDirection: "row", width:"100%", justifyContent:"space-between",}}>
            <div style={{ ...styles.comments,
              
              
            }}>{comment?.getJson().note}
            </div>

            {app.state.user?.getJson()._id===comment?.getJson().owner && (<div style={{
            ...styles.buttons.buttonEdit,
            
          }} onClick={() => {
            dispatch({ operate: "update", operation: "cleanPrepare", object: comment })
            this.setState({ [index + "comment"]: true })
          }}> <img style={{ 
            width: styles.myFeed.editW, 
            objectFit: "contain", 
          }} 
            className="picture" id="pic" src={EditQuill} />
            </div>)}
          
          </div>
          ) : (<Notes app={app} obj={comment} handleClose={() => { this.setState({ [index + "comment"]: !this.state[index + "comment"] }) }} />)}</div>
        )}
</div>
      </div>

    )
  }
}
//           {/* <Gallery state = {this.props.state} handlechange = {this.props.handlechange} /> */}
// update:[[app.state.pic, {keep: app.state.pic?.getJson().keep +1}]]}, true)