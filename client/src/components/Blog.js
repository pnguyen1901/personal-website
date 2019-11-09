import React from 'react';
import * as contentful from 'contentful';
import TopBar from '../components/TopBar';
import BlogItem from '../components/blog/BlogItem';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const BlogContainer = styled(Container)`


`

export default class Blog extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

        this.client = contentful.createClient({
            space:'2iy38u78l3ky',
            accessToken: 'QJo1bMeHQNDDnxSA9P5pSzVyhORAoOMbQnBvhTbvySI',
        })

    }
    componentDidMount(){
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = () => this.client.getEntries();
    setPosts = (response) => {
        this.setState({
            posts: response.items
        })
    }

    render(){
        return (
            <>
            <TopBar/>
            <div className="home-table">
                <div className="home-table-center">
                    <BlogContainer>
                        <Row>
                            <Col xs="8">
                                <h3>This is a Blog page</h3>
                                {
                                    this.state.posts.map( ({fields}, i ) => 
                                        <BlogItem key={i} title={fields.title} content={fields.content} />
                                    )
                                }
                            </Col>
                        </Row>
                    </BlogContainer>
                </div>
            </div>
            </>
        )
    }
}