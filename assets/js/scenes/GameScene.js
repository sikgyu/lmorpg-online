class GameScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Game');
    }
    // this method is first called when our scene is initialized
    init() {
        this.scene.launch('Ui');
        this.score = 0;
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
        // create a chest group
        this.chests = this.physics.add.group();
        // create chest positions array
        this.chestPositions = [[100, 100], [200, 200], [300, 300], [400, 400], [500, 500]];
        // specify the max number of chest we can have 
        this.maxNumberOfChests = 3;
        // spawn a chest
        for (let i = 0; i < this.maxNumberOfChests; i++) {
            this.spawnChest();
        };
    }

    spawnChest() {
        const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];
        const chest = new Chest(this, location[0], location[1], 'items', 0);
        this.chests.add(chest);
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
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this); // this means the scope that we want passed to this function
    }
    collectChest(player, chest) {
        // play gold pickup audio
        this.goldPickupAudio.play();
        // update our score
        this.score += chest.coins;
        // emit events
        this.events.emit('updateScore', this.score);
        // destroy the chest game object
        chest.destroy();
        // spawn a new chest
        this.time.delayedCall(1000, this.spawnChest, [], this);
    }
}