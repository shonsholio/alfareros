const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = 3000;

const app = express();
const mainRoutes = require('./routes/main')

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

// MIDDLEWARES
app.use(cors());


// ROUTES
app.use('/', mainRoutes)

// STATIC FILES
app.use(express.static(path.join(__dirname, './public')))

app.listen(PORT, () => {
  console.log('CONECTADOS AL PUERTO')
})