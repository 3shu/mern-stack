const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');


const app = express();


// Setting
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks',require('./routes/task.routes'));

// Static files
//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server running port ${app.get('port')}`);
});