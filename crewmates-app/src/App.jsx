import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePage from './CreatePage';
import EditPage from './EditPage';
import DetailPage from './DetailPage';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}
