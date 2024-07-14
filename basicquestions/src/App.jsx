import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './compontent/Home/Home';
import ContactForm from './compontent/ContactForm/ContactForm';
import Login from './compontent/Login/Login';
import FetchData from './compontent/FetchData/FetchData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<ContactForm />} />
          <Route path="github" element={<FetchData />} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
