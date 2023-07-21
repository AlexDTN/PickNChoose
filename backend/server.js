const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const databaseName = 'backend-trial';
const uri = process.env.ATLAS_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(`MongoDB database connected successfully`))
  .catch((err) => console.error('Error connecting to MongoDB: ' + err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});