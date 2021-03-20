import {makeStyle} from "../../../../utils";
import view from '../../../../Enums'

const styles = {};

styles['container']=makeStyle({
    width:'100%',
    display:'flex'
},{
    background:'url(landing_right.jpeg) 0% 0% / cover',
    height:700,
    alignItems:'center'
},{
    background:'url("landing_tab.jpg") 0% 50% / cover',
    height:600,
    justifyContent:'center'
},{
    background:'url("landing_mobile.jpg") 0% 160px / contain no-repeat',
    height:500
})

styles['name-container']=makeStyle({
    height:'fit-content',
    boxSizing:'border-box',

},{
    padding:30
},{
    width: 700,
    alignContent: 'center',
    marginTop: 200
},{
    width: '100%',
    alignContent: 'center',
    marginTop: 90,
    paddingLeft:20
})

styles['big-text']=makeStyle({

},{
    fontSize:80,
    display:'block',
    color:'honeydew'
},{
    fontSize:40,
    color:'honeydew'
},{
    fontSize:30,
    color:'black'
})

styles['describe-text']=makeStyle({
    color:'black'
},{
    fontSize:30,

},{
    fontSize:20,
    color:'black'
},{
    fontSize:17,
    color:'black'
})


export default styles;