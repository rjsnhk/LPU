const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo_app_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define Todo schema
const todoSchema = new mongoose.Schema({
  task: String,
});
const Todo = mongoose.model('Todo', todoSchema);

// API routes
app.get('/todos', (req, res) => {
  Todo.find({})
    .then(todos => res.json(todos))
    .catch(err => res.status(500).json({ message: err.message }));
});

app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    task: req.body.task,
  });
  newTodo.save()
    .then(() => res.status(201).json({ message: 'Todo added successfully' }))
    .catch(err => res.status(400).json({ message: err.message }));
});

app.put('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const newTask = req.body.task;
  Todo.findByIdAndUpdate(todoId, { task: newTask }, { new: true })
    .then(updatedTodo => {
      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json({ message: 'Todo updated successfully' });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  Todo.findByIdAndDelete(todoId)
    .then(deletedTodo => {
      if (!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json({ message: 'Todo deleted successfully' });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
