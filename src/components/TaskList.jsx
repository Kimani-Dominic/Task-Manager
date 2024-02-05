
import React, { useState } from 'react'
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() === '') return
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  return (
    <div>
      <h2>Task List</h2>
      <TextField
        label="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={addTask}>
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList