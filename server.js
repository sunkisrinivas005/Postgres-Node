const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const BasicRoutes = require('./Routes/index');
const port = 5000;

app.use(express.json());
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use('/routes', BasicRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
