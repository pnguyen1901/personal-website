import React from 'react';
import * as contentful from 'contentful';
import TopBar from '../components/TopBar';

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
            posts: response.items[0]
        })
    }

    render(){
        return (
            <>
            <TopBar/>
            </>
        )
    }
}