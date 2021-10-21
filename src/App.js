import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import ProjectDetail from "./components/ProjectDetail";
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/" component={Home} />  
      </Switch>
    </Router>
  );
}

export default App;
