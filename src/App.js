import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './components/Body/Main/Main';
import Navbar from './components/Header/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Contact from './components/Body/Main/Contact';
import Faq from './components/Body/Main/Faq';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path={'/'}>
            <Body/>
          </Route>
          <Route exact path={'/Contact'} >
            <Contact/>
          </Route>
          <Route exact path={'/FAQ'} >
            <Faq/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
