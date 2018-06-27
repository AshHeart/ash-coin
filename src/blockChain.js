'use strict'

import Block from "./block"
import Transaction from "./transaction"

/**
 * @class 
 * 
 * BlockChain creates and handles our main ledger
 * That stores all transactions made using our coin
 */
class BlockChain {
    /**
     * @constructor
     * 
     * Initiate our chain with the Genesis Block
     * Set our mining cost and mining reward
     * And make a pending transactions list
     */
    constructor()
    {
        this.chain = [this.createGenesisBlock()]
        this.miningDifficulty = "0000"
        this.pendingTransactions = []
        this.miningRewardAmount = 10.0
    }

    /**
     * Creates the first block in our chain
     * Called the Genesis Block
     * Has a pevious hash of 0000 to indicate that it is the first block
     * 
     * @returns {Block}
     */
    createGenesisBlock()
    {
        const ICODate = Date.parse("2018-01-01")
        const transaction = []
        const firstHash = "0000"

        return new Block(ICODate, transaction, firstHash)
    }

    /**
     * Adds a transaction to the pending transactions list
     * 
     * @param {Array} transaction A single transaction
     */
    createTransaction(transaction)
    {
        this.pendingTransactions.push(transaction)
    }

    /**
     * Returns the last block on the blockchain
     * 
     * @returns {Block}
     */
    getLatestBlock()
    {
        return this.chain[this.chain.length - 1]
    }

    /**
     * Gets the balance amount of coins in a users wallet
     * 
     * @param {String} userAddress The user who's balance we will return
     * 
     * @returns {number}
     */
    getBalance(userAddress)
    {
        let userBalance = 0.0

        for(const block of this.chain) {
            for(const transaction of block.transactions) {
                if(transaction.fromAddress == userAddress)
                    userBalance -= transaction.amount

                if(transaction.toAddress == userAddress)
                    userBalance += transaction.amount
            } 
        }

        return userBalance
    }

    /**
     * Mines one pending transaction and adds it to the BLockchain
     * 
     * @param {string} miningRewardAddress 
     */
    minePendingTransactions(miningRewardAddress)
    {
        console.log("\nUser with " + miningRewardAddress + " is mining pending transactions on the blockchain")
        let newBlock = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash)

        newBlock.mineBlock(this.miningDifficulty)

        this.chain.push(newBlock)
        console.log("Block Successfully added to Blockchain")

        let pendingTransaction = new Transaction(null, miningRewardAddress, this.miningRewardAmount)

        this.pendingTransactions = [
            pendingTransaction
        ]

        console.log("Transaction complete!!\n\n")
    }
}

export default BlockChain