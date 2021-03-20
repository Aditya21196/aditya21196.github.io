import {makeStyle} from "../../utils";
import view,{HEADER_SIZE} from "../../Enums";


const styles={}

styles['container']=makeStyle({
    height:HEADER_SIZE[view.DESKTOP],
    width:'100%',
    backgroundColor:'rgba(255,255,255,0.7)',
    position:'absolute',
    zIndex:5
},{},{},{
    backgroundColor:'rgba(0,0,0,0.7)',
})

export default styles;