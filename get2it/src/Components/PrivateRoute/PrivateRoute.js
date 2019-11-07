import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute(props) {
  const {
    component: Component,
    ...rest
  } = props

  return (

    <Route {...rest} render={(props) => {

      const token = localStorage.getItem('token')

      return token
        ? <Component {...props} />
        : <Redirect to="/login" />
    }} />
  )
}

export default PrivateRoute