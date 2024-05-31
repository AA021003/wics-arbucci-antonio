import React from 'react';

function Totals({ transactions }) 
{
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const balance = totalIncome + totalExpense;

  return (
    <div>
      <h2>Imponibile: {balance} €</h2>
      <p>Entrate: {totalIncome} €</p>
      <p>Uscite: {Math.abs(totalExpense)} €</p>
    </div>
  );
}

export default Totals;
