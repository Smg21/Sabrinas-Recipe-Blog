import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import RecipesPage from './RecipesPage';
import AboutMePage from './AboutMePage';
import BlogPostForm from './BlogPostForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />

        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/recipes" component={RecipesPage} />
          <Route path="/about" component={AboutMePage} />
          <Route path="/write-blog" component={BlogPostForm} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//

//code from overstack
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// // import your route components too

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="teams" element={<Teams />}>
//           <Route path=":teamId" element={<Team />} />
//           <Route path="new" element={<NewTeamForm />} />
//           <Route index element={<LeagueStandings />} />
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

//original code
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import NavigationBar from './NavigationBar';
// import HomePage from './HomePage';
// import RecipesPage from './RecipesPage';
// import AboutMePage from './AboutMePage';
// import BlogPostForm from './BlogPostForm';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />

//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/recipes" component={RecipesPage} />
//           <Route path="/about" component={AboutMePage} />
//           <Route path="/write-blog" component={BlogPostForm} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;