import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2023");
	const handleFilterChnge = (selectedYrar) => {
		setFilteredYear(selectedYrar);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expesesContent = <p>No expenses found</p>;

	if (filteredExpenses.length > 0) {
		expesesContent = filteredExpenses.map((expenses) => (
			<ExpenseItem
				key={expenses.id}
				amount={expenses.amount}
				date={expenses.date}
				title={expenses.title}
			/>
		));
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={handleFilterChnge}
			/>
			{expesesContent}
		</Card>
	);
};

export default Expenses;
