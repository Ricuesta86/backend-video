const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const datos = require('../store/data.json');

class Video {
    constructor(id, nombre) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.descripcion = '';
    }
}

class VideoControl {
    constructor() {
        this.videos = [];
        this.videos = datos;

        console.log(this.videos);
    }
    addVideo(video) {

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
            videos: videos
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }
}

module.exports = {
    VideoControl,
    Video
};