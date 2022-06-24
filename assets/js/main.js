var config = {
    type: Phaser.AUTO, //choose WebGL by default. If it's not available, use Canvas
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
    }
};

var game = new Phaser.Game(config);

function preload() {

};

function create() {

};