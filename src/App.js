import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import UserOffice from './layout/UserOffice';
import SignIn from './layout/SignIn';
import DetailNews from './components/DetailNews';

window.DOMAIN_NAME = 'http://127.0.0.1:8000';
window.VERSION_API = '/api/v1';
window.VERSION_API2 = '/api/v2';
window.API_URL = `${window.DOMAIN_NAME}${window.VERSION_API}`;
window.API_URL2 = `${window.DOMAIN_NAME}${window.VERSION_API2}`;
window.TEST_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InN0dWRlbnQxIiwiZXhwIjoxNTYwMTY4MDg4LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNTYwMTY3Nzg4fQ.veLnQIXkYesFfZQcQxukUqo3xh02Fdv2gklYNkJkLvw';

class App extends Component {
    render() {
        if (!localStorage.getItem('token')) {
            return (<SignIn/>)
        } else {
            return (
                <Router>
                    <Route path="/" exact component={UserOffice}/>
                    <Route path="/news/:id/" exact component={DetailNews}/>
                </Router>
            );
        }

    }
}

export default App;
