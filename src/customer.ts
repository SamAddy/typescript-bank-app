import { count } from "console"
import Transactions from "./transactions"

/**
 * This is a class which handles Customers
 */

class Customer {

    name: string
    id: string
    transactions: Array<Transactions>

    constructor (nameOfCustomer: string) {
        this.name = nameOfCustomer
        this.transactions = []
        this.id = "something will come here!"
    }
}

export default Customer