import * as React from 'react';
import { Route, Routes } from "react-router";
import { Home } from '../../pages/Home';

export function AppRoutes(): JSX.Element{
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    );
}