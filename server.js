const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// START CORS SETUP
const cors = require('cors');
app.use(cors());
// END CORS SETUP

// START MONGOOSE SETUP
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DBNAME;

mongoose.connect(mongoURI, { dbName: dbName })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
// END MONGOOSE SETUP

const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});