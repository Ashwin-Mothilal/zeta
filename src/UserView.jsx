import React, { useState } from 'react'
import "./UserView.css";

export default function UserView({user, onAddExpense, expense}) {
    const [amount, setAmount] = useState(0)

    const minTransactiosn =  ()=>{
        let obj = {A:400, B:0, C:-300, D:-100};
        let sum = 0, transaction = 0;
        for(let i = 0; i < Object.values(obj).length; i++){
            let value = obj[i]; // 300
            if(value !== 0){
                sum += value;
            }
            if(sum){
                transaction++;
            }   
        }
    }
  return (
    <div className='user-container'>
        <p key={user}>{user}</p>
        {
            expense === undefined ?
            <>
                <input type="number" value={amount} onChange={(e)=>{
                    setAmount(e.target.valueAsNumber);
                }}></input>
                <button onClick={()=>{
                    onAddExpense(amount);
                }}>Add Amount</button>
                </>:
            expense
        }
    </div>
  )
}
// calculate -> (A - A/3) - (B/3 + C/3)
// {A: 300, B: 0, C: -300}
// SUM, index = 0 -> for()

// A has spent for himself -> 300 -> 600 for others
// B has spent for himself -> 200 -> 400 for others
// C has spent for himself -> 100 -> 200 for others
// 900
// 600
// 300

// C ->                      C/3 - A/3 - B/3 
// C -> A 200, What C has -> 100 - 300 - 200 
// A -> A 200, What C has -> 100 - 300 - 200 

// U -> B/3 + C/3 => 300 => 
// A -> 200 + 100 => 300 => shared - borrowed => 600 - 300 => 300
// B -> 300 + 100 => 400 => shared - borrowed => 400 - 400 => 0
// C -> 300 + 200 => 500 => shared - borrowed => 200 - 500 => -300

// B has borrowed 300 from A, 
// C has borrowed 300 from A, 
// B ->
// A has borrowed 200 from B
// C has borrowed 200 from B
// C ->
// A has borrowed 100 from C
// B has borrowed 100 from C
