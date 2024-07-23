import React from 'react';
import Route from './pages/route';
import './index.css';
import "./assets/css/style.css";
import "./pages/style"
import { Fragment } from 'react'

function App() {

  return (
    <div className="App">
      <Fragment>
        <Route />
      </Fragment>
    </div>
  );
}

export default App;
