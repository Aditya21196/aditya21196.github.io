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
    color:'#b4a5a5',
    textAlign:'justify',
    fontWeight:900,
    transition: 'height .5s ease-in-out',
    height:'auto'
},{},{},{padding:20})

styles['exp-title']=makeStyle({
    fontSize:25
},{},{},{fontSize:18})

styles['exp-ptr']=makeStyle({
    fontSize:14,
    marginBottom:5
})

export default styles;