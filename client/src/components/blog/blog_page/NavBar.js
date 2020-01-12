import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const FixedNavbar = styled(Navbar)`
    box-shadow: 0 2px 5px 0 rgb(233,240,243,0.5);
    background-color: #fff; 
`;

const StyledButton = styled(Button)`
    border-radius: 25px;
    padding: 10px 15px;
    margin-left: 10px;
    border-width: 2px;
    border-color: #0025FC;
    color: #0025FC;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    &:hover {
        background: #0025FC;
        border-color: #0025FC;
        color: #fff;
    }
`;

const SubmitButton = styled(Button)`
    border-radius: 25px;
    padding: 10px 15px;
    border-width: 2px;
    -webkit-transition: 0.5s;
    transition: 0.5;
`;

export default class NavBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            modal: false,
            // email: {
            //     sender: "",
            //     senderEmail: "",
            //     text: "",
            // }
            sender: ''
        }

        this.toggle = this.toggle.bind(this);
        this.modaltoggle = this.modaltoggle.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    modaltoggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleChange(event) {
        console.log(event);
        this.setState({
            sender: event.target.value 
        })
    }

    render() {
        return (
            <FixedNavbar fixed="top" light expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <div>
                            <p className="brand">PN</p>
                            <p className="blog-navbar">Blog</p>    
                        </div>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto align-items-center" navbar>
                            <NavItem>
                                <StyledButton onClick={this.modaltoggle} outline color="secondary" className="btn-custom"><FontAwesomeIcon icon="paper-plane"/> Let's Chat</StyledButton>{' '}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.modaltoggle} className={this.props.className}>
                    <ModalHeader className="no-border-bottom" toggle={this.modaltoggle}> How can I help you today?</ModalHeader>
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
                                        <Input value={this.state.senderEmail} onChange={this.handleChange} type="email" name="senderEmail" id="email" placeholder="Your Email Address"/>
                                    </FormGroup>
                                </Col>
                                <Col sm={12}>
                                    <FormGroup>
                                        <Label for="Details">Questions</Label>
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
            </FixedNavbar>
        )
    }
}