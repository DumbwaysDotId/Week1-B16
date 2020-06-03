import React,{Component} from 'react';


class Useflex extends Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"column",    justifyContent:"center", alignItems:"center",height: "100vh"}}>
                <div style={{width:50, height:50, backgroundColor: "powderblue"}}></div>
                <div style={{width:50, height:50, backgroundColor: "skyblue"}}></div>
                <div style={{width:50, height:50, backgroundColor: "steelblue"}}></div>
            </div>
        )
    }
}

export default Useflex