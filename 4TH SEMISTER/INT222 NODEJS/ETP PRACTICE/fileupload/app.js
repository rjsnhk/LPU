const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
// const File = require('./models/File');
const path = require('path'); // Import path module

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/file-upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public','index.html')));

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { filename, originalname } = req.file;
    const filepath = req.file.path;

    const file = new File({ filename, originalname, filepath });
    await file.save();

    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error uploading file' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
