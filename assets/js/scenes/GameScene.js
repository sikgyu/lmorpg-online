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
        let goldPickupAudio = this.sound.add('goldsound', {loop: false, volume: 0.5});

        let button = this.add.image(100, 100, 'button1');
        button.setOrigin(0.5, 0.5);
    
        this.add.sprite(300, 100, 'button1');
        this.wall = this.physics.add.image(500, 100, 'button1', 0);
        this.wall.setImmovable();
        
        this.chest = new Chest(this, 300, 300, 'items', 0);
        // create character game object
        this.player = new Player(this, 32, 32, 'characters', 0);

        // adding a collider between player and button for (testing)
        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.chest, function(player, chest) { goldPickupAudio.play(); chest.destroy(); }, null, this);
        
        // create bindings to the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.update(this.cursors);
    }
}