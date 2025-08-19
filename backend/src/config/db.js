const mongoose = require('mongoose');

// Sample credentials for demonstration
const USERNAME = 'demoUser';
const PASSWORD = 'demoPass123';
const DATABASE = 'testDB';

// MongoDB Atlas connection string
const CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

module.exports = mongoose;
