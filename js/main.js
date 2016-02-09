
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/alpaca.png', 275, 398);

}

var button;
var count;
var text;

function create() {

    game.stage.backgroundColor = '#182d3b';

    button = game.add.button(game.world.centerX - 100, 100, 'button', actionOnClick, this);
    
    count = 0;
    
    var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
    text = game.add.text( game.world.centerX, 15, "Your current alpacas\n 0", style );
    text.anchor.setTo( 0.5, 0.0 );

}

function actionOnClick () {

    //background.visible =! background.visible;
    count++;
    text.setText("Your current alpacas\n " + count);

}
