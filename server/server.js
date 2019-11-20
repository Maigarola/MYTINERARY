const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const config = require('config');

const app = express();
const port = process.env.PORT || 5000;

const cityRouter = require('./routes/cityRouter');
const itineraryRouter = require('./routes/itineraryRouter');
const activityRouter = require('./routes/activityRouter');
const userRouter = require('./routes/userRouter');

const mongoose = require('mongoose');
const db = require('./keys').mongoURI;
// const db = config.get('mongoURI');

app.use(bodyParser.json());
//app.use(express.json()) --> si lo quieres hacer sin BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/cities', cityRouter);
app.use('/itineraries', itineraryRouter);
app.use('/activities', activityRouter);
app.use('/users',userRouter);


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect(db, 
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  // puedes ponerle tb userCreateIndex: true para ir sin BodyParser
  )
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));