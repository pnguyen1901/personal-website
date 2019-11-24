import React from 'react';
import NavBar from './blog/blog_page/NavBar';
import Content from './blog/blog_page/Content';
import Footer from './Footer';

const BlogPost = (props) => {
    
    return (
        <>
            <NavBar/>
            <Content {...props.location.state}/>
        </>
    )

}

export default BlogPost;
