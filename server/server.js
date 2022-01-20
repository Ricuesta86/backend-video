const express = require('express');
const app = express();



app.get('/video',(req,res)=>{
    res.json({
        mensaje:'get video'
    });
});

app.post('/video',(req,res)=>{
    res.json({
        mensaje:'post video'
    });
});

app.put('/video/:id',(req,res)=>{
    res.json({
        mensaje:'put video'
    });
});

app.delete('/video/:id',(req,res)=>{
    res.json({
        mensaje:'delete video'
    });
});

app.listen(3000,()=>{
    console.log('Server run port 3000');
});