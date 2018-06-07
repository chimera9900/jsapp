
import React from 'react'
import ExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'

export const ExpenseDashboardPage = ()=>(
  <div>
    <ExpenseListFilters />
    <ExpensesList />
  </div>

)
