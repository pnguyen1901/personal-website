import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,
        Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input } from 'reactstrap';
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

const SubmitButton = styled(Button)`
    border-radius: 25px;
    padding: 10px 15px;
    border-width: 2px;
    -webkit-transition: 0.5s;
    transition: 0.5;
`;

class Ads extends React.Component {
    constructor(props){
        super(props);
        
        this.modaltoggle = this.modaltoggle.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isOpen: false,
            modal: false,
            email: {
                sender: '',
                senderEmail: '',
                budget: '<$500',
                type: 'web',
                text: ''
            }
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    sendEmail = () => {
        fetch(`/send-emailfreelance?sender=${this.state.sender}&senderEmail=${this.state.senderEmail}&budget=${this.state.budget}&type=${this.state.type}&text=${this.state.text}`)
            .catch(err => console.log(err));

        this.setState({
            modal: !this.state.modal,
            sender: '',
            senderEmail: '',
            budget: '',
            type: '',
            text: ''
        })
    }

    modaltoggle = () => {
        this.setState({
            modal: !this.state.modal,
            sender: '',
            senderEmail: '',
            budget: '',
            type: '',
            text: ''
        })
    }

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
                                    <StyledButton onClick={this.modaltoggle}><FontAwesomeIcon  size="1.5x" icon="mug-hot"/> Start a Conversation</StyledButton>{' '}
                                </CardBody>
                            </AdCard>
                        </div>
                    </Col>
                </Row>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.modaltoggle} className={this.props.className}>
                    <ModalHeader toggle={this.modaltoggle}>Please share your project details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Name">Name</Label>
                                        <Input value={this.state.sender} onChange={this.handleChange} type="name" name="sender" id="name" placeholder="Your Full Name"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Email">Email</Label>
                                        <Input value={this.state.senderEmail} onChange={this.handleChange} type="email" name="senderEmail" id="email" placeholder="Your Email Address" /> 
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Budget">Budget</Label>
                                        <Input value={this.state.budget} type="select" name="budget" id="budget" onChange={this.handleChange}>
                                            <option></option>
                                            <option>{"<"}$500</option>
                                            <option>$500 - $1000</option>
                                            <option>$1500+</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="type">Type</Label>
                                        <Input value={this.state.type} type="select" name="type" id="type" onChange={this.handleChange}>
                                            <option></option>
                                            <option>web</option>
                                            <option>mobile</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col sm={12}>
                                    <FormGroup>
                                        <Label for="Details">Additional Details</Label>
                                        <Input value={this.state.text} onChange={this.handleChange} type="textarea" rows="10" name="text" placeholder="I'd love to hear more about your business problems!"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center no-border-top">
                        <SubmitButton color="#0025FC" onClick={this.sendEmail} id="submit-btn" className="btn-custom" disabled={!(this.state.sender && this.state.senderEmail && this.state.text)}>Submit</SubmitButton>{' '}
                    </ModalFooter>
                </Modal>
            </AdContainer>
        )
    }
}

export default Ads;