require("dotenv").config();



const { Client } = require("@hashgraph/sdk");

const HederaClient = new Client({
network: { "0.testnet.hedera.com:50211": "0.0.3"},
operator: {
  account:process.env.ACCOUNT_ID, 
  privateKey: process.env.PRIVATE_KEY
}

});

  const demoToken = await new TokenCreateTransaction()
  .setTokenName("Steve")
  .setTokenSymbol("CRUNCH")
  .setDecimals(0)
  .setInitialSupply(0)
  .setSupplyKey(PrivateKey.fromString(privateKey))
  .setTokenType(TokenType.NonFungibleUnique
  .setSupplyType(TokenSupplyType.Finite)
  .setMaxSupply(10)
  .setTreasuryAccountId(account)
  .execute(client);

  const tokenReceipt = await demoToken.getReceipt(client);
  const tokenID = tokenReceipt(tokenID);
  const token_1 = await new TokenMintTransaction()
  .setTokenID(tokenID)
  .setMetadata([Buffer.from("Some metaData")])
  .execute(client)

  const receipt = await token_1.getReceipt(client)

  const nft_serial = receipt.serials[0].toNumber()

  console.log("NFT serial is: ", nft_serial)

  const nft_info = await new TokenNftInfoQuery()
  .setNftId(new NftId(tokenId, nft_serial))
  .execute(client);

  const metadata = nft_info[0].metadata/toString();

  console.log('Token Metadata is: ', metadata);


module.exports = HederaClient;