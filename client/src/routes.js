import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LinksPage from './pages/links-page';
import CreatePage from './pages/create-page';
import DetailPage from './pages/detail-page';
import AuthPage from './pages/auth-page';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/links' exact>
          <LinksPage />
        </Route>
        <Route path='/create' exact>
          <CreatePage />
        </Route>
        <Route path='/detail/:id' >
          <DetailPage />
        </Route>
        <Redirect to='/create' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/' exact>
          <AuthPage />
        </Route>
        <Redirect to='/' />
    </Switch>
  )
}