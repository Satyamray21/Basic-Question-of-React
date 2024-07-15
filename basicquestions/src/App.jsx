import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './compontent/Home/Home';
import ContactForm from './compontent/ContactForm/ContactForm';
import Login from './compontent/Login/Login';
import FetchData from './compontent/FetchData/FetchData';
import UserContext from './context/UserContext';
import UserContextProvider from './context/UserContextProvider';
import Profile from './compontent/Profile/Profile';

function App() {
  return (
   <UserContextProvider>
    <Login />
    <Profile />
   </UserContextProvider>
  );
}


export default App;
