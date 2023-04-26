import Transactions from "./transactions"

/**
 * Represents a customer of a bank.
 * @class
 * 
 */
class Customer {

    name: string
    private id: string
    transactions: Transactions[]

    private static Id: number = 1

    /**
     * Creates a new Customer object.
     * @constructor
     * @param {string} name - The name of the customer.
     */
    constructor (nameOfCustomer: string) {
        /**
         * The name of the customer.
         * @type {string}
         */
        this.name = nameOfCustomer
         /**
         * An array of the customer's transactions.
         * @type {Transactions[]}
         */
        this.transactions = []
        /**
         * The unique ID of the customer.
         * @type {string}
         */
        this.id = `customer-${Customer.Id++}`
    }

    /**
     * Returns the name of the customer.
     * @returns {string} The name of the customer.
     */
    getName() {
        return this.name
    }

    /**
     * Returns the unique ID of the customer.
     * @returns {string} The ID of the customer.
     */
    getId() {
        return this.id
    }

    /**
     * Returns an array of the customer's transactions.
     * @returns {Transactions[]} An array of the customer's transactions.
     */
    getTransactions() {
        return this.transactions
    }

    /**
     * Returns the account balance of the customer.
     * @returns {number} The account balance of the customer.
     */
    getBalance() {
        const accountBalance = this.transactions.reduceRight((acc, cur) => Number(acc) + Number(cur), 0)
        return accountBalance
    }

    /**
     * Adds a transaction to the customer's account.
     * @param {Transactions} transaction - The transaction to add.
     * @returns {boolean} True if the transaction was added successfully, false otherwise.
     */
    addTransactions(transaction:Transactions):boolean {
        if ((this.getBalance() + transaction.amount) >= 0) {
            this.transactions.push(transaction)
            return true
        }
        else {
            return false
        }
    }
}

export default Customer