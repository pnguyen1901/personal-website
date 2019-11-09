import React from 'react';
import { Media } from 'reactstrap';


export default class BlogItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Media className="blog-card" href="#">
                <Media left href="#">
                    <Media object />
                </Media>
                <Media body>
                    <Media heading>
                        {this.props.title}
                    </Media>
                    {this.props.content}
                </Media>
            </Media>

                
                
        )
    }
}