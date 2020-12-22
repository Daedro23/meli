const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes'));

// Static Files
app.use(express.static('public'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
