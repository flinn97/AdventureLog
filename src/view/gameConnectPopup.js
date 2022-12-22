import React, { Component } from "react";

//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class GameConnect extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        this.handleChange=this.handleChange.bind(this);
        this.state = {
           gameID: ""
        }

    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
                this.props.handleClose();
            
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
           gameID: value,
        })
    }
        
    

    render() {

        let app = this.props.app;
        let state = app.state;
        let styles=state.styles;
        let dispatch=app.dispatch;
        return (<div>
            
                                <div className="popup-box" style={{ zIndex: "1010" }}>
                <div ref={this.wrapperRef}  className="diapicboxa" style={{ zIndex: "1010", height:"fit-content", width:"fit-content", marginTop:"22vh" }}>
                    
                <div style={{ ///EXIT BUTTON
                                ...styles.buttons.buttonX,
                                alignSelf: "flex-end", marginBottom:styles.margins.marginSmallH,
                            }} onClick={this.props.handleClose}>X</div>
                            <div>Connect this character to a game</div>
                            <div>Enter your Game ID</div>
                            <input type="text" onChange={this.handleChange}/>
                            <div>Submit</div>
                           

                </div>
                
            </div>

            </div>)
    }
};
export default GameConnect;