import React,{useState,useEffect,Component,Fragment} from 'react'
import "./elist.css";

function Elist(){
 const [elist,setelist] = useState([]);
 function handleget(){        
    fetch('https://api.coinbase.com/v2/currencies')
    .then(response => {
        
        if (response.ok) {
          return response.json();
          
        } else {
          throw new Error('Something went wrong ...');
        }
      })
     .then(data =>{
         let temp = [];
        for (let i in data.employeelist) {
         let dataTemp = [data.employeelist[i].id];
         temp.push(dataTemp);
        
            }
            setelist(temp);

        }
      );
      }

      useEffect(() => {
        handleget();
      }, []);
      
      return (
          <>

{
                          elist.map((element,index)=>{
                              
                          return (
                          <>
                           <li>Employee id : {element[0]}</li>
                                  </>);
                              
                          
                          })
                      }
</>);
  
}
export default Elist;