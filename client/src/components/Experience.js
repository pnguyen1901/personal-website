import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Media} from 'reactstrap';
import styled from 'styled-components';
import AIGlogo from '../images/AIG-Logo.png';


function getDuration(duration) {
    const years = parseInt(duration /12);
    const months = (duration > 12) ? duration % 12 : duration
    return (years > 0 ? years + " year" + (years > 1? "s" : "") + " and " + months + " month" + (months > 1? "s": "") : months + " month" + (months> 1? "s": ""));
}

const ExpContainer = styled(Container)`
    padding: 0rem 1.5rem;
`;

class Experience extends React.Component {
    render() {
        return (
            <ExpContainer fluid>
                <Row className="justify-content-center mb-4">
                    <h2>Experience and Education</h2>
                </Row>
                <Row className="mt-4 align-items-center">
                    <Col lg="5" className="exp-col">
                        <Fade bottom cascade duration={2000}>
                            <div className="edu-exp">
                                <div className="exp-box mt-4">
                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="exp-year font-weight-bold position-relative">2018 - Present</div>
                                            <div className="exp-detail">
                                                <h4>Full Stack Web Developer</h4>
                                                <p className="desc mb-0">American International Groups (AIG)</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className="edu-exp">
                                <div className="exp-box mt-4">
                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="exp-year font-weight-bold position-relative">2016 - 2018</div>
                                        <div className="exp-detail">
                                            <h4>Industrial Engineering</h4>
                                            <p className="desc mb-0">Parker Hannifin</p>
                                        </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className="edu-exp">
                                <div className="exp-box mt-4">
                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="exp-year font-weight-bold position-relative">2016</div>
                                        <div className="exp-detail">
                                            <h4>Industrial Engineering Intern</h4>
                                            <p className="desc mb-0">Parker Hannifin</p>
                                        </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col lg="5" className="exp-col-offset">
                        <Fade bottom cascade duration={2000}>
                            <div className="edu-exp">
                                <div className="exp-box mt-4">
                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="exp-year font-weight-bold position-relative">2018</div>
                                            <div className="exp-detail">
                                                <h4>Studied at Udacity</h4>
                                                <p className="desc mb-0">Full Stack Web Developer Nanodegree</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className="edu-exp">
                                <div className="exp-box mt-4">
                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="exp-year font-weight-bold position-relative">2015 - 2018</div>
                                            <div className="exp-detail">
                                                <h4>Studied at University of Houston</h4>
                                                <p className="desc mb-0">Bachelor in Industrial Engineering</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div className="edu-exp">
                                <div className="exp-box mt-4">
                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="exp-year font-weight-bold position-relative">2013 - 2015</div>
                                            <div className="exp-detail">
                                                <h4>Studied at Houston Community College</h4>
                                                <p className="desc mb-0">Associate in Applied Science</p>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </ExpContainer>
        )
    }
}

export default Experience;