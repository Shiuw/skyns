import logo from './logo.svg';
import './App.css';
import Home from './comp/Home';
import Navbar from './comp/Navbar';
import Skins from './comp/Skins';
import { Routes, Route, Navigate, useLocation, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'




const RouteTransition = () => { 
  const location = useLocation();
  return (
    
<Routes location={location}>
          <Route path="/" element={
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="slide" timeout={200}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          } />
          <Route path="/skins" element={
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="slide" timeout={200}>
                <Skins />
              </CSSTransition>
            </TransitionGroup>
          } />
          <Route path="/skins.html" element={<Navigate to="/skins" />} />
          <Route path="*" element={<Navigate to="/" />} />
          

        </Routes>
          )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RouteTransition />
      </BrowserRouter>
    </div>
  );
}

export default App;
