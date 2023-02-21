import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import { ListItemText, Stack, Tab, Tabs } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";

import Page1 from "./Components/page1"
import Page2 from "./Components/page2"
import Page3 from "./Components/page3"
import Menu from "./Components/menu"



function App() {


  // const routeMatch = useRouteMatch(['/inbox/:id', '/drafts', '/trash']);
  // const currentTab = routeMatch?.pattern?.path;

  return (



    <div className="App">



      <Router>
          <Menu />
          <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route exact path="page1" element={<Page1 />} />
            <Route exact path="page2" element={<Page2 />} />
            <Route exact path="page3" element={<Page3 />} />

          </Routes>        

      </Router>

    </div>
  );
}

export default App;
