import { Application, Sprite, loader, utils } from 'pixi.js';

class App extends Application {
    constructor(options) {
        super(options);

        this.load();
    }

    load(callback) {


        loader.add('./assets/images/main-evil.png');
        loader.load(this.onImageLoadComplete.bind(this));

    }

    onImageLoadComplete() {
        this.onImageLoadComplete = true;
        this.onLoadComplete();
    }

    onLoadComplete() {
        console.log(utils.TextureCache['./assets/images/main-evil.png']);
        const character = new Sprite(utils.TextureCache['./assets/images/main-evil.png']);
        character.width = 500;
        character.height = 500;
        character.x = 0;
        character.y = 0;

        this.stage.addChild(character);
    }
}

export default App;