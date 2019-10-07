import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { device } from './Device';

const AboutContainer = styled(Container)`
    background-color: rgb(27, 59, 238);
    padding: 5rem 1.5rem;
    margin-top: -4rem;

`;

const AboutText = styled.p`
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 6rem;

    @media ${device.mobileS} {
        font-size: 1.25rem;
        padding: 0;
    }
`;

const AboutHeading = styled.h2`
    color: #fff;
    margin-bottom: 2rem;

    @media ${device.mobileS} {
        font-size: 1.5rem;
    }

    // Desktops and laptops
    @media only screen and (min-width: 1224px) {
        font-size: 2rem;
    }
`;

class About extends React.Component {
    render() {
        return (
                <AboutContainer fluid>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <AboutText>Web interfaces should be intuitive and easy to use. My goal is to incorporate these fundamentals for every single project that I work on. As a full stack web developer, I help solve business problems by bringing front-end and back-end together for one unifying solution.</AboutText>
                            <AboutHeading>What I am good at</AboutHeading>
                        </Col>
                    </Row>
                </AboutContainer>
        )
    }
}

export default About;