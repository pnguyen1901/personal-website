import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button,
        Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, FormText, Label, Input, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollableAnchor from 'react-scrollable-anchor';

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

// Create a Top Bar component extends from React Component
class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.modaltoggle = this.modaltoggle.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isOpen: false,
            modal: false,
            email: {
                sender: '',
                senderEmail: '',
                text: ''
            }
        };
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    sendEmail() {
        fetch(`/send-email?sender=${this.state.sender}&senderEmail=${this.state.senderEmail}&text=${this.state.text}`)
            .catch(err => console.log(err));
        
        this.setState({
            modal: !this.state.modal,
            sender: '',
            senderEmail: '',
            text: ''
        });
    };

    toggle() {
        this.setState({ isOpen: !this.state.isOpen});
    }

    // modaltoggle() {
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }

    modaltoggle = () => {
        this.setState({
            modal: !this.state.modal,
            sender: '',
            senderEmail: '',
            text: ''

        });
    };

    render() {
        return (
            <FixedNavbar fixed="top" light expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <div className="brand">PN</div>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto align-items-center" navbar>
                            <NavItem>
                                <NavLink href="#home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Experience">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <StyledButton onClick={this.modaltoggle} outline color="secondary" className="btn-custom"><FontAwesomeIcon icon="paper-plane"/> Let's Chat</StyledButton>{' '}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.modaltoggle} className={this.props.className}>
                    <ModalHeader class="no-border-bottom" toggle={this.modaltoggle}> How can I help you today?</ModalHeader>
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

// Need to export the component so that we can use it with other components
export default TopBar;