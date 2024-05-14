import { useState } from 'react';

const AddGroupView=({onAdd}) =>{
    const [groupName, setGroupName] = useState("")
  return (
    <div className='add-group'>
        <input type='text' value={groupName} onChange={(e)=>{
            console.log(e.target.value);
            setGroupName(e.target.value)
        }}></input>
        <button onClick={()=>{
            onAdd({name: groupName, id: Date.now()})
        }}>Create group</button>
    </div>
  )
}

export default AddGroupView;