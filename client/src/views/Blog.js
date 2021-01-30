import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import BlogItem from '../components/blog/BlogItem';
import Footer from '../components/blog/blog_page/Footer';
import NavBar from '../components/blog/blog_page/NavBar';
import portrait from '../images/portrait.png';

library.add( faThumbsUp );


const BlogContainer = styled(Container)`
    margin-top: 2rem;

`

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 5rem;
    justify-content: center;
    text-align: center;

`

const HeaderImg = styled.img`
    height: 350px;
    width: 270px;
    border-radius: 5px;
`

export default function Blog () {

    const [posts, setPosts] = useState([{
        id: 1
    }])

    return (
            <>
            <NavBar/>
            {/* <HeaderContainer className="blog-header-container">
            </HeaderContainer> */}
            <BlogContainer>
                <Row className="justify-content-center">
                    <Col xs="9">
                        <div className="flex-container">
                            <div className="blog-page-portrait">
                                <HeaderImg src={portrait} />
                            </div>
                            <div className="blog-page-title">
                                <h2 className="greetings">Welcome to my blog</h2>
                                <p>Throughout my career, I have learned and benefited a lot from the online community. I wanted to give back and help others who I was once in their shoes trying to get into the web development.</p>
                                <p>This is also an outlet for people to get to know more about me.</p>
                            </div>
                        </div>
                        {
                            posts.map( (post, i ) => 
                                // send the entire object as props
                                <BlogItem key={i} {...post} id={post.id}/>
                            )
                        }
                    </Col>
                </Row>
            </BlogContainer>
            <div>
                <Footer/>
            </div>
            </>
        )
}

