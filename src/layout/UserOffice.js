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
                    <div className='col s3'>
                        <ul className="collection with-header">
                            <li className="collection-header" id='additionals-files'><h4>Додаткові матеріали</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserOffice;
