var express = require('express')
var router = express.Router();
const dotenv = require('dotenv');
const { Pool, Client } = require('pg');
dotenv.config();
console.log(process.env.PORT, "PORT");
let {PORT, USER, DB, HOST, PASSWORD } = process.env;
const client = new Client({
    user: USER,
    host: HOST,
    database: DB,
    password: PASSWORD,
    port: PORT,
  })
  
client.connect().then(res => {
  console.log("successfull connected.")
  }).catch(err => {
  console.log("error", err)
  }
  )

router.get('/getAllUsers',  async (req, res) => {
    let resultResponse = new Promise((resolve, reject) => {
    client.query('SELECT * FROM person', (err, res) => {
      let {rows} = res;
      resolve(rows)
      })
  });
  let result = await resultResponse;
  res.send(result)
});

router.get('/getUserById/:id',  async(req, res) => {
     console.log(req.params.id, "request");
     let  id  = req && req.params && req.params.id ? req.params.id  : null;
     let getDataById = new Promise((resolve, reject) => {
        const query = {
        text: 'SELECT * FROM person WHERE id = $1',
        values : [id],
        }
        client.query(query, (err, res) => {
        if(err){ 
            console.log(err, "errr...")
            return reject(err)
        }
        let {rows} = res;
        resolve(rows);

        })
    });
    let result = await getDataById;
     res.send(result)
});

router.post('/addUser', async(req, res) => {
    let request = req && req.body ? req.body : {};
    const {name, last_name} = request;
      let PostData = new Promise((resolve, reject) => {
            const query = {
            text: 'INSERT INTO person(name, last_name) VALUES($1, $2) RETURNING *',
            values : [name, last_name],
            }
            client.query(query, (err, res) => {
            if(err){ 
                console.log(err, "errr...")
                return reject(err)
            }
            let {rows} = res;
            resolve(rows)
            })
        });
            let result = await PostData;
            res.send(result)
});

router.put('/updateUser', async(req, res) => {
    let request = req && req.body ? req.body : {};
    const {name, last_name, id} = request;
    let updateData = new Promise((resolve, reject) => {
            const query = {
              text: 'UPDATE person SET name = $1, last_name = $2 WHERE id = $3 RETURNING *',
              values: [name, last_name, id],
            }
            client.query(query, (err, res) => {
              if(err) return "Error";
              let {rows} = res;
              resolve(rows)
              })
          });
          let result = await updateData;
          res.send(result);
})

router.post('/deleteUser', async(req, res) => {
let request = req && req.body ? req.body : {};
console.log(request, "request....") 
    const id = req && req.body && req.body.id ? parseInt(req.body.id) : null
    let DeleteUser = new Promise((resolve, reject) => {
          const query = {
            text: 'DELETE FROM person WHERE id = $1 RETURNING *',
            values: [id],
          }
          client.query(query, (err, res) => {
            if(err) return "Error";
            let {rows} = res;
            resolve(res)
            })
        });
        let result = await DeleteUser;
        res.send(result);
});

module.exports = router;