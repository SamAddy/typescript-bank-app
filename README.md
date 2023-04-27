# Simple Banking Application with TypeScript

This is a TypeScript-based banking application that allows creating and managing banks, branches, customers, and their transactions.

## Installation

To use the system, you need to have Node.js and TypeScript installed on your machine. You can install them by running:

```
npm install -g typescript
```

After that, you need to clone this repository and install the required dependencies by running:

```
git clone https://github.com/SamAddy/fs15_5-ES6-TS_banking-app.git
cd fs15_5-ES6-TS_banking-app
npm run build
```

## Usage 

The system consists of four main classes: `Bank`, `Branch`, `Customer`, and `Transaction`. You can use them to create and manage banks, branches, customers, and transactions, respectively.

Here's an example of how you can create a bank, a branch, a customer, and a transaction:

```
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
```

You can run it with the command:

```
npm start
```
This will start the CLI interface and show you a menu of available commands. You can type help to see a list of available commands and their descriptions.


