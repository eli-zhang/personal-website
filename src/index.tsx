import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Music from './pages/Music/Music';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter,
  // BrowserRouter - Replace HashRouter
} from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
