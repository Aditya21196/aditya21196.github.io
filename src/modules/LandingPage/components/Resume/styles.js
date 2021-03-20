import {makeStyle} from "../../../../utils";

const styles = {}

styles['heading']=makeStyle({
    fontSize:40,
    color:'#fed049'
})

styles['resume-container']=makeStyle({
    backgroundColor:'#301b3f',
    width:'100%',
    padding:30,
    boxSizing:'border-box',
    color:'#b4a5a5'
})

styles['exp-title']=makeStyle({
    fontSize:25
})

styles['exp-ptr']=makeStyle({
    fontSize:16
})

export default styles;