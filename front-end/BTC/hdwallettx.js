var bitcoin = require('./bitcoin-vevsa-lib');
const Client     = require('bitcoin-core');
const client     = new Client(  { 
                             network : 'testnet',
                             port    : 18332,
                             host : '206.189.135.167' ,
                             username    : 'test',
                             password : 'test123'
                           } );



var final_utxo =    {"utxo":{"unspent_outputs":[{"tx_hash":"5355c0b4f3a73364e308c427a4dfa215c4d3085be70cbca27cbedb18245e2428","tx_hash_big_endian":"28245e2418dbbe7ca2bc0ce75b08d3c415a2dfa427c408e36433a7f3b4c05553","tx_index":287160969,"tx_output_n":1,"script":"76a9141506ec5cb92a31f8f7df755726494192843de69388ac","xpub":{"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/9"},"value":190000,"value_hex":"02e630","confirmations":107},{"tx_hash":"44535e4fc93333aeccdcd12208715254f871eeddb5d454c9676da670ee873afd","tx_hash_big_endian":"fd3a87ee70a66d67c954d4b5ddee71f85452710822d1dcccae3333c94f5e5344","tx_index":287160984,"tx_output_n":0,"script":"76a9141506ec5cb92a31f8f7df755726494192843de69388ac","xpub":{"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/9"},"value":190000,"value_hex":"02e630","confirmations":107},{"tx_hash":"003915371113f9f0fb00b5bb4b886ab82da8941f04e9626ccf17922c0c9a7461","tx_hash_big_endian":"61749a0c2c9217cf6c62e9041f94a82db86a884bbbb500fbf0f9131137153900","tx_index":287160993,"tx_output_n":0,"script":"76a914cebee14692376b67b2ec4ca9fff5bb3bebee9dd788ac","xpub":{"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/1"},"value":190000,"value_hex":"02e630","confirmations":107},{"tx_hash":"7945e73eab409d118032c9db047b3f8720e071460d115fb124c872e99ee7e5b5","tx_hash_big_endian":"b5e5e79ee972c824b15f110d4671e020873f7b04dbc93280119d40ab3ee74579","tx_index":287160978,"tx_output_n":0,"script":"76a9141506ec5cb92a31f8f7df755726494192843de69388ac","xpub":{"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/9"},"value":190000,"value_hex":"02e630","confirmations":107},{"tx_hash":"f00cc9db60140d48e0dda54177996713e9561b0f905a13956f2a514f90f4384a","tx_hash_big_endian":"4a38f4904f512a6f95135a900f1b56e91367997741a5dde0480d1460dbc90cf0","tx_index":287161425,"tx_output_n":1,"script":"76a9147bb97bf97f39daaa396a31b446f666eb4c0d1a6988ac","xpub":{"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/6"},"value":180000,"value_hex":"02bf20","confirmations":104},{"tx_hash":"e3d6a76b37c115629587922e75d31ad87d28ead7f097727d50975484ce9579d5","tx_hash_big_endian":"d57995ce845497507d7297f0d7ea287dd81ad3752e9287956215c1376ba7d6e3","tx_index":287161830,"tx_output_n":1,"script":"76a9142ef336e74d9f0641aaf9090ee8a1f4bd1c4fbf1388ac","xpub":{"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/5"},"value":190000,"value_hex":"02e630","confirmations":103}]}}


var priv_key = []
 
 // utxo.xpub.path 
// {"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/9"}
// here
// {"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/9"}
// here
// {"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/1"}
// here
// {"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/9"}
// here
// {"m":"tpubD6NzVbkrYhZ4Y5uHBFX99XzHxRVr2FoFq9qbVvqTF2Qd3VE8i9m9jKJhLv47J6QWufvHjMi4qG3bv1gzSpKPZJRyMt9RqawVS9rth8ActE4","path":"M/0/6"}

var HDPrivateKey = bitcoin.HDPrivateKey ;
var retrieved = new HDPrivateKey('tprv8ZgxMBicQKsPecsVHbrYk8LBPPyurvcMFrEpDQo9pkcECzyN5kwZYpgqAnHcatFJJvCVkVfosat3mCPJ8fVviZNmH1ZCXRkxPNqjZgkndny');

// console.log(retrieved)
// priv_key.push( retrieved.derive("m/0/9"))
priv_key.push(retrieved.derive(0).derive(1,false).privateKey)
priv_key.push(retrieved.derive(0).derive(9,false).privateKey)
priv_key.push(retrieved.derive(0).derive(6,false).privateKey)
priv_key.push(retrieved.derive(0).derive(5,false).privateKey)

