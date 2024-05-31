import React, { useState } from 'react';

function TransactionForm({ addTransaction }) 
{
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction({ amount: parseFloat(amount), type, date, description });
    setAmount('');
    setType('income');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Aggiungi</h1>
      <div>
        <h2>Etichetta</h2>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <h2>Importo</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <h2>Data</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="blue-button">Aggiungi</button>
    </form>
  );
}

export default TransactionForm;
