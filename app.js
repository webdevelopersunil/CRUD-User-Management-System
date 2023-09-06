require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');    // Require the db configuration
// connect to the database
connectDB();

const port = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Passing data

app.use(express.static('public')); // serving images and static files
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/customer'));

// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404');
});



app.listen(port, (err) => {
    if(err){
        console.log(`Server error : ${err}`);
        return res.end('server stopped responding');
    }
    
    console.log(`Server is running on the Port : ${port}`);

})