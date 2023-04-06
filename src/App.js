import { useContext } from 'react';
import './App.css';
import Todo from './Components/Todo';
import { Global } from './Components/store';
import Tasks from './Components/Tasks';

function App() {
  const {todoArr} = useContext(Global)
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>TO-DO App</h1>
     <Todo/>
     {todoArr.length > 0 ? <Tasks/> : null}
    </div>
  );
}

export default App;
