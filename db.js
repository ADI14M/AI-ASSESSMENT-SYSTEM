const mongoose = require('mongoose');

// Replace these with your MongoDB Atlas credentials
const USERNAME = 'adi123@admin';
const PASSWORD = 'Aditya1234';
const DATABASE = 'testDB';

// MongoDB Atlas connection string
const CONNECTION_STRING = `mongodb+srv://adi123:${PASSWORD}@cluster0.tb5fugp.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

module.exports = mongoose;
