import React from 'react';
import NavBar from './blog/blog_page/NavBar';


const BlogPost = (props) => {
    
    return (
        <>
            <NavBar/>
            <div className="flex-container">
                {props.location.state.content}
            </div>
        </>
    )

}

export default BlogPost;
