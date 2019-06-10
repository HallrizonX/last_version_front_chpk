import React, { Component } from 'react';
import UserOffice from './layout/UserOffice';

window.DOMAIN_NAME = 'http://127.0.0.1:8000';
window.VERSION_API = '/api/v1';
window.VERSION_API2 = '/api/v2';
window.API_URL = `${window.DOMAIN_NAME}${window.VERSION_API}`;
window.API_URL2 = `${window.DOMAIN_NAME}${window.VERSION_API2}`;
window.TEST_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InN0dWRlbnQxIiwiZXhwIjoxNTYwMTY4MDg4LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNTYwMTY3Nzg4fQ.veLnQIXkYesFfZQcQxukUqo3xh02Fdv2gklYNkJkLvw';

class App extends Component {
  render() {
    return (
      <UserOffice/>
    );
  }
}

export default App;
