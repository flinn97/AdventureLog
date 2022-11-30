class styleService {
        getstyles() {
    
            let stylecolor = {
                
                    ///colors
                    colorRed: "#EF3E23",
                    colorRed2: "#A80303",
                    colorBlue: "#0000CC",
                    colorPurple: "#491778",
                    ///greyscales
                    colorWhite: "#FBFFFF",
                    colorBlack: "#000000",
                    colorLightG: "#F2F2F2",
                    colorMidG: "#D8D9DA",
                    colorDarkG: "#2e2e2e",
            
        };
            
            let styles = {
                colors: {
                ///colors
                    Red1: stylecolor.colorRed,
                    Red2: stylecolor.colorRed2,
                ///greyscales
                    White1:stylecolor.colorWhite,
                    Black1: stylecolor.colorBlack,
                    Grey1: stylecolor.colorLightG,
                    Grey2: stylecolor.colorMidG,
                    Grey3: stylecolor.colorDarkG,
                ///font settings
                    darkFontColor: stylecolor.colorBlack,
                    lightFontColor: stylecolor.colorDarkG,
                    linkFontColor: stylecolor.colorBlue,
                    linkVisitedColor: stylecolor.colorPurple,
                },

                shadows: {
                /// h-offset v-offset blur spread color
                    sideShadow: "1px 10px 30px -2px "+ stylecolor.colorLightG,
                    homeShadow: "0px 0px 30px white",
                },

                mySpawn: {
                    imgW: "15.1vw",
                    keepcardW: "2vw",
                    keepcardMargin: "1vw",
                    satFilter: "saturate(.04)",
                    keepSpacing: "9vw",
                    keepWidth: "18.3vw",
                    itemMarginLeft: ".17vw",
                    bioW: "80%",
                    editH: "1.96vh",
                    border: "0 0 2px 0",
                },

                myFeed: {
                    imgW: "12.1vw",
                    keepH: "5vh",            
                    keepItemW: "6vw",

                    editW: "1.18vw",   
                                   

                    likeItemW: "2.5vw",
                    likeCounter: "22%",

                    subWidth: "56vw",

                    arrowSizeW: "3.5vw",
                    arrowSizeH: "auto",
                    arrowMargin: "1vw",

                    feedW: "58vw",
                    feedH: "60vh",
                },

                comments: {
                    display: "flex",
                    
                    fontFamily: 'Inria',
                    fontSize: "1vw",
                    background: "linear-gradient(to left, rgba(10,10,10,.00), #F9F5F4",
                    marginBottom: "1vh",
                    borderRadius: ".3vw",
                    paddingLeft: ".2vw",
                    veticalAlign: "middle",
                },

                margins: {
                    marginSmallW: ".7vw",
                    marginSmallH: ".7vh",

                    marginMediumH: "2vh",
                    marginMediumW: "2vw",
                    

                    marginLargeH: "8vh",
                    marginLargeW: "8vh",

                    marginXLW: "10vh"
                },

                buttons: {
                buttonComment:
                {
                    fontFamily: 'Inria',
                    fontSize: ".9vw",
                    color: stylecolor.colorBlue,
                    marginTop: ".4vh",
                    cursor: "pointer",
                    userSelect: "none"
                },

                buttonUnfollow:
                {
                    fontFamily: 'InriaBold',
                    fontSize: "1.4vh",
                    color: stylecolor.colorRed2,
                    marginTop: ".4vh",
                    textDecoration: "underline #D8D9DA 2px",
                    padding: ".19vh",
                    paddingLeft: ".19vw",
                    paddingRight: ".19vw",
                    justifyContent: "center",
                    alignContent: "center",     
                    alignItems: "center",   
                    width:"fit-content",
                    height:"fit-content",
                    display: "flex",
                        cursor: "pointer",
                        marginLeft: "",
                    background: stylecolor.colorWhite,
                    borderRadius: "1vw",
                    border: ".1rem solid rgba(15,15,15,.55)",
                    userSelect: "none"
                    
                },

                buttonEdit:
                {
                    fontFamily: 'InriaBold',
                    fontSize: ".8vw",
                    marginLeft: ".2vw",
                    color: stylecolor.colorBlue,
                    textDecoration: "dashed underline #D8D9DA 2px",
                    cursor: "pointer",
                    userSelect: "none"
                },

                buttonSubmit:
                {
                    fontFamily: 'InriaBold',
                    fontSize: "1.4vh",
                    marginTop: ".5vh",
                    cursor: "pointer",
                },

                buttonCreate:
                {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    background: "rgba(255,255,255,.52)",
                    borderRadius: "1vw",
                    border: ".1rem solid rgba(15,15,15,.15)",
                    borderStyle: "none groove none groove",
                    color: stylecolor.colorDarkG,
                    fontSize: "1.2vw",
                    width: "fit-content",
                    height: "fit-content",
                    textDecoration: "underline "+stylecolor.colorWhite,
                    fontWeight: "700",
                    cursor: "pointer",
                },

                buttonFollow:
                {
                    width:"8vw",
                    display: "flex",

                    background: stylecolor.colorRed,
                    borderRadius: "1vw",
                    border: ".1rem solid rgba(15,15,15,.55)",
                    justifyContent: "center",
                    alignContent: "center",     
                    alignItems: "center",   
                    color: stylecolor.colorWhite,
                    fontSize: ".68vw",
                    
                    padding: ".1vh",
                    textAlign: "center",

                    fontWeight: "600",
                    fontFamily: 'InriaLight',
                    cursor: "pointer"
                    
                },

                buttonFollowing:
                {
                    display: "flex",
                    textAlign: "center",
                    color: stylecolor.colorDarkG, 
                    background: stylecolor.colorLightG , 
                    borderRadius: "1vw", 
                    fontSize: ".68vw",      
                    width: "108%",
                    textAlign: "center",
                    justifyContent: "center",  
                    alignContent: "center",      
                    alignItems: "center",     
                    padding: ".1vh",
                    border: ".1rem solid rgba(15,15,15,.00)",

                    fontWeight: "600",
                    fontFamily: 'InriaLight',
                    cursor: "pointer"

                },

                buttonX:
                {
                    display: "flex",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily: 'InriaBold',
                    fontSize: '1vw',
                    color: stylecolor.colorRed2,
                    
                },
            },
                logoTop:
                {
                    stripHeight: "10.5vh",
                    stripHalved: "5.25vh",
                    //100 - stripH
                    stripRemainder: "fit-content",

                    imgHeight: "auto",
                    imgWidth: "23.2vh",
                    marginLeft: "1vw",
                    marginTop: ".89vh",
                    marginBottom: "1vh"
                },

                borders:{
                    radius1: "2vw 2vw 2vw 2vw",
                },

                menu:{
                    menuW: "100vw",
                    menuInnerW: "fit-content",
                    // SUBTRACT FROM 100 then add .menu.MarginLeft
                    // remainderW: "82vw",
                    // AUTO PADDING, SUBTRACT FROM remainderW
                    innerPad: "2vw",

                    // marginLeft: "1vw",
                    // marginLeftGreater: "4vw",
                    marginTop: "5vh",
                    // marginBottom: "1.2vh",

                    menuSpacing: ".04rem",
                    
                    menuCardh: "4vh",
                    menuListh: "4vh",
                    menuCardmargin: "1vw",
                    position: "absolute",
                    top: "50",
                    left: 0,
                },

                fonts:
                {
                fontNormal: 'Inria',
                fontBold: 'InriaBold',
                fontLight: 'InriaLight',
                fontTitle:'Luminari',
                
                fontweightMain: "400",
                fontweightMenu: "600",
                fontweightMed: "700",

                appSpacing: ".9px",
                appSpacing2: ".6px",

                fontBody: "1.3vh",
                fontSubheader1: "1.6vh",
                fontSubheader2: "2vh",
                fontHeader1: "3vh",
                fontHeader2: "3.4vh",
                fontHeader3: "3.9vh",
                fontHeader4: "4.25vh",
                fontHeader5: "4.44vh",
                },
            }
            return styles;
        }
    }
    
    export default new styleService();