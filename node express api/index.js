const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./config/admin.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});
app.get('/', (req, res) => {
  res.json({"message": "Hello MD This is Toppers Form"});
});
const userroutes = require('./src/routes/user.routes')
app.use('/api/toppers', userRoutes)
app.listen(3000, () => {
  console.log(`Node server is listening on port `);
})