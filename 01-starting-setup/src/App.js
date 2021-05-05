import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const INIT_EXPENSES = [
    {id:1, 'title': 'Car Insurance', amount: 256.22, date: new Date(2021, 4, 19)},
    {id:2, 'title': 'Costco', amount: 122.35, date: new Date(2021, 4, 18)},
    {id:3, 'title': 'Sunoco', amount: 45.23, date: new Date(2021, 4, 17)},
    {id:4, 'title': 'Dominion VA Power', amount: 137.12, date: new Date(2021, 3, 24)}
];

const App = () => {
    const[expenses, setExpenses] = useState(INIT_EXPENSES);

    const addExpenseHandler = (expense) => {
        // Add new expense as a first element in the array
        //console.log(expense.title);
        setExpenses((prevExpenses) => {
                return [expense, ...prevExpenses];
        }
        );
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
