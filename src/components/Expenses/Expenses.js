import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
	const curentDate = new Date();
	const [filteredYear, setFilteredYear] = useState(
		curentDate.getFullYear(toString)
	);
	const handleFilterChnge = (selectedYrar) => {
		setFilteredYear(selectedYrar);
	};
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={handleFilterChnge}
			/>
			{props.expenses.map((expenses) => (
				<ExpenseItem
					key={expenses.id}
					amount={expenses.amount}
					date={expenses.date}
					title={expenses.title}
				/>
			))}
		</Card>
	);
};

export default Expenses;
