import React from 'react';
import { Media, Button } from 'reactstrap';
import * as Markdown from 'react-markdown'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../../images/placeholder.jpg';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';

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

        this.state = {
            like: 0,
            love: 0
        }

        this.likeIncrement = this.likeIncrement.bind(this);
        this.loveIncrement = this.loveIncrement.bind(this);
    }

    likeIncrement(event) {
        event.preventDefault();
        this.setState( (prevState) => {
            return {
                like: prevState.like + 1
            }
        } )
    }

    loveIncrement(event) {
        event.preventDefault();
        this.setState( (prevState) => {
            return {
                love: prevState.love + 1
            }
        } )
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
                        <small className="opaced-small-text"><Moment format="MMM DD, YYYY">{this.props.date}</Moment> &middot; {this.props.readingTime} read</small>
                    </Media>
                    <Img src={`https:${this.props.photo.fields.file.url}`} alt="black and gray computer on a surface"/>
                    <Markdown source={this.props.content.split(" ").slice(0,50).join(" ").concat('...')}/>
                    <div class="nav-blog-item">
                        <div >
                            <a href="" className="love-button">
                                <FaHeart size={24} onClick={this.loveIncrement}/>
                                <span className="opaced-small-text">{this.state.love}</span>
                            </a>
                            <a href="" className="like-button">
                                <FaThumbsUp size={24} onClick={this.likeIncrement}/>
                                <span className="opaced-small-text">{this.state.like}</span>
                            </a>
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