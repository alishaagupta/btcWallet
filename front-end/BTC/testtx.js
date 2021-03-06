let coinSelect = require('coinselect')
var bitcoin    = require('./bitcoin-vevsa-lib')


// Signing a bitcoin transaction with private key locally
// var privateKey = BTC private key;     ./bitcoinKeys.js

var privateKey = "b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb71"

var min_value = 1000000
var test = []

var utxo = 
[{"txid":"b89daaf4f6f7d72224c865133124a0a314920cde83c21c8098238c60d49c2502","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"de8fbd4fe72dea28101eae3f78d0c843ee41619fe1df8403e3178ca62a01a204","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"7a29ab2bcfe8fa657463f14045109990f5bfe3057807e3c21c360589b0bcf716","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"afb9fba00cb7324567a582684d1ab76fca6697c49327bb1f9b81580e5347cd38","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"7e8d91388d0283149f552998844492fae8add872249cfeb91cdce2df3295af4e","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0001,"confirmations":214,"spendable":false,"solvable":false,"safe":true},{"txid":"6bd287720f09229ec6a7f46979f52df5650509d6de2c91e23c4e60b62184c150","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0021,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"81ce7cfadbf5fb19066d90881e238cca79dc5300eb6889980bfd8a6cb75f6453","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"32800034f85f2a58bdc69c43ebec8375af082fa405c836d4e251d96b8b6ae255","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"07ed8b364a92de0910c712f5bf314faed143bd57f2ee9032981cbf73dc244081","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"870c85930ce38c53a59ab2fe8eba4ffaf13059e3c650e341744eb281ce3e6287","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0021,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"3195afe4de7479fb39e7552c4b21dbb46d09966f9b67c3235d1480b69742ee8d","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.50966016,"confirmations":226,"spendable":false,"solvable":false,"safe":true},{"txid":"4149bb1d8d9398bb841b155b6173b677f8f7605dfdb55e02017f66796547d692","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"dd0edd417bde9fbb6eb890ad161b117c3418dbb10f89d4335da8e6fc535a1496","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"047116a85823c0382f11f7c04950b545d468409fe6587478696e2670a0e1e1a3","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"5ec55becfca7bbc9aea711aead34dbd75d0e735f4f8ded5e2201669bb96755a7","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"dda5a2ebbbc27d09590f0c8b54bafcaa988f1894f7f729c499fb0243a93f56bd","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"1365201aa0d83aa18845b6e94afe2abf027ee98361f60175a673482cc263d8c0","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0021,"confirmations":222,"spendable":false,"solvable":false,"safe":true},{"txid":"c86b5bf1d5f42eec5ca84a2c80ea9c387790957c6997592c77d45023b76ec9d2","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"9aea0b284cda841463c5a431678885098721fcec946cce8206bbe2451d2175d4","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"6f3efbb5e2a3a8c62b1dcf63024aa129ade7ab7f464f3421a72371424bc21fef","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":223,"spendable":false,"solvable":false,"safe":true},{"txid":"1fd21fe59d3dd887ca2b7a17e273fad92b107bd7a9aea9432129054969750bfd","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":223,"spendable":false,"solvable":false,"safe":true}]

// var min_value = 1000000

for (var i=0 ; i< utxo.length ; i++){

          test.push({txId: utxo[i].txid, value: utxo[i].amount*100000000})



}

/**
 *
 * UnspentOutput is a class with stateless instances that provides information about an unspent output
 *       utxo data comes from back-end
 */



// let bitcoin = require('bitcoinjs-lib')
let feeRate = 1 // satoshis per byte
let utxos = test



let targets = [
  {
    address: 'msUqLQFYf1tQob2tT8MTvjbX4KriJG9MaR',
    // value: 0.01
    value: min_value //satoshis 
  }
]
 
// ...
let { inputs, outputs, fee } = coinSelect(utxos, targets, feeRate)
 
// the accumulated fee is always returned for analysis
console.log(fee)
// console.log('input : ' + JSON.stringify(inputs));
// console.log('output ' + JSON.stringify(outputs));
// .inputs and .outputs will be undefined if no solution was found

var txid= [] 
var final_utxo = []

for(var k=0 ; k < inputs.length; k++){

txid.push(inputs[k].txId);
final_utxo.push(utxo.find(utxo => utxo.txid == inputs[k].txId)) 

}

for( var z=0 ; z< final_utxo.length ; z++){

	console.log(final_utxo[z]);
}


if (!inputs || !outputs) return



// create a transaction 

var transaction = new bitcoin.Transaction()    //min relay fees is 1000 Satoshi .fee(1000)   
 

  transaction.from(final_utxo)

  // var fees = transaction.getFee();   //15459159


 transaction.to('msUqLQFYf1tQob2tT8MTvjbX4KriJG9MaR',1000000)          // Address, Amount in Satoshi  ;Add an output with the given amount of satoshis


 transaction.change("myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH")         // Address where the change amount is transferred
       // var fees = transaction.getFee();   //15459159
  transaction.feePerKb(1000)

  var size =transaction._estimateSize()
console.log('size: '+ size)

var fees = (size/1000)*1000 ;

console.log('fees expected : ' + fees) ;
var estimatedfees = transaction._estimateFee(size,min_value, 1000);

console.log('estimated fees' + estimatedfees)
transaction.fee(estimatedfees)

  transaction.sign(privateKey)                                  // Signs all the inputs it can                           





  // var fees = transaction.getFee() 


// console.log("fees : " + fees)
// var size =transaction.estimateSize()                         // 100000


// // transaction.sign('6347a789e2137e49e30997c442f64b1ef9e924a88f39ceeca79cf81a9c02c7d1');


// console.log(transaction.toString());
