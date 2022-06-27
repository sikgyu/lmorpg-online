let config = {
    type: Phaser.AUTO, //choose WebGL by default. If it's not available, use Canvas
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
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
    this.load.image('button1', 'assets/images/ui/blue_button01.png');
    this.load.spritesheet('items', 'assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', 'assets/images/characters.png', { frameWidth: 32, frameHeight: 32 });
};

function create() {
    let button = this.add.image(100, 100, 'button1');
    button.setOrigin(0.5, 0.5);

    this.add.sprite(300, 100, 'button1');

    this.chest = this.physics.add.image(300, 300, 'items', 1);

    this.wall = this.physics.add.image(500, 100, 'button1', 0);
    this.wall.setImmovable();
    // create character game object
    this.player = this.physics.add.image(32, 32, 'characters', 0);
    this.player.setScale(2); 
    this.player.body.setCollideWorldBounds(true);

    // adding a collider between player and button for (testing)
    this.physics.add.collider(this.player, this.wall);
    this.physics.add.overlap(this.player, this.chest, function() { console.log('overlap'); }, null, this);
    
    // create bindings to the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
};

function update() {
    this.player.setVelocity(0);
    
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
    } 

    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160);
    }
}