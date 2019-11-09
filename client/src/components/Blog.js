import React from 'react';
import * as contentful from 'contentful';
import TopBar from '../components/TopBar';
import BlogItem from '../components/blog/BlogItem';
import DropDown from '../components/blog/DropDown';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


const BlogContainer = styled(Container)`


`

const HeaderContainer = styled(Container)`
    margin-top: 10rem;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0, 0.15);
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
            <HeaderContainer fluid>
                <Row>
                    <Col xs="12">
                        <h3>This is a Blog page</h3>
                    </Col>
                </Row>
            </HeaderContainer>
            <div className="home-table">
                <div className="home-table-center">
                    <BlogContainer>
                        <Row className="justify-content-center">
                            <Col xs="8">
                                <div className="pull-left">
                                    <DropDown/>
                                </div>
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