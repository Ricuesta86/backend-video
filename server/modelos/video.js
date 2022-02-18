const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { json } = require('express/lib/response');


/* class Video {
    constructor(nombre, descripcion) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
} */

class VideoControl {
    constructor() {
        const datos = require('../store/data.json');
        console.log(datos.videos);
        this.videos = datos.videos;
        //this.videos = datos;
    }
    addVideo(nombre, descripcion) {
        let video = {
            id: uuidv4(),
            nombre,
            descripcion
        }
        this.videos.push(video);
        this.grabarArchivo();
        return video;

    }
    getVideo(id) {
        let video = this.videos.filter(video => video.id === id)
        return video;
    }
    getVideos() {
        return this.videos;
    }
    updateVideo(id, nombre, descripcion) {
        let video = -1;
        for (let i = 0; i < this.videos.length; i++) {
            if (this.videos[i].id === id) {
                if (nombre != undefined && nombre != '') {
                    this.videos[i].nombre = nombre;
                }
                if (descripcion != '' || !descripcion != undefined) {
                    this.videos[i].descripcion = descripcion;
                }
                video = this.videos[i];
                this.grabarArchivo();
            }
        }
        return video;
    }
    deleteVideo(id) {

    }
    grabarArchivo() {
        let jsonData = {
            videos: this.videos
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/store/data.json', jsonDataString);
    }
}

module.exports = {
    VideoControl

};