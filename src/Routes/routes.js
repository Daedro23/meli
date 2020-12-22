import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Pages/home/home'
import Description from '../Pages/description/description'
// /* <Route path="/description/:id/" component={ Description }/> */

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/:id/" component={ Description }/>
            </Switch> 
        </Router>
    )
}

export default Routes; 