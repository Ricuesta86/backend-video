const express = require('express');
const app = express();
const { VideoControl } = require('./modelos/video');



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}));

// parse application/json
app.use(express.json());




app.get('/video/:id', (req, res) => {
    res.json(datos);
});

app.get('/video', (req, res) => {
    const videoControl = new VideoControl();
    res.json({
        mensaje: 'get video'
    });
});

app.post('/video', (req, res) => {
    const body = req.body;
    res.json({
        mensaje: body
    });
});

app.put('/video/:id', (req, res) => {
    res.json({
        mensaje: 'put video'
    });
});

app.put('/upload/:id', (req, res) => {
    res.json({
        mensaje: 'put video'
    });
});

app.delete('/video/:id', (req, res) => {
    res.json({
        mensaje: 'delete video'
    });
});

app.listen(3000, () => {
    console.log('Server run port 3000');
});