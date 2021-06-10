import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const users = [{name:'Ronaldo',age:35}, {name:'Rooney', age:34},{name:'',age:''}]
  return (
    <div className="App">
        <AddUser/>
        <UsersList users={users}/>
    </div>
  );
}

export default App;
