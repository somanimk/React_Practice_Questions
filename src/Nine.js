import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './forRouter/Home';
import Contact from './forRouter/Contact';
import About from './forRouter/About';
import { Link } from 'react-router-dom';

const Nine = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Nine;


// The <Routes> component is essential for defining how your app should behave when users navigate to different URLs.
//  Even though the <Link> component generates the correct URLs to navigate between pages, the actual rendering of the
//   component (e.g., Home, Contact, About) based on the URL is controlled by the <Routes> component.

// Here’s the breakdown of their roles:

// <Link>: Creates clickable links that navigate to different URLs within your application. 
// It changes the URL in the browser's address bar but does not handle what content to show for that URL.

// <Routes>: Defines which components should be rendered based on the current URL. 
// It maps each URL (or "route") to a specific component (e.g., Home, Contact, About). Without <Routes>, 
// the URL would change when you click on a <Link>, but the application wouldn't know which component to render.

// Why both are needed:
// <Link> lets users navigate between pages.
// <Routes> listens to the URL changes and renders the appropriate component for each route.
// In your code, <Link> generates navigation, and <Routes> renders the Home, Contact, or About component based on the URL path. Without <Routes>, the app wouldn’t know which component to render for each route.

// In React, the path attribute of a route tells the router what URL pattern to match. When a user navigates to a URL that matches the path, the associated component is rendered.
// React Router compares the current URL pathname with the defined path. If there's a match, the component associated with the route is rendered. 
