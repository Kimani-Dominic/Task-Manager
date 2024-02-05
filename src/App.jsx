
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'
import {increment, decrement} from './components/reducers/CounterReducer'
import './App.css'

function App() {

  return (
      <div className="card">
        <h1>Welcome to Task Manager</h1>
        <p>Where we aid you manage your daily tasks more efficiently</p>
        <TaskList />
        <TaskDetails />
        <Router>
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/task/:id" component={TaskDetails} />
        </Switch>
    </Router>
    
    <h1>Redux Toolkit Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment By 1</button>
      <button onClick={() => dispatch(decrement())}>Decrement By 1</button>

      </div>
  )
}

export default App;
