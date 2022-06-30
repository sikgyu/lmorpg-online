class UiScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Ui');
    }

    init() {
        // grab a reference to the game scene
        this.gameScene = this.scene.get('Game');
    }

    create () {
        this.setupUIElements();
        this.setupEvents();
    }

    setupUIElements() {
        // create score text object
        this.scoreText = this.add.text(35, 8, 'Coins: 0', { fontSize: '16px', fill: '#fff', fontFamily: 'Arial' });
        // create coin icon
        this.coinIcon = this.add.image(15, 15, 'items', 3);
    }

    setupEvents() {
        // listen for the updateScore event from the game
        this.gameScene.events.on('updateScore', (score) => {
            this.scoreText.setText(`Coins: ${score}`);
        })
    }
}