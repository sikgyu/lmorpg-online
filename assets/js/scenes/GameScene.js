class GameScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Game');
    }
    // this method is first called when our scene is initialized
    init() {
        this.scene.launch('Ui');
    }

    create () {
        this.createAudio();
        this.createPlayer();
        this.createChests();
        this.createWalls();
        this.createInput();
        this.addCollidsion();

    }
    update() {
        this.player.update(this.cursors);
    }
    createAudio() {
        this.goldPickupAudio = this.sound.add('goldsound', {loop: false, volume: 0.5});
    }
    createPlayer() {
        this.player = new Player(this, 32, 32, 'characters', 0);
    }
    createChests() {
        this.chest = new Chest(this, 300, 300, 'items', 0);
    }
    createWalls() {
        this.wall = this.physics.add.image(500, 100, 'button1', 0);
        this.wall.setImmovable();
    }
    createInput() {
        // create bindings to the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    addCollidsion() {
        // adding a collider between player and button for (testing)
        this.physics.add.collider(this.player, this.wall);
        // call collectChest function when player overlaps with chest
        this.physics.add.overlap(this.player, this.chest, this.collectChest, null, this); // this means the scope that we want passed to this function
    }
    collectChest(player, chest) {
        // play gold pickup audio
        this.goldPickupAudio.play();
        // emit events
        this.events.emit('updateScore', chest.coins);
        // destroy the chest game object
        this.chest.destroy();
    }
}