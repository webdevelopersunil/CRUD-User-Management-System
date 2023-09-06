require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');


const port = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Passing data

app.use(express.static('public')); // serving images and static files
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');



// Route Home
app.get('/', (req, res) => {
    res.send('Hellow World');
})



app.listen(port, (err) => {
    if(err){
        console.log(`Server error : ${err}`);
        return res.end('server stopped responding');
    }
    
    console.log(`Server is running on the Port : ${port}`);

})