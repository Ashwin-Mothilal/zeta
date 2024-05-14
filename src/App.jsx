import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddGroupView from './AddGroupView';
import ViewGroupView from './ViewGroupView';
import './App.css'

const ViewState = {
  LIST_GROUPS: "LIST_GROUPS",
  ADD_GROUP: "ADD_GROUP",
  VIEW_GROUP: "VIEW_GROUP"
}

function App() {

  // Container -> state b/w group 

  const [group, setGroup] = useState({name: "Group 1", id: 1234});
  const [viewState, setViewState] = useState(ViewState.LIST_GROUPS);
  const [selectedGroupId, setSelectedGroupId] = useState();
  const [users, setUsers] = useState({});

  // User 1: Amount - 900
  // User 2: Amount - 300
  // User 3: Amount - 300

  const renderAddGroup = () =>{
    return (
      <AddGroupView onAdd={(_group)=>{
        setGroup(_group);
        setViewState(ViewState.LIST_GROUPS)
      }}/>
    );
  }

  const renderViewGroup = () =>{
      return (
        <ViewGroupView group={group} users={users[selectedGroupId] ?? []} onAddUser={(userName)=>{
            setUsers((prevUsers)=>{
              const prevUsersCopy = structuredClone(prevUsers);
              if(typeof prevUsersCopy[selectedGroupId] === "undefined"){
                prevUsersCopy[selectedGroupId] = [userName]
              } else 
              prevUsersCopy[selectedGroupId] = prevUsersCopy[selectedGroupId].concat(userName);
              return prevUsersCopy
            })
        }}/>
      );
  }

  const renderViewStates = () =>{
    switch(viewState){
      case ViewState.LIST_GROUPS:
        return (
          <div>
            <button onClick={()=>{
          setViewState(ViewState.ADD_GROUP)
        }}>Add group</button>
          {Object.keys.length > 0 && <p onClick={()=>{
            setViewState(ViewState.VIEW_GROUP);
            setSelectedGroupId(group.id)
          }}>{group.name}</p>}
          </div>
        );
      case ViewState.ADD_GROUP:
        return renderAddGroup();
        case ViewState.VIEW_GROUP:
          return renderViewGroup();
    }
  }

  return (
    <div className='container'>
      {renderViewStates()}
    </div>
  )
}

export default App
