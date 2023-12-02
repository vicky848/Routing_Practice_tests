import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFount from './components/NotFound'

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFount} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
