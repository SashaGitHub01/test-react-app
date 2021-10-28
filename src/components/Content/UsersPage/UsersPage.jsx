import React from "react";
import './UsersPage.scss';

import MyButton from '../../../UI/MyButton/MyButton';
import MyInput from "../../../UI/MyInput/MyInput";
import MyTitle from '../../../UI/MyTitle/MyTitle';
import PaginationContainer from "../../../containers/PaginationContainer";
import { Formik, Field, Form } from 'formik'
import UsersList from "./UsersList/UsersList";

const UsersPage = ({ users, isLoading, setQuery }) => {
   const initialValues = {
      term: '',
   }

   const onSubmit = (values) => {
      setQuery(values.term);
   }

   return (
      <div className="userspage">
         <div className="userspage__column">
            <div className="userspage__search-title">
               <MyTitle>Поиск</MyTitle>
            </div>
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
            >
               {({ }) => (
                  <Form className="userspage__form userspage-form">
                     <Field
                        placeholder='Введите имя'
                        component={MyInput}
                        name='term'
                     />
                     <Field
                        type='submit'
                        className='userspage-form__button'
                        component={MyButton}
                        children='Поиск'
                     />
                  </Form>
               )}
            </Formik>
            <div className="userspage__content">
               <div className="userspage__users-title">
                  <MyTitle>Пользователи</MyTitle>
               </div>
               <UsersList users={users} isLoading={isLoading} />
               <PaginationContainer />
               <div className="userpage__showmore-btn">
                  <MyButton>Показать еще</MyButton>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UsersPage;