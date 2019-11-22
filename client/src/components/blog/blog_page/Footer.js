import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FooterSection = styled(Container)`
    margin-top: 2rem;
    height: 20rem;
    padding: 1.5rem 1.5rem;
    background-color: #293347;
    color: #fff;

    @media only screen and (min-width: 320px)  and (max-width: 480px) {
        padding: 10rem 1.5rem 2rem 1.5rem;
    }
`;

class Footer extends React.Component {
    render() {
        return (
                <FooterSection fluid>
                    <Row className="h-100">
                        <Col lg="12" className="justify-content-center align-self-center">
                        </Col>
                    </Row>
                </FooterSection>
        )
    }
}

export default Footer;