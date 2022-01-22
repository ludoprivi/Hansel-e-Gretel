/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/eGgIPPhe
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#000000';
    game.load.crossOrigin = 'anonymous';
    game.load.spritesheet('player', 'HANSELAFRA.png', 345, 397.5, 34);
    game.load.spritesheet('enemy', './assets/ASSET6000.png', 500, 500, 36);
    game.load.spritesheet('enemy2', './assets/Stripesnuovo4.png', 663, 265, 36);
    game.load.spritesheet('enemy3', './assets/ASSET6000.png', 500, 500, 36);
    game.load.spritesheet('enemy4', './assets/ASSET6000.png', 500, 500, 36);
    game.load.spritesheet('enemy5', './assets/ASSET6000.png', 500, 500, 36);
    game.load.image('floor', 'pavimento2.png');
    game.load.image('floor2', './assets/lago6.png');
    game.load.image('floor3', './assets/ponte.png');
    game.load.image('floor4', './assets/palo.png');
    game.load.image('earth2', './assets/grigio.png')
    game.load.image('earth', './assets/sfondotunnel.png')
    game.load.image('grass', './assets/prato.png');
    game.load.image('grass2', './assets/prato.png');
    game.load.image('grass3', './assets/prato2.png');
    game.load.image('tunnel1', './assets/tunnel1.png');
    game.load.image('tunnel2', './assets/tunnel2.png');
    game.load.image('tunnel3', './assets/tunnel3.png');
    game.load.image('tunnel4', './assets/tunnel4.png');
    game.load.image('tunnel5', './assets/tunnel5.png');
    game.load.image('tunnel6', './assets/tunnel6.png');
    game.load.image('tunnel7', './assets/tunnel7.png');
    game.load.image('tunnel8', './assets/tunnel8.png');
    game.load.image('tunnel9', './assets/tunnel9.png');
    game.load.image('tunnel10', './assets/tunnel10.png');
    game.load.image('tunnel11', './assets/tunnel11.png');
    game.load.image('tunnel12', './assets/tunnelultimo.png');
    game.load.image('tunnelA', './assets/tunnelA.png');
    game.load.image('tunnelB', './assets/tunnelB.png');
    game.load.image('tunnelC', './assets/tunnelC.png');
    game.load.image('tunnelD', './assets/tunnelD.png');
    game.load.image('tunnelE', './assets/tunnelE.png');
    game.load.image('tunnelF', './assets/tunnelF.png');
    game.load.image('water', './assets/water1.png');
    game.load.image('casa', './assets/casa.png');
    game.load.image('target', './assets/raviolo.png');
    game.load.image('immagineraviolo', 'iconaraviolo.png');
    game.load.image('target2', 'evilraviolo2.png');
    game.load.image('button', 'GAMEOVER.jpg');
    game.load.image('porta', 'porta.png');
    game.load.image('background', 'sfondonuovo.png');
    game.load.image('win', 'prova.jpg');
    //game.load.image('enemyprova', 'fox.png');
    game.load.image('gretel', 'face2.png');
    //LIVELLO 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    game.load.image('sky', './assets/sky1.png')
    game.load.image('sky2', './assets/sky2.png')
    game.load.image('sky3', './assets/sky3.png')
    game.load.image('sky4', './assets/sky3.png')
    game.load.image('nebbia', './assets/nebbia1.png')
    game.load.image('bamboo', './assets/bamboo1.png')
    game.load.image('bamboo2', './assets/bamboo2.png')
    game.load.image('bamboo3', './assets/bamboo3.png')
    game.load.image('bamboo4', './assets/bamboo3.png')

    game.load.image('ground', './assets/platform.png')
    game.load.image('bridge', './assets/bridge.png')
    game.load.image('ground1', './assets/ground1.png')
    game.load.image('ground2', './assets/ground2.png')
    game.load.image('ground3', './assets/ground3.png')
    game.load.image('ground4', './assets/ground4.png')
    game.load.image('ground5', './assets/ground5.png')
    game.load.image('ground6', './assets/ground6.png')
    game.load.image('ground7', './assets/ground7.png')
    game.load.image('platform', './assets/piattaformacorta.png')
    game.load.image('platform2', './assets/piattaformalunga.png')
    game.load.image('lantern', './assets/lanterna.png')
    game.load.image('lantern2', './assets/lanterna.png')
    //game.load.image('message', 'prova.jpg')
    game.load.image('water1', './assets/water1.png')
    game.load.image('lava', './assets/lava.png')
    game.load.image('cuore1', './assets/CUORE1.png')
    game.load.image('cuore2', './assets/CUORE2.png')
    game.load.image('cuore3', './assets/CUORE3.png')
    game.load.image('cuore4', './assets/CUORE4.png')
    game.load.image('cuore5', './assets/CUORE5.png')
    game.load.image('cuore', 'iconacuore.png')
    game.load.image('bullet', './assets/bullet.png')
    //game.load.spritesheet('woof', './assets/woof.png', 32, 32)
    game.load.spritesheet('enemy', './assets/ASSET6000.png', 500, 500, 36)
    game.load.image('life1', './assets/lifebar1.png');
    game.load.image('life2', './assets/lifebar2.png');
    game.load.image('life3', './assets/lifebar3.png');
    game.load.image('life4', './assets/lifebar4.png');
    //game.load.image('diamond', './assets/diamond.png');

}

