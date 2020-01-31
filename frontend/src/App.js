import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
    return (
        <Router>
            <Navigation />
            <Route path='/' exact component={NotesList}></Route>
            <Route path='/edit/:id' component={CreateNote}></Route>
            <Route path='/create' component={CreateNote}></Route>
            <Route path='/user' component={CreateUser}></Route>
        </Router>
    );
}

export default App;
