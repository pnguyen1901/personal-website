import React from 'react';
import { Media, Button } from 'reactstrap';
import * as Markdown from 'react-markdown'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../../images/placeholder.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReadMore = styled(Link)`
    text-decoration: none;
    color: rgb(34,34,34);
    border: 1px solid rgb(176,176,176);
    border-radius: 5px;
    padding: 10px 15px;

    &:hover {
        text-decoration: none;
        color: rgb(34,34,34);
        background-color: #f2f2f2;
    }
`;

const Img = styled.img`
    height: 250px;
    width: 100%;
    margin: 5px 0 10px 0;
`;


export default class BlogItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Media className="blog-card">
                <Media left >
                    <Media className="media-image" object src={placeholder} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        <div>{this.props.title}</div>
                        <small className="opacity-small-text"><Moment format="MMM DD, YYYY">{this.props.date}</Moment> &middot; {this.props.readingTime} read</small>
                    </Media>
                    <Img src={`https:${this.props.photo.fields.file.url}`} alt="black and gray computer on a surface"/>
                    <Markdown source={this.props.content.split(" ").slice(0,50).join(" ").concat('...')}/>
                    <div class="nav-blog-item">
                        <div className="like-button">
                            <FontAwesomeIcon icon={"thumbs-up"} size="lg"/>
                        </div>
                        <div className="read-more-button">
                            <ReadMore to={{
                                pathname: `/blog${this.props.path}`,
                                state: this.props
                            }}>Read More</ReadMore>
                        </div>
                    </div>

                </Media>
            </Media>
               
        )
    }
}