let sky;
var sky2;
var sky3;
var sky4;
var nebbia
var platforms;
var platforms2;
var bamboo;
var bamboo2;
var bamboo3;
var bamboo4;
var grasses;
var grasses2;
var grasses3;
var earths;
var earths2;
var porta;
var player;
var before='fermo';
var jumpPress=false;
var jumpTime="non ho mai saltato in vita mia";
var rotationTime;
var lantern;
var lantern2;
var floors2;
var floors3;
var floors4;
var casa;
var tunnels6;
var tunnels1;
var tunnels2;
var tunnels3;
var tunnels4;
var tunnels5;
var tunnels7;
var tunnels8;
var tunnels9;
var tunnels10;
var tunnels11;
var tunnels12;
var tunnelsA;
var tunnelsB;
var tunnelsC;
var tunnelsD;
var tunnelsE;
var tunnelsF;
var waters;
//var enemyprova;
var gretel;
//var message;
var targets;
var targets2;
var button;
var cursors;
var jumpButton;
//var gameoverButton;
var background;
var floors;
var label;
var startTime;
//var score = 0;
//var scoreString = '';
var punteggioText;
var countDown = 150;
var punteggio = 0;
var immagineraviolo;
var win;
// LIVELLO 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let score = 0;
let scoreText;
//let sky;
//let platforms;
//let cursors;
//let player;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
let cuore1;
let cuore2;
let cuore3;
let cuore4;
let cuore5;
let cuore;
let life1;
let life2;
let life3;
let life4;
//let diamond;
let weapon;
let fireButton;


