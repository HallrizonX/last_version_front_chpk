import React, {Component} from 'react';


class ShowTeachers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
                <h5 className='center-align'>Викладачі</h5>
                {this.props.teachers.map(teacher =>
                    <p key={teacher.id}
                       className='center-align'> {teacher.profile.surname} {teacher.profile.name} {teacher.profile.last_name}</p>
                )}
            </div>
        );
    }
}

export default ShowTeachers;
