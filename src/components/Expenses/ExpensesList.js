import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.expenses.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found</h2>;
	}

	return (
		<ul className='expenses-list'>
			{props.expenses.map((expenses) => (
				<ExpenseItem
					key={expenses.id}
					amount={expenses.amount}
					date={expenses.date}
					title={expenses.title}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
