import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Button} from 'reactstrap';
import Typist from 'react-typist';
import uuid from 'uuid';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photo from '../images/circle-cropped.png';
import download from 'downloadjs';

const Profile = styled.img`
    margin: 1rem;
    border-radius: 50%;
    width: 100px;
    height: 100px;


    // Make the profile pic smaller in smartphone (portrait)
    @media only screen and (max-width: 320px) {
        width: 80px;
        height: 80px;
    }

    // Smartphone (landscape)
    @media only screen and (min-width: 321px) {
        width: 80px;
        height: 80px;
    }


    //Desktops and Laptops
    @media only screen and (min-width: 1224px) {
        width: 100px;
        height: 100px;
    }
`;

const StyledButton = styled(Button)`
    margin-top: 2rem;
    border-radius: 25px;
    padding: 10px 15px;
    border-width: 2px;
    border-color: #0025FC;
    color: #0025FC;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    &:hover {
        background: #0025FC;
        border-color: #0025FC;
    }
`;

const TypingText = styled.h1`
    // Make the Typing text smaller in smartphone (portrait and landscape)
    @media only screen and (min-width: 320px) and (max-width: 480px){
        font-size: 2rem;
    }

    // Smartphone (landscape)
    @media only screen and (min-width: 321px) {
        font-size: 2rem;
    }
    
    // Desktops and laptops
    @media only screen and (min-width: 1224px) {
        font-size: 2.5rem;
    }
`;

class Home extends React.Component {
    constructor (props) {
        super(props);

        this.handleDownload = this.handleDownload.bind(this);
        // this.state = {
        //     jobTitle : "a Full Stack Web Developer.",
        //     name : "Phat Nguyen.",
        //     typing: true,
        // };

    }

    handleDownload = async () => {
        fetch('/download', {
            method: "GET",
            headers: {
              "Content-Type": "application/pdf"
            }
          })
            .then(res => res.blob())
            .then(response => {
              //Create a Blob from the PDF Stream
              console.log(response);
              const file = new Blob([response], {
                type: "application/pdf"
              });
              download(file, 'Phat-Nguyen-Resume.pdf');
            })
            .catch(error => {
              console.log(error);
            });
    };

    static propTypes = {
        words: PropTypes.array.isRequired
      }
    
      static defaultProps = {
        words: [
          'Phat Nguyen.',
          'a Full Stack Web Developer.'
        ]
      }

    render() {
        const { words }  = this.props;
        const n = words.map(word => {
          return ([
            // the use of uuid is to allow React to update component as it sees these are different items => new changes
            <span key={uuid()}>{word}</span>,
            <Typist.Backspace key={uuid()} count={word.length} delay={1800} />
          ])
        })
        return (
            <div className="home-table">
                <div className="home-table-center">
                        <Container>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className="text-center">
                                        <h4> Hello </h4>
                                        <div>
                                            <Profile src={photo} />
                                        </div>
                                        <TypingText className="header_title mb-0 mt-3">I Am 
                                            <Typist key={uuid()} onTypingDone={() => this.forceUpdate()}>
                                                {n}
                                            </Typist>
                                        </TypingText>
                                    </div>
                                    <StyledButton outline onClick={ this.handleDownload }  color="secondary" className="btn-custom">Download Resume <FontAwesomeIcon icon="cloud-download-alt"/></StyledButton>{' '}
                                </Col>
                            </Row>
                        </Container>
                </div>
            </div>
        )
    }
}


export default Home;