import React from 'react';
import * as contentful from 'contentful';
import TopBar from '../components/TopBar';
import BlogItem from '../components/blog/BlogItem';
import DropDown from '../components/blog/DropDown';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import portrait from '../images/portrait.png';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';

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

class Blog extends  React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         posts: []
    //     }

    //     this.client = contentful.createClient({
    //         space:'2iy38u78l3ky',
    //         accessToken: 'QJo1bMeHQNDDnxSA9P5pSzVyhORAoOMbQnBvhTbvySI',
    //     })

    // }
    // componentDidMount(){
    //     this.fetchPosts().then(this.setPosts);
    // }

    // fetchPosts = () => this.client.getEntries();
    // setPosts = (response) => {
    //     this.setState({
    //         posts: response.items
    //     })
    // }

    render(){
        return (
            <>
            <TopBar/>
            {/* <HeaderContainer className="blog-header-container">
            </HeaderContainer> */}
            <BlogContainer>
                <Row className="justify-content-center">
                    <Col xs="9">
                        <div class="flex-container">
                            <div className="blog-page-portrait">
                                <HeaderImg src={portrait} />
                            </div>
                            <div className="blog-page-title">
                                <h2>Welcome to my blog!</h2>
                                <p>Throughout my career, I have learned and benefited a lot from the online community. I wanted to give back and help others who I was once in their shoes trying to get into the web development.</p>
                                <p>This is also an outlet for people to get to know more about me.</p>
                            </div>
                        </div>
                        <div className="pull-left topic-dropdown">
                            <DropDown/>
                        </div>
                        {
                            this.props.blog.posts.map( ({fields}, i ) => 
                                <BlogItem key={i} {...fields} />
                            )
                        }
                    </Col>
                </Row>
            </BlogContainer>
            </>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        blog: state.blog
    }
}

export default connect(mapStateToProps)(Blog)