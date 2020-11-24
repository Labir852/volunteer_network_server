const express = require('express')
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());



const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kmtud.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology:true});
client.connect(err => {
  const EventCollection = client.db("VolunteerNetwork").collection("EventTasks");
  // perform actions on the collection object
  app.get('/', (req, res) => {
    res.send('Hello This is volunteer network website dummy!');
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})