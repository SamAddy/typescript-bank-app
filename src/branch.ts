import Customer from "./customer"
import Transactions from "./transactions"

/**
 * Represents a bank branch that holds a collection of customers.
 */
class Branch {

    name: string
    private customers: Array<Customer>

    /**
     * Creates a new branch with the given name and an empty list of customers.
     * @param {string} name - The name of the branch.
     */
    constructor(name: string) {
        this.name = name
        this.customers = []
    }

    /**
     * Returns the name of the branch.
     * @returns {string} The name of the branch.
     */
    getName() {
        return this.name
    }

    /**
     * Returns the list of customers at the branch.
     * @returns {Customer[]} The list of customers at the branch.
     */
    getCustomers () {
        return this.customers
    }

    /**
     * Adds a new customer to the branch if it doesn't already exist.
     * @param {Customer} customer - The customer to add to the branch.
     * @returns {boolean} `true` if the customer was added, `false` otherwise.
     */
    addCustomer(customer:Customer):boolean {
        if (!this.customers.includes(customer)) {
            this.customers.push(customer)
            return true
        } 
        else {
            return false
        }
    }

    /**
     * Adds a transaction to the account of the customer with the given ID.
     * @param {string} customerId - The ID of the customer whose account to modify.
     * @param {Transactions} transaction - The transaction to add to the customer's account.
     * @returns {boolean} `true` if the transaction was added, `false` if the customer wasn't found.
     */
    addCustomerTransaction(customerId:string, transaction:Transactions) {
        const customer = this.findCustomer(customerId)
        if (customer) {
           return customer.addTransactions(transaction)
        }
        else {
            return false
        }
    }

    /**
     * Finds and returns the customer with the given ID.
     * @param {string} customerId - The ID of the customer to find.
     * @returns {Customer|null} The customer with the given ID, or `null` if not found.
     */
    findCustomer(customerId:string) {
        return this.customers.find(c => c.getId() === customerId) ?? null
    }
}

export default Branch