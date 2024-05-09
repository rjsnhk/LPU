const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student_registration_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define Student schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});
const Student = mongoose.model('Student', studentSchema);

// API routes
app.get('/students', (req, res) => {
  Student.find({})
    .then(students => res.json(students))
    .catch(err => res.status(500).json({ message: err.message }));
});

app.post('/students', (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  });
  student.save()
    .then(newStudent => res.status(201).json(newStudent))
    .catch(err => res.status(400).json({ message: err.message }));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
