import Branch from "./branch"
import Customer from "./customer"
import Transactions from "./transactions"

/** 
 * A class representing a bank.
 * @class
 * @param {string} name - The name of the bank.
 */
class Bank {

    name: string
    branches: Array<Branch>

    /**
     * Creates a new Bank instance.
     * @constructor
     * @param {string} name - The name of the bank.
     * @return {void}
     */
    constructor(name: string) {
        this.name = name
        this.branches = []
    }

    /**
     * Adds a branch to the bank.
     * @param {Branch} branch - The branch to add.
     * @return {boolean} - `true` if the branch was added successfully, `false` otherwise.
     */
    addBranch(branch:Branch): boolean {
        if (!this.branches.includes(branch)) {
            this.branches.push(branch)
            return true
        } 
        else {
            return false
        }
    }

     /**
     * Adds a customer to a branch.
     * @param {string} branch - The name of the branch to add the customer to.
     * @param {Customer} customer - The customer to add.
     * @return {boolean} - `true` if the customer was added successfully, `false` otherwise.
     */
    addCustomer(branch:string, customer:Customer): boolean {
        const targetBranch = this.branches.find(b => b.getName() === branch)
        if (targetBranch && !targetBranch.getCustomers().includes(customer)) {
            targetBranch.addCustomer(customer)
            return true
        }
        else {
            return false
        }
    }

    /**
     * Adds a transaction for a customer at a branch.
     * @param {Branch} branch - The branch where the customer is located.
     * @param {string} customerId - The ID of the customer.
     * @param {Transactions} transaction - The transaction to add.
     * @return {boolean} - `true` if the transaction was added successfully, `false` otherwise.
     */
    addCustomerTransaction(branch:Branch, customerId:string, transaction:Transactions):boolean {
        if (this.branches.includes(branch)) {
            return branch.addCustomerTransaction(customerId, transaction)
        }
        else {
            return false
        }
    }

    /**
     * Finds a branch by name.
     * @param {string} branchName - The name of the branch to find.
     * @return {Array<Branch>} - An array of branches with the given name.
     */
    findBranchByName(branchName:string) {
        return this.branches.filter(branch => branch.getName() === branchName)
    }

    /**
     * Checks if the given branch is registered in the bank.
     * @param {Branch} branch - The branch to check.
     * @returns {boolean} - True if the branch is registered, false otherwise.
     */
    checkBranch(branchName:Branch):boolean {
        return this.branches.includes(branchName)
    }

    /**
     * Lists all customers of the specified branch, optionally showing their transaction details.
     * @param {string} branchName - The name of the branch to list customers for.
     * @param {boolean} showTransactionsDetails - Whether to show transaction details for each customer.
     * @returns {boolean} - True if the branch is found and the customers are listed, false otherwise.
     */
    listCustomers(branchName:string, showTransactionsDetails:boolean):boolean {
        const targetBranch = this.findBranchByName(branchName)
        if (targetBranch.length > 0) {
            if (showTransactionsDetails) {
                for (let customer of targetBranch[0].getCustomers()) {
                    console.log(`${customer.getName()}: ${customer.getTransactions()}` )
                }
            }
            return true
        }
        else {
            return false
        }
    }
}

export default Bank