import express from "express";

const app = express();
app.use(express.json());

let ETH_BALANCE=200;
let USDC_BALANCE=70000; 
//USDC/USDT -> price remain constant (Bull)

// app.post('/add-liquidity', (req, res) => {

// })

app.get('/',(_req,res)=>{
    res.send("Hi there! you are ready to go!")
})

app.post('/buy-asset', (req, res) => {
    //const product=ETH_BALANCE*USDC_BALANCE;
    const quantity=req.body.quantity;
    const updatedEthQuantity=ETH_BALANCE-quantity;
    const updatedUsdcBalance=ETH_BALANCE*USDC_BALANCE/updatedEthQuantity;
    const paidAmmount=updatedUsdcBalance-USDC_BALANCE;
    
    ETH_BALANCE=updatedEthQuantity;
    USDC_BALANCE=updatedUsdcBalance;

    res.json({
     message:`You paid ${paidAmmount} USDC for ${quantity} ETH`
    })

})

app.post('/sell-asset', (req, res) => {
    const quantity=req.body.quantity;
    const updatedEthQuantity=ETH_BALANCE+quantity;

    const updatedUsdcBalance=ETH_BALANCE*USDC_BALANCE/updatedEthQuantity;
    
    const gottenUSDC=USDC_BALANCE-updatedUsdcBalance;
   
    ETH_BALANCE=updatedEthQuantity;
    USDC_BALANCE=updatedUsdcBalance;

    res.json({
     message:`You got ${gottenUSDC} USDC for ${quantity} ETH `
    })


})

// app.post('/quote', (req, res) => {

// })

app.listen(3000,()=>{console.log(`Server running on http://localhost:3000`)})