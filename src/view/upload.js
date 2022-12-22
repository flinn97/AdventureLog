import React, { Component } from 'react';
import auth from '../services/auth';
import { ref, } from "firebase/storage";
import { storage, } from '../firbase.config.js';
import Beholder from "../pics/dragon.jpg";
export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.state = {
            selectedFile: undefined,
            path: undefined,
            name: "",
            type: "",
            pic: Beholder
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    changeHandler = async (event) => {
        let opps = this.props.app.state.componentList.getOperationsFactory();
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


    async handleSubmission() {
        //debugger
        if (this.state.changed) {
            await auth.uploadPics(this.state.selectedFile, this.state.path);
        }
        await this.props.app.state.componentList.getOperationsFactory().componentDispatch({
            [this.props.app.state.uploadKey + "type"]: "character",
            [this.props.app.state.uploadKey + "name"]: this.state.name,
            [this.props.app.state.uploadKey + "owner"]: this.props.app.state.user.getJson()._id 
           
        })
        let updater = await this.props.app.state.componentList.getOperationsFactory().getUpdater();
        //debugger
        if (this.state.changed) {
            await updater.componentUpdate[this.props.app.state.uploadKey][0].getPicSrc(this.state.path);
        }

       


        await this.props.app.state.componentList.getOperationsFactory().run();

        this.props.app.dispatch({ myswitch: "home",})



    };

    render() {
        let app = this.props.app;
        let state = app.state;
        let dispatch = app.dispatch;
        let component = state.currentComponent;
        let compJson = component?.getJson();
        
        let styles =state.styles;
        let opps = component?.getOperationsFactory();
        let key = compJson?.collection ? "update" : "add";
        return (
            <div className="popup-box" style={{display: "flex", flexDirection: "row", display:"flex", flexDirection: "column", alignItems: "left", alignSelf: "center", justifyContent: "center", width:"80vw" }}>
                <div className="diapicboxa" style={{marginTop:"100px", width:"70vw", height:"40vw"}}>
                    <div>
                <div style={{
                  
                    cursor:"pointer",
                    marginTop: "",
                    alignContent: "center",
                }} onClick={dispatch.bind(this, { myswitch: "home",  })}>Cancel</div>
                
                {/* <div onClick={dispatch.bind(this, {myswitch:"spawn"})}>X</div> */}
                <div style={{
                   

                }} >Create Character</div>

                

                {/* LIST */}
<div style={{width:"77vw", }}>
    {/* Title */}
                <div >
                    <label htmlFor="lastName"><div>Title: </div></label>
                    <input type="text" style={{
                    transition: "width 0.4s ease-in-out",
                    fontSize: ".9vw",
                    height: "3vh",
                    width:"28vw"
                    }} id="last"  onChange={this.handleChange} name={"name"} />
                </div>
{/* DESCRIPTION */}
                <div style={{
                    
                    }}>
                    
                </div>
        {/* TYPE */}
                <div style={{
                    }}>
                    
                   
                  
                </div>

                <div style={{ position: "relative",height: "300px", }}>

                    <div style={{ 
                   
                   
                    width: "9vw",
                    fontSize: "1.7vh",}}>

                        Upload image:
                        </div>
                        
                    <input accept="image/png, image/gif, image/jpeg" 
                    style={{ cursor: "pointer", position: "absolute", 
                     height: "300px", left: "0px", opacity: '0' , 
                     minWidth: "28vw",
                      
                     }} type="file" name="file" onChange={this.changeHandler} />
                    <img src={component?.getJson().picURL!==""? component?.getJson().picURL: this.state.pic} style={{ objectFit: "scale-down",
                      minWidth: "28vw",
                    
                      border: "1px solid grey"
                       }} />

                </div>


                <div >
                    <div >
                        
                    </div>
                    <div style={{width:"11vw", marginTop:"300px"}}>
                    {/* <div >{state.user?.getJson()?.spawnerHandle}</div> */}
                    <div style={{width:"9vw", height:"3vh", fontSize:"2vh"}}onClick={this.handleSubmission}>Submit</div></div>
                    </div>                    
                </div>
                </div>
            </div></div>
        )
    }

}