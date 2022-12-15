import './App.css';
import Task1 from './components/task1/Task1';
import Task2 from './components/task2/Task2'

function App() {
  return (
    <>
	  <div class='centered'><h2>Task 1</h2></div>
      <Task1/>
	  <div class='centered'><h2>Task 2</h2></div>
	  <Task2/>
    </>
  );
}

export default App;