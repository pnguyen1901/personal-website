import React from 'react';
import Fade from 'react-reveal/Fade';
import {Container, Row, Col,
    Card, CardImg, CardTitle, CardText,
    CardGroup, CardBody, Progress
} from 'reactstrap';
import styled from 'styled-components';
import frontEnd from '../images/front-end.svg';
import backEnd from '../images/back-end.svg';
import tools from '../images/tools.svg';
import { ThemeConsumer } from '../context/theme';

const NegativeMarginTop = styled(Container)`
    margin-top: -14rem;
    padding: 9rem 1.5rem;
`;

const RoundedCardGroup = styled(CardGroup)`
    box-shadow: 0 5px 5px 0 rgba(233,240,243,0.5), 0 0 0 1px #E6ECF8;
`;

const CardImage = styled(CardImg)`
    margin-top: 2rem;
    height: 2.5rem;
    width: 2.5rem;
`;

const CardHeading = styled(CardTitle)`
    color: #3333333;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: underline;
`;



class Skills extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            value: 0
        }
    }
    render() {
        return (
            <ThemeConsumer >
                { ({theme}) => (
                                <NegativeMarginTop className="justify-content-center">
                                <RoundedCardGroup className={`rounded`} >
                                    <Card className={`bg-${theme}`}>
                                        <div className="mt-2">
                                            <CardImage top width="100%" src={frontEnd}/>
                                        </div>
                                        <CardBody>
                                            <CardHeading>Front-End</CardHeading>
                                            <CardText>
                                                <Fade top cascade duration={2000}>
                                                    <div>
                                                        <p>HTML5</p>
                                                        <p>CSS3</p>
                                                        <p>SaSS</p>
                                                        <p>Responsive Web Design</p>
                                                    </div>
                                                </Fade>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    <Card className={`bg-${theme}`}>
                                        <div className="mt-2">
                                            <CardImage top src={backEnd}/>
                                        </div>
                                        <CardBody>
                                            <CardHeading>Back-End</CardHeading>
                                            <CardText>
                                                <Fade top cascade duration={2000}>
                                                    <div>
                                                        <p>Python</p>
                                                        <p>Flask</p>
                                                        <p>PostgreSQL</p>
                                                        <p>REST API</p>
                                                        <p>Apache on Linux</p>
                                                    </div>
                                                </Fade>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    <Card className={`bg-${theme}`}>
                                        <div className="mt-2">
                                            <CardImage top src={tools}/>
                                        </div>
                                        <CardBody>
                                            <CardHeading>Tools</CardHeading>
                                            <CardText>
                                                <Fade top cascade duration={2000}>
                                                    <div>
                                                        <p>Git</p>
                                                        <p>Okta</p>
                                                        <p>Visual Studio Code</p>
                                                        <p>Chrome Dev Tools</p>
                                                    </div>
                                                </Fade>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </RoundedCardGroup>
                            </NegativeMarginTop>
                )}
            </ThemeConsumer>


        )
    }
}

export default Skills;