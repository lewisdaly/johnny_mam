const IOTA = require('iota.lib.js');
const MAM = require('./lib/mam.client.js/lib/mam.client');
var iota = new IOTA({ provider: `https://testnet140.tangle.works` })

const  five = require("johnny-five");
const board = new five.Board();


// Initialise MAM State - PUBLIC
var mamState = MAM.init(iota)

board.on("ready", () => {
  console.log("mamState", mamState);

});