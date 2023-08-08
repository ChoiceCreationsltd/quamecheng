import logo from './logo.svg';
import './App.css';
import Nav from './HeadersFooters/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