function create() {


  game.world.setBounds(0, 0, 4196, 768);
  //console.log(screen.width)
  //console.log(screen.height)



  background = game.add.sprite(0, 0, 'background');
  game.add.sprite(4300, 0, 'sky');
  game.add.sprite(13347, 0, 'sky2');
  game.add.sprite(25080, 0, 'sky3');
  game.add.sprite(39925, 0, 'sky4');
  game.add.sprite(11748, 300, 'nebbia');
  game.add.sprite(13347, 0, 'bamboo');
  game.add.sprite(22920, 0, 'bamboo2');
  game.add.sprite(31144, 0, 'bamboo3');
  game.add.sprite(41918, 0, 'bamboo4');


//  enemyprova = game.add.sprite(21000, 1051, 'enemyprova');
//  game.physics.arcade.enable(enemyprova);

  platforms = game.add.physicsGroup();
  platforms.create(18000, 1000, 'platform');
  platforms.create(18500, 800, 'platform');
  platforms.create(19000, 600, 'platform');
  platforms.create(22500, 1000, 'platform');
  platforms.create(23000, 800, 'platform');
  platforms.create(24500, 1000, 'platform');
  platforms.create(25000, 800, 'platform');
  platforms.create(27100, 750, 'platform');
  platforms.create(27600, 950, 'platform');

  platforms.create(32000, 1000, 'platform');
  platforms.create(32500, 800, 'platform');
  platforms.create(33000, 550, 'platform');
  platforms.create(34051, 450, 'platform');
  platforms.create(34450, 700, 'platform');
  platforms.create(34750, 900, 'platform');



  platforms.setAll('body.immovable', true);

  platforms2 = game.add.physicsGroup();
  platforms2.create(25400, 540, 'platform2');
  platforms2.create(26200, 540, 'platform2');

  platforms2.create(33500, 700, 'platform2');
  //platforms2.create(14900, 600, 'platform2');
  platforms2.setAll('body.immovable', true);

  lantern = game.add.sprite(19070, 490, 'lantern');
  game.physics.arcade.enable(lantern);

  lantern2 = game.add.sprite(27675, 840, 'lantern2');
  game.physics.arcade.enable(lantern2);

  porta = game.add.sprite(3600, 193, 'porta');
  porta.scale.setTo(0.17);
  //background.scale.setTo(1.1);

  casa = game.add.sprite(7850, 350, 'casa');






  earths = game.add.physicsGroup();
  earths.create(22439, 1251, 'earth');
  earths.create(35750, 1251, 'earth');
  //earths.create(15174, 1251, 'earth');
  //earths.create(17001, 1251, 'earth');
  //earths.create(26055, 1251, 'earth');
  //earths.create(35109, 1251, 'earth');
  //earths.create(44163, 1251, 'earth');
  earths.setAll('body.immovable', true);


  grasses = game.add.physicsGroup();
  grasses.create(13347, 1251, 'grass');
  grasses.setAll('body.immovable', true);


  earths2 = game.add.physicsGroup();
  earths2.create(13148, 1251, 'earth2');
  earths2.setAll('body.immovable', true);




  player = game.add.sprite(0, -800, 'player');
  player.vite = 3;
  player.scale.setTo(0.6);
  //player.animations.add('left', [0, 1], 10, true)
  player.animations.add('front', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2]);
  player.animations.add('right', [10, 11, 12, 13]);
  player.animations.add('left', [18, 17, 16, 15]);
  player.animations.add('front2right', [3, 4]);
  player.animations.add('front2left', [7,6,5]);
  player.animations.add('front2jump', [3, 4]);
  player.animations.add('rightjump', [20, 21, 22, 23, 24]);
  player.animations.add('leftjump', [29, 28, 27, 26, 25]);
  player.animations.add('rotateleft', [4, 3, 0]);
  player.animations.add('rotateright', [5, 6, 8]);
  player.animations.add('fireright', [30, 31, 32, 31, 20]);
  player.animations.add('firefermo', [3, 4, 30, 31, 32, 20]);
  //player.animations.add('fireleft', [35, 36, 37, 20]);


    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 550;


    floors = game.add.physicsGroup();

    //pavimento = game.add.sprite(00, 565, 'pavimento');
    floors.create(0, 565, 'floor');
    //platforms.create(-200, 300, 'platform');
    //platforms.create(400, 450, 'platform');

    floors.setAll('body.immovable', true);


    floors2 = game.add.physicsGroup();
    floors2.create(7755, 1251, 'floor2');
    floors2.setAll('body.immovable', true);


    floors3 = game.add.physicsGroup();
    floors3.create(9090, 1210, 'floor3');
    floors3.setAll('body.immovable', true);
    floors4 = game.add.physicsGroup();
    floors4.create(9065, 1140, 'floor4');
    floors4.create(11748, 1140, 'floor4');
    floors4.setAll('body.immovable', true);




    tunnels1 = game.add.physicsGroup();
    tunnels1.create(16439, 1251, 'tunnel1');
    tunnels1.create(25700, 2730, 'tunnel1');
    tunnels1.create(35750, 2645, 'tunnel1');
    tunnels1.setAll('body.immovable', true);


    tunnels2 = game.add.physicsGroup();
    tunnels2.create(26270, 1251, 'tunnel2');
    tunnels2.setAll('body.immovable', true);


    tunnels3 = game.add.physicsGroup();
    tunnels3.create(26674, 1738, 'tunnel3');
    tunnels3.create(31355, 1260, 'tunnel3');
    tunnels3.setAll('body.immovable', true);

    tunnels4 = game.add.physicsGroup();
    tunnels4.create(28640, 1251, 'tunnel4');
    tunnels4.setAll('body.immovable', true);

    tunnels5 = game.add.physicsGroup();
    tunnels5.create(29005, 1251, 'tunnel5');
    tunnels5.setAll('body.immovable', true);


    tunnels6 = game.add.physicsGroup();
    tunnels6.create(29805, 2482, 'tunnel6');
    tunnels6.setAll('body.immovable', true);

    tunnels7 = game.add.physicsGroup();
    tunnels7.create(30115, 2232, 'tunnel7');
    tunnels7.setAll('body.immovable', true);

    tunnels8 = game.add.physicsGroup();
    tunnels8.create(30425, 1982, 'tunnel8');
    tunnels8.setAll('body.immovable', true);

    tunnels9 = game.add.physicsGroup();
    tunnels9.create(30735, 1732, 'tunnel9');
    tunnels9.setAll('body.immovable', true);

    tunnels10 = game.add.physicsGroup();
    tunnels10.create(31045, 1482, 'tunnel10');
    tunnels10.setAll('body.immovable', true);

    tunnels11 = game.add.physicsGroup();
    tunnels11.create(31355, 1260, 'tunnel11');
    tunnels11.setAll('body.immovable', true);

    tunnelsA = game.add.physicsGroup();
    tunnelsA.create(32891, 1251, 'tunnelA');
    tunnelsA.setAll('body.immovable', true);

    tunnelsB = game.add.physicsGroup();
    tunnelsB.create(35750, 1651, 'tunnelB');
    tunnelsB.setAll('body.immovable', true);

    tunnelsC = game.add.physicsGroup();
    tunnelsC.create(36150, 1251, 'tunnelC');
    tunnelsC.setAll('body.immovable', true);

    tunnelsD = game.add.physicsGroup();
    tunnelsD.create(38031, 1251, 'tunnelD');
    tunnelsD.setAll('body.immovable', true);

    tunnelsE = game.add.physicsGroup();
    tunnelsE.create(42146, 2432, 'tunnelE');
    tunnelsE.create(42456, 2182, 'tunnelE');
    tunnelsE.create(42766, 1932, 'tunnelE');
    tunnelsE.create(43076, 1682, 'tunnelE');
    tunnelsE.create(43386, 1432, 'tunnelE');

    //tunnelsE.create(44006, 1051, 'tunnelE');
    tunnelsE.setAll('body.immovable', true);

    tunnelsF = game.add.physicsGroup();
    tunnelsF.create(43696, 1251, 'tunnelF');
    tunnelsF.setAll('body.immovable', true);


    grasses2 = game.add.physicsGroup();
    grasses2.create(16347, 1251, 'grass2');
    grasses2.create(19347, 1251, 'grass2');
    grasses2.create(22347, 1251, 'grass2');
    grasses2.create(25323, 1251, 'grass2');
    //grasses2.create(28723, 1251, 'grass2');
    grasses2.create(31355, 1251, 'grass2');
    grasses2.create(32726, 1251, 'grass2');
    grasses2.create(36150, 1251, 'grass2');
    grasses2.create(38622, 1251, 'grass2');
    grasses2.create(43696, 1251, 'grass2');
    grasses2.setAll('body.immovable', true);


    grasses3 = game.add.physicsGroup();
    grasses3.create(28640, 1251, 'grass3');
    grasses3.create(29340, 1251, 'grass3');
    grasses3.create(29340, 1251, 'grass3');
    grasses3.create(29453, 1251, 'grass3');
    grasses3.setAll('body.immovable', true);

    waters = game.add.physicsGroup();
    waters.create(26274, 2717, 'water');
    waters.create(38700, 2637, 'water');
    waters.create(38984, 2637, 'water');
    waters.setAll('body.immovable', true);

    //tunnels12 = game.add.physicsGroup();
    //tunnels12.create(26270, 2812, 'tunnel12');
    //tunnels12.setAll('body.immovable', true);



    gretel = game.add.sprite(900, 30, 'gretel');
    game.physics.arcade.enable(gretel);
    gretel.fixedToCamera = true;


      weapon = game.add.weapon(10, 'bullet');
      weapon.trackSprite(player);
      weapon.fireAngle = 0;




      enemy = game.add.sprite(25300, 315, 'enemy');
      enemy.scale.setTo(0.7);
      game.physics.arcade.enable(enemy);

      enemy.animations.add('camminatad', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] );
      enemy.animations.add('camminatas', [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]);


      enemy2 = game.add.sprite(19800, 1025, 'enemy2');
      enemy2.scale.setTo(0.3);
      //enemy2.body.setSize(100, 50, 50, 25);
      game.physics.arcade.enable(enemy2);

      enemy2.animations.add('camminatad', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] );
      enemy2.animations.add('camminatas', [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]);

      enemy3 = game.add.sprite(19800, 1025, 'enemy3');
      enemy3.scale.setTo(0.7);
      game.physics.arcade.enable(enemy3);

      enemy3.animations.add('camminatad', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] );
      enemy3.animations.add('camminatas', [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]);

      enemy4 = game.add.sprite(19800, 1025, 'enemy4');
      enemy4.scale.setTo(0.7);
      game.physics.arcade.enable(enemy4);

      enemy4.animations.add('camminatad', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] );
      enemy4.animations.add('camminatas', [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]);

      enemy5 = game.add.sprite(19800, 1025, 'enemy5');
      enemy5.scale.setTo(0.7);
      game.physics.arcade.enable(enemy5);

      enemy5.animations.add('camminatad', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] );
      enemy5.animations.add('camminatas', [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]);


      label = game.add.text(250, 60, "Time: ", {fill: "white"});
      label.fixedToCamera = true;

      //target = game.add.sprite(100, 300, 'target');
      //target.scale.setTo(0.5);
      //game.physics.arcade.enable(target);
      immagineraviolo = game.add.sprite(40, 40, 'immagineraviolo');
      //immagineraviolo.scale.setTo(0.8);
      immagineraviolo.fixedToCamera = true;

      targets = game.add.physicsGroup();

      targets2 = game.add.physicsGroup();

      game.camera.follow(player);

    //  The score
        //scoreString = 'Score : ';
        punteggioText = game.add.text(120, 60, " " , { fontSize: '25px', fill: 'white' });
        punteggioText.fixedToCamera = true;
