import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdContainer = styled(Container)`
    margin-top: 10rem;
    padding: 3rem 1.5rem;
    margin-bottom: -11rem;

    // Smartphones (portrait and lanscape)
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-bottom: -13rem;
    }
`;

const AdCard = styled(Card)`
    background-color: rgb(27, 59, 238);
    border-radius: 1rem;
`;

const AdHeading = styled(CardTitle)`
    color: #fff;
    font-size: 1.5rem;

    // Smartphones (portrait and lanscape)
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-top: 1rem;
    }


`;

const AdText = styled(CardText)`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
    border-radius: 25px;
    padding: 10px 15px;
    margin-top: 1rem;
    border-width: 2px;
    border-color: #FFCC00;
    color: #333;
    background-color: #FFCC00;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    &:hover {
        border-width: 2px;
        border-color: #FFCC00;
        color: #FFCC00;
        background-color: transparent;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-bottom: 1rem;
    }
`;

class Ads extends React.Component {
    render() {
        return (
            <AdContainer>
                <Row className="justify-content-center">
                    <Col>
                        <div className="rounded-box">
                            <AdCard>
                                <CardBody>
                                    <AdHeading>Looking For Freelancer ?</AdHeading>
                                    <AdText>Let's discuss to see how I can use my expertise to take your business to the next level.</AdText>
                                    <StyledButton><FontAwesomeIcon size="1.5x" icon="mug-hot"/> Start a Conversation</StyledButton>{' '}
                                </CardBody>
                            </AdCard>
                        </div>
                    </Col>
                </Row>
            </AdContainer>
        )
    }
}

export default Ads;