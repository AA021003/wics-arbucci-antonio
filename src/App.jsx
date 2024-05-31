import React, { useState } from 'react';
import './App.css';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Totals from './Totals';

function App() 
{
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction].sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My wallet</h1> 
      </header>
      <main>
        <div className="transaction-form">
          <TransactionForm addTransaction={addTransaction} />
        </div>
        <div className="transaction-summary">
          <div className="left-column">
            <TransactionList transactions={transactions} />
          </div>
          <div className="right-column">
            <Totals transactions={transactions} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
