require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note punch essay idea clip blue gesture'; 
let testAccounts = [
"0x6f278f5695eb36b19d0b5a721af2bbdcfad1ad4a684858dce9a9ee4587eccbb2",
"0x46da655f48c756ca9a4edf9bde2b33d3c86bdc8c0890c6c4418a2a9b969be284",
"0xdb3112ed2f460262853ab4750fefd7af3e7d44d518c479d72f212cbfe0675d73",
"0xda7e3262a9e0565ab7c10286e64035c1fddf37e4306aa6c0baf22d31ae1825bb",
"0x211c4da1aadcf778bd6d8bd3044c835e1d05ccde0e20470fb6b2eaabb5f4042b",
"0x8cb565fa7d8472275db7c15ed8f45640140a3ceade25ebf99a9d8d695b9873d6",
"0x240d56f10347d393a53c4a4b572dc3cc595c83634d899c232def92ffd27ff0e1",
"0x6dc22f5f7c9bdb243f6670165a93e1b355113af63b12a9030c08eca36dc6321e",
"0xa924b448015fad8d916a7b4593229577ed7195bbf7c7e398467c43210186b6b2",
"0xa35609aad0d08fa3129cfd7f100a30f7676f0aad5eb70a3a67598bd9ebceea64"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

