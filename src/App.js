import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import {useEffect} from "react";
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
   
    props.getUserAuth();
  }, [props]);

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

const mapStateToProps=(state)=> {
  return {};
}

const mapDispatchToProps = (dispatch)=> ({
  getUserAuth: ()=> dispatch(getUserAuth())
});
 
export default connect(mapStateToProps,mapDispatchToProps)(App);
