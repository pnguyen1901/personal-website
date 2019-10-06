import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

const AboutContainer = styled(Container)`
    background-color: rgb(27, 59, 238);
    padding: 5rem 1.5rem;
    margin-top: -4rem;
`;

const AboutText = styled.p`
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 6rem;
`;

const AboutHeading = styled.h2`
    color: #fff;
    margin-bottom: 2rem;
`;

class About extends React.Component {
    render() {
        return (
                <AboutContainer fluid>
                    <Row className="justify-content-center">
                        <Col xs="8">
                            <AboutText>Web interfaces should be intuitive and easy to use. My goal is to incorporate these fundamentals for every single project that I work on. As a full stack web developer, I help solve business problems by bringing front-end and back-end together for one unifying solution.</AboutText>
                            <AboutHeading>What I am good at</AboutHeading>
                        </Col>
                    </Row>
                </AboutContainer>
        )
    }
}

export default About;