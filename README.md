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
const bank = new Bank('MakeMoney Bank');
const branch = new Branch('HillTop Branch');
const customer = new Customer('John Doe');
const transaction = new Transaction(100, new Date());

bank.addBranch(branch);
bank.addCustomer(branch, customer);
customer.addTransactions(transaction);
```

You can run it with the command:

```
npm start
```
This will start the CLI interface and show you a menu of available commands. You can type help to see a list of available commands and their descriptions.


