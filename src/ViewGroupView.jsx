import React, { useState } from 'react'
import UserView from './UserView';

const ViewGroupView = ({group, users, onAddUser, onAddExpense}) =>{

    const [canAddUser, setCanAddUser] = useState(false);
    const [userName, setUserName] = useState("");
    const [amounts, setAmounts] = useState({}); // userId -> amount
    
  return (
    <div>
        <p>{group.name}</p>
        <p>{group.id}</p>
        {
            canAddUser ? <>
                <input type='text' value={userName} onChange={(e)=>{
                    setUserName(e.target.value);
                }}></input>
                <button onClick={()=>{
                    setCanAddUser(false)
                    onAddUser(userName);
                    setUserName("")
                }}>Create user</button>
            </> :
            <>
                <button onClick={()=>{
                    setCanAddUser(true)
                }}>Add user</button>
                {users.map((user)=>{
                    return (
                        <UserView user={user} key={user} expense={amounts[user]}  onAddExpense={(expense)=>{
                            setAmounts((prevUsers)=>{
                                const prevUserClone = structuredClone(prevUsers);
                                prevUserClone[user] = expense;
                                return prevUserClone;
                            })
                        }}/>
                    );
                })}
            </>
        }
    </div>
  )
}

export default ViewGroupView;