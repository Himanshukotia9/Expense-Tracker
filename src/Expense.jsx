import React, { useState } from 'react'

export default function Expense() {
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [expenses, setExpenses] = useState([])

    const addExpenses = () => {
        if(!input || !category || !amount) return;

        const newExpense = {
            id: expenses.length + 1,
            description: input,
            category: category,
            amount: amount
        };
        setExpenses([...expenses, newExpense]);
        setInput('');
        setCategory('');
        setAmount(''); 
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div id="container" className="w-[500px] h-auto bg-slate-200 p-8 rounded-2xl shadow-xl my-4">
            <h1 className="flex text-2xl font-bold my-2 p-2 justify-center">Coin Counter</h1>
            <div id="expense-form" className="flex flex-col">
                <input type="text" id="description" placeholder=" Expense Description" className="border border-slate-300 rounded-md my-2 p-2" value={input} onChange={(e) => setInput(e.target.value)} required/>
                <select name="" id="category" className="border border-slate-300 rounded-md my-2 p-2" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
                </select>
                <input type="number" id="amount" className="border border-slate-300 rounded-md my-2 p-2" placeholder=" Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <button onClick={addExpenses} className='my-2 bg-lime-400 hover:bg-lime-500 text-white font-bold p-2 rounded-md'>Add Expense</button>
            </div>
            <h3 className="text-base font-bold my-2">Expense Summary</h3>
            <table id="Expense-table" className="w-full border-collapse">
                <thead>
                <tr id="tableHead" className="bg-lime-400 text-white font-bold">
                    <th className="p-2 border border-slate-300 text-left">Description</th>
                    <th className="p-2 border border-slate-300 text-left">Category</th>
                    <th className="p-2 border border-slate-300 text-left">Amount</th>
                </tr>
                </thead>
                <tbody id="Expense-list">
                    {expenses.map((expense) => (
                        <tr id="tableHead" key={expense.id} className="bg-transparent text-black font-semibold">
                            <td className="p-2 border border-slate-300 text-left">{expense.description}</td>
                            <td className="p-2 border border-slate-300 text-left">{expense.category}</td>
                            <td className="p-2 border border-slate-300 text-left">{expense.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
