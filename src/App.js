import React, { useState } from 'react';
import logo from './logo.svg';
import Contents from './pages/Contents.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [navNumber, setNavigation] = useState(1);

  const changeNavigation = (navNumber) => {
    setNavigation(navNumber);
  }

  return (
    <>
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Cover</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link btn btn-link" onClick={(event) => changeNavigation(1)}>Home</a>
            <a class="nav-link btn btn-link" onClick={(event) => changeNavigation(2)}>Stacks</a>
            <a class="nav-link btn btn-link" onClick={(event) => changeNavigation(3)}>Medias</a>
          </nav>
        </div>
      </header>
      <div class="cover-container-fluid d-flex w-100 h-100 p-3 flex-column">
        <Contents
          navNumber={navNumber}
        />
      </div>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
