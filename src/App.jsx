import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'
import './App.css'

function App() {

  return (
      <div className="card">
        <h1>Welcome to Task Manager</h1>
        <p>Where we aid you manage your daily t asks more efficiently</p>
        <TaskList />
        <TaskDetails />
        <Router>
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/task/:id" component={TaskDetails} />
        </Switch>
    </Router>
      </div>
  )
}

export default App;
