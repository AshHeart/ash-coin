'use strict'

/**
 * Here, we will control our mock crypto AshCoin
 * and manage its cblockchain ledger
 */
import BlockChain from "./blockChain"
import Transaction from "./transaction"

let AshCoin = new BlockChain()

console.log("\nFor our ICO we give User with address-2 100 coins")
const firstTransaction = new Transaction(null, "address-2", 100)

AshCoin.createTransaction(firstTransaction)
AshCoin.minePendingTransactions("address-1")

console.log("Balance of address-1 is " + AshCoin.getBalance("address-1")  + " Coz his reward is a pending transaction on the blockchain")

AshCoin.minePendingTransactions("address-2")

console.log("Balance of address-1 is " + AshCoin.getBalance("address-1"))

console.log("Balance of address-2 is " + AshCoin.getBalance("address-2") + " Coz ICO transaction was already mined")

AshCoin.minePendingTransactions("address-2")

console.log("Balance of address-2 is " + AshCoin.getBalance("address-2") + " Coz he got his mining reward mined by himself")

