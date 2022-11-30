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
            // [this.props.app.state.uploadKey + "description"]: this.state.description,
            [this.props.app.state.uploadKey + "name"]: this.state.name,
            [this.props.app.state.uploadKey + "owner"]: "id546" //this.props.app.state.user.getJson()._id,
           
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
            <div style={{display: "flex", flexDirection: "row", display:"flex", flexDirection: "column", alignItems: "left", alignSelf: "center", justifyContent: "center", width:"80vw" }}>
                
                <div style={{
                    fontFamily: styles.fonts.fontNormal,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginMediumH,
                    cursor:"pointer",
                    color: styles.colors.Red2,
                    marginTop: "",
                    alignContent: "center",
                }} onClick={dispatch.bind(this, { myswitch: "home",  })}>Cancel</div>
                
                {/* <div onClick={dispatch.bind(this, {myswitch:"spawn"})}>X</div> */}
                <div style={{
                    fontFamily: styles.fonts.fontTitle,
                    fontSize: styles.fonts.fontHeader5,
                    marginBottom: styles.margins.marginSmallH,

                }} >Create Spawn</div>

                

                {/* LIST */}
<div style={{width:"77vw", marginLeft:styles.margins.marginMediumW}}>
    {/* Title */}
                <div style={{
                    fontFamily: styles.fonts.fontBold,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginSmallH,}}>
                    <label htmlFor="lastName"><div style={{
                    fontFamily: styles.fonts.fontBold,
                    fontSize: styles.fonts.fontSubheader1,
                    }}>Title: </div></label>
                    <input type="text" style={{
                    transition: "width 0.4s ease-in-out",
                    fontFamily: styles.fonts.fontNormal,
                    fontSize: ".9vw",
                    height: "3vh",
                            borderWidth: styles.mySpawn.border ,
                    width:"28vw"
                    }} id="last" placeholder={component?.getJson().name} onChange={this.handleChange} name={"name"} />
                </div>
{/* DESCRIPTION */}
                <div style={{
                    fontFamily: styles.fonts.fontBold,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginSmallH,
                    }}>
                    
                </div>
        {/* TYPE */}
                <div style={{
                    fontFamily: styles.fonts.fontBold,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginSmallH,}}>
                    
                   
                    {/* <label htmlFor="lastName"><b>Type</b></label>
                    <input type="text" className="form-control" id="last" placeholder={component?.getJson().type} onChange={this.handleChange} name={"type"} /> */}
                </div>

                <div style={{ position: "relative", minWidth: styles.mySpawn.imgW, height: "300px", }}>

                    <div style={{ 
                        fontFamily: styles.fonts.fontBold,
                   
                    borderWidth: styles.mySpawn.border ,
                    marginTop: styles.margins.marginMediumH,
                    width: "9vw",
                    fontSize: "1.7vh",}}>

                        Upload image:
                        </div>
                        
                    <input accept="image/png, image/gif, image/jpeg" 
                    style={{ cursor: "pointer", position: "absolute", 
                     height: "300px", left: "0px", opacity: '0' , maxWidth: styles.mySpawn.imgW, 
                     minWidth: "28vw",
                     marginTop: styles.margins.marginSmallH,
                     maxHeight: styles.mySpawn.imgW, 
                     marginBottom: styles.margins.marginSmallH,   
                     }} type="file" name="file" onChange={this.changeHandler} />
                    <img src={component?.getJson().picURL!==""? component?.getJson().picURL: this.state.pic} style={{ objectFit: "scale-down",
                      maxWidth: styles.mySpawn.imgW, 
                      minWidth: "28vw",
                      marginTop: styles.margins.marginSmallH,
                      maxHeight: styles.mySpawn.imgW, 
                      border: "1px solid grey"
                       }} />

                </div>


                <div style={{
                    fontFamily: styles.fonts.fontNormal,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginMediumH,}}>
                    <div style={{
                    fontFamily: styles.fonts.fontNormal,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginMediumH,}}>
                        
                    </div>
                    <div style={{width:"11vw"}}>
                    <div style={{
                    fontFamily: styles.fonts.fontNormal,
                    fontSize: styles.fonts.fontSubheader1,
                    marginBottom: styles.margins.marginMediumH,}}>{state.user?.getJson()?.spawnerHandle}</div>
                    <div style={{...styles.buttons.buttonFollow, width:"9vw", height:"3vh", fontSize:"2vh"}}onClick={this.handleSubmission}>Submit</div></div>
                    </div>                    
                </div>

            </div>
        )
    }

}