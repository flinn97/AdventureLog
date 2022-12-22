import { Component } from 'react';
import "../App.css"


export default class ProfileTag extends Component {
  constructor(props){
    super(props);
  }

  


  render(){
    let app=this.props.app;
    let state = app.state;
    let styles =state.styles;
    
  return (
    
        <div style={{ display:"flex", flexDirection:"row",  }}>
          <div><div>
            My Account</div>
            <div onClick={()=>{app.dispatch({login:true, user:undefined})
            localStorage.setItem("user", undefined);
            window.location.reload();  
          }
            
          }>
              Log Out
              </div></div>
          <img src={state.user?.getJson()?.picURL? state.user?.getJson()?.picURL: "//ssl.gstatic.com/accounts/ui/avatar_2x.png"} />

        </div>
  )}
}


