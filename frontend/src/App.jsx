import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import AddSeller from "./AddSeller";
import Navbar from "./Navbar";
import EditSeller from "./EditSeller";
import Homepage from "./Homepage";
function App() {
  return(
    <>
    <Navbar/>
      <Switch>
      <Route  exact path='/'        component={Homepage}></Route>
      <Route  exact path='/add'        component={AddSeller}></Route>
     <Route exact path='/view'       component={EditSeller}></Route>
        </Switch>
    </>);
}

export default App;