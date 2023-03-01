import React, { useState } from "react";

// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

import "./App.css";

const DUMY_EXPENSES = [
	{
		amount: 94.12,
		date: new Date(2021, 7, 14),
		id: "e1",
		title: "Toilet Paper",
	},
	{
		amount: 799.49,
		date: new Date(2022, 2, 12),
		id: "e2",
		title: "New TV",
	},
	{
		amount: 294.67,
		date: new Date(2023, 2, 28),
		id: "e3",
		title: "Car Insurance",
	},
	{
		amount: 450,
		date: new Date(2023, 1, 12),
		id: "e4",
		title: "New Desk (Wooden)",
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMY_EXPENSES);

	const handleAddExpese = (expense) => {
		setExpenses((prevExpeses) => {
			return [expense, ...prevExpeses];
		});
	};

	return (
		<div className='App'>
			<NewExpense onAddExpense={handleAddExpese} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
