import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import Dash from './Dash';
import Error from './Error';
// import Dataentry from './Dataentry';
import NewAcc from './NewAccount';
import AddCredits from './AddCredits';
// import UpdateValue from './updateValue';
import Test from './test';
import UpdatecreditRide from './updateCreditRide';
import CycleAdder from './cycleAdder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/363337393633373736313739323037373635363236393734363532303732363536343639373236353633373436353634323037343666323036343631373336383632366636313732363432633230363936363230373436383639373332303631363436343732363537333733323036393733323036363666373536653634323036663735373432303734363836353665323036393734373332303631323036333666366437303732366636643639373336353230336132393362" element={<Dash />} />
        <Route path="/36333732363536313734363534313465363537373431363336333666373536653734" element={<NewAcc />} />
        <Route path="/373537303634363137343635343436313734363134353665373437323739" element={<Test />} />
        <Route path="/37353730363436313734363534333732363536343639373437333439366536363666" element={<AddCredits />} />
        <Route path="/3735373036343631373436353230363337323635363436393734323037343666363436313739" element={<UpdatecreditRide />} />
        <Route path="/newCycle" element={<CycleAdder />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
    </BrowserRouter>
);

