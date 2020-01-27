import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import Moment from 'react-moment';
import * as Markdown from 'react-markdown';
import {IoMdArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
                <div className="related-posts">
                    
                    { props.id === 0 
                            ? <Link to={{
                                    pathname:`/blog${props.posts[props.id + 1].fields.path}`,
                                    state: props.posts[props.id + 1].fields
                                    }}
                                    onClick={() => props.dispatch({type:'SET_CURRENT_POST', id: props.id + 1})}>Previous Post</Link>
                            : (props.id === props.totalPost - 1 
                                ? <Link to={{
                                    pathname:`/blog${props.posts[props.id - 1].fields.path}`,
                                    state: props.posts[props.id - 1].fields
                                }}
                                onClick={() => props.dispatch({type:'SET_CURRENT_POST', id: props.id - 1})}
                                >Next Post</Link>
                                :  <>
                                    <Link to={{
                                    pathname:`/blog${props.posts[1]}`,
                                    state: props
                                    }}
                                    onClick={() => props.dispatch({type:'SET_CURRENT_POST', id: props.id + 1})}>Previous Post</Link>
                                    <Link to={{
                                    pathname:`/blog${props}`,
                                    state: props
                                    }}
                                    onClick={() => props.dispatch({type:'SET_CURRENT_POST', id: props.id - 1})}>Next Post</Link></>)}
                </div>
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        id: state.blog.currentPost,
        totalPost: state.blog.totalPost,
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps)(Content);
