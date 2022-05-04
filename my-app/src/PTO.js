
import React,{useState,useEffect,Component,Fragment} from 'react'
import "./App.css";
import "./hpage.css";



function PTO() {
    const [ptolist, setptolist] = useState([]);
    let web = document.location.href;
    const te = web.split("/");
    let manager = te[4];
    let ab = manager.split("#")[0];
    let url = 'localhost:3000/pto/'+ab;
    useEffect(() => {
        // TODO: Call Database API to get database info
        handleget();
      }, []);
    
    function handleget(){        
        fetch(url)//
        .then(response => {
            
            if (response.ok) {
              return response.json();
              
            } else {
                console.log('doesn t fetch')
              throw new Error('Something went wrong ...');
            }
          })
         .then(data =>{
             let temp = [];
            for (let i in data.list) {
             let dataTemp = [data.list[i].id,data.list[i].emp_id,data.list[i].type,data.list[i].additional_info,data.list[i].start_date,data.list[i].end_date,data.list[i].approved,data.list[i].manager_id];
             //0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id
             
                
              if(data.ptolist[i].approved === 0){
                temp.push(dataTemp);
            }
                }
                setptolist(temp);
  
            }
          );
          }
    

    function clickhandle_approve(e){
        let text = e.target.value;
        const myArray = text.split(",");
        //0.id, 1.emp_id, 2.type, 3.additional_info, 
        //4.start, 5.end 6.approved, 7.manager_id

        let id = myArray[0];
        
        console.log(id);
        fetch('localhost:3000/pto/', {
			method: 'PUT',
			body: JSON.stringify({
				id: myArray[0],
				emp_id: myArray[1],
				type: myArray[2],
				additional_info:myArray[3],
                start_date : myArray[4],
                end_date: myArray[5],
                approved: 1,
                manager_id: ab
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(data => {

			let temp = [];
            for (let i in data.list) {
             let dataTemp = [data.list[i].id,data.list[i].emp_id,data.list[i].type,data.list[i].additional_info,data.list[i].start_date,data.list[i].end_date,data.list[i].approved,data.list[i].manager_id];
             //0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id
             
             if(data.list[i].approved === 0){
                temp.push(dataTemp);
            }
                
              //if(data[i].approved === 0){
            //}
                }
                setptolist(temp);
		})
      }
      function clickhandle_deny(e){
        let text = e.target.value;
        const myArray = text.split(",");
        //0.id, 1.emp_id, 2.type, 3.additional_info, 
        //4.start, 5.end 6.approved, 7.manager_id

        let id = myArray[0];
        
        console.log(id);
        fetch('localhost:3000/pto/', {
			method: 'PUT',
			body: JSON.stringify({
				id: myArray[0],
				emp_id: myArray[1],
				type: myArray[2],
				additional_info:myArray[3],
                start_date : myArray[4],
                end_date: myArray[5],
                approved: 2,
                manager_id: ab
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(data => {

			let temp = [];
            for (let i in data.list) {
             let dataTemp = [data.list[i].id,data.list[i].emp_id,data.list[i].type,data.list[i].additional_info,data.list[i].start_date,data.ptolist[i].end_date,data.list[i].approved,data.list[i].manager_id];
             //0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id
             
             if(data.list[i].approved === 0){
                temp.push(dataTemp);
            }
                
              //if(data[i].approved === 0){
            //}
                }
                setptolist(temp);
		})
      }


    

return (<div className="PTObox">
    <div className="ptoboxed">
    <h2> PTO Requests:</h2></div>
<div className="ptolist"> 
                    {
                        ptolist.map((element,index)=>{
//0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id

                        return (
                        <>
                          <div className="PTO_component">
        <div className="PTO-TEXT">
        <p>From employee : {element[1]}</p>
        <p>Type : {element[2]}</p>
        <p>Start Date : {element[4]}</p>
        <p>End Date : {element[5]}</p>
        <p>Additional Info : {element[3]}</p>
        </div>
        <div className="PTO-BUTT">
        <button type="button" id="PTO-APPROVE-button" value={[element[0],element[1],element[2],element[3],element[4],element[5],element[6]]} onClick={clickhandle_approve}>Approve</button>
        <button type="button" id="PTO-DENY-button" value={[element[0],element[1],element[2],element[3],element[4],element[5],element[6]]} onClick={clickhandle_deny}>Deny</button>
        </div>
      </div>
                                </>);
                            
                        
                        })
                    }
</div>
</div>
);

}
export default PTO;