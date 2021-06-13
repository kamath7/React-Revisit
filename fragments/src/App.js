import './App.css';
import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])
  const giveMeUsers = (users)=>{
    setUsersList(prevState=> [...prevState, users])
  }
  return (
    <div className="App">
        <AddUser giveMeUsers={giveMeUsers}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
