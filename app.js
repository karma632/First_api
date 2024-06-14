const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;
const host = 'localhost';

app.use(express.json());
app.use(cors());
// takes the data fromm the form
app.use(express.urlencoded({extended:false}));

//view engine setup
app.set('view engine', 'ejs');

//sets routes
var indexRouter = require('./routes/index');

app.use('/', indexRouter);


let movies = [
    {
       id: "1",
       title: 'Godzilla',
       director: 'Mr Daniel',
       release_date: '11th april',
    },
    {
       id: "2",
       title: 'The Boys',
       director: 'Mr Johnny',
       release_date: '20th may',
    },
   ];
   
   //get the movie list in json form
   app.get("/movie", (req, res) =>{
       res.json(movies);
   });
   
// setting the server
app.listen(port, () => console.log(`Server running at http://${host}:${port}/`));