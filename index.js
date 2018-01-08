import App from './app';

window.addEventListener('load', function() {
    let myCanvas = document.getElementById('myCanvas');
    let app = new App(512, 512, {
        transparent: false,
        antialias: true,
        resolution: 1
    });
    myCanvas.appendChild(app.view);
})