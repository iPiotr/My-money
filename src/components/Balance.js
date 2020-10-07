import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
    const { incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(
        (incomeTransaction) => incomeTransaction.incomeAmount
    );

    const expenseAmounts = expenseTransactions.map(
        (expenseTransaction) => expenseTransaction.expenseAmount
    );

    const totalIncomes = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    return (
        <div className = "balance">
            <h2>Balance</h2>
                <h3>$ {(totalIncomes - totalExpenses).toFixed(2)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Incomes</h3>
                    <p>+${totalIncomes}</p>
                </div>
                <div className = "minus">
                    <h3>Expenses</h3>
                    <p>-${totalExpenses}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance;
