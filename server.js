const express = require('express')
const bodyParser = require('body-parser');
var amqp = require('amqplib/callback_api');
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
amqp.connect('amqp://localhost', function(error0, connection) {
  if(error0){
    console.log("error gotacha....")
  }else {
    console.log("successfully connected...")
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = 'hello';
      var msg = 'Hello world';
  
      channel.assertQueue(queue, {
        durable: false
      });
  
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    });
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
