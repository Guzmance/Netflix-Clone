import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Watch from '../pages/watch/Watch';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/notFound/PageNotFound';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="movie/:id" element={<Watch />} />
        <Route path="movies/:type" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
