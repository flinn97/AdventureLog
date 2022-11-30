import { Component } from 'react';
import SpawnPic from '../pics/spawnPic.png';
import "../App.css"
export default class Spawns extends Component {
  constructor(props){
    super(props);

  }

  render(){
    let app = this.props.app
    let pic = this.props.app.state.componentList?.getComponents();
    let state = app.state;
    let styles =state.styles;
    let switchcase = app.state.switchcase;
    let dispatch= app.dispatch;
    let handle = app.state.user.getJson().spawnerHandle;
    let bio = app.state.user.getJson().bio;
    let website = app.state.user.getJson().website;
    let social = app.state.user.getJson().socialHandle;



    
  return (
    <div style={{
      display: "flex",
      overflow: "visible",
      flexDirection: "column", 
      alignItems: "center", display:"flex", flexDirection: "column", alignItems: "center", alignSelf: "center", justifyContent: "center", width:"fit-content",
      
      width:"100%"}}>
        <div style={{
        alignSelf: "flex-start",
        display: "flex",
        justifyContent: "space-around",
        }}>
      <div style={{
        alignSelf: "flex-start",
        fontSize: styles.fonts.fontHeader5,
        fontFamily: styles.fonts.fontTitle,

        //fontWeight: styles.fonts.fontweightMed,
                              }}>My Spawns</div>
       </div> 

        
       <div style={{...styles.buttons.buttonCreate, cursor:"pointer", alignSelf: "flex-start", width: "8.6vw", color: "maroon", justifyContent: "space-around", 
       fontSize: "1.5vh", marginTop: styles.margins.marginSmallH, textDecoration:"underline",
        fontFamily: styles.fonts.fontNormal }}  
      onClick={dispatch.bind(this,{popupSwitch:"editUser"})}> 
      <div>Edit My Account 
        </div></div>

      <div style= {{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight:styles.margins.marginMediumW,
        marginLeft:styles.margins.marginMediumW,
        marginTop:styles.margins.marginLargeH,
        justifyContent: "left",
        width: "100%"
        }}>

<div onClick= {dispatch.bind(this, {login: true, operation: "cleanPrepare", operate: "addpic" , myswitch: "upload", uploadKey:"add" })} 
      style={styles.buttons.buttonCreate}>
        
      <img style={{ width: "3.56vw", 
                    justifyContent: "space-around",
                    marginLeft: styles.margins.marginSmallW,
                    marginRight: styles.margins.marginSmallW,
                    marginTop: styles.margins.marginSmallH,
                    marginBottom: styles.margins.marginSmallH,
                    }} src={SpawnPic}/>
      
                              <div style={{
                    marginRight: styles.margins.marginSmallW,
                    fontFamily: styles.fonts.fontLight,
                    letterSpacing: ".01rem",
                    }}>Create Spawn</div></div>

          {/* BIO and stuff */}
<div style={{
        display: "flex",
        flexDirection: "column",
        width: styles.mySpawn.bioW,
        
        marginLeft:styles.margins.marginMediumW,
        fontFamily: styles.fonts.fontLight,
        fontSize: styles.fonts.fontSubheader2,
        
        
        }}>
          
            <div style={{
            userSelect: "text",  
            fontFamily: styles.fonts.fontNormal,           
            }}
        >{handle} </div>

            <div style={{
            userSelect: "text",
            fontFamily: styles.fonts.fontLight,
            }}
        >About: {bio} </div>

            <div style={{
            userSelect: "text",
            fontFamily: styles.fonts.fontLight,
            }}
        >Website: {website} </div>

            <div style={{
            userSelect: "text",
            fontFamily: styles.fonts.fontLight,
            }}
        >Social: {social}</div>
</div>

</div>
{/* ARRAY */}
      <div style={{
        display: "flex",
        flexDirection: "row",
       
        
        marginLeft:styles.margins.marginMediumW,
        marginTop:styles.margins.marginLargeH,
        justifyContent: "left",
        width: "100%", flexWrap: "wrap",
        }}>


      {pic?.map((picture, index)=>
      <div style={{width: styles.mySpawn.keepWidth, marginBottom:"1vh", marginRight:"1vw",  flexWrap: "wrap"}}>
        
        {(picture.getJson().type!=="comment" &&picture.getJson().type!=="follow" )&&(<div>

        {(picture.getJson().owner===app.state.email && !picture.getJson().type.includes("keep") && !picture.getJson().type.includes("user")) &&(

          <div key={index} style={{display:"flex", flexDirection:"row",  flexWrap: "wrap"}}>
          <img style= {{width: styles.mySpawn.keepWidth, 
                        height:"auto", 
                        objectFit: "scale-down"}} src={picture.getJson().picURL} />
          <div style={{display:'flex', flexDirection:'column'}}>
{/* THIS IS THE FIRST ROW */}
            <div style={{display:"flex", flexDirection:"row",  justifyContent:"space-between", width: styles.mySpawn.keepWidth,}}>
              <div style={{ fontFamily: styles.fonts.fontNormal,  fontSize: styles.fonts.fontSubheader3, }}>
              <div style={{ fontFamily: styles.fonts.fontBold, fontSize: styles.fonts.fontHeader1, width: "100%",  flexWrap: "wrap", }} onClick={dispatch.bind(this, {myswitch: "feed", pic: picture, picChange:true, switchcase:picture.getJson().type  })}>{picture.getJson().name}</div>
              </div>
              <div style={{ ...styles.buttons.buttonEdit,
                display:"flex", 
                flexDirection:"row", 
                cursor:"pointer", 
               
                alignSelf:"start",
                background:"white",
                width: "12%",
                borderRadius:"29%",
                justifyContent: "center",
                marginBottom: "2vh"

                }} 
              onClick={dispatch.bind(this, {myswitch: "upload", uploadKey: "update", operation: "cleanPrepare", operate:"update", object: picture})}>
                EDIT</div>
            </div>


            <div style={{ fontFamily: styles.fonts.fontNormal,  fontSize: styles.fonts.fontSubheader2,}}>

              <div style={{ flexWrap: "wrap", fontFamily: styles.fonts.fontNormal, marginBottom:"1vh", fontSize: styles.fonts.fontSubheader3, width: styles.mySpawn.keepWidth,}}>{picture.getJson().description}</div>
              </div>
              <hr></hr>
            <div style={{display:"flex",flexWrap: "wrap", flexDirection:"row", fontFamily: styles.fonts.fontNormal, width: styles.mySpawn.keepWidth, justifyContent:"space-between",}}>
            <div style={{
              marginRight:".2vw", ...styles.buttons.buttonUnfollow, cursor: "", background:"", border:"", justifyContent:"left",
              color: styles.colors.darkFontColor,
              fontFamily: styles.fonts.fontBold, 
              fontSize: styles.fonts.fontSubheader2, width:"fit-content"
          }}>{picture.getJson().keep} Keeps</div>
            {/* I REMOVED THE LIKES, I AM NOT SURE WE NEED THIS INFO ON my spawns
            <div style={{ fontFamily: styles.fonts.fontNormal,  fontSize: styles.fonts.fontSubheader3,}}>Like: {picture.getJson().like}</div> */}
            {/* REMOVED BECAUSE NOT IMPLEMENTED */}
            {/* <div style={{ fontFamily: styles.fonts.fontNormal,  fontSize: styles.fonts.fontSubheader3,}}>Promote</div> */}

            <div style={{ 
              ...styles.buttons.buttonUnfollow, 
              display:"flex", flexDirection:"row", cursor:"pointer", alignContent:"center", height: "fit-content", width: "fit-content", padding: "2px",
              fontFamily: styles.fonts.fontNormal,  fontSize: styles.fonts.fontSubheader2
            }}
          onClick={async ()=>{
            await app.dispatch({objForDelete:picture});
            app.dispatch({popupSwitch:"del"})

          }}
          >Delete</div>
            </div>
             
          
          </div> 
        </div>

)}
      </div>  )}
  </div>
      )}</div >

    </div>
  )}
}
//           {/* <Gallery state = {this.props.state} handlechange = {this.props.handlechange} /> */}