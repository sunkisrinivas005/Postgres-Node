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

router.get('/getall-restaurants',  async (req, res) => {
    let resultResponse = new Promise((resolve, reject) => {
    client.query('SELECT * FROM restaurants', (err, res) => {
      if(err) return reject(err) 
      let {rows} = res;
      rows = rows ? rows : []
      resolve(rows)
      })
  });

  try {
    let result = await resultResponse;
    res.status(200).send({ status : 200, message : "success",data:result})
  }catch(err) {
    res.status(400).send({ status : 400, message : "error",data:err})
  }
});

// router.get('/get-restaurants-by-id/:id',  async(req, res) => {
//      let  id  = req && req.params && req.params.id ? req.params.id  : null;
//      let getDataById = new Promise((resolve, reject) => {
//         const query = {
//         text: 'SELECT * FROM restaurants WHERE id = $1',
//         values : [id],
//         }
//         client.query(query, (err, res) => {
//         if(err){ 
//             console.log(err, "errr...")
//             return reject(err)
//         }
//         let {rows} = res;
//         resolve(rows);

//         })
//     });
//     try {

//     }
//     let result = await getDataById;
//      res.send(result)
// });

router.post('/add-restaurant', async(req, res) => {
    let request = req && req.body ? req.body : {};
    const {name, email, phoneNumber, image, rating} = request;
    let getData = new Promise((reso, rej) => {
        const query = {
            text: 'SELECT * FROM restaurants WHERE phonenumber = $1',
            values : [phoneNumber],
            }
            client.query(query, (err, res) => {
                if(err){ 
                    console.log(err, "errr...")
                    return rej(err)
                }
                let {rows} = res;
                reso(rows);
                })
    })

    let PostData = new Promise((resolve, reject) => {
      const query = {
      text: 'INSERT INTO restaurants(name, email, phoneNumber, image, rating) VALUES($1, $2, $3, $4, $5) RETURNING *',
      values : [name, email, phoneNumber, image, rating],
      }
      client.query(query, (err, res) => {
      if(err){ 
          // console.log(err, "errr...")
          return reject(err)
      }
      let {rows} = res;
      resolve(rows)
      })
  });
      
     try {
      let responseData = await getData;
      if(responseData && responseData.length){
        res.status(200).send({
            status:401, 
             data:{}, 
             message : "phoneNumber is in use"})
      }else {
  
            let result = await PostData;
            res.status(200).send({
                message :"success",
                status:200,
                data:result})
      }
     }catch(err) { 
      res.status(400).send({
        message :"error",
        status:400,
        data:err})
     }
     
});

router.post('/update-restaurant', async(req, res) => {
  console.log(req, "testing")
    let request = req && req.body ? req.body : {};
    const {name, email, phoneNumber, rating, image} = request;
    console.log(request, "request")
    let updateData = new Promise((resolve, reject) => {
            const query = {
              text: 'UPDATE restaurants SET name = $1, email = $2, rating = $3, image = $4 WHERE phonenumber = $5 RETURNING *',
              values: [name, email, rating, image, phoneNumber],
            }
            client.query(query, (err, res) => {
              if(err) return reject("Error");
              let {rows} = res;
              resolve(rows)
              })
          });


          try {
            let result = await updateData;
          res.status(200).send({
            status:200,
            message: "successfully updated",
            data:result});

          }catch(err) {
            res.status(400).send({
              status:400,
              message: "error",
              data:err});
          }
        })

router.post('/delete-restaurant', async(req, res) => {
    const id = req && req.body && req.body.phoneNumber ? parseInt(req.body.phoneNumber) : null;
    let DeleteUser = new Promise((resolve, reject) => {
          const query = {
            text: 'DELETE FROM restaurants WHERE phonenumber = $1 RETURNING *',
            values: [id],
          }
          client.query(query, (err, res) => {
            if(err) return reject(err);
            let {rows} = res;
            resolve(res)
            })
        });
        try {
          let result = await DeleteUser;
          res.status(200).send({
              status:200,
              message:"successfully Deleted",
              data:result
          });
        }catch(err) {
          res.status(400).send({
            status:400,
            message:"err",
            data: err
        });
        }
       
});

module.exports = router;