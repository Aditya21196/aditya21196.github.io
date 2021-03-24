import {makeStyle} from "../../../../utils";

const styles={}

styles['container']=makeStyle({
    backgroundColor:'#fbe6c2',
    width:'100%',
    padding:30,
    boxSizing:'border-box',
    textAlign:'justify',
    fontWeight:900
},{},{},{padding:20})

styles['heading']=makeStyle({
    fontSize:40,
    color:'#ac0d0d'
})

styles['skill-item']=makeStyle({
    fontSize:20,
    color:'#f48b29'
})

export default styles;