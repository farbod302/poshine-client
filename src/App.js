import React, { Fragment, useContext } from 'react';
import { Route, HashRouter } from "react-router-dom"
import LogIn from './components/log_in/LogIn';
import { Context } from './container/Context';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import PanelContainer from './components/panel/PanelContainer';

const App = () => {

  const context = useContext(Context)
  return (
    <Fragment>
      <NotificationContainer/>
        <HashRouter>
          <Route path="/" exact component={LogIn} />
          <Route path="/panel" exact component={PanelContainer} />
        </HashRouter>
    </Fragment>
  );
}

export default App;