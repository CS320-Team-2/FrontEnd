
import React,{Component,Fragment} from 'react'
import "./App.css";
import "./hpage.css";

class PTO extends Component{
    constructor(props){ 
        super(props) 
        this.state = {
            inputValue:"", 
            list:[[4321,1234,'PTO REQUEST','Life is SUCK','2022-4-13','2022-4-15',2]]
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.handleLoad)  
     }
     
     handleLoad() {
        let response = fetch("/manager/", {
            method: "GET",
          });
        
          if (response.status === 200) {
            let data = JSON.parse(response.json());
            for (let i in data) {
              let dataTemp = [data[i].id,data[i].emp_id,data[i].type,data[i].additional_info,data[i].start_date,data[i].end_date,data[i].approved];
              this.setState({
                list:[...this.state.list,dataTemp],
                inputValue:""  
            })
                }
        
        
          } else if (response.status === 202) {
            console.log("not PTO exist");
          }
       }

render(){return (<div className="PTObox">
<div className="ptoboxed"><h2> PTO Requests:</h2></div>
<div className="ptolist"> 
                    {
                        this.state.list.map((item,index)=>{
                        return (
                        <>
                          <div className="PTO_component">
        <div className="PTO-TEXT">
        <p>{item[1]}</p>
        <p>From {item[4]} to {item[5]}</p>
        <p>Comment: {item[3]}</p>
        <p>Type : {item[2]}</p>
        
        </div>
        <div className="PTO-BUTT">
        <button type="button" id="PTO-APPROVE-button">Approve</button>
        <button type="button" id="PTO-DENY-button">Deny</button>
        </div>
      </div>
                                </>);
                            
                        
                        })
                    }
</div>
</div>
);
}
}
export default PTO;