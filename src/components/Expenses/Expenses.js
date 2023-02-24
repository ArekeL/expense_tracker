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
			<ExpenseItem
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
				title={props.expenses[0].title}
			/>
			<ExpenseItem
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
				title={props.expenses[1].title}
			/>
			<ExpenseItem
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
				title={props.expenses[2].title}
			/>
			<ExpenseItem
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
				title={props.expenses[3].title}
			/>
		</Card>
	);
};

export default Expenses;
