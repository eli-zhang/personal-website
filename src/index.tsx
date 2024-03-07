import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './pages/Homepage/Homepage';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter,
  // BrowserRouter - Replace HashRouter
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/rooms" element={<RoomListPage />}>
          <Route index element={<RoomListPage />} />
          <Route path=":id" element={<RoomPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
