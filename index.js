const express = require('express');

const app = express();
app.get('/', (req,res) => {
    res.send(`<h1>HelloWorld</h1>`);
});
app.get('/shreyansh', (req,res) => {
    res.send(`<h1>Hello Shreyansh!</h1>`);
});
app.get('/:name', (req,res)=>{
    const s = req.params.name;
    res.send(`<h1>Hello ${s}</h1>`);
})

app.listen(8000);