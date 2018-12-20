  
var bitcoin = require('bitcoinjs-lib');
var util = require('bitcore-lib');
var crypto = require('crypto');
// var bs58check = require('bs58check')
var coinstring = require('coinstring')
 

 //2N17Am5qmCuqZ4eb12TcDgjWuu6KZNFoU7B
// var decoded = bs58check.decode('uZvw8RQNcqtLyCr6VRM8rjo5793HSvyww1x75Ef1VcmdGBqAmq2gAnpq')
 
// console.log(decoded)

//   var bitcore = require('bitcore');

var HDPrivateKey = util.HDPrivateKey ;
var retrieved = new HDPrivateKey('tprv8ZgxMBicQKsPecsVHbrYk8LBPPyurvcMFrEpDQo9pkcECzyN5kwZYpgqAnHcatFJJvCVkVfosat3mCPJ8fVviZNmH1ZCXRkxPNqjZgkndny');

console.log('retrieved: ' + retrieved)
  // it('can generate a SegWit address', function () {
  //   const keyPair = bitcoin.ECPair.fromWIF('Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct', testnet)
  //   const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })

  //   assert.strictEqual(address, 'bc1qt97wqg464zrhnx23upykca5annqvwkwujjglky')
  // })

  const test1 = bitcoin.ECPair.fromWIF('92wNK3fRyHPP4kKGYiZnGsXEABJKqLvJ9FwhwhgKmdoi4V59VD8',bitcoin.networks.testnet)
  const ans = bitcoin.payments.p2wpkh({pubkey: test1.publicKey, network: bitcoin.networks.testnet})
  console.log('segwit: ' + JSON.stringify(ans))

  // it('can generate a SegWit address (via P2SH)', function () {
  //   const keyPair = bitcoin.ECPair.fromWIF('Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct')
  //   const { address } = bitcoin.payments.p2sh({
  //     redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })
  //   })

  //   assert.strictEqual(address, '34AgLJhwXrvmkZS1o5TrcdeevMt22Nar53')
  // })



    const keyPair = bitcoin.ECPair.fromWIF('92wNK3fRyHPP4kKGYiZnGsXEABJKqLvJ9FwhwhgKmdoi4V59VD8',bitcoin.networks.testnet)
    const address  = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey , network: bitcoin.networks.testnet})
      , network: bitcoin.networks.testnet
    })

    // assert.strictEqual(address, '34AgLJhwXrvmkZS1o5TrcdeevMt22Nar53')

    console.log('res: ' +  JSON.stringify(address));

    
    var pvt_key = 'tprv8ZgxMBicQKsPecsVHbrYk8LBPPyurvcMFrEpDQo9pkcECzyN5kwZYpgqAnHcatFJJvCVkVfosat3mCPJ8fVviZNmH1ZCXRkxPNqjZgkndny'
    // var pvt_key  = 'b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79'
    var okay_key = 'EF' + pvt_key ;
    var hash = crypto.createHash('sha256').update(okay_key,'hex').digest();
    var rehash = crypto.createHash('sha256').update(hash,'hex').digest();

        // var ash = crypto.createHash('sha256').update('807542FB6685F9FD8F37D56FAF62F0BB4563684A51539E4B26F0840DB361E0027C','hex').digest();
   //92wNK3fRyHPP4kKGYiZnGsXEABJKqLvJ9FwhwhgKmdoi4WJE8cm

    var checksum =  '7de4708e' ;
    var final_key = okay_key +  checksum ;
    console.log(final_key)
    // var buf = util.encoding.Base58.fromString(final_key)
    var buf = new Buffer(final_key,'hex')
    console.log(buf)
    // var wif =  util.encoding.Base58.encode(buf)
    var wif = coinstring.encode(buf)
    // var test = bitcoin.pvt_key.toWIF();
    // console.log(test)

// // 
// var privateKeyWIF = Bitcoin.Base58.encode(Crypto.util.hexToBytes(final_key))
// console.log(privateKeyWIF) //"5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD"

    console.log(wif);

// console.log(final_key)
    //3DhR3umhmag6m4DeUQzrsuefBjEKsxHALhLvwtGKqmwmNAwDvVK8k7JKadbKAYxTtZEUM8wzwSK2hwubZhkuwdDsHv7Z1sQ7vrsgAxy

    // var secret = util.Buffer.hexToBuffer('03fad62848f1a6cde4c4d9453dadea714cbd59f1282087853de8b0c6072bec27e7');

    // const keyPair = bitcoin.ECPair.fromPublicKey(secret,bitcoin.networks.testnet)
    // const address  = bitcoin.payments.p2sh({
    //   redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })
    // })

    // // assert.strictEqual(address, '34AgLJhwXrvmkZS1o5TrcdeevMt22Nar53')

    // console.log(keyPair.publicKey.toString());

