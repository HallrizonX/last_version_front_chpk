import React, {Component} from 'react';


class ShowFiles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="collection with-header center-align">
                <li className="collection-header"><h5>Файли</h5></li>
                {this.props.files.map(file =>
                    <li key={file.id} className="collection-item">
                        <div>{file.title}
                            <a href={`${window.DOMAIN_NAME}${file.file}`} download={true} className="secondary-content"><i
                                className="material-icons">archive</i></a></div>
                    </li>
                )}
            </ul>
        );
    }
}

export default ShowFiles;
