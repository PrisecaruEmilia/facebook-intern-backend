const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/PostRoutes')
const userRoutes = require('./routes/UserRoutes')
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 80;

const app = express()
const connectionString = 'mongodb+srv://dbEmilia:dbEmilia@cluster0.b8noq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(postRoutes)
app.use(userRoutes)


// app.get('/', (req, res) => {
//   res.send('Saluuut!')
// })

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})