//LIVELLO 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //  player = game.add.sprite(100, 100, 'woof')
  //  player.vite = 3
  //  game.physics.arcade.enable(player)
    //  Player physics properties. Give the little guy a slight bounce.
    //player.body.bounce.y = 0.2
  //  player.body.gravity.y = 400
  //  player.body.collideWorldBounds = true
    //  Our two animations, walking left and right.
  //player.animations.add('left', [0, 1], 10, true)
  //  player.animations.add('right', [2, 3], 10, true)
/////////////////////////////////////////////////////
//game.add.sprite(4300, 0, 'sky')


cuore1 = game.add.sprite(25080, 760, 'cuore1');
cuore2 = game.add.sprite(34131, 410, 'cuore2');
cuore3 = game.add.sprite(38984, 2277, 'cuore3');
cuore4 = game.add.sprite(30275, 2182, 'cuore4');
cuore5 = game.add.sprite(13600, 1000, 'cuore5');
cuore = game.add.sprite(230, 40, 'cuore');
cuore.alpha = 0;
cuore.fixedToCamera = true;

cuore1.scale.setTo(0.02);
cuore2.scale.setTo(0.02);
cuore3.scale.setTo(0.02);
cuore4.scale.setTo(0.02);
cuore5.scale.setTo(0.02);

