import React, { useState } from 'react';
import { Media, Button } from 'reactstrap';
import * as Markdown from 'react-markdown'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../../images/placeholder.jpg';
import { connect } from 'react-redux';
import { setCurrentPost } from '../../store/blog/actions';

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


function BlogItem (props) {

        // const [Stat, setStat] = useState({
        //     like: 0,
        //     love: 0
        // })

        // const likeIncrement = (e) => {
        //     e.preventDefault();
        //     setStat({like : Stat.like + 1, love: Stat.love})
        // }

        // const loveIncrement = (e) => {
        //     e.preventDefault();
        //     setStat({love : Stat.love + 1, like: Stat.like})
        // }

        return(
            <Media className="blog-card">
                <Media left >
                    <Media className="media-image" object src={placeholder} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        <div>{props.fields.title}</div>
                        <small className="opaced-small-text">
                            <Moment format="MMM DD, YYYY">{props.fields.date}</Moment> &middot; {props.fields.readingTime} read
                        </small>
                    </Media>
                    <Img src={`https:${props.fields.photo.fields.file.url}`} alt="black and gray computer on a surface"/>
                    <Markdown source={props.fields.content.split(" ").slice(0,50).join(" ").concat('...')}/>
                    <div className="nav-blog-item">
                        <div >
                        </div>
                        <div className="read-more-button">
                            <ReadMore to={{
                                pathname: `/blog${props.fields.path}`,
                                state: props.fields
                            }}
                            onClick={() => props.dispatch({type: 'SET_CURRENT_POST', id: props.id})}
                        >Read More</ReadMore>
                        </div>
                    </div>

                </Media>
            </Media>
               
        )
}


const mapDispatchToProps = dispatch => {
    return {
    setCurrentPost: id => dispatch(setCurrentPost(id))
        
    }
}

export default connect(mapDispatchToProps)(BlogItem);