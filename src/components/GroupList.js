import React, {Component} from 'react';
import axios from 'axios';

import ShowFiles from '../services/ShowFiles';
import ShowTeachers from '../services/ShowTeachers';
import MarksModal from '../services/MarksModal';

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: null,
            teachers: null,
            files: null,
            subject_id: undefined,
        }
    }

    componentDidMount() {
        this.jqueryCalls();
        this.getAllSubjects();
    }

    jqueryCalls = () => {
        window.$('.collapsible').collapsible();
    };
    getAllSubjects = () => {
        if (!this.state.subjects) {
            axios.get(`${window.API_URL2}/groups/`, {headers: {Authorization: 'JWT ' + window.TEST_TOKEN}})
                .then(res => {
                    res = res.data.data.result[0];
                    let subjects = res.subject_set;
                    let teachers = res.teachers;
                    let files = res.files;
                    console.log(subjects);
                    this.setState({subjects, teachers, files})
                }).catch(err => {
                console.log(err);
                localStorage.removeItem('token');
            });
        }
    };

    showMarks = async (e) => {
        try {
            window.$('.modal').modal();
            window.$('.modal').modal('open');
        } catch (e) {
        }
        let subject_id = e.target.attributes.getNamedItem('data-subject-id').value;
        let marks = await axios.get(`${window.API_URL2}/journals/subjects/${subject_id}/`, {headers: {Authorization: 'JWT ' + window.TEST_TOKEN}});
        marks = marks.data.data.result[0].marks;
        await this.setState({subject_id: subject_id, marks});
    };

    render() {
        return (
            <div className="col s3 ">
                <MarksModal marks={this.state.marks}/>

                <ul className="collapsible row center-align ">

                    {this.state.subjects ? this.state.subjects.map(item =>
                        <li className='col s12 center-align ' key={item.id}>
                            <div className=" collapsible-header blue-grey lighten-4"
                                 style={{margin: '10px'}}><i className="material-icons">assignment</i>
                                <div>{item.group} - {item.name}</div>
                            </div>
                            <div className="collapsible-body">

                                <a onClick={this.showMarks} data-subject-id={item.id}
                                   className="modal-trigger col s12 waves-effect waves-light btn">Мої оцінки</a>

                                <br/><br/>
                                <ShowTeachers teachers={item.teachers}/>
                                <hr/>
                                <ShowFiles files={item.files}/>
                            </div>

                        </li>
                    ) : undefined}

                </ul>
            </div>
        );
    }
}

export default GroupList;
