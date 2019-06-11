import React from 'react';

import axios from 'axios';
import {Link} from "react-router-dom";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
    }
    formCheck = (username, password) => {
        if (username.match(/^\s*$/g) || password.match(/^\s*$/g)) {
            window.M.toast({html: 'Всі поля повинні бути заповненні'});
            return false;
        }
        return true;
    };

    auth = (e) => {
        e.preventDefault();
        let username = this.username.value;
        let password = this.password.value;

        if (this.formCheck(username, password)) {
            window.$.ajax({
                url: `${window.DOMAIN_NAME}/auth/jwt/create/`,
                type: "POST",
                data: {
                    'username': username,
                    'password': password,
                }
            }).done(function (res) {
                var token = res.data.token;
                window.localStorage.setItem('token', "JWT " + token);
                window.location.reload()
            }).catch(err => {
                window.M.toast({html: 'Логін або пароль невірні'});
            })
        }

    };


    render() {
        return (
            <div>
                <div className="row">
                    <div style={{marginTop: '10%'}} className="col s6 offset-s3">
                        <div className="card-panel">
                            <div className="row">
                                <form className="col s12">
                                    <h4 className="header2 center-align">Авторизація</h4>
                                    <div className='divider'></div>
                                    <div className="row">
                                        <div className="input-field col s8 offset-s2">
                                            <i className="mdi-action-account-circle prefix"></i>
                                            <input ref={(username) => {
                                                this.username = username
                                            }} id="icon_prefix" type="text"
                                                   className="validate"/>
                                            <label htmlFor="icon_prefix">Логін</label>
                                        </div>
                                        <div className="input-field col s8 offset-s2">
                                            <i className="mdi-action-lock-outline prefix"></i>
                                            <input ref={(password) => {
                                                this.password = password
                                            }} id="icon_password" type="password" className="validate"/>
                                            <label htmlFor="icon_password">Пароль</label>
                                        </div>
                                        <div className="input-field col s9 offset-s2">
                                            <div className="input-field col s12 ">
                                                <button onClick={this.auth}
                                                        className="col s12 btn cyan waves-effect waves-light"
                                                        type="submit"
                                                        name="action"><i
                                                    className="mdi-action-lock-open"></i> Авторизація
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
