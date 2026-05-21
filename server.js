require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json()) // built-in middleware

app.use((req, res, next)=>{
  //Logs every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); //Pass to next handler(require!)
});


app.get('/search', (req, res) => {
  const id =  req.query.id;
  console.log(id);
  res.send(id);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})