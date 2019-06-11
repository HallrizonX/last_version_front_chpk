import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Header from '../components/Header';
import renderHTML from 'react-render-html';

class DetailNews extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.main_image = React.createRef();

        this.state = {
            news: null,
            main_img: null
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get(`${window.API_URL}/news/${id}/`)
            .then(res => {
                const news = res.data.data.result;
                this.setState({news});
                this.setState({main_img: news.preview_image})
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.$('.carousel').carousel();
    }

    changeMainPicture = (event) => {
        event.preventDefault();
        this.mainPhoto.setAttribute('src', window.DOMAIN_NAME + event.target.getAttribute('data-path'));
    };

    render() {

        if (this.state.news) {
            return (
                <div>
                    <Header/>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h3 style={{padding: 10}} className='center-align z-depth-1'>
                                    {this.state.news.title}
                                </h3>

                                    <p className='col s12 center-align'>
                                        <img ref={(mainPhoto) => {
                                            this.mainPhoto = mainPhoto
                                        }} className='z-depth-3' style={{width: '100%'}}
                                             src={`${window.DOMAIN_NAME}${this.state.news.preview_image}`}/>
                                    </p>


                                    <div className="col s12 carousel">
                                        <a onClick={this.changeMainPicture} className="carousel-item"
                                           href={`#${this.state.news.id}`}>
                                            <img data-path={`${this.state.news.preview_image}`}
                                                 alt={`${this.state.news.alt}`}
                                                 src={`${window.DOMAIN_NAME}${this.state.news.preview_image}`}/>
                                        </a>
                                        {this.state.news.images.map(img =>
                                            <a onClick={this.changeMainPicture} className="carousel-item"
                                               href={`#${img.image}`}>
                                                <img data-path={img.image} alt={`${img.alt}`}
                                                     src={`${window.DOMAIN_NAME}${img.image}`}/>
                                            </a>
                                        )}
                                    </div>
                            </div>
                            <div className="col s12" style={{marginTop: '-100px'}}>
                                <div className='z-depth-2' style={{padding: 10}}>
                                    {renderHTML(this.state.news.description)}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            );
        } else {
            return (<h1></h1>)
        }
    }
}

export default DetailNews;