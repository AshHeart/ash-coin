'use strict'

import SHA3 from "crypto-js/sha3"

/**
 * @class
 * 
 * Block governs the creation of a block to be added onto our blockchain
 * 
 * Represents a single transaction using our coin.
 */
class Block {
    /**
     * @constructor 
     * 
     * Defines the structure of a block
     * 
     * @param {Date} timestamp Time of creation of block
     * @param {Array} transactions The list of pending transactions
     * @param {number} prevHash  The hash of the preious block on the blockchain
     */
    constructor(timestamp, transactions, prevHash = "") 
    {
        this.timestamp = timestamp
        this.transactions = transactions
        this.prevHash = prevHash
        this.hash = this.calcHash()
        this.nonce = 0
    }

    /**
     * Calcuates the hash of the current block
     * needed while creating the block
     * 
     * @returns {number} The hash of the current block using SHA3
     */
    calcHash()
    {
        return SHA3(this.timestamp + JSON.stringify(this.transactions) + this.prevHash + this.nonce).toString()
    }

    /**
     * Mine a block to be added onto the blockchain
     * 
     * @param {number} miningDifficulty The mining difficulty, to limit the time to mine one block
     */
    mineBlock(miningDifficulty)
    {
        while(this.hash.substring(0, miningDifficulty.length) !== miningDifficulty) {

            this.nonce++
            this.hash = this.calcHash()
        }

        console.log("Block Mined with hash: " + this.hash)
    }
}

export default Block