var express = require('express')
var router = express.Router();
const dotenv = require('dotenv');
const { Pool, Client } = require('pg');
var amqp = require('amqplib/callback_api');
dotenv.config();
var consumeChannel = '';
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = 'hello';
       console.log("tested.. and connect to hello queue")
      channel.assertQueue(queue, {
        durable: false
      });
     consumeChannel = channel
    });
  });
// console.log(process.env.PORT, "PORT");
// let {PORT, USER, DB, HOST, PASSWORD } = process.env;
// const client = new Client({
//     user: USER,
//     host: HOST,
//     database: DB,
//     password: PASSWORD,
//     port: PORT,
//   })
  
// client.connect().then(res => {
//   console.log("successfull connected.")
//   }).catch(err => {
//   console.log("error", err)
//   }
//   )
router.get('/getQueueMessage',  async (req, res) => {
        consumeChannel.consume('hello', function(msg) {
        console.log(" [x] Received from queue %s", msg.content.toString());
        }, {
            noAck: true
        });
})
router.get('/getAllUsers',  async (req, res) => {
  let data = [
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Medical Adverse Event",
        "level1_id": 3,
        "score": "1.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Other Medical Adverse Event",
                "level2_id": 1,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Other Medical Adverse Event",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Potency",
                "level2_id": 2,
                "score": "1.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Lack of Effect / Decreased Effect",
                        "level3_id": 1,
                        "score": "1.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Therapeutic Effect Increase",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    },
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Customer Preference",
        "level1_id": 1,
        "score": "0.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Other Customer Preference",
                "level2_id": 1,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Other Customer Preference",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Pricing",
                "level2_id": 2,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Pricing",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Product Availability",
                "level2_id": 3,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Product Availability",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "asv",
                "level2_id": 4,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Product Availability",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    },
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Label Content / Artwork Issues",
        "level1_id": 2,
        "score": "0.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Graphics / Copy",
                "level2_id": 1,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Blister",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Carton",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Electronic",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Label",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Leaflet / Literature / Insert",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Label / Labeling Similar to Another Product",
                "level2_id": 2,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Label / Labeling Similar to Another Product",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Missing Information",
                "level2_id": 3,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Blister",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Carton",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Electronic",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Label",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Leaflet / Literature / Insert",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Other Label / Labeling Complaint",
                "level2_id": 4,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Other Label / Labeling Complaint",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Printing Issues",
                "level2_id": 5,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Blister",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Carton",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Label",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Leaflet / Literature / Insert",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    },
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Product Packaging / Device Issues",
        "level1_id": 4,
        "score": "0.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Barcode / Data Matrix Issues",
                "level2_id": 1,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Missing",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Printing Issues",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Damaged / Defective Packaging Component",
                "level2_id": 2,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Ampoule / Vial Before Preparation",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Ampoule / Vial During Preparation",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Applicator",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Blister",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Bottle",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Bottle Adaptor",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Cap",
                        "level3_id": 7,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Compact",
                        "level3_id": 8,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Desiccant",
                        "level3_id": 9,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Label",
                        "level3_id": 10,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Leaflet / Literature / Insert",
                        "level3_id": 11,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Luer / Collar",
                        "level3_id": 12,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Measuring Tool",
                        "level3_id": 13,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Needle Safety Assembly",
                        "level3_id": 14,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Plunger",
                        "level3_id": 15,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Pouch",
                        "level3_id": 16,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Stopper",
                        "level3_id": 17,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Syringe Body",
                        "level3_id": 18,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Syringe Tip",
                        "level3_id": 19,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Temperature Indicator",
                        "level3_id": 20,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Tube",
                        "level3_id": 21,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Vial Adaptor",
                        "level3_id": 22,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Device Related",
                "level2_id": 3,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Contents Released on Patient",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Damaged / Defective Device",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Difficulty Releasing Contents",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Failure to Fire",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Needle Bent / Damaged",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Needle Failed to Retract",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Needle Shield Not Removed with Cap",
                        "level3_id": 7,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Product Released After Intended",
                        "level3_id": 8,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Product Released Before Intended",
                        "level3_id": 9,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Safety Device Activated Before Intended",
                        "level3_id": 10,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Safety Device Did Not Activate",
                        "level3_id": 11,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Safety Sleeve Issues",
                        "level3_id": 12,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Sound Issues",
                        "level3_id": 13,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Unable to Actuate Button",
                        "level3_id": 14,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Unable to Release Contents",
                        "level3_id": 15,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Viewing Window / Indicator Issues",
                        "level3_id": 16,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Difficult to Attach Component",
                "level2_id": 4,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Needle Safety Assembly",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Vial Adaptor",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "In Process Printing Issues",
                "level2_id": 5,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "In Process Printing Issues",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Leaking",
                "level2_id": 6,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Ampoule / Vial",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Applicator",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Bottle",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Luer / Collar",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Measuring Tool",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Plunger",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Safety Needle Assembly",
                        "level3_id": 7,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Syringe",
                        "level3_id": 8,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Tube",
                        "level3_id": 9,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Vial Adaptor",
                        "level3_id": 10,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Loose / Detached Component",
                "level2_id": 7,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Liner",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Luer / Collar",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Measuring Tool",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Needle Shield / Sheath / Cap",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Plunger",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Safety Needle Assembly",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "UltraSafe",
                        "level3_id": 7,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Vial Adaptor",
                        "level3_id": 8,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Lot / Expiration Date Issues",
                "level2_id": 8,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Missing",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Printing Issues",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Miscount / Incorrect Volume",
                "level2_id": 9,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Ampoule / Vial",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Blister",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Bottle",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Carton",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Pouch",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Shipper",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Syringe",
                        "level3_id": 7,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Tube",
                        "level3_id": 8,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Missing Component",
                "level2_id": 10,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Missing Device",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Missing Label",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Missing Leaflet / Literature / Insert",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Missing Non Device",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Other Packaging / Device Complaint",
                "level2_id": 11,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Other Packaging / Device Complaint",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Packaging Configuration",
                "level2_id": 12,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Incorrect Sequence",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Packaging Performance",
                "level2_id": 13,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Difficult to Open / Remove Product",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Seal Issues",
                "level2_id": 14,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Blister",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Carton",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Pouch",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Safety Shrink Wrap",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Shipper",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Tube Crimp",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    },
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Product Physical Issues",
        "level1_id": 5,
        "score": "0.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Adhesive Issues",
                "level2_id": 1,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Excessive Adhesive / Product",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Lack of Adhesion / No Adhesive",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Leaves Residue",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Damaged / Defective Product",
                "level2_id": 2,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Broken / Crushed",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Liner",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Malformed",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Patch Issues",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Patch Layers Displaced / Misaligned",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Printing / Embossing Issues",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Tablet Coating Issues",
                        "level3_id": 7,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Other Product Quality Complaint",
                "level2_id": 3,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Other Product Quality Complaint",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Product Performance",
                "level2_id": 4,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Breaks / Falls Apart with Use",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Difficulty Swallowing",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Dissolving Issues",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Uncharacteristic Product Attributes",
                "level2_id": 5,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Uncharacteristic Color",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Uncharacteristic Consistency / Texture",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Uncharacteristic Product Fill Level",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Uncharacteristic Size / Shape",
                        "level3_id": 4,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Uncharacteristic Smell / Odor",
                        "level3_id": 5,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Uncharacteristic Taste",
                        "level3_id": 6,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    },
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Suspect Product",
        "level1_id": 6,
        "score": "0.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Suspect Counterfeit",
                "level2_id": 6,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "GTIN / Batch / Exp Date / SN Mismatch",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "GTIN / Batch / Exp Date / SN Not Found in Data Base",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Suspect Counterfeit",
                        "level3_id": 3,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Suspect Diverted Product",
                "level2_id": 7,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Suspect Diverted Product",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Suspect Foreign Material",
                "level2_id": 8,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Drug Product Contact",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    },
                    {
                        "level": 3,
                        "name": "Non Drug Product Contact",
                        "level3_id": 2,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Suspect Mixed / Mislabeled Product",
                "level2_id": 9,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Suspect Mixed / Mislabeled Product",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            },
            {
                "level": 2,
                "name": "Suspect Tampering / Alteration",
                "level2_id": 10,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Suspect Tampering / Alteration",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    },
    {
        "level": 1,
        "narrative_id": "COMP1007",
        "name": "Temperature Excursion",
        "level1_id": 7,
        "score": "0.00",
        "acceptedStatus": 0,
        "children": [
            {
                "level": 2,
                "name": "Temperature Excursion",
                "level2_id": 1,
                "score": "0.00",
                "acceptedStatus": 0,
                "children": [
                    {
                        "level": 3,
                        "name": "Temperature Excursion",
                        "level3_id": 1,
                        "score": "0.00",
                        "acceptedStatus": 0
                    }
                ]
            }
        ]
    }
]

function findType(col) {
  var i, temp;
  for (i = 0; i < col.length; i++) {
      // if (col[i]) {
      //     return col[i];
      // }
      if (col[i].children.length > 0) {
          temp = findType(col[i].children); // store result
          if (temp) {                           // check
              return temp;                      // return result
          }
      }
  }
  return null;
}
let resend = findType(data);
res.send(resend)
});

