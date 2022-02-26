import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function App(props) {
  return (
    <div>
      {!localStorage.getItem("token") ? (
        <Route path="/login" component={Login} />
      ) : (
        <div>
          <Redirect to="/s" />
          < Route path={['/s', '/ProfilePageUser', '/ProfilePageCompany', '/CustomerListPage', '/BrokerBusinesslist',
            '/BrokerBusiness']} component={Sidebar} />
        </div>
      )}

    </div>
  );
}

export default withRouter(App);
