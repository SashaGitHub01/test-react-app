import React from 'react'
import './LoginError.scss'

const LoginError = ({ children }) => {
   return (
      <div className='login-form__error'>
         {children}
      </div>
   )
}

export default LoginError
