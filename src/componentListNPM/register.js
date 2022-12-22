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
    componentDidMount(){
        this.props.app.dispatch({object:1, operate:"adduser", operation:"cleanPrepare"})
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
        debugger
        await authService.uploadPics(this.state.selectedFile, this.state.path);
        let user =await authService.register(this.state.email, this.state.password)
        if(user){
            await authService.getuser(this.state.email, this.props.app.state.componentList)
            await this.props.app.state.currentComponent?.getOperationsFactory().componentDispatch({addemail:this.state.email, addfirstName:this.state.firstName, addlastName:this.state.lastName, 
                 add_id:this.state.email, addowner:this.state.email})
            await this.props.app.state.currentComponent?.getPicSrc(this.state.path);
            await this.props.app.dispatch({ email: this.state.email})
            await this.props.app.state.currentComponent?.getOperationsFactory().run();
            this.props.app.dispatch({login:false, register:false, loginPage:false, registerPage:false, user:this.props.app.state.currentComponent})
        }
        
        
	};
 
    render(){
        let app = this.props.app;
        let state = app.state;
        
        let styles =state.styles;
        let dispatch = app.dispatch;
        let component = state.currentComponent;
        let compJson = component?.getJson();

        return(
                    <div style={{width:"30vw", height:"40vh", borderRadius:"10px, 10px, 10px, 10px", background:"white", opacity:"1"}}>
                        <div style={{marginLeft:"20px",}}>
                        <h1 >Player Registration</h1>

                        <div className="form-group">
                            <label htmlFor="lastName"><div >First Name</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="firstName"/>
                        </div>            
                        <div className="form-group">
                            <label htmlFor="lastName"><div >Last Name</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="lastName"/>
                        </div>  
                        <div  className="form-group">
                            <img style={{width:"auto", height:"8vh", borderRadius:"50%"}} src={this.state.pic}/>
                            <label htmlFor="lastName"><div >Avatar</div></label>
                            <input accept="image/png, image/gif, image/jpeg" style={{ cursor: "pointer", width: "100px",
                        height: "200px",  }} type="file" name="file" onChange={this.changeHandler}  />
                                                </div>  
                       
                        
                     <div  className="form-group">
                            <label htmlFor="lastName"><div >Email Address</div></label>
                            <input style ={{width:"80%",}} type="text" className="form-control" id="last"   onChange={this.handleChange} name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"><div >Password</div></label>
                            <input style ={{width:"80%",}} type="password" className="form-control" id="last"   onChange={this.handleChange} name="password"/>
                        </div>
                        <div>
                         <button class= "btn" onClick={this.handleSubmission}>Register</button>
                         
                     </div>
                     </div>
                 </div>
             )
    }
	
}