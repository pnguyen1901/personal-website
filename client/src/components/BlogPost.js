import React from 'react';
import NavBar from './blog/blog_page/NavBar';
import Content from './blog/blog_page/Content';

const BlogPost = (props) => {
    
    return (
        <>
            <NavBar/>
            <div className="flex-container">
                {props.location.state.content}
            </div>
            <Content {...props.location.state}/>
        </>
    )

}

export default BlogPost;
