import React, {Component} from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null,
        }
    }

    componentDidMount() {
        this.getAllNews();
    }

    getAllNews = () => {
        if (!this.state.news) {
            axios.get(`${window.API_URL}/news/`, {headers: {Authorization: localStorage.getItem('token')}})
                .then(res => {
                    let news = res.data.data.result;

                    this.setState({news});
                    console.log(news);
                }).catch(err => {
                localStorage.removeItem('token');
                location.reload();
            });

        }
    };


    render() {
        return (
            <div className="col s9">
                {this.state.news ? this.state.news.map(item =>
                    <div key={item.id} className="col s8">
                        <div className="col s1 pr-0 circle">
                        </div>
                        <div className="col s11">
                            <a href="#">
                                <p className="m-0"><span><i
                                    className="material-icons vertical-align-bottom">access_time</i> {item.pub_date}</span></p>
                            </a>
                            <div className="row">
                                <div className="col s12">
                                    <div className="card card-border z-depth-2">
                                        <div className="card-image">
                                            <img src={`${window.DOMAIN_NAME}${item.preview_image}`} alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="font-weight-900 text-uppercase"><a href="#">
                                                {renderHTML(item.title)}
                                            </a></h6>
                                            <p>{renderHTML(item.short_description)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ) : undefined}

            </div>
        );
    }
}

export default NewsList;
