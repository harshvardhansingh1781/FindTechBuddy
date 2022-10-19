import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/home"
          element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter> 
  );
}
 
export default App;
