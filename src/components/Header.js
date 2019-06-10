import React, {Component} from 'react';
import './Header.css';
import axios from "axios";

class Header extends Component {
    state = {
        profile: null,
    };

    componentDidMount() {
        axios.get(`${window.API_URL}/office/`, {headers: {Authorization: 'JWT ' + window.TEST_TOKEN}})
            .then(res => {
                let profile = res.data.data.result;
                this.setState({profile});
            }).catch(err => {
            localStorage.removeItem('token');
        });
    }

    render() {
        if (this.state.profile) {

            return (
                <nav>
                    <div className="nav-wrapper light-blue darken-4">
                        <a className='brand-logo'>
                            {this.state.profile.access == 'student' ? <span>Привіт студент!</span> : <span>Привіт викладач!</span>}
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons">account_circle</i></li>
                            <li>{this.state.profile.surname} {this.state.profile.name} {this.state.profile.last_name}</li>
                        </ul>
                    </div>
                </nav>
            );
        } else {
            return (
                <h1>ЖДі</h1>
            )
        }
    }
}

export default Header;
