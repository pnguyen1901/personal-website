import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import Moment from 'react-moment';
import * as Markdown from 'react-markdown';
import {IoMdArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

const Img = styled.img`
    height: 250px;
    width: 100%;
    margin: 5px 0 10px 0;
`;


const Content = (props) => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="backToBlog">
                    <Link to='/blog'><IoMdArrowBack className="mr-2" size={16}/><span>Back to Blog Page</span></Link>
                </div>
                <div className="post-title">
                    <h2>{props.title}</h2>
                    <small><Moment format="MMMM DD, YYYY">{props.date}</Moment></small>
                </div>
                <div className="p-title-image">
                    <Img src={`https:${props.photo.fields.file.url}`} alt="black and gray computer on a surface"/>
                </div>
                <div className="post-content">
                    <Markdown source={props.content} />
                </div>
            </div>
        </div>

    )
}

export default Content;
