class BootScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Boot');
    }

    preload() {
        // load images
        this.loadImages();
        // load spritesheets
        this.loadSpriteSheets();
        // load audio
        this.loadAudio();
        // load tilemap
        this.loadTileMap();
    }

    loadImages() {
        this.load.image('button1', 'assets/images/ui/blue_button01.png');
        this.load.image('button2', 'assets/images/ui/blue_button02.png');
        // load the map tileset image
        this.load.image('background', 'assets/level/background-extruded.png');
    }

    loadSpriteSheets() {
        this.load.spritesheet('items', 'assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('characters', 'assets/images/characters.png', { frameWidth: 32, frameHeight: 32 });
    }

    loadAudio() {
        this.load.audio('goldsound', 'assets/audio/Pickup.wav')
    }

    loadTileMap() {
        // map made with Tiled in JSON format
        this.load.tilemapTiledJSON('map', 'assets/level/large_level.json');
    }

    create() {
        this.scene.start('Game');
    }
}