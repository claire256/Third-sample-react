import React, {useState} from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = (props)=> {
  const [userList, setUserList] = useState([])

  const addUserHandler = (user)=>{
        setUserList((prevUserList)=>{
      return[...prevUserList
        , {name: user.username, age: user.age, id:Math.random().toString()},
      ]
        })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
