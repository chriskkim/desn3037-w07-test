import { Tab, Tabs } from '@mui/material';
import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"

export default function Menu() {

    const { pathname } = useLocation();

    return (
        <div>
            {pathname}
  <Tabs value={pathname}>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="Inbox" value="/page1" to="/page1" component={Link} />
      <Tab label="Drafts" value="/page2" to="/page2" component={Link} />
      <Tab label="Trash" value="/page3" to="/page3" component={Link} />
    </Tabs>



            {pathname}</div>
    )
}