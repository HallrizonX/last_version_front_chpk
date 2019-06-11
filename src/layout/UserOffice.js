import React, {Component} from 'react';
import './UserOffice.css';

import Header from '../components/Header';
import GroupList from '../components/GroupList';
import NewsList from '../components/NewsList';

class UserOffice extends Component {


    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <div className="row">
                    <GroupList/>
                    <NewsList/>
                </div>
            </div>
        );
    }
}

export default UserOffice;
