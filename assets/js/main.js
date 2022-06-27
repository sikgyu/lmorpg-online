let config = {
    type: Phaser.AUTO, //choose WebGL by default. If it's not available, use Canvas
    width: 800,
    height: 600,
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        UiScene,
    ],
    // specify a new property for physics
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 },
        },
    },
    pixelArt: true,
};

let game = new Phaser.Game(config);

function preload() {

};

function create() {

};

function update() {

}