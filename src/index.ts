import Bank from "./bank"
import Customer from "./customer"
import Branch from "./branch"

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("Jim Ike")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 



arizonaBank.findBranchByName("Sun") // returns [Branch: "name": "Sun Branch", "customers": [] }] 
arizonaBank.findBranchByName("bank") // returns []

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), { amount: 3000, date: new Date() }) // returns "customer-1 made new transaction 3000"
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), { amount: 2000, date: new Date() }) // returns "customer-1 made new transaction 2000"
arizonaBank.addCustomerTransaction(sunBranch, customer2.getId(), { amount: 3000, date: new Date() })
arizonaBank.addCustomerTransaction(westBranch, customer3.getId(), { amount: 3000, date: new Date() })

customer1.addTransactions({ amount: -1000, date: new Date() })
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch, false))