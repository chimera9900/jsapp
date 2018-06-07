import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'
import {addExpense, removeExpense, editExpense} from '../actions/expenses'
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters'



const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense);
    case 'REMOVE_EXPENSE':
      return state.filter(({ id })=>id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{

        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })


    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }

  case 'SORT_BY_DATE':
     return {
       ...state,
       sortBy: 'date'
     }

     case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        }


   case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
       return {
         ...state,
         endDate: action.endDate
       }
    default:
      return state;
  }
};

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a , b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt? -1:1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount? 1:-1
    }
  })
}

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  // console.log(store.getState());
  const state = store.getState()
  const visiableExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visiableExpenses)
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 , createdAt: 2000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
// store.dispatch(setTextFilter('coffee'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(2000))
// store.dispatch(setEndDate())
