class TitleScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Title');
    }

    create () {
        // create title text
        this.titleText = this.add.text(this.scale.width / 2 , this.scale.height / 2 , 'Little Multiplayer Online RPG', { fontSize: '40px', fill: '#fff', fontFamily: 'Arial' });
        this.titleText.setOrigin(0.5);
        this.button = this.add.image(this.scale.width / 2 , this.scale.height * 0.65, 'button1');
        this.button.setInteractive();
        // create a Button
        this.buttonText = this.add.text(0, 0, 'Start', { fontSize: '26px', fill: '#fff', fontFamily: 'Arial' });
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        this.button.on('pointerdown', () => {
            this.scene.start('Game');
        })
        this.button.on('pointerover', () => {
            this.button.setTexture('button2');
        })
        this.button.on('pointerout', () => {
            this.button.setTexture('button1');
        })
    }
}