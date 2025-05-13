import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './FrontendUser/HomePage';
import Publicationguideline from './FrontendUser/Publicationguideline';
import Submitform from './FrontendUser/Submitform';
import Layout from './FrontendUser/Layout';
import TrackStatus from './FrontendUser/TrackStatus';
import Publicationcharge from './FrontendUser/Publicationcharge';
import Copywriteform from './FrontendUser/Copywriteform';
import Ethics from './FrontendUser/Ethics';
import SignUp from './FrontendUser/SignUp';
import ContactUs from './FrontendUser/ContactUs';
import Login from './FrontendUser/Login';
import Dashboard from './FrontendUser/Dashboard';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Layout><HomePage /></Layout>}></Route>
  <Route path='/guidelines' element={<Layout><Publicationguideline/></Layout>}></Route>
  <Route path='/submitform' element={<Layout><Submitform/></Layout>}></Route>
  <Route path='/publicationcharges' element={<Layout><Publicationcharge/></Layout>}></Route>
  <Route path='/status' element={<Layout><TrackStatus/></Layout>}></Route>
  <Route path='/copywriteform' element={<Layout><Copywriteform/></Layout>}></Route>
  <Route path='/ethics' element={<Layout><Ethics/></Layout>}></Route>
  <Route path='/register' element={<Layout><SignUp/></Layout>}></Route>
  <Route path='/login' element={<Layout><Login/></Layout>}></Route>
  <Route path='/contact' element={<Layout><ContactUs/></Layout>}></Route>
   <Route path="/dashboard" element={<Dashboard/>} />
</Routes>


   
</>
  );
}

export default App;
