import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MainLayout } from 'layouts/MainLayout';
import { CustomLayout } from 'layouts/CustomLayout';
import { Demo, SupplyChain } from './home';

function Routing() {
  return (
    <Routes>
      <Route key="/" path="/" element={<MainLayout />}/>
      <Route key="/custom" path="/custom" element={<CustomLayout />}>
        <Route key="demo" path="" element={<Demo />}/>
        <Route key="supplychain" path="supplychain" element={<SupplyChain />}/>
      </Route>
    </Routes>
  );
}

export { Routing };
