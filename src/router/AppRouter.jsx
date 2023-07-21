import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Watch from '../pages/watch/Watch';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/notFound/PageNotFound';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/netflix/*">
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="details"
            element={
              <PrivateRoute>
                <Watch />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
