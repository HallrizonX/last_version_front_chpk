import React, {Component} from 'react';

class MarksModal extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.marks);
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4 className='center-align'>Щоденник</h4>
                    <hr/>
                    <table className='responsive-table'>
                        <thead>
                        <tr>
                            <th>Дата</th>
                            {this.props.marks ? this.props.marks.map(mark =>
                                <th key={`${mark.id}1`}>{mark.date}</th>
                            ) : undefined}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><b>Оцінка</b></td>
                            {this.props.marks ? this.props.marks.map(mark =>
                                <td key={`${mark.id}2`}>{mark.mark}</td>
                            ) : undefined}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MarksModal;
