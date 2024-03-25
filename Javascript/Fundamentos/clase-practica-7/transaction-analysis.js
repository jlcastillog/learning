// Exersice: Transaction analysis

/*
Imagine you have a list of financial transactions and you want to perform various data processing operations.

Use the following instructions as a guide to complete the exercise:
1.  Calculate Total Balance: - Use the reduce method to calculate and display the total balance of all
    transactions.
2.  Find the Largest Transaction (Income or Expense): - Utilize the reduce method to find the transaction
    with the largest amount (either income or expense) and display it in the console.
3.  Filter Purchase Transactions: - Use the filter method to obtain and display in the console only the
    purchase transactions (with negative amounts).
4.  Find a Transaction by Description: - Use the find method to search and display in the console a specific
    transaction by its description.
5.  Find the Index of a Transaction by Amount: - Employ the findIndex method to find and display in the
    console the index of a specific transaction by its amount.
6.  Update Transaction Descriptions: - Use the forEach method to update the descriptions of transactions.
    Add the prefix "Expense: " to transactions with negative amounts and "Income: " to transactions with
    positive amounts. Display the updated transactions in the console.
    
Remember to adapt and combine these operations as needed.

*/

const transactionList =
[
{ Description: 'Sueldo', Amount: 1200 },
{ Description: 'Pizza personal', Amount: -12 },
{ Description: 'Emprendimiento', Amount: 1900 },
{ Description: 'Coca Cola 1L', Amount: -18 },
{ Description: 'Cremolada', Amount: -15 }
]

function showTotalBalance (transactions) {
    const totalBalance = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.Amount, 0)
    console.log(`Total balance: ${totalBalance}`)
}

function showLargestTransaction (transactions) {
    const largestTrasaction = transactions.reduce((maxTransaction, currentValue) => {
        
        if (maxTransaction < currentValue.Amount){
            maxTransaction = currentValue.Amount
        }
        
        return maxTransaction
    }, 0)
    console.log(`Largest transction: ${largestTrasaction}`)
}

function showPurchaseTransactions(transactions){
    const purchaseTransactions = transactions.filter(element => element.Amount < 0)
    purchaseTransactions.forEach (x =>  console.log(`Purchase transction: ${x.Amount}`))
}

function showTransactionByDescription (transactions, description) {
    const transactionByDescription = transactions.find(element => element.Description === description)
    console.log(`Transaction ${description}: `, transactionByDescription)
}

function showIndexTransactionByAmount (transactions, amount) {
    const transactionIndexByAmount= transactions.findIndex(element => element.Amount === amount)
    console.log(`Transaction index of amount ${amount}: `, transactionIndexByAmount)
}

function showUpdateTransactions (transactions) {
    transactions.forEach (element => {
        if (element.amount > 0) {
            element.description = 'Expense: ' + element.description
        }
        else {
            element.description = 'Income: ' + element.description
        }
    })

    console.log('Updated transactions: ', transactions)
}

// 1. Calculate Total Balance
showTotalBalance(transactionList)

// 2. Find the Largest Transaction
showLargestTransaction(transactionList)

// 3. Filter Purchase Transactions
showPurchaseTransactions(transactionList)

// 4. Find a Transaction by Description
showTransactionByDescription(transactionList, 'Emprendimiento')

// 5. Find the Index of a Transaction by Amount
showIndexTransactionByAmount(transactionList, -15)

// 6. Update Transaction Descriptions
showUpdateTransactions(transactionList)