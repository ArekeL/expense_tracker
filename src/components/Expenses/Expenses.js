import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2023");
	const handleFilterChnge = (selectedYrar) => {
		setFilteredYear(selectedYrar);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={handleFilterChnge}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList expenses={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
