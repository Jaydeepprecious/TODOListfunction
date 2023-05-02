import { useState } from "react";

function TodoList(){
    const[acitivty,setActivity]=useState("");
    const[listData,setListData]=useState([]);
    function AddActivity(){
      setListData((listData)=>{
        const updatedList=[...listData,acitivty];
        setActivity(' ');
        return updatedList;
      })
    }
    function removeData(i){
        const updateListData=listData.filter((ele,id)=>{
            return i!==id;
           
        })
        setListData(updateListData);
      
    }
    function updateData(i){
        const updatedata1=listData.map(item=>{
            if(item.i==i)
            {
                <input type='text' placeholder='Add Activity' value={item} onChange={(e)=>setActivity(e.target.value)}/>
            }
        })

    }
 return(
    <>
     <div className="container">
        <h1>TODO LIST</h1>
        <input type='text' placeholder='Add Activity' value={acitivty} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={AddActivity}>Add</button>
        <p className="List-heading">Here is your List:{")"}</p>
        {listData!==[]&&listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position" ><button onClick={()=>removeData(i)}>remove(-)</button> <button onClick={()=>updateData(i)}>update</button></div>
                
                </p>
                </>
            )
        })}
     </div>

    </>
 )
}
export default TodoList;