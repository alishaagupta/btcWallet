var bitcoin = require('./bitcoin-vevsa-lib');



// var HDPrivateKey = bitcoin.HDPrivateKey ;

// var hdPrivateKey  = new HDPrivateKey();
// console.log("HD " + hdPrivateKey)


// var hdPublicKey = hdPrivateKey.hdPublicKey;
// console.log('hD pub key ' + hdPrivateKey.hdPublicKey)


// var address = new bitcoin.Address(hdPublicKey.publicKey, bitcoin.Networks.testnet);
// console.log("hd address " + address)

/*
* Returns a randomly generated pirvate key
*
*  Instantiate a PrivateKey 
*  @params
*      {String} - Wallet public key    ; /../Wallet/mnemonic.js
*      {object} - network information  
* @return
*    A private key generated from a BN , Buffer and WIF.
*/

var privateKey = new bitcoin.PrivateKey(bitcoin.Networks.testnet);
console.log(privateKey.toString());



/**
 * Returns the corresponding public key generated from the private key
 *
 * instance method of private key 
 * 
 * @returns
 *    A public key generated from private key
 */

var publicKey  = privateKey.toPublicKey(bitcoin.Networks.testnet);
console.log('lalala: ' + publicKey.toString());



/**
 * Returns an address for the public key
 * 
 * @param {String | Network} bitcoin.Networks.livenet - which network should be the address for
 *
 * @returns {Address}
 *    An address generated from the public key.
 */


// var address = publicKey.toAddress(bitcoin.Networks.testnet);
// console.log(address.toString());

// // 11237035a7746890eb8302ac459ee9d40a33ff8ccb61352c7b6591fc22c7ff40
// publicKey1 = '0345a028d8038ca575aeed942b3841d6611e611529a0eb64e8c211f3eda735d61a'
// // mrhmjGYJnaApZbvDWMY2pYV9AQzGmvZ1ns


// // 6347a789e2137e49e30997c442f64b1ef9e924a88f39ceeca79cf81a9c02c7d1
// publicKey2 ='031d49bd316a01b59a6277df87ca14858b457dec032e41cef382c0885fc594cab3'
// // mkBTqBXK8wospJsEfgSBtgK87YSXex8h7y


// // d9257f78e14c252e91e5c6728a01e443c8009d0bc1ac392ba09cfac33015b81a
// publicKey3 = '0270965b55fd72ae2596b2a00c466cc19e16ed3db5d1c3d76636dbbda35b3874b8'
// // mfwpRcqvdhAWbtNumCkB57REFyk3HJzUS3

// //Create multisig address

// var p2shAddress = new bitcoin.Address([publicKey1, publicKey2, publicKey3], 2,bitcoin.Networks.testnet);
// console.log(p2shAddress)

//35T4wcjpzKTCdyD2C3tUtTUTvx9kosZsox




// HD WALLET TX

var HDPrivateKey = bitcoin.HDPrivateKey ;
var retrieved = new HDPrivateKey(bitcoin.Networks.testnet);

// tprv8ZgxMBicQKsPeS6bUc3Pbk3EP6tWqDbptEcMxboGVCbfyUVwDANKphfWFFEasYTbog18RZBLSK6jaiVzjS9PKsphxv5dM8efETKaCve3Czy

console.log('HD pvt key: ' + retrieved);


var hdPublicKey = retrieved.hdPublicKey ;

console.log('HD pb key: ' + hdPublicKey);

var address = new bitcoin.Address(hdPublicKey.publicKey, bitcoin.Networks.testnet);

console.log('hd address: ' + address);


//create 10 addresses

for ( var i=0 ; i< 10 ; i++){


	console.log('private key of child ' + i + retrieved.derive(0).derive(i,false))
	var test = hdPublicKey.derive(0).derive(i)
	console.log('public key of child ' + i +  hdPublicKey.derive(0).derive(i))
	var childAdd = new bitcoin.Address(test.publicKey, bitcoin.Networks.testnet)
	console.log('child address of ' + i + ' ' + childAdd)
}