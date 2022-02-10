import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import Filter from './components/Filter';
import List from './components/List';
function App() {
  const [toDoList, setToDo] = useState([]);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    console.log(toDoList);
  }, [toDoList])
  
  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddToDo setToDo = {setToDo} list={toDoList}/>
        </header>
        <List setToDo={setToDo} list={toDoList} filter={filter}/>
        <footer className="footer">
          <span className="todo-count">
            <strong>{toDoList.length} </strong>
            items left
          </span>
          <Filter list={toDoList} filter={filter} setFilter = {setFilter}/>
          <button className="clear-completed" onClick={()=> setToDo([])}>
            Clear completed
          </button>
        </footer>
      </section>
    </div>
  );
}

export default App;
