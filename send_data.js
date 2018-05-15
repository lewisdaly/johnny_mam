
const IOTA = require('iota.lib.js');
const MAM = require('./lib/mam.client.js/lib/mam.client');
var iota = new IOTA({ provider: `https://testnet140.tangle.works` })

const five = require("johnny-five");
const board = new five.Board();


// Initialise MAM State - PUBLIC
var mamState = MAM.init(iota)

//Publish to tangle
const publish = (trytes) => {
  // Create MAM Payload - STRING OF TRYTES
  var message = MAM.create(mamState, trytes)
  // Save new mamState
  mamState = message.state
  // Attach the payload.
  console.log('Root: ', message.root)
  console.log('Address: ', message.address)
  
  return MAM.attach(message.payload, message.address);
}

board.on("ready", () => {
  console.log("mamState", mamState);

  const trytes = iota.utils.toTrytes(JSON.stringify({ message: 'Hello World' }))        //convert string to trytes
  return publish(trytes)
    .then(response => {
      console.log('response', response);
    })
    .catch(err => {
      console.log("Err", err);
      return Promise.reject(err);
    });

});