for( var j=0 ; j < priv_key.length ; j++ ) {

console.log('sign with keys: ' + priv_key[j])
}




var utxo = 
[{"txid":"61749a0c2c9217cf6c62e9041f94a82db86a884bbbb500fbf0f9131137153900","vout":0,"address":"mzN8A9MRsAbSbDSrxWyVHRxcq5WZwyyz5C","account":"","scriptPubKey":"76a914cebee14692376b67b2ec4ca9fff5bb3bebee9dd788ac","amount":0.0019,"confirmations":108,"spendable":false,"solvable":false,"safe":true},
{"txid":"fd3a87ee70a66d67c954d4b5ddee71f85452710822d1dcccae3333c94f5e5344","vout":0,"address":"mhS8n7yYA1czmbzdoDMAfqWMhXor4GWbdL","account":"","scriptPubKey":"76a9141506ec5cb92a31f8f7df755726494192843de69388ac","amount":0.0019,"confirmations":108,"spendable":false,"solvable":false,"safe":true},
{"txid":"28245e2418dbbe7ca2bc0ce75b08d3c415a2dfa427c408e36433a7f3b4c05553","vout":1,"address":"mhS8n7yYA1czmbzdoDMAfqWMhXor4GWbdL","account":"","scriptPubKey":"76a9141506ec5cb92a31f8f7df755726494192843de69388ac","amount":0.0019,"confirmations":108,"spendable":false,"solvable":false,"safe":true},
{"txid":"b5e5e79ee972c824b15f110d4671e020873f7b04dbc93280119d40ab3ee74579","vout":0,"address":"mhS8n7yYA1czmbzdoDMAfqWMhXor4GWbdL","account":"","scriptPubKey":"76a9141506ec5cb92a31f8f7df755726494192843de69388ac","amount":0.0019,"confirmations":108,"spendable":false,"solvable":false,"safe":true},
{"txid":"d57995ce845497507d7297f0d7ea287dd81ad3752e9287956215c1376ba7d6e3","vout":1,"address":"mjoCjiTf8e5uiyEvrYG1JTQmv7mLaQYNBS","account":"","scriptPubKey":"76a9142ef336e74d9f0641aaf9090ee8a1f4bd1c4fbf1388ac","amount":0.0019,"confirmations":104,"spendable":false,"solvable":false,"safe":true},
{"txid":"4a38f4904f512a6f95135a900f1b56e91367997741a5dde0480d1460dbc90cf0","vout":1,"address":"mro9cKfQmGG2ToKjYkKCZFEK5MAfn4gjZm","account":"","scriptPubKey":"76a9147bb97bf97f39daaa396a31b446f666eb4c0d1a6988ac","amount":0.0018,"confirmations":105,"spendable":false,"solvable":false,"safe":true}]



var min_conf = 0
var max_conf = 99999

var addresses = ['mzN8A9MRsAbSbDSrxWyVHRxcq5WZwyyz5C','mhS8n7yYA1czmbzdoDMAfqWMhXor4GWbdL','mro9cKfQmGG2ToKjYkKCZFEK5MAfn4gjZm','mjoCjiTf8e5uiyEvrYG1JTQmv7mLaQYNBS' ]
                                                                      
client.listUnspent(min_conf,max_conf,addresses)
.then(function(unspent) {

//  utxo = unspent
// console.log(JSON.stringify(unspent))
    
}
)   
.catch(function(error) {
  
     console.log(error)

    });


var keys = []

var transaction = new bitcoin.Transaction()
    .from(utxo)          // Feed information about what unspent outputs one can use
    .to('myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH', 190000)  // Add an output with the given amount of satoshis
    .change('mhS8n7yYA1czmbzdoDMAfqWMhXor4GWbdL')      // Sets up a change address where the rest of the funds will go
    
  transaction.feePerKb(1000)

  var size =transaction._estimateSize()
console.log('size: '+ size)

var fees = (size/1000)*1000 ;

console.log('fees expected : ' + fees) ;
var estimatedfees = transaction._estimateFee(size,100, 1000);

console.log('estimated fees' + estimatedfees)
transaction.fee(estimatedfees)


    transaction.sign(priv_key);


   console.log('tx hash: ' + transaction.toString())