import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "./store/auth-reducer/auth-selector";
import {isAppReady} from "./store/app-reducer/app-selector";
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(getIsAuth)
  const isReady = useSelector(isAppReady)

  return (
    <div className="App">
      {!isAuth
        ?
        <Switch>
          <Route path={'/registration'} component={() => <div>Registration</div>}  />
          <Route path={'/login'} component={() => <div>Login</div>} />
          <Redirect to={'/login'} />
        </Switch>
        : <Switch>
          <Route path={'/'} exact component={() => <div>Main page</div>} />
          <Route path={'/profile'} component={() => <div>Profile</div>} />
          <Redirect to={'/'} />
        </Switch>
      }

    </div>
  );
}

export default App;
