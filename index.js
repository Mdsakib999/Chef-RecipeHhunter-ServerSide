const express = require('express');
const res = require('express/lib/response');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const viewFood = require('./data/viowFood.json')


app.use(cors());

app.get('/', (req, res) =>{
    res.send('ke obosta tmader')
})

app.get('/viewFood', (req, res) =>{
 
    res.send(viewFood);
})

app.get('/viewFood/:id', (req, res) =>{
    const id = req.params.id;
    const viewChef = viewFood.find(f=> f.id == id);
    res.send(viewChef);
})


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})