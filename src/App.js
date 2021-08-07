import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/AppBody/Feed';
import Sidebar from './components/AppBody/Sidebar';
import { auth } from './components/firebase';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Widgets from './components/Widgets/Widgets';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        dispatch(logout());
      }
    })// eslint-disable-next-line
  }, [])

  return (
    <div className="app">

      <Header />

      {!user ? (
        <Login /> 
        ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        )}

    </div>
  );
}

export default App;
