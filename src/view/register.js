import React, { Component } from 'react';
import authService from '../services/auth';
export default class Register extends Component {
    constructor(props){
        super(props);
        this.handleSubmission= this.handleSubmission.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
        this.wrapperRef = React.createRef();

        this.setWrapperRef = this.setWrapperRef;
        this.state={
            selectedFile: undefined,
            path: undefined,
            email: "",
            password: "",
            firstName:"",
            lastName:"",
            socialHandle:"",
            bio:"",
            website:"",
            socialHandle:"",

        }
    }

    changeHandler = async (event) => {
        let path = "images/" + event.target.files[0].name;
        await fetch(event.target.files[0])
            .then(function (response) {
                return response.blob()
            })
            .then(function (blob) {
                // here the image is a blob
            });
        this.setState({
            selectedFile: event.target.files[0],
            path: path,
            changed: true,
            pic: URL.createObjectURL(event.target.files[0])
        })
    };
	handleChange = async (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
        
	};


	async handleSubmission()  {
        //debugger
        await authService.uploadPics(this.state.selectedFile, this.state.path);
        let user =await authService.register(this.state.email, this.state.password)
        if(user){
            await this.props.app.state.currentComponent?.getOperationsFactory().componentDispatch({addemail:this.state.email, addfirstName:this.state.firstName, addlastName:this.state.lastName, addbio:this.state.bio, addwebsite:this.state.website, addsocialHandle: this.state.socialHandle, add_id:this.state.email, addowner:this.state.email})
            await this.props.app.state.currentComponent?.getPicSrc(this.state.path);
            await this.props.app.dispatch({ email: this.state.email})
            await this.props.app.state.currentComponent?.getOperationsFactory().run();
            this.props.app.dispatch({login:true, register:false, loginPage:false, registerPage:false, user:this.props.app.state.currentComponent})
        }
        
        
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
                    <div style={{width:"30vw", height:"40vh", borderRadius:"10px, 10px, 10px, 10px", background:"white", opacity:"1"}}>
                        <div style={{marginLeft:"20px",marginTop: styles.margins.marginMediumH}}>
                            
                        <div style={{fontFamily: styles.fonts.fontTitle,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader5,}}>Create Spawner Account</div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <img style={{width:"auto", height:"8vh", borderRadius:"50%"}} src={this.state.pic}/>
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal, marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Avatar</div></label>
                            <input accept="image/png, image/gif, image/jpeg" style={{ cursor: "pointer", width: "100px",
                        height: "200px",  }} type="file" name="file" onChange={this.changeHandler}  />
                                                </div>  
                       
    
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>First Name</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="firstName"/>
                        </div>            
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Last Name</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="lastName"/>
                        </div>     
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Spawner Handle</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="spawnerHandle"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Bio </div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="bio"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Your Website</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="website"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Social Link URL</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="socialHandle"/>
                        </div>
                        
                     <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Email Address</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="email"/>
                        </div>
                        <div style={{marginTop: styles.margins.marginMediumH}} className="form-group">
                            <label htmlFor="lastName"><div style={{fontFamily: styles.fonts.fontNormal,marginRight: styles.margins.marginSmallW, fontSize: styles.fonts.fontHeader2,}}>Password</div></label>
                            <input style ={{width:"80%",}} type="password" className="form-control" id="last"   onChange={this.handleChange} name="password"/>
                        </div>
                        <div>
                         <button style={{...styles.buttons.buttonFollow, marginTop: styles.margins.marginMediumH}} class= "btn" onClick={this.handleSubmission}>Register</button>
                         
                         <div style={{marginTop: styles.margins.marginMediumH, marginLeft:"10px", cursor:"pointer"}} onClick={dispatch.bind(this, {registerPage:false})}> Go Back to Login</div>
                     </div>
                     </div>
                 </div>
             )
    }
	
}