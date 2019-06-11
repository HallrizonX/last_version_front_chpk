import React, {Component} from 'react';
import './Header.css';
import axios from "axios";
import FloatingActionButton from './FloatingActionButton';

class Header extends Component {
    state = {
        profile: null,
    };

    componentDidMount() {
        axios.get(`${window.API_URL}/office/`, {headers: {Authorization: localStorage.getItem('token')}})
            .then(res => {
                let profile = res.data.data.result;
                this.setState({profile});
            }).catch(err => {
            localStorage.removeItem('token');
            location.reload();
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        window.$('.tooltipped').tooltip();
        window.$('.fixed-action-btn').floatingActionButton();
        window.$('.modal').modal();
    }

    logout = () => {
        localStorage.clear();
        window.location.reload();
    };

    render() {
        if (this.state.profile) {

            return (
                <nav>
                    <FloatingActionButton/>

                    <div className="nav-wrapper light-blue darken-4">
                        <a className='brand-logo'>
                            <i style={{fontSize: '60px'}} className="material-icons">account_circle</i>
                            {this.state.profile.surname} {this.state.profile.name} {this.state.profile.last_name}
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i onClick={this.logout} style={{fontSize: '40px', cursor: 'pointer'}} data-tooltip="Вихід" data-position="left"
                                   className="tooltipped material-icons">exit_to_app</i></li>
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
