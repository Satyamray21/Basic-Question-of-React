// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './compontent/UserProfile/UserProfile';
import Home from './compontent/Router/Home/Home';
import FetchData from './compontent/FetchData/FetchData';

function App() {
  return (
    <FetchData />
  );
}

export default App;
