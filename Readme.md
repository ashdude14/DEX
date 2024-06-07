# Decentralized exchange (DEX)

 DEXs facilitate cryptocurrency trading directly between users without relying on a central authority. 
 [web2 implementation completed, learning for web3..]

# Underlying Technology
Blockchain: DEXs operate on blockchain technology, typically using smart contracts to automate and secure transactions.
Smart Contracts: These are self-executing contracts with the terms of the agreement directly written into code. They ensure that trades are conducted fairly and transparently without intermediaries.

# Key Components
<b>Liquidity Pools: </b> Users provide funds to liquidity pools (pairs of tokens) to facilitate trading. In return, they earn fees from trades.

<b>Automated Market Makers (AMMs): </b>AMMs use algorithms to set the prices of tokens within liquidity pools. The most common AMM model is the constant product formula (x * y = k), where x and y are the quantities of two tokens, and k is a constant.

<b> Order Books:</b> Some DEXs use order books, similar to traditional exchanges, where buy and sell orders are matched directly.

#  Trading Process
<b>Connect Wallet: </b> Users connect their cryptocurrency wallets (like MetaMask) to the DEX platform. The wallets must support the blockchain on which the DEX operates (e.g., Ethereum).

<b>Select Trading Pair: </b> Users choose the tokens they want to trade (e.g., ETH/USDT).

<b>Initiate Trade:</b> The user specifies the amount and price (if using an order book model) or simply swaps tokens at the current rate (if using an AMM model).

<b>Execute Trade: </b> The trade is executed through a smart contract. For AMMs, the smart contract updates the token reserves in the liquidity pool, ensuring the new price reflects the trade.

# Early Intuition
This is the first version where I try to implement DEX using WEB2.0 stack. 

<b> Tech-Stack </b>

<i>
TypeScript, NodeJs, ExpressJs
</i>

# Future Developments
1. Next step is to develop and deploy Smart Contract on-chain using <i> Solidity </i> following Decentralized manner.  
2. Making Front-end using NextJS


## To set up locally
```
npm install 
```

## Install yarn
Run the following command on your terminal
```
corepack enable 
```
### Install TypeScript
```
yarn add typescript --dev
```
### Build using yarn
```
yarn run tsc -b
```
### Start local Server on Port: 3000
```
 node dist/index.js
```
### Enpoints
To buy ETH make Post request following below 
```
post('/buy-asset`)
Body
{
 "quantity":1
}
```
To sell ETH make Post request following below 
```
post('/sell-asset`)
Body
{
 "quantity":1
}
```
