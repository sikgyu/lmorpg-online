class TitleScene extends Phaser.Scene {
    constructor() {
        // call the constructor of our superclass (parent class)
        super('Title');
    }

    create () {
        // create title text
        this.titleText = this.add.text(this.scale.width / 2 , this.scale.height / 2 , 'Little Multiplayer Online RPG', { fontSize: '40px', fill: '#fff', fontFamily: 'Arial' });
        this.titleText.setOrigin(0.5);

        // create a Play Button
        this.startGameButton = new UiButton(this, this.scale.width / 2 , this.scale.height * 0.65, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game')).setScale(0.8);
        
        // create a Button again
        this.AnotherButton = new UiButton(this, this.scale.width / 2 , this.scale.height * 0.75, 'button1', 'button2', 'Email to Sean', this.emailMe.bind(this, 'dlatlrrb@gmail.com')).setScale(0.8);
    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }

    emailMe(target) {
        alert(target);
    }
}