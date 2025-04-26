import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";



console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const filterTasks = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredTasks(TASKS);
    } else {
      const filtered = TASKS.filter(task => task.category === category);
      setFilteredTasks(filtered);
    }
  };
    const deleteTask = (text, category) => {
      setFilteredTasks(filteredTasks.filter(
        task => !(task.text === text && task.category === category)
      ));
    
    
  }
  const addTask =(newTask)=>{
    setFilteredTasks([...filteredTasks,newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryChange={filterTasks} />
      <NewTaskForm  categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList  tasks={filteredTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