game.physics.arcade.enable(cuore1);
game.physics.arcade.enable(cuore2);
game.physics.arcade.enable(cuore3);
game.physics.arcade.enable(cuore4);
game.physics.arcade.enable(cuore5);
game.physics.arcade.enable(cuore);

scoreText = game.add.text(310, 60, '', { fontSize: '25px', fill: 'white' })
scoreText.fixedToCamera = true;


life4 = game.add.sprite(420, 40, 'life4');
life3 = game.add.sprite(420, 40, 'life3');
life2 = game.add.sprite(420, 40, 'life2');
life1 = game.add.sprite(420, 40, 'life1');
life1.fixedToCamera = true;
life2.fixedToCamera = true;
life3.fixedToCamera = true;
life4.fixedToCamera = true;
life1.alpha = 0;
life2.alpha = 0;
life3.alpha = 0;
life4.alpha = 0;





    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    newButton = game.input.keyboard.addKey(Phaser.Keyboard.C);

    startTime = game.time.time;

}

function update () {

  //Time
  //console.log(game.time.time);

  //label.setText("Time: " + (game.time.time - startTime)/1000);

  //label.setText("Time: " + countDown - Math.floor((game.time.time - startTime)/1000))
  time = (countDown - Math.floor((game.time.time - startTime)/1000))
  label.setText("Time: " + time)


  if (time < 1)
   {
    game.paused = true;
    button = game.add.button(0, 0, 'button', actionOnClick);
    }

      function actionOnClick ()
      {
      player.x = 200;
      player.y = 400;
      button.alpha = 0;
      game.paused = false;
      countDown = 30;
      punteggio = 0;
      punteggioText.text = punteggio;
      }





  game.physics.arcade.collide(player, floors);
  game.physics.arcade.collide(player, floors2);
  game.physics.arcade.collide(player, floors3);
  game.physics.arcade.collide(player, grasses);
  game.physics.arcade.collide(player, grasses2);
  game.physics.arcade.collide(player, tunnels1);
  game.physics.arcade.collide(player, tunnels2);
  game.physics.arcade.collide(player, tunnels3);
  game.physics.arcade.collide(player, tunnels4);
  game.physics.arcade.collide(player, tunnels5);
  game.physics.arcade.collide(player, tunnels6);
  game.physics.arcade.collide(player, tunnels7);
  game.physics.arcade.collide(player, tunnels8);
  game.physics.arcade.collide(player, tunnels9);
  game.physics.arcade.collide(player, tunnels10);
    game.physics.arcade.collide(player, tunnels11);
  game.physics.arcade.collide(player, tunnels12);
  game.physics.arcade.collide(player, tunnelsA);
  game.physics.arcade.collide(player, tunnelsB);
  game.physics.arcade.collide(player, tunnelsC);
  game.physics.arcade.collide(player, tunnelsD);
  game.physics.arcade.collide(player, tunnelsE);
  game.physics.arcade.collide(player, tunnelsF);
  //game.physics.arcade.collide(player, earths);
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(player, platforms2);
  game.physics.arcade.overlap(player, lantern, tip);
  game.physics.arcade.overlap(player, lantern2, tap);
  //game.physics.arcade.collide(woof, pavimento);
  game.physics.arcade.overlap(player, targets, collect);
  game.physics.arcade.overlap(player, targets2, hot);
  game.physics.arcade.overlap(player, enemy, hit);
  game.physics.arcade.overlap(player, enemy2, hit2);
  game.physics.arcade.overlap(player, enemy3, hit3);
  game.physics.arcade.overlap(player, enemy4, hit4);
  game.physics.arcade.overlap(player, enemy5, hit5);
  game.physics.arcade.overlap(player, cuore1, collect1);
  game.physics.arcade.overlap(player, cuore2, collect2);
  game.physics.arcade.overlap(player, cuore3, collect3);
  game.physics.arcade.overlap(player, cuore4, collect4);
  game.physics.arcade.overlap(player, cuore5, collect5);

  if (punteggio === 2){
//  win = game.add.sprite(100, 100, 'win');
//  win.fixedToCamera = true;

  label.kill();

         }




         if(enemy.body.x<25310)
         {
         enemy.body.velocity.x = 300;
         enemy.animations.play('camminatad', 20, true);
         }

         if(enemy.body.x>25750)
         {
           enemy.body.velocity.x = -300;
           enemy.animations.play('camminatas', 20, true);
         }



                  if(enemy2.body.x<19802)
                  {
                  enemy2.body.velocity.x = 300;
                  enemy2.animations.play('camminatad', 20, true);
                  }

                  if(enemy2.body.x>20300)
                  {
                    enemy2.body.velocity.x = -300;
                    enemy2.animations.play('camminatas', 20, true);
                  }




  if (punteggio <2)
  {
  if(Math.random()<0.01 )
  {
    console.log(player.x);
    x = Math.floor(Math.random()*1024 + player.x);
    y = Math.floor(Math.random()*564);
    console.log(x, y);
    if(punteggio<5) {
    r = targets.create(x, y, 'target');
    //targets.kill();
    //  if(Math.random()<0.00) {
        //  targets.create(Math.random()*1024, Math.random()*768, 'target')
        }
        console.log(targets);
        function f(x)
        {
            return function()
            {
              x.kill()
            }

        }

    //  function f(x){
        //  return function() {x.kill()}
        game.time.events.add(3000, f(r))
  }


  //targets.create(Math.floor(Math.random()*(4393)),Math.floor(Math.random()*(4393)))
  //targets.create(Math.random()*4900, Math.random()*930, 'target');

  //targets.create(Math.random()*8800 + player.body.x, Math.random()*1700 + player.body.y, 'target')
  if(Math.random()<0.01)
  {

    bx = Math.floor(Math.random()*1024 + player.x);
    by = Math.floor(Math.random()*564);

    if(punteggio<5) {
    b = targets2.create(bx, by, 'target2');
    //targets.kill();
    //  if(Math.random()<0.00) {
        //  targets.create(Math.random()*1024, Math.random()*768, 'target')
        }
        console.log(targets2);
        function f(b)
        {
            return function()
            {
            b.kill()
            }

        }

    //  function f(x){
        //  return function() {x.kill()}
        game.time.events.add(3000, f(b))
  }

}

player.body.velocity.x = 0;
//player.animations.play('front', 10, true);


function MovimentoGiocatore()
{

  if(game.time.time-jumpTime>2300)
  {
    jumpPress=false;
  }


  if (cursors.left.isDown)
  {
    //un controllo per controllare che sia la prima volta che premo sinistra per avviare la rotazione a sinistra
    player.body.velocity.x = -550; //corre piu veloce (per cominciare a correre a sinistra)

    if(before!='sinistra' && jumpPress==false)
    {
      player.animations.play('front2left',10,false)  
      before='sinistra'
    }
    else
    {
      if(player.animations.currentAnim.name=='front2left')
      player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('left',10,true)
      })
    }
    
  }
  else if (cursors.right.isDown)
  {

    player.body.velocity.x = 550
    if(before!='destra' && jumpPress==false)
    {

      player.animations.play('front2right',10,false)  
      before='destra'
    }
    else
    {
      if(player.animations.currentAnim.name=='front2right')
      player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('right',10,true)
      })
      if(player.animations.currentAnim.name=='rightJump')
      player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('right',10,true)
      })
    }
  
  }
  else //l'utente non preme niente
  {
    if(before=='destra' && jumpPress==false)//se l'ultimo tasto premuto è destra
    {
    player.animations.play('rotateleft', 10, false);
    }
    if(before=='sinistra' && jumpPress==false)//se l'ultimo tasto premuto è destra
    {
    player.animations.play('rotateright', 10, false);
    }
    player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('front',10,false)
        })
    
    before='fermo'
  }

  if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
  {
    
    if(jumpPress!=true)//impedisco un doppio salto, quindi se salto non è mai stato attivato
    {
        
      player.body.velocity.y = -550;
      if(before=='sinistra')
      player.animations.play('leftjump', 3, false);
      else 
      player.animations.play('rightjump', 3, false); 

      if(before==='destra')
      player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('right',10,true)
      })
      if(before=='sinistra')
      player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('left',10,true)
      })
      
      jumpTime=game.time.time
      jumpPress=true;

    }

  }

}
MovimentoGiocatore()
function movimentoVecchio()
{
    if (cursors.left.isDown)
  {
    //un controllo per controllare che sia la prima volta che premo sinistra per avviare la rotazione a sinistra
    if(before!='sinistra')
    {
      player.body.velocity.x = -100;//setto la velocità
      before = 'sinistra'
      if(jumpPress!=true)//controllo che l'animazione jump non sia attiva
      {
        player.animations.play('front2left', 10, false);
        //questa animazione verrà avviata unicamente quando il player non salta
      }
    }
    else  //altrimenti, se non è la prima volta che si preme sinistra,
    {
      player.body.velocity.x = -550; //corre piu veloce (per cominciare a correre a sinistra)

    }
    if(jumpPress!=true)//controllo che l'animazione jumPress sia finito
      {
        player.animations.currentAnim.onComplete.add(()=>{//faccio finire l'animazione precedente
          player.animations.play('left', 10, true);
        })

      }

    if((game.time.time-jumpTime)>2300)
    {
      /* player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('left',10,true)
      });; */
      jumpPress=false;
    }
  }
  else if (cursors.right.isDown)
  {
      if(before!='destra')
      {
        player.body.velocity.x = 250;
        before = 'destra'
        if(jumpPress!==true)
        player.animations.play('front2right', 10, false);
      }
      else
      {
        player.body.velocity.x = 500
      }

      if(jumpPress!=true)//controllo che l'animazione jumPress sia finito
      {
        player.animations.currentAnim.onComplete.add(()=>{//faccio finire l'animazione precedente
          player.animations.play('right', 10, true);
        })

      }

      if((game.time.time-jumpTime)>2300)
      {
        //player.animations.play('right',10,true)
        jumpPress=false;
      }

  }
  else //l'utente non preme niente
  {

    if((game.time.time-jumpTime)>2300)
    {
      if(before=='destra')//se l'ultimo tasto premuto è destra
      {
      player.animations.play('rotateleft', 10, false);
      }
      if(before=='sinistra')//se l'ultimo tasto premuto è sinistra
      {
      player.animations.play('rotateright', 10, false);
      }
      player.animations.currentAnim.onComplete.add(()=>{
        //diminuire il battito degli occhi del player
        player.animations.play('front', 10, true);
      });
      jumpPress=false;
    }
    if(jumpTime=="non ho mai saltato in vita mia")
    {
      if(before=='destra')
      {
      player.animations.play('rotateleft', 10, false);
      }
      if(before=='sinistra')
      {
      player.animations.play('rotateright', 10, false);
      }
      player.animations.currentAnim.onComplete.add(()=>{
        player.animations.play('front', 10, true);
      });
    }
    before='fermo'
  }

  if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
  {
    if(jumpPress!=true)//impedisco un doppio salto, quindi se salto non è mai stato attivato
    {
        jumpPress=true;
        jumpTime=game.time.time;
        //before destra sinistra o fermo
        if(before=='destra'||before=='fermo')
        {
          player.animations.play('rightjump', 4, false)

          player.animations.currentAnim.onComplete.add(function ()
            {

            if(before=='fermo')//before è uguale a 'fermo', ovvero se precedentemente non premevo nessun tasto
            player.animations.play('front', 10, false)
            if(before=='destra')//altrimenti se premevo 'destra'
            {
              player.animations.play('right', 10, false)

            }
            if(before=='sinistra')
            player.animations.play('left', 10, false)

          });
        }
        else //se io premevo il tasto sinistra
        {
          player.animations.play('leftjump', 4, false)
          /* player.animations.currentAnim.onComplete.add(function (){

                      if(before=='fermo')//before è uguale a 'fermo'
                      player.animations.play('front', 3, true)
                      if(before=='destra')
                      player.animations.play('right', 10, true)
                      if(before=='sinistra')
                      player.animations.play('left', 10, true)

                    }); */

        }
        player.body.velocity.y = -550;
      //if(before=='sinistra')
      //fai partire animazione salto mentre sinistra
    }

  }

}



    if (fireButton.isDown)
    {
      weapon.fire();
      if(before=='destra')
      {
        player.animations.play('fireright', 5, false);
        console.log(player.animations.currentAnim.name);//fireright
        
      }
      if(before=='sinistra')
      {
        //player.animations.play('fireleft', 10, false);
      }
      if(before=='fermo')
      {
        player.animations.play('firefermo', 10, false);
        console.log(player.animations.currentAnim.name);
      }
    }

    if (newButton.isDown)
    {
      player.x = 25300;
      player.y = 400;
      cuore.alpha = 1;
      life1.alpha = 1;
      life2.alpha = 1;
      life3.alpha = 1;
      life4.alpha = 1;
      game.world.setBounds(0, 0, 45000, 3001);
    }





    function collect(p, t) {
        if(p.worldPosition.x-t.worldPosition.x<30 && p.worldPosition.y-t.worldPosition.y<30)
        {
            t.kill()
            punteggio = punteggio + 1;
            punteggioText.text = punteggio + '/5';
        }
    }

     function hot(p, t) {
        if(p.worldPosition.x-t.worldPosition.x<30 && p.worldPosition.y-t.worldPosition.y<30)
        {
            t.kill()
            punteggio = punteggio - 1;
            punteggioText.text = punteggio + '/5';
        }
    }

    function tip() {
      lantern.kill();
      //game.add.sprite(19000, 0, 'message');
    }
    function tap() {
      lantern2.kill();
      //game.add.sprite(19000, 0, 'message');
    }


    function hit (player, enemy)
{
player.vite = player.vite-1
if (player.vite<3)
{
life1.alpha = 0;
}
if (player.vite<2)
{
life1.alpha = 0;
life2.alpha = 0;
}
if (player.vite<1)
{
life1.alpha = 0;
life2.alpha = 0;
life3.alpha = 0;
player.kill()
e.kill()
}
}

