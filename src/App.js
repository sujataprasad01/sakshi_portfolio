import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Routes>
    <Route exact path="/" element={
    <Main></Main> }></Route>
    <Route exact path="/about" element={
    <About></About> }></Route>
      <Route exact path="/contact" element={
    <Contact></Contact> }></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
