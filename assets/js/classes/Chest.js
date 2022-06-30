class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene; // the scene this game object will be added to
        this.coins = 10; // the amount of coins this chest contians

        // enable physics 
        this.scene.physics.world.enable(this);
        
        // add the player to our existing scene
        this.scene.add.existing(this);
    }
}