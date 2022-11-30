import React, { Component } from 'react';
import authService from '../services/auth';
export default class EditUser extends Component {
    constructor(props){
        super(props);
        this.handleSubmission= this.handleSubmission.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef;
        this.state={
            email: this.props.app.state.user.getJson().email,
           
            firstName:this.props.app.state.user.getJson().firstName,
            lastName:this.props.app.state.user.getJson().lastName,
            socialHandle:this.props.app.state.user.getJson().socialHandle,
            bio:this.props.app.state.user.getJson().bio,
            website:this.props.app.state.user.getJson().website,
            spawnerHandle:this.props.app.state.user.getJson().spawnerHandle,
            
        }
    }

	handleChange = async (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
        
	};


	async handleSubmission()  {
        //debugger
        let user =this.props.app.state.user
        user.setJson({...user.getJson(), ...this.state});
        await user.getOperationsFactory().cleanPrepareRun({update:user});
        this.props.app.dispatch({popupSwitch:""})
    
	};
 
    render(){
        let app = this.props.app;
        let state = app.state;
        
        let styles =state.styles;
        let dispatch = app.dispatch;
        let component = state.currentComponent;
        let compJson = component?.getJson();
        let opps = component?.getOperationsFactory();
        let key =compJson?.collection? "update": "add";
        return(
                    <div style={{width:"82vw", height:"100vh", background:styles.colors.Grey2, position:'absolute', zIndex:"700", borderRadius: "2vw"}}>


                        
                        <div style={{
                    fontFamily: styles.fonts.fontNormal,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginSmallH,
                    marginLeft: "1.2vw",
                    cursor:"pointer",
                    color: styles.colors.Red2,
                    marginTop: ".9vh",
                    alignContent: "center",
                }} onClick={dispatch.bind(this, { myswitch: "spawn", switchcase: "spawn", popupSwitch:"", })}>Cancel</div>
                        <div style={{marginLeft:"20px",marginTop: styles.margins.marginMediumH}}>
                        <div style={{fontFamily: styles.fonts.fontTitle,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader5,}}>Edit Spawner Account</div>   

                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                        
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal, marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Avatar</div></label>
                            <input accept="image/png, image/gif, image/jpeg" style={{ cursor: "pointer", width: "4.79vw",
                        height: "3vh",  }} type="file" name="file" onChange={this.changeHandler}  />
                        <img style={{width:"auto", height:"8vh", borderRadius:"50%", zIndex:"700",}} src={this.state.pic}/>
                                                </div>  

                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>First Name</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"  value={this.state.firstName} onChange={this.handleChange} name="firstName"/>
                        </div>            
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Last Name</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last" value={this.state.lastName}  onChange={this.handleChange} name="lastName"/>
                        </div>     
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Spawner Handle</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last" value={this.state.spawnerHandle}  onChange={this.handleChange} name="spawnerHandle"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Bio</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last" value={this.state.bio}  onChange={this.handleChange} name="bio"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Website</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last" value={this.state.website}  onChange={this.handleChange} name="website"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Social Link</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last" value={this.state.socialHandle}  onChange={this.handleChange} name="socialHandle"/>
                        </div>
                        
                     <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Email Address</div></label>
                            <input disabled style ={{width:"80%",}} type="text" className="form-control" id="last" value={this.state.email}  onChange={this.handleChange} name="email"/>
                        </div>

                        <div>
                         <button style={{...styles.buttons.buttonFollow, marginTop: styles.margins.marginMediumH}} class= "btn" onClick={this.handleSubmission}>Save Changes</button>
                         
                        
                     </div>
                     </div>
                 </div>
             )
    }
	
}