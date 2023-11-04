import React, { useContext, useState } from 'react'
import { userContext } from '../App'

const AddItem = () => {
    const {addItem,error} = useContext(userContext);
    const [task,setTask] = useState("")

    //add task when enter button pressed
    window.addEventListener('keydown',(e)=>{
        if(e.key === 'Enter') {
            addItem(task)
            return setTask("")
        }
    });
  return (
    <>
        <div className="addItem">
            <input type="text" value={task} onChange={e=>setTask(e.target.value)} placeholder="add task here"/>
            <button onClick={()=>{
                addItem(task);
                setTask("")
            }}>add</button>
        </div>
        {error && <span className="error">enter task first</span>}
    </>
  )
}

export default AddItem