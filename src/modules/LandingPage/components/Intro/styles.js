import {makeStyle} from "../../../../utils";

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
    height:600
},{
    background:'url("landing_mobile.jpg") 0% 160px / contain no-repeat',
    height:500
})

styles['name-container']=makeStyle({
    height:'fit-content',
    boxSizing:'border-box'
},{
    padding:30
})

styles['big-text']=makeStyle({

},{
    fontSize:80,
    display:'block'
})

styles['describe-text']=makeStyle({

},{
    fontSize:30,
})

console.log(styles)

export default styles;