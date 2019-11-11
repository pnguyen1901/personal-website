import React from 'react';
import { Media } from 'reactstrap';
import * as Markdown from 'react-markdown'
import moment from 'react-moment';
import Moment from 'react-moment';

export default class BlogItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Media className="blog-card" href={this.props.path}>
                <Media left >
                    <Media object />
                </Media>
                <Media body>
                    <Media heading>
                        <p>{this.props.title} <small className="opacity-small-text"><Moment format="MMM DD, YYYY">{this.props.date}</Moment> &middot; {this.props.readingTime} read</small></p>
                    </Media>
                    <Markdown source={this.props.content}/>
                </Media>
            </Media>
               
        )
    }
}