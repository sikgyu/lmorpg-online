class UiScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Ui');
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

    }
}