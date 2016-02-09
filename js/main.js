
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/alpaca.png', 275, 398);
     game.load.audio('sfx', 'assets/gameaudio2.mp3');
}

var button;
var count;
var text;
var text2;
var fx;

const milestone1 = "Congratulations your first alpaca!!\n";
const milestone100 = "Your alpaca farm is starting to take off!\n";
const milestone500 = "You made it to 500 alpacas, you're getting good at this!\n";
const milestone1000 = "You are starting to make a name for yourself!\n";
const milestone5000 = "Half way to 10,000 I hope to find a good alpaca pun by then\n";


function create() {

    game.stage.backgroundColor = '#182d3b';

    button = game.add.button(game.world.centerX - 100, 100, 'button', actionOnClick, this);
    
    count = 0;
    
    var style = { font: "25px Arial", fill: "#9999ff", align: "center" };
    var style2 = { font: "25px Arial", fill: "#9999ff", align: "left" };
    text = game.add.text( game.world.centerX, 15, "Click the alpaca", style );
    text.anchor.setTo( 0.5, 0.0 );
    
    text2 = game.add.text(100, 100, "\n", style2 );
    text2.anchor.setTo(0.0, 0.0);
    
    fx = game.add.audio('sfx');
    fx.allowMultiple = true;
    
    fx.addMarker('click', 0, 1);
    fx.addMarker('click2',1.9, 2.2);
    
    this.gameSounds.volume = 0.5;

}

function actionOnClick () {

    count++;
    playRandomClick();
    if(count == 1)
        {
            text.setText(milestone1 + count);
            text2.setText("Milestones\n->1\n   100\n   500\n   1,000\n   5,000\n   10,000\n   50,000\n   100,000\n   1,000,000")
        }
    else if(count >= 100 && count < 200)
        {
            text.setText(milestone100 + count);
            text2.setText("Milestones\n   1\n->100\n   500\n   1,000\n   5,000\n   10,000\n   50,000\n   100,000\n   1,000,000")
        }
    else if(count >= 400 && count < 500)
        {
            text.setText("You're almost to the next milestone!\n" + count);
            text2.setText("Milestones\n   1\n->100\n   500\n   1,000\n   5,000\n   10,000\n   50,000\n   100,000\n   1,000,000")
        }
    else if(count >= 500 && count < 600)
        {
            text.setText(milestone500 + count);
            text2.setText("Milestones\n   1\n   100\n->500\n   1,000\n   5,000\n   10,000\n   50,000\n   100,000\n   1,000,000")
        }
    else if(count >= 900 && count < 1000)
        {
            text.setText("You can do this!\n" + count);
        }
    else if(count >= 1000 && count < 1100)
        {
            text.setText(milestone1000 + count);
            text2.setText("Milestones\n   1\n   100\n   500\n->1,000\n   5,000\n   10,000\n   50,000\n   100,000\n   1,000,000")
        }
    else if(count >= 4000 && count < 4500)
        {
            text.setText("Is your hand getting tired yet?\n" + count);
        }
    else if(count >= 4750 && count < 5000)
        {
            text.setText("Not tired?  Keep going!\n" + count);
        }
    else if(count >= 5000 && count < 6000)
        {
            text.setText(milestone5000 + count);
            text2.setText("Milestones\n   1\n   100\n   500\n   1,000\n->5,000\n   10,000\n   50,000\n   100,000\n   1,000,000")
        }
    else
        {
            text.setText("Your current alpacas\n" + count);
        }

}

function playRandomClick(){
    var randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 0.34)
        {
            fx.play('click',0, 0.01, false);
        }
    else
        {
            fx.play('click2',0, 0.05, false);
        }
     
}
