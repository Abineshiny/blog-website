const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    // Fetch and display all posts from the database
    // You'd typically use a model for handling database operations
    res.render('index');
});

app.get('/post/:id', (req, res) => {
    // Fetch and display a specific post by ID
    // You'd typically use a model for handling database operations
    res.render('post');
});

app.post('/create', (req, res) => {
    // Create a new post and save it to the database
    // You'd typically use a model for handling database operations
    console.log(req.body);
    res.redirect('/');
});
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
