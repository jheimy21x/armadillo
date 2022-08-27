import { Game } from './game.js';
//   alert(screen.width + "x" + screen.height )
const config={
    type: Phaser.AUTO,
    // width: 800,
    // height: 500,
    width:(screen.width - 0),
    height: (screen.height - 130),
    scene: [Game],
    scale: {
        // mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        //   width: 1920,
        //  height: 1000,
        // width: screen.width,
        // height: screen.height,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    }
}

var game= new Phaser.Game(config);