router.get('/checkingApi', (req, res) => {
    console.log("testing....api hit")
     const my = () => {
       console.log("testing.... in api hittt..");
       let a =  [
        "proident",
        "ex",
        "proident",
        "labore",
        "in",
        "occaecat",
        "dolor",
        "et",
        "nisi",
        "mollit",
        "officia",
        "magna",
        "sunt",
        "eu",
        "duis",
        "occaecat",
        "Lorem",
        "culpa",
        "ad",
        "sunt",
        "excepteur",
        "quis",
        "sit",
        "adipisicing",
        "sit",
        "duis",
        "qui",
        "ut",
        "velit",
        "et",
        "esse",
        "id",
        "nulla",
        "sit",
        "mollit",
        "sunt",
        "officia",
        "in",
        "labore",
        "esse",
        "non",
        "aliquip",
        "duis",
        "ut",
        "ea",
        "aliquip",
        "nisi",
        "proident",
        "adipisicing",
        "commodo",
        "ea",
        "reprehenderit",
        "labore",
        "cillum",
        "excepteur",
        "non",
        "et",
        "cupidatat",
        "esse",
        "consequat",
        "laboris",
        "deserunt",
        "veniam",
        "ad",
        "veniam",
        "labore",
        "laboris",
        "aute",
        "proident",
        "in",
        "qui",
        "ad",
        "aliquip",
        "duis",
        "amet",
        "exercitation",
        "proident",
        "amet",
        "in",
        "cupidatat",
        "ad",
        "deserunt",
        "anim",
        "voluptate",
        "pariatur",
        "deserunt",
        "veniam",
        "laborum",
        "exercitation",
        "irure",
        "est",
        "id",
        "dolor",
        "ad",
        "veniam",
        "do",
        "elit",
        "officia",
        "id",
        "aute",
        "ullamco",
        "quis",
        "aliqua",
        "laboris",
        "cupidatat",
        "enim",
        "nostrud",
        "ea",
        "ut",
        "amet",
        "occaecat",
        "excepteur",
        "veniam",
        "dolore",
        "deserunt",
        "sunt",
        "ad",
        "sint",
        "laborum",
        "pariatur",
        "ullamco",
        "ex",
        "amet",
        "magna",
        "duis",
        "ipsum",
        "ut",
        "Lorem",
        "proident",
        "qui",
        "mollit",
        "incididunt",
        "pariatur",
        "non",
        "irure",
        "nulla",
        "mollit",
        "irure",
        "cupidatat",
        "officia",
        "laborum",
        "et",
        "esse",
        "fugiat",
        "qui",
        "eiusmod",
        "nisi",
        "et",
        "ut",
        "minim",
        "veniam",
        "proident",
        "enim",
        "et",
        "voluptate",
        "aliquip",
        "quis",
        "ea",
        "incididunt",
        "ad",
        "duis",
        "elit",
        "dolor",
        "non",
        "nulla",
        "irure",
        "labore",
        "laborum",
        "ipsum",
        "veniam",
        "veniam",
        "enim",
        "nostrud",
        "nulla",
        "occaecat",
        "qui",
        "enim",
        "et",
        "officia",
        "id",
        "ullamco",
        "quis",
        "consequat",
        "esse",
        "do",
        "ex",
        "tempor",
        "dolore",
        "aute",
        "nulla",
        "do",
        "eiusmod",
        "consequat",
        "et",
        "quis",
        "magna",
        "sunt",
        "esse",
        "incididunt",
        "ipsum",
        "minim",
        "Lorem",
        "incididunt",
        "esse",
        "eiusmod",
        "nostrud",
        "minim",
        "enim",
        "exercitation",
        "ex",
        "qui",
        "sit",
        "aliquip",
        "non",
        "proident",
        "minim",
        "Lorem",
        "nulla",
        "minim",
        "ullamco",
        "enim",
        "mollit",
        "amet",
        "tempor",
        "eiusmod",
        "ipsum",
        "velit",
        "mollit",
        "non",
        "do",
        "non",
        "excepteur",
        "magna",
        "ea",
        "eu",
        "nostrud",
        "do",
        "laborum",
        "laborum",
        "officia",
        "nostrud",
        "non",
        "anim",
        "proident",
        "proident",
        "tempor",
        "laboris",
        "laborum",
        "occaecat",
        "velit",
        "nisi",
        "occaecat",
        "consequat",
        "occaecat",
        "ut",
        "sunt",
        "aliquip",
        "pariatur",
        "consequat",
        "adipisicing",
        "elit",
        "aute",
        "ad",
        "do",
        "cillum",
        "ut",
        "veniam",
        "quis",
        "adipisicing",
        "adipisicing",
        "ex",
        "proident",
        "culpa",
        "nostrud",
        "mollit",
        "enim",
        "qui",
        "dolor",
        "mollit",
        "ad",
        "amet",
        "in",
        "sit",
        "id",
        "labore",
        "nisi",
        "aliquip",
        "id",
        "tempor",
        "nulla",
        "sit",
        "duis",
        "laborum",
        "aliquip",
        "fugiat",
        "voluptate",
        "et",
        "adipisicing",
        "ut",
        "consequat",
        "sunt",
        "fugiat",
        "voluptate",
        "occaecat",
        "consequat",
        "velit",
        "do",
        "enim",
        "nisi",
        "proident",
        "commodo",
        "laborum",
        "sint",
        "enim",
        "ut",
        "anim",
        "proident",
        "pariatur",
        "sunt",
        "occaecat",
        "laborum",
        "irure",
        "incididunt",
        "cillum",
        "reprehenderit",
        "reprehenderit",
        "labore",
        "elit",
        "cillum",
        "aliquip",
        "fugiat",
        "non",
        "duis",
        "labore",
        "voluptate",
        "esse",
        "sint",
        "esse",
        "exercitation",
        "dolore",
        "esse",
        "eiusmod",
        "id",
        "sunt",
        "ullamco",
        "fugiat",
        "do",
        "voluptate",
        "cupidatat",
        "nisi",
        "duis",
        "culpa",
        "officia",
        "magna",
        "dolor",
        "fugiat",
        "irure",
        "proident",
        "in",
        "occaecat",
        "consequat",
        "ullamco",
        "laboris",
        "id",
        "ex",
        "minim",
        "occaecat",
        "ad",
        "exercitation",
        "fugiat",
        "culpa",
        "velit",
        "ullamco",
        "non",
        "adipisicing",
        "quis",
        "quis",
        "proident",
        "do",
        "ullamco",
        "ipsum",
        "cupidatat",
        "voluptate",
        "magna",
        "et",
        "anim",
        "do",
        "ipsum",
        "est",
        "dolore",
        "exercitation",
        "sunt",
        "minim",
        "duis",
        "cillum",
        "culpa",
        "enim",
        "quis",
        "sint",
        "ullamco",
        "occaecat",
        "labore",
        "do",
        "reprehenderit",
        "eu",
        "labore",
        "esse",
        "anim",
        "enim",
        "reprehenderit",
        "anim",
        "mollit",
        "labore",
        "et",
        "adipisicing",
        "irure",
        "aliqua",
        "consequat",
        "exercitation",
        "pariatur",
        "proident",
        "sunt",
        "cupidatat",
        "occaecat",
        "sint",
        "aute",
        "ut",
        "in",
        "magna",
        "cupidatat",
        "duis",
        "mollit",
        "fugiat",
        "aute",
        "eu",
        "et",
        "dolor",
        "minim",
        "cillum",
        "id",
        "sit",
        "sit",
        "consectetur",
        "anim",
        "non",
        "ad",
        "exercitation",
        "laboris",
        "pariatur",
        "esse",
        "tempor",
        "nostrud",
        "aliquip",
        "anim",
        "amet",
        "et",
        "ut",
        "mollit",
        "in",
        "cupidatat",
        "ut",
        "excepteur",
        "pariatur",
        "nisi",
        "adipisicing",
        "duis",
        "qui",
        "exercitation",
        "reprehenderit",
        "proident",
        "velit",
        "commodo",
        "amet",
        "non",
        "veniam",
        "consectetur",
        "aliqua",
        "eiusmod",
        "elit",
        "et",
        "id",
        "aliqua",
        "ex",
        "eiusmod",
        "labore",
        "amet",
        "Lorem",
        "est",
        "cillum",
        "veniam",
        "est",
        "reprehenderit",
        "eu",
        "quis",
        "eiusmod",
        "ullamco",
        "sint",
        "ullamco",
        "aute",
        "occaecat",
        "enim",
        "nisi",
        "aliqua",
        "est",
        "esse",
        "sit",
        "sunt",
        "minim",
        "consectetur",
        "ea",
        "fugiat",
        "velit",
        "ut",
        "exercitation",
        "qui",
        "non",
        "laboris",
        "cillum",
        "laboris",
        "ex",
        "occaecat",
        "eu",
        "mollit",
        "ad",
        "laboris",
        "et",
        "est",
        "laborum",
        "aute",
        "commodo",
        "fugiat",
        "pariatur",
        "nulla",
        "excepteur",
        "cillum",
        "laborum",
        "velit",
        "velit",
        "consectetur",
        "ipsum",
        "et",
        "et",
        "sunt",
        "mollit",
        "quis",
        "ex",
        "ea",
        "dolor",
        "ullamco",
        "aliquip",
        "veniam",
        "ex",
        "elit",
        "consequat",
        "sint",
        "anim",
        "ipsum",
        "commodo",
        "cillum",
        "tempor",
        "nulla",
        "laborum",
        "aute",
        "magna",
        "ut",
        "irure",
        "sit",
        "occaecat",
        "magna",
        "velit",
        "non",
        "exercitation",
        "ex",
        "aliquip",
        "elit",
        "quis",
        "adipisicing",
        "nulla",
        "pariatur",
        "reprehenderit",
        "pariatur",
        "velit",
        "exercitation",
        "eiusmod",
        "eu",
        "laborum",
        "aliqua",
        "anim",
        "pariatur",
        "consectetur",
        "labore",
        "amet",
        "sint",
        "adipisicing",
        "sit",
        "cillum",
        "anim",
        "elit",
        "mollit",
        "nulla",
        "veniam",
        "dolore",
        "nisi",
        "nulla",
        "ea",
        "sint",
        "ipsum",
        "elit",
        "consectetur",
        "aute",
        "ut",
        "et",
        "duis",
        "non",
        "sunt",
        "culpa",
        "irure",
        "quis",
        "cupidatat",
        "est",
        "commodo",
        "excepteur",
        "cupidatat",
        "ullamco",
        "laboris",
        "in",
        "cupidatat",
        "dolor",
        "consectetur",
        "veniam",
        "nisi",
        "in",
        "exercitation",
        "nostrud",
        "Lorem",
        "in",
        "nostrud",
        "eiusmod",
        "cupidatat",
        "occaecat",
        "labore",
        "id",
        "esse",
        "velit",
        "nulla",
        "ad",
        "laboris",
        "officia",
        "irure",
        "elit",
        "irure",
        "nostrud",
        "magna",
        "excepteur",
        "do",
        "mollit",
        "officia",
        "nostrud",
        "qui",
        "culpa",
        "laboris",
        "id",
        "amet",
        "adipisicing",
        "occaecat",
        "sit",
        "culpa",
        "ea",
        "cupidatat",
        "ea",
        "incididunt",
        "anim",
        "consectetur",
        "commodo",
        "anim",
        "tempor",
        "consequat",
        "eiusmod",
        "commodo",
        "minim",
        "minim",
        "id",
        "enim",
        "elit",
        "velit",
        "fugiat",
        "duis",
        "anim",
        "elit",
        "ut",
        "dolore",
        "in",
        "nostrud",
        "cillum",
        "cupidatat",
        "elit",
        "mollit",
        "amet",
        "cillum",
        "fugiat",
        "consectetur",
        "exercitation",
        "exercitation",
        "esse",
        "proident",
        "eu",
        "exercitation",
        "consectetur",
        "laborum",
        "voluptate",
        "mollit",
        "ea",
        "aliquip",
        "eu",
        "velit",
        "proident",
        "aliqua",
        "quis",
        "cupidatat",
        "consequat",
        "sit",
        "fugiat",
        "Lorem",
        "ut",
        "ipsum",
        "id",
        "incididunt",
        "minim",
        "mollit",
        "quis",
        "anim",
        "ad",
        "sit",
        "excepteur",
        "eiusmod",
        "ipsum",
        "anim",
        "qui",
        "officia",
        "eu",
        "est",
        "ullamco",
        "cupidatat",
        "officia",
        "ut",
        "quis",
        "proident",
        "nostrud",
        "magna",
        "consequat",
        "quis",
        "irure",
        "sint",
        "tempor",
        "cillum",
        "aliqua",
        "do",
        "tempor",
        "incididunt",
        "exercitation",
        "dolore",
        "cupidatat",
        "exercitation",
        "dolor",
        "et",
        "mollit",
        "tempor",
        "consequat",
        "mollit",
        "eu",
        "cillum",
        "voluptate",
        "reprehenderit",
        "culpa",
        "elit",
        "commodo",
        "sit",
        "fugiat",
        "deserunt",
        "magna",
        "voluptate",
        "ea",
        "veniam",
        "ut",
        "qui",
        "enim",
        "in",
        "dolore",
        "excepteur",
        "commodo",
        "esse",
        "dolor",
        "Lorem",
        "tempor",
        "in",
        "nostrud",
        "sit",
        "pariatur",
        "anim",
        "consectetur",
        "officia",
        "nisi",
        "consectetur",
        "minim",
        "ut",
        "voluptate",
        "ut",
        "ad",
        "occaecat",
        "mollit",
        "anim",
        "deserunt",
        "officia",
        "proident",
        "cupidatat",
        "id",
        "voluptate",
        "cupidatat",
        "elit",
        "nisi",
        "duis",
        "magna",
        "nulla",
        "quis",
        "duis",
        "veniam",
        "id",
        "ex",
        "fugiat",
        "nulla",
        "aliquip",
        "est",
        "pariatur",
        "officia",
        "incididunt",
        "esse",
        "nulla",
        "do",
        "labore",
        "laboris",
        "amet",
        "deserunt",
        "esse",
        "officia",
        "consequat",
        "aliqua",
        "adipisicing",
        "non",
        "anim",
        "et",
        "veniam",
        "ut",
        "officia",
        "pariatur",
        "aute",
        "adipisicing",
        "ad",
        "duis",
        "tempor",
        "duis",
        "ut",
        "ipsum",
        "ipsum",
        "officia",
        "pariatur",
        "qui",
        "anim",
        "esse",
        "cupidatat",
        "magna",
        "fugiat",
        "exercitation",
        "exercitation",
        "dolor",
        "aliquip",
        "magna",
        "minim",
        "non",
        "eu",
        "occaecat",
        "mollit",
        "ea",
        "eiusmod",
        "elit",
        "officia",
        "ea",
        "id",
        "officia",
        "amet",
        "ea",
        "aute",
        "cupidatat",
        "occaecat",
        "dolor",
        "laborum",
        "ullamco",
        "velit",
        "ad",
        "voluptate",
        "qui",
        "adipisicing",
        "laboris",
        "ipsum",
        "duis",
        "et",
        "mollit",
        "esse",
        "consectetur",
        "anim",
        "elit",
        "reprehenderit",
        "labore",
        "quis",
        "aute",
        "incididunt",
        "proident",
        "proident",
        "incididunt",
        "deserunt",
        "nulla",
        "mollit",
        "commodo",
        "proident",
        "irure",
        "irure",
        "aliqua",
        "eiusmod",
        "duis",
        "ullamco",
        "officia",
        "reprehenderit",
        "laboris",
        "aute",
        "nisi",
        "magna",
        "deserunt",
        "ad",
        "veniam",
        "commodo",
        "dolore",
        "dolore",
        "exercitation",
        "consectetur",
        "mollit",
        "nostrud",
        "nostrud",
        "ipsum",
        "dolore",
        "do",
        "consectetur",
        "laboris",
        "qui",
        "aliqua",
        "consequat",
        "labore",
        "fugiat",
        "qui",
        "cillum",
        "qui",
        "fugiat",
        "Lorem",
        "amet",
        "cillum",
        "proident",
        "qui",
        "sint",
        "commodo",
        "duis",
        "tempor",
        "excepteur",
        "est",
        "ex",
        "Lorem",
        "labore",
        "id",
        "magna",
        "incididunt",
        "nostrud",
        "esse",
        "cillum",
        "ipsum",
        "occaecat",
        "nulla",
        "deserunt",
        "eiusmod",
        "aliqua",
        "qui",
        "et",
        "ea",
        "fugiat",
        "voluptate",
        "do",
        "tempor",
        "dolor",
        "dolore",
        "eu",
        "et",
        "occaecat",
        "et",
        "quis"];
       for(let i = 0; i<a.length;i++){
        setTimeout(() => {console.log(i, "i")}, 4000)
       }
       res.send({"data" : a[5]})
    }
  my();
})

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