import Branch from "./branch"
import Customer from "./customer"

class Bank {

   private name: string
    branches: Array<Branch>

    constructor(name: string) {
        this.name = name
        this.branches = []
    }

    addBranch(branch:Branch) {
        if (!this.branches.includes(branch)) {
            this.branches.push(branch)
            return true
        } 
        else {
            return false
        }
    }

    addCustomer(branch:Branch, customer:Customer) {
        // if (!branch.includes(customer))
    }
}

export default Bank