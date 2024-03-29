import React, {Component} from 'react';
import ModalFeedback from './ModalFeedback';
import {Link} from "react-router-dom";


class FloatingActionButton extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.$('.fixed-action-btn').floatingActionButton();
        window.M.textareaAutoResize(window.$('#textarea1'));
    }


    render() {
        return (
            <div className="fixed-action-btn">
                <ModalFeedback/>

                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                    <li><a className="btn-floating yellow darken-1"><i
                        className="material-icons">format_quote</i></a></li>
                    <li>
                        <Link to={'/'} className="tooltipped btn-floating green"
                              data-tooltip="Головна"
                              data-position="left">
                            <i className="material-icons">account_box</i>
                        </Link>
                    </li>
                    <li><a data-target="feedback"
                           data-tooltip="Зворотній зв'язок"
                           data-position="left"
                           className="tooltipped btn-floating blue modal-trigger">
                        <i className="material-icons">border_color</i></a></li>
                </ul>


            </div>
        );

    }
}

export default FloatingActionButton;
