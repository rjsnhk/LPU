const express = require('express');
const sequelize = require('./sequelize');
const Todo = require('./models/Todo');

const app = express();
const PORT = 3000;

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // Synchronize defined models with the database
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.use(express.json());

// Define endpoints

// GET all todos
app.get('/todos', (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// POST a new todo
app.post('/todos', (req, res) => {
  const { title, completed } = req.body;
  Todo.create({ title, completed })
    .then((todo) => {
      res.status(201).json(todo);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Bad request' });
    });
});

// PUT update a todo item
app.put('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const { title, completed } = req.body;
  Todo.findByPk(todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      // Update the todo
      todo.title = title;
      todo.completed = completed;
      // Save the updated todo
      return todo.save();
    })
    .then(updatedTodo => {
      res.json(updatedTodo);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// DELETE a todo item
app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  Todo.findByPk(todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      // Delete the todo
      return todo.destroy();
    })
    .then(() => {
      res.status(204).end(); // No content to send back
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
