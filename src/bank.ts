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
            // console.log(`${branch.getName()} has been added to bank`)
            return true
        } 
        else {
            // console.log(`${branch.getName()} already exist`)
            return false
        }
    }

     /**
     * Adds a customer to a branch.
     * @param {Branch} branch - The name of the branch to add the customer to.
     * @param {Customer} customer - The customer to add.
     * @return {boolean} - `true` if the customer was added successfully, `false` otherwise.
     */
    addCustomer(branch:Branch, customer:Customer): boolean {
        const targetBranch = this.branches.find(b => b === branch)
        if (targetBranch && !targetBranch.getCustomers().includes(customer)) {
            targetBranch.addCustomer(customer)
            //  console.log(`Customer ${customer.getName()} has been added to ${branch.getName()}`)
            return true
        }
        else {
            // console.log(`Customer ${customer.getName()} already exist ${branch.getName()}`)
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
        return this.branches.filter(branch => branch.getName().includes(branchName))
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
    listCustomers(branchName: Branch, showTransactionsDetails: boolean): boolean {
        const customers = branchName.getCustomers();
        if (customers.length === 0) {
            return false;
        }

        if (showTransactionsDetails) {
            customers.forEach(customer => {
                console.log(`${customer.getName()}: ${customer.getTransactions()}`);
            });
        } else {
            customers.forEach(customer => {
                console.log(customer.getName());
            });
        }
        return true;
    }
}

export default Bank