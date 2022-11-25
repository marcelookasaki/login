import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/users/login';
import List from '../pages/users/list';
import User from '../pages/users/user';
import Register from '../pages/users/register';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/list" component={List} isClosed={false} />
      <MyRoute exact path="/user" component={User} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
