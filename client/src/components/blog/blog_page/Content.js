import React from 'react';
import styled from 'styled-components';


const Img = styled.img`
    height: 250px;
    width: 100%;
    margin: 5px 0 10px 0;
`;


const Content = (props) => {
    return (
        <div className="wrapper">
            <div className="post-title">
                {props.title}
            </div>
            <div className="p-title-image">
                <Img src={`https:${props.photo.fields.file.url}`} alt="black and gray computer on a surface"/>
            </div>
        </div>
    )
}

export default Content;
