import React, {Component} from 'react';
import axios from "axios";


class ModalFeedback extends Component {
    constructor(props) {
        super(props);
        this.thema = React.createRef();
        this.message = React.createRef();
    }

    sendFeedback = (e) =>{
        window.$.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", localStorage.getItem('token'))
            },
            url: `${window.API_URL2}/feedback/`,
            type: "POST",
            data: {
                "thema": this.thema.value,
                "message":this.message.value
            }
        }).done(function (res) {
            window.M.toast({html: 'Запит успішно відправлено '});
        }).catch(err => {
            window.M.toast({html: 'Всі поля повинні бути заповненні'});
        });

    };

    render() {
        return (
            <div>

                <div id="feedback" className="modal">
                    <div className="modal-content ">
                        <div className="row z-depth-3" style={{marginTop: '25px'}}>

                            <form className="col s12">
                                <div className="row">
                                    <h4 className='black-text center-align'>Зворотній звя'язок</h4>
                                    <div className="input-field col s12 black-text ">
                                        <h6>Тема</h6>
                                    </div>
                                    <div className="input-field col s12">
                                        <input ref={(thema) => {
                                            this.thema = thema
                                        }} placeholder="Текст" id="first_name" type="text"
                                               className="validate"/>
                                    </div>

                                    <div className="input-field col s12 black-text">
                                        <h6>Повідомлення</h6>
                                    </div>
                                    <div className="input-field col s12">
                                        <textarea ref={(message) => {
                                            this.message = message
                                        }} id="textarea1" placeholder="Текст" className="materialize-textarea"></textarea>
                                    </div>
                                        <a onClick={this.sendFeedback} className="col s10 offset-s1 waves-effect waves-light btn">Надіслати</a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default ModalFeedback;
