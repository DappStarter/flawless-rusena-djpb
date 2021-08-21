require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind exchange inflict clock obscure genius'; 
let testAccounts = [
"0x4aaa5bcc63dadfeb276523b6dfa6900811cb3828573eaf6381ea1b1a842a9c30",
"0xf3cf244b7fd953e5e876dad9066f32841287d5ea655a799541738a171dba51d8",
"0x57d88c9fa0a96e769d15f30d3c3a4675f323113f8c3e283870c60530540923c6",
"0xc97d6f522969fec805696589f2647a789d1c9fb4986fb6a0989f80c3942e89b7",
"0xa7c1448362f87808011c914c7984fe11d7d1ae02ba679b4b802ba0905a4d8485",
"0x7076e18044a7c923c887c3d220b21d8fad8e09fe34bd9a05c560bc5ce8aff8cc",
"0xee9bb6ad32af4f6bd00f6b19e2648fcc9c3d6346c2be034dbb1d1c961e03882e",
"0xb9a1f32aa90daf199315c5ab92bb78326b8a6b1e53e18038305b43682ded5492",
"0xe83575488e9108a61ff2563ef32051fc56f5483a219f976f29209e876e319fd8",
"0xfc2398b3cbe25b44aa4022c864a1f6cd2e8843e0ddc23de24a1f68fd97ade311"
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

