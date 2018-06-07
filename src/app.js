import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {AppRouter} from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from './actions/filters'
import {getVisibleExpenses} from './selectors/expenses'

const  store = configureStore()
store.subscribe(() => {
  // console.log(store.getState());
  const state = store.getState()
  const visiableExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visiableExpenses)
});

store.dispatch(addExpense({ description: 'Water bill', amount: 100 , createdAt: 2000}))
store.dispatch(addExpense({ description: 'Rent', amount: 300 , createdAt: 1500}))
store.dispatch(addExpense({ description: 'Gas bill', amount: 200 , createdAt: 1000}))
// store.dispatch(setTextFilter('water bill'))

// console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
