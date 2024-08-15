import React, { useState, useEffect } from 'react'
import { Trash2 } from 'lucide-react';

export default function Expense() {
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [expenses, setExpenses] = useState([])

    // Load expenses from local storage when the component mounts
    useEffect(() => {
      const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      setExpenses(savedExpenses);
    }, []);

    const addExpenses = () => {
        if(!input || !category || !amount) return;

        const newExpense = {
            id: expenses.length + 1,
            description: input,
            category: category,
            amount: amount
        };
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

        setInput('');
        setCategory('');
        setAmount(''); 
    }
    const deleteExpense = (id) => {
      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses)); // Update local storage here
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div id="container" className="w-11/12 max-w-[500px] h-auto bg-slate-200 p-6 sm:p-8 rounded-2xl shadow-xl m-4">
            <h1 className="text-xl sm:text-2xl font-bold my-2 p-2 text-center">Coin Counter</h1>
            <div id="expense-form" className="flex flex-col">
                <input type="text" id="description" placeholder=" Expense Description" className="border border-slate-300 rounded-md my-2 p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} required/>
                <select name="" id="category" className="border border-slate-300 rounded-md my-2 p-2 w-full" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
                <input type="number" id="amount" className="border border-slate-300 rounded-md my-2 p-2 w-full" placeholder=" Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <button onClick={addExpenses} className='my-2 bg-lime-400 hover:bg-lime-500 text-white font-bold p-2 rounded-md w-full'>Add Expense</button>
            </div>
            <h3 className="text-lg sm:text-base font-bold my-4">Expense Summary</h3>
            <div className='overflow-x-auto'>
                <table id="Expense-table" className="w-full border-collapse">
                    <thead>
                        <tr id="tableHead" className="bg-lime-400 text-white font-bold">
                            <th className="p-2 border border-slate-300 text-left">Description</th>
                            <th className="p-2 border border-slate-300 text-left">Category</th>
                            <th className="p-2 border border-slate-300 text-left">Amount</th>
                            <th className="p-2 border border-slate-300 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody id="Expense-list">
                        {expenses.map((expense) => (
                            <tr id="tableHead" key={expense.id} className="bg-transparent text-black font-semibold">
                                <td className="p-2 border border-slate-300 text-left">{expense.description}</td>
                                <td className="p-2 border border-slate-300 text-left">{expense.category}</td>
                                <td className="p-2 border border-slate-300 text-left">{expense.amount}</td>
                                <td className="p-2 border border-slate-300 text-center"><button className='bg-red-600 py-1 px-2 rounded-md text-white' onClick={() => deleteExpense(expense.id)}><Trash2 /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
