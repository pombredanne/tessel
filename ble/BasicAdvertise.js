// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
Bluetooth LE advertisment with pairing 
*********************************************/

var tessel = require('tessel');
var blelib = require('ble-ble113a');
var ble = blelib.use(tessel.port['A']);

ble.on('ready', function() {
  console.log('started advertising...');
  ble.startAdvertising();
});

ble.on('connect', function() {
  console.log("Connection Successful.");
});
