import React from 'react';

function TransactionList({ transactions }) 
{
    const sortedTransactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <div>
      <h2>movimenti</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>{transaction.amount} €</span> ///
            <span>{transaction.description}</span>///
            <span>{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
