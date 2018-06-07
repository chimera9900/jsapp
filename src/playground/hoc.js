import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please dont share!</p>
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated? (
        <WrappedComponent {...props} />
      ):(
        <p>Please login to view the info</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the details" />, document.getElementById('app'))
