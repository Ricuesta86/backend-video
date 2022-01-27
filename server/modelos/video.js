const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const datos =

    class Video {
        constructor(id, nombre) {
            this.id = uuidv4();
            this.nombre = nombre;
            this.descripcion = '';
        }
    }
class VideoControl {
    constructor() {
        this.videos = require('../store/data.json');
        console.log(videos);
    }
    addVideo(datos) {

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

};