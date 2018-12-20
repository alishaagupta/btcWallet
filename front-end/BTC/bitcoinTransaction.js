// Implementing all features related to transaction of bitcoin
var bitcoin = require('./bitcoin-vevsa-lib');

// Signing a bitcoin transaction with private key locally
// var privateKey = BTC private key;     ./bitcoinKeys.js

var privateKey = "b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb71"

var min_value = 51966016

var final_utxo = []
// var min_value = 1000000

var utxo = 
[{"txid":"b89daaf4f6f7d72224c865133124a0a314920cde83c21c8098238c60d49c2502","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":2208,"spendable":false,"solvable":false,"safe":true},{"txid":"de8fbd4fe72dea28101eae3f78d0c843ee41619fe1df8403e3178ca62a01a204","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":2208,"spendable":false,"solvable":false,"safe":true},{"txid":"7a29ab2bcfe8fa657463f14045109990f5bfe3057807e3c21c360589b0bcf716","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":2208,"spendable":false,"solvable":false,"safe":true},{"txid":"b635e44cba29a562c3a75b6fbd8ec8131f156c1d9e2e6496328df15397df1f32","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0019,"confirmations":1970,"spendable":false,"solvable":false,"safe":true},{"txid":"afb9fba00cb7324567a582684d1ab76fca6697c49327bb1f9b81580e5347cd38","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"7e8d91388d0283149f552998844492fae8add872249cfeb91cdce2df3295af4e","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0001,"confirmations":2422,"spendable":false,"solvable":false,"safe":true},{"txid":"6bd287720f09229ec6a7f46979f52df5650509d6de2c91e23c4e60b62184c150","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0021,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"81ce7cfadbf5fb19066d90881e238cca79dc5300eb6889980bfd8a6cb75f6453","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":2208,"spendable":false,"solvable":false,"safe":true},{"txid":"32800034f85f2a58bdc69c43ebec8375af082fa405c836d4e251d96b8b6ae255","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"07ed8b364a92de0910c712f5bf314faed143bd57f2ee9032981cbf73dc244081","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":2208,"spendable":false,"solvable":false,"safe":true},{"txid":"870c85930ce38c53a59ab2fe8eba4ffaf13059e3c650e341744eb281ce3e6287","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0021,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"4149bb1d8d9398bb841b155b6173b677f8f7605dfdb55e02017f66796547d692","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"dd0edd417bde9fbb6eb890ad161b117c3418dbb10f89d4335da8e6fc535a1496","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"047116a85823c0382f11f7c04950b545d468409fe6587478696e2670a0e1e1a3","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.001,"confirmations":2208,"spendable":false,"solvable":false,"safe":true},{"txid":"5ec55becfca7bbc9aea711aead34dbd75d0e735f4f8ded5e2201669bb96755a7","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"6db06917dcce246388f558acc1691d6847d1cbe5afe2252cd803ac9cca9be6a7","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.49965016,"confirmations":2207,"spendable":false,"solvable":false,"safe":true},{"txid":"dda5a2ebbbc27d09590f0c8b54bafcaa988f1894f7f729c499fb0243a93f56bd","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"1365201aa0d83aa18845b6e94afe2abf027ee98361f60175a673482cc263d8c0","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0021,"confirmations":2430,"spendable":false,"solvable":false,"safe":true},{"txid":"c86b5bf1d5f42eec5ca84a2c80ea9c387790957c6997592c77d45023b76ec9d2","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"9aea0b284cda841463c5a431678885098721fcec946cce8206bbe2451d2175d4","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0023,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"1c4e7bf11f91a16e6c9798fe5f6201780893d969456b097afe48879d58550aeb","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.16666071,"confirmations":0,"spendable":false,"solvable":false,"safe":false},{"txid":"6f3efbb5e2a3a8c62b1dcf63024aa129ade7ab7f464f3421a72371424bc21fef","vout":1,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":2431,"spendable":false,"solvable":false,"safe":true},{"txid":"1fd21fe59d3dd887ca2b7a17e273fad92b107bd7a9aea9432129054969750bfd","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":0.0022,"confirmations":2431,"spendable":false,"solvable":false,"safe":true}]

// var test = []
var lessers = []
var greaters = []
// var key_func = []




for (var i=0 ; i< utxo.length ; i++){

          // test.push({txId: utxo[i].txid, value: utxo[i].amount*100000000})
          if ( utxo[i].amount*100000000 < min_value) {
          	lessers.push(utxo[i])
          }
          else {
          	greaters.push(utxo[i])
          }

          // key_func.push(utxo[i].amount*100000000)


}

 
if (greaters.length !== 0) {    
    
  // array of greaters is sorted by amount

greaters.sort(function(a, b) {
    return a.amount*100000000 - b.amount*100000000;
}); 



var min_greater = greaters[0]
change = min_greater.amount*100000000 - min_value
console.log('change amount : ' + change)
console.log('min used: '+ JSON.stringify(min_greater));

final_utxo.push(min_greater);
// return final_utxo ;
}

else {
	// console.log('I am in lessers')
	// var result = []
	var accum = 0 

lessers.sort(function(a, b) {
    return a.amount*100000000 - b.amount*100000000;
}); 
// reverse sorted list of lessers 


	for (var a= lessers.length-1 ; a >= 0; a--){

		// result.push(lessers[a])
		final_utxo.push(lessers[a])
		accum = accum+ lessers[a].amount*100000000 ;
		if (accum >= min_value) {
			change = accum - min_value
			// console.log('result: ' + JSON.stringify(result));
			// return final_utxo ;
			break ;
		}
	}

}


console.log('final_utxo ' + final_utxo.length);


for( var z=0 ; z< final_utxo.length ; z++){
	// console.log('final : ' + final_utxo.length)
	console.log(final_utxo[z]);
}


// if (!inputs || !outputs) return



// create a transaction 

var transaction = new bitcoin.Transaction()    //min relay fees is 1000 Satoshi .fee(1000)   
 

  transaction.from(final_utxo)




 transaction.to('msUqLQFYf1tQob2tT8MTvjbX4KriJG9MaR',1000000)          // Address, Amount in Satoshi  ;Add an output with the given amount of satoshis


 transaction.change("myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH")         // Address where the change amount is transferred

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


console.log(transaction.toString());
