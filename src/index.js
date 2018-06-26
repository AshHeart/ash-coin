'use strict'

/**
 * Here, we will control our mock crypto AshCoin
 * and manage its cblockchain ledger
 */
import Block from "./block"

let block = new Block(Date.now(), [], "0")

block.mineBlock("00000")