


class DefaultMap {
    getMapTheme(){
        let style={
        containerStyle: {
            default: {display:'flex', flexDirection:"column"},
            row: {display:'flex', flexDirection:"row"},
            wrapRow:{ display:'flex', flexDirection:"row", flexWrap:"wrap"},
            wrapColumn:{ display:'flex', flexDirection:"column", flexWrap:"wrap"},
          },
          sectionStyle:{
            default:  {display:'flex', flexDirection:"row"},
            column: {display:'flex', flexDirection:"column"},
            wrapRow:{ display:'flex', flexDirection:"row", flexWrap:"wrap"},
            wrapColumn:{ display:'flex', flexDirection:"column", flexWrap:"wrap"},
            
          },
          cellStyle:{
            default: {display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"5px"},
    
          },
          innerCellStyle:{
            default: {display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"5px"},

          },
          imgStyle:{
            default: {width:'5vw', height:"5vw", borderRadius:"50%"}
          },
        }
        return style
    }

   
}
export default new DefaultMap();
