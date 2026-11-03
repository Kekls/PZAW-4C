import { useState } from 'react'
import './App.css'
import Task from './task'

function App() {
  const [completions, setCompletions] = useState([true, false, true]);
  const [tasks, setTasks] = useState(["zrobie obiad", "zrobie sniadanie", "zrobie kolacje"]);

  const [allTasks, setAllTasks] = useState(false);
  const [doneTasks, setDoneTaks] = useState(false);
  const [undoneTasks, setUndoneTaks] = useState(false);

  const [alphabetical, setAlphabetical] = useState(false);

  const [newTask, setNewTask] = useState('');

  const change = (completed: boolean, index: number) => {
    const newCompletions = [...completions];
    newCompletions[index] = !completed;
    
    setCompletions(newCompletions);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div>
      <h1>Ilosc zadan niewykonanych: {completions.filter(c => !c).length}</h1>
      <label >Wszystkie zadania:</label><input type="checkbox" onClick={() => setAllTasks(!allTasks)} value="Wszystkie zadania:"/><br/>
      <label >Wykonane zadania:</label><input type="checkbox" onClick={() => setDoneTaks(!doneTasks)} value="Wykonane zadania:"/><br/>
      <label >Niewykonane zadania:</label><input type="checkbox" onClick={() => setUndoneTaks(!undoneTasks)} value="Niewykonane zadania:"/><br/>

      <h3>Sposob filtracji</h3>
      <label>Filtrowania alfabetyczne?</label><input type="checkbox" onClick={() => setAlphabetical(!alphabetical)} value="Wszystkie zadania:"/><br/>

      <h3>Dodaj nowe zadanie!</h3>
      <label>task:</label>
      <input 
        type="text" 
        placeholder='pograj na gitarze...' 
        value={newTask} 
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
      /><br/>
      <button onClick={handleAddTask}>Dodaj zadanie</button>


      {allTasks && (<div>
        <h2 >Wszystkie zadania: </h2>
        {alphabetical == true ? (<div>
          {[...tasks]
          .sort((a, b) => a.localeCompare(b))
          .map((task, index) =>
              <Task completed={completions[index]} task={task} onChange={change} id={index} key={index} />
          )}
          </div>
        ): (<div>
            {tasks.map((task, index) =>
              <Task completed={completions[index]} task={task} onChange={change} id={index} key={index} />
            )}
            </div>
        )} 
        </div>
      )}

      {doneTasks && (<div>
        <h2 >Wykonane zadania: </h2>
        {completions.filter(c => c).map((completion, index) =>
          <Task completed={completion} task={tasks[index]} onChange={change} id={index} key={index} />
        )}
        </div>
      )}

      {undoneTasks && (<div>
        <h2 >Niewykonane zadania: </h2>
        {completions.filter(c => !c).map((completion, index) =>
          <Task completed={completion} task={tasks[index]} onChange={change} id={index} key={index} />
        )}
        </div>
      )}
    </div>
  )
}

export default App
