import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import AddSeller from "./AddSeller";
import DeleteSeller from "./DeleteSeller";
import Navbar from "./Navbar";
import EditSeller from "./EditSeller";
function App() {
  return(
    <>
    <Navbar/>
      <Switch>
      <Route  exact path='/add'        component={AddSeller}></Route>
      <Route  exact path='/delete'   component={DeleteSeller}></Route>
     <Route exact path='/edit'       component={EditSeller}></Route>
        </Switch>
    </>);
}

export default App;