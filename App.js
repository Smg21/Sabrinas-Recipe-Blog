import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import RecipesPage from './RecipesPage';
import AboutMePage from './AboutMePage';
import BlogPostForm from './BlogPostForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/recipes" component={RecipesPage} />
          <Route path="/about" component={AboutMePage} />
          <Route path="/write-blog" component={BlogPostForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;