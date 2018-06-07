import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const ExpenseListItem = ({dispatch, id, description, amount, createdAt})=>(
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p>Amount: {amount} - createdAt: {createdAt}</p>


  </div>
)



export default connect()(ExpenseListItem)
