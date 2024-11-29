import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Для редагування завдання

  const addTask = () => {
    if (task.trim()) {
      if (editingIndex !== null) {
        // Якщо редагуємо існуюче завдання
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = task.trim();
        setTasks(updatedTasks);
        setEditingIndex(null); // Завершуємо редагування
      } else {
        setTasks([...tasks, task.trim()]);
      }
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index); // Задаємо індекс для редагування
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Box sx={TodoListStyles.container}>
      <Typography variant="h4" gutterBottom sx={TodoListStyles.title}>
        Todo List
      </Typography>
      
      <Box sx={TodoListStyles.inputContainer}>
        <TextField
          label="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={TodoListStyles.textField}
          fullWidth
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={addTask}
          sx={TodoListStyles.addButton}
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </Button>
      </Box>

      <Paper sx={TodoListStyles.paper}>
        <List>
          {tasks.length > 0 ? (
            tasks.map((t, index) => (
              <ListItem key={index} sx={TodoListStyles.listItem}>
                <ListItemText primary={t} sx={TodoListStyles.listItemText} />
                <IconButton onClick={() => editTask(index)} sx={{ ml: 1 }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteTask(index)} sx={{ ml: 1 }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <Typography sx={TodoListStyles.noTasksText}>
              No tasks added yet.
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
}


const TodoListStyles = {
    container: {
      p: 4,
      maxWidth: 600,
      mx: 'auto',
      mt: 6,
      textAlign: 'center',
      boxShadow: 5,
      borderRadius: 2,
      backgroundColor: '#f5f5f5',
      border: '1px solid #ddd',
    },
    title: {
      fontWeight: 'bold',
      color: '#3f51b5',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      mb: 3,
    },
    textField: {
      mr: 2,
      backgroundColor: '#fff',
      borderRadius: 1,
      boxShadow: 1,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#3f51b5',
        },
      },
    },
    addButton: {
      backgroundColor: '#3f51b5',
      '&:hover': {
        backgroundColor: '#303f9f',
      },
      whiteSpace: 'nowrap',
    },
    paper: {
      p: 3,
      boxShadow: 3,
      backgroundColor: '#fff',
    },
    listItem: {
      backgroundColor: '#fafafa',
      mb: 1,
      borderRadius: 1,
      padding: 1,
      boxShadow: 1,
      '&:hover': {
        backgroundColor: '#e8eaf6',
        cursor: 'pointer',
      },
    },
    listItemText: {
      fontWeight: 'bold',
      color: '#333',
    },
    noTasksText: {
      variant: 'body1',
      color: 'text.secondary',
    },
  };
  

  