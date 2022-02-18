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
    let id = req.params.id;
    let body = req.body
    if (body.nombre === undefined && body.descripcion === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre o la descripcion es nesesario'
        });
    } else {
        let dato = videoControl.updateVideo(id, body.nombre, body.descripcion);
        if (dato == -1) {
            res.status(400).json({
                ok: false,
                mensaje: 'ID no encontrado'
            });
        } else {
            res.json({
                ok: true,
                mensaje: dato
            });
        }
    }
});

app.put('/upload/:id', (req, res) => {
    res.json({
        mensaje: 'put video'
    });
});

app.delete('/video/:id', (req, res) => {
    let id = req.params.id;
    let datos = videoControl.deleteVideo(id);
    if (datos == -1) {
        res.status(400).json({
            ok: false,
            mensaje: 'El ID no fue encontrado'
        })
    } else {
        res.json({
            ok: true,
            mensaje: 'Se elimino el video con exito'
        });
    }

});

app.listen(3000, () => {
    console.log('Server run port 3000');
});