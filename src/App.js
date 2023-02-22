// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

import "./App.css";

function App() {
	const expenses = [
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
			date: new Date(2022, 2, 28),
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

	return (
		<div className='App'>
			<h1>Hello World</h1>
			<p>Expense Tracker</p>
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
