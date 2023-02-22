import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import "./Expenses.css";

const Expenses = (props) => {
	return (
		<Card className='expenses'>
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