function hit2 (player, enemy2)
{
player.vite = player.vite-1
if (player.vite<3)
{
life1.alpha = 0;
}
if (player.vite<2)
{
life1.alpha = 0;
life2.alpha = 0;
}
if (player.vite<1)
{
life1.alpha = 0;
life2.alpha = 0;
life3.alpha = 0;
player.kill()
e.kill()
}
}

function hit3 (player, enemy3)
{
  player.vite = player.vite-1
  if (player.vite<3)
  {
    life1.alpha = 0;
  }
  if (player.vite<2)
  {
    life1.alpha = 0;
    life2.alpha = 0;
  }
  if (player.vite<1)
  {
    life1.alpha = 0;
    life2.alpha = 0;
    life3.alpha = 0;
    player.kill()
    enemy3.kill()
  }
}

function hit4 (player, enemy4)
{
player.vite = player.vite-1
if (player.vite<3)
{
life1.alpha = 0;
}
if (player.vite<2)
{
life1.alpha = 0;
life2.alpha = 0;
}
if (player.vite<1)
{
life1.alpha = 0;
life2.alpha = 0;
life3.alpha = 0;
player.kill()
enemy4.kill()
}
}

function hit5 (player, enemy5)
{
player.vite = player.vite-1
if (player.vite<3)
{
life1.alpha = 0;
}
if (player.vite<2)
{
life1.alpha = 0;
life2.alpha = 0;
}
if (player.vite<1)
{
life1.alpha = 0;
life2.alpha = 0;
life3.alpha = 0;
player.kill()
enemy5.kill()
}
}

    function collect1 (player, cuore1) {
      cuore1.kill()
      score += 1
      scoreText.text = score + '/5'
    }

    function collect2 (player, cuore2) {
      cuore2.kill()
      score += 1
      scoreText.text = score + '/5'
    }

    function collect3 (player, cuore3) {
      cuore3.kill()
      score += 1
      scoreText.text = score + '/5'
    }

    function collect4 (player, cuore4) {
      cuore4.kill()
      score += 1
      scoreText.text = score + '/5'
    }

    function collect5 (player, cuore5) {
      cuore5.kill()
      score += 1
      scoreText.text = score + '/5'
    }


       function restart() {   // These are just examples of what you might do
        player.resetPosition(); // Reset the players position
        Time = 0;   // Reset the score to zero
        }

     //function getValue(min, max) {
        //  min = Math.ceil(min);
        //  max = Math.floor(max);
        //  return Math.floor(Math.random()*(max-min)+min)
            //}
         //  }
}


function render () {
  //game.debug.bodyInfo(enemy2, 32, 32);
  //game.debug.body(enemy2);
}
