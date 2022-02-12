const express = require('express');
const app = express();
const { VideoControl } = require('./modelos/video');
const videoControl = new VideoControl();


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}));

// parse application/json
app.use(express.json());




app.get('/video/:id', (req, res) => {
    const id = req.params.id;
    res.json({ ok: true, mensaje: videoControl.getVideo(id) });
});

app.get('/video', (req, res) => {
    res.json({
        ok: true,
        mensaje: videoControl.getVideos()
    });
});

app.post('/video', (req, res) => {
    const body = req.body;


    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es nesesario'
        });
    } else {
        let dato = videoControl.addVideo(body.nombre, body.descripcion);
        res.json({
            ok: true,
            mensaje: dato
        });
    }

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