import React from 'react';
import './LoginForm.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import MyButton from '../../../UI/MyButton/MyButton';
import MyInput from '../../../UI/MyInput/MyInput';
import LoginError from './LoginError/LoginError';

const LoginForm = ({ signIn }) => {

   let validationSchema = Yup.object({
      email: Yup.string()
         .email('Invalid email format')
         .required('Required field'),
      password: Yup.string()
         .max(50, "Слишком длинный пароль")
         .min(5, "Слишком короткий пароль")
         .required('Required field'),
   })

   let initialValues = {
      email: '',
      password: '',
      rememberMe: false,
   }

   const onSubmit = (values) => {
      signIn(values);
   }

   return (
      <Formik initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}
      >
         <Form className='login__form login-form'>
            <div className="login-form__column">
               <div className="login-form__title">Sign In</div>
               <div className="login-form__email">
                  <div className="login-form__subtitle">Email</div>
                  <Field type="text"
                     name="email"
                     className='login-form__input'
                     component={MyInput}
                     autoFocus={true}
                  />
                  <ErrorMessage name='email' component={LoginError} />
               </div>
               <div className="login-form__password">
                  <div className="login-form__subtitle">Password</div>
                  <Field type="password"
                     name="password"
                     className='login-form__input'
                     component={MyInput}
                  />
                  <ErrorMessage name='password' component={LoginError} />
               </div>
               <div className="login-form__checkbox">
                  <Field type="checkbox"
                     name="rememberMe"
                     id='rememberMe'
                  />
                  <label className='login-form__remember' htmlFor='rememberMe'>
                     Запомнить меня
                  </label>
               </div>
               <div className="login-form__submit">
                  <Field type='submit'
                     component={MyButton}
                     children='Войти'
                  />
               </div>
            </div>
         </Form>
      </Formik>
   )
}

export default LoginForm;
