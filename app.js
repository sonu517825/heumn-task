// dependency
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { HttpError } = require('./error/httpError')
const path = require('path');

// my app
const app = express();

// app configuration
app.use(logger("dev"));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// connect mongodb database
require('./database/mongodb')()



// routers
const userRouter = require('./routes/userRouter')
const bookRouter = require('./routes/bookRouter')
const borrowRouter = require('./routes/borrowRouter')
const reportRouter = require('./routes/reportRouter')

// app routing
app.use('/api/users', userRouter)
app.use('/api/books', bookRouter)
app.use('/api/borrows', borrowRouter)
app.use('/api/reports', reportRouter)

// API Doc
app.use(express.static(path.join(__dirname, 'docs/ui')));
app.get("/api-doc", async (req, res) => {
  let url = path.join(__dirname, '/docs/ui/index.html');
  console.log(url, ' : url')
  res.sendFile(url, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
})


// test route
app.get('/', (req, res) => {
  return res.status(200).send('Hi from server');
});

// 404 handler
app.use((req, res, next) => {
  throw new HttpError('Can not find this route on SERVER', 404);
});

// error handler
app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).send({
    error: true,
    response_code: error.errorCode || 500,
    response_desc: error.message || "Technical error...",
  })
});

module.exports = app; 
