import React from 'react'
import{BrowserRouter, Switch,Route} from 'react-router-dom'
import { appRoutes } from "./navigation";

const App = (props) => {
  let routes = <Switch>{appRoutes()}</Switch>;
  return (
    <div>
      {/* <AuthProvider> */}
        <BrowserRouter>{routes}</BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  )
}

export default App
