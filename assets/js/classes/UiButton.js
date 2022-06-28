class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallback) {
        super(scene, x, y);
        this.scene = scene; // the scene that this button belongs to
        this.x = x; // x position of the container
        this.y = y; // y position of the container
        this.key = key; // the background image of our button
        this.hoverKey = hoverKey; // the image that will be displayed when the player hovers over the button
        this.text = text; // the text that will be displayed on the button
        this.targetCallback = targetCallback; // the callback function that will be executed when the button is clicked
        
        // create our UI Button 
        this.createButton();
        // add this container to our phaser scene 
        this.scene.add.existing(this);
    }

    createButton() {
        // create play game button
        this.button = this.scene.add.image(0, 0, 'button1');
        // make button interactive
        this.button.setInteractive();
        this.button.setScale(1.4);
        // create a Button text
        this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: '40px', fill: '#fff', fontFamily: 'Arial' });
        // center the button text inside the UI button
        Phaser.Display.Align.In.Center(this.buttonText, this.button);
        
        // add the two game objects to our container
        this.add(this.button);
        this.add(this.buttonText);

        // add event listeners to the button
        this.button.on('pointerdown', () => {
            this.targetCallback();
        })
        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey);
        })
        this.button.on('pointerout', () => {
            this.button.setTexture(this.key);
        })
    }
  }
  
  