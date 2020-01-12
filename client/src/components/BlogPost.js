import React from 'react';
import NavBar from './blog/blog_page/NavBar';
import Content from './blog/blog_page/Content';
import Footer from './blog/blog_page/Footer';

const BlogPost = (props) => {
    
    return (
        <>
            <NavBar/>
            <Content {...props.location.state}/>
            <Footer/>
        </>
    )

}

export default BlogPost;
