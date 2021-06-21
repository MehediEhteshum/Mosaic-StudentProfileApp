import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StudentsDataProvider } from './components/StudentsDataProvider/StudentsDataProvider';
import { StudentTagsProvider } from './components/StudentTagsProvider/StudentTagsProvider';

ReactDOM.render(
  <React.StrictMode>
    <StudentsDataProvider>
      <StudentTagsProvider>
        <App />
      </StudentTagsProvider>
    </StudentsDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
