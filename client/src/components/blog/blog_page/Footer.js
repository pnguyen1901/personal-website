import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FooterSection = styled(Container)`
    margin-top: 2rem;
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
                        <Col lg="12" className="text-center">
                            <div className="mt-4">
                                <p> 2019 &copy; Phat Nguyen. Made with <span><FontAwesomeIcon color="#F782AC" icon="heart"/></span></p>
                                <p> Built with React.JS <span><FontAwesomeIcon color="#5DD4F4" size="2x" icon={['fab', 'react']}/></span></p>
                            </div>
                            <div>
                                <a className="social-icon" target="_blank" href="https://github.com/pnguyen1901"><FontAwesomeIcon size="2x" color="#fff" icon={['fab','github']}/></a>
                                <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/phat-nguyen-uoh/"><FontAwesomeIcon size="2x" color="#fff" icon={['fab', 'linkedin-in']}/></a>
                            </div>
                        </Col>
                    </Row>
                </FooterSection>
        )
    }
}

export default Footer;