const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const { Pool, Client } = require('pg');
const BasicRoutes = require('./Routes/index');
const port = 3000;
app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/routes', BasicRoutes);


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
