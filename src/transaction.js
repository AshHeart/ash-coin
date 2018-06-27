'use strict'

/**
 * @class
 * 
 * Transaction, a transaction on a blockchain
 * Every transaction has a from address and a to address
 * And the amount passed between the two
 */
class Transaction {
    /**
     * @constructor
     * 
     * Defines a single transaction on our ledger
     * To be mined into a block and addded to the blockchain
     * 
     * @param {String} fromAddress 
     * @param {String} toAddress 
     * @param {number} amount 
     */
    constructor(fromAddress, toAddress, amount) 
    {
        this.toAddress = toAddress
        this.fromAddress = fromAddress
        this.amount = amount
    }
}

export default Transaction