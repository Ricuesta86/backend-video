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
        console.log(datos);
        this.videos = JSON.parse(datos);
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