import React from "react";
import './UsersPage.scss';

import MyButton from '../../../UI/MyButton/MyButton';
import MyInput from "../../../UI/MyInput/MyInput";
import MyTitle from '../../../UI/MyTitle/MyTitle';
import UsersListContainer from "../../../containers/UsersListContainer";
import PaginationContainer from "../../../containers/PaginationContainer";

const UsersPage = () => {
   return (
      <div className="userspage">
         <div className="userspage__column">
            <div className="userspage__search-title">
               <MyTitle>Поиск</MyTitle>
            </div>
            <form className="userspage__form userspage-form">
               <MyInput placeholder='Введите имя' />
               <MyButton className='userspage-form__button'>Найти</MyButton>
            </form>
            <div className="userspage__content">
               <div className="userspage__users-title">
                  <MyTitle>Пользователи</MyTitle>
               </div>
               <UsersListContainer />
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