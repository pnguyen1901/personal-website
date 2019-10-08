import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Ads from './components/Ads';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faCloudDownloadAlt, faMugHot, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


library.add(fab, faPaperPlane, faCloudDownloadAlt, faMugHot, faLinkedinIn, faGithub, faLinkedin, faHeart, faReact)

class App extends Component {
  refHome = React.createRef();
  refExperience = React.createRef();
  refAbout = React.createRef();

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.modaltoggle = this.modaltoggle.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleScrollto = this.handleScrollto.bind(this);

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

  handleScrollto(elRef) {
    const el = elRef.current ? elRef.current : elRef

    // Scroll the element into view
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
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
        <>
          <FixedNavbar fixed="top" light expand="md">
            <Container>
                <NavbarBrand href="/">
                    <div className="brand">PN</div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto align-items-center" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={ () => {this.handleScrollto(this.refHome)}}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={ () => {this.handleScrollto(this.refAbout)}}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={ () => {this.handleScrollto(this.refExperience)} }>Experience</NavLink>
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
        <div className="App">
          <div ref={this.refHome}>
            <Home />
          </div>
          <div ref={this.refAbout}>
            <About/>
          </div>
          <Skills/>
          <div ref={this.refExperience}>
            <Experience />
          </div>
          <Ads/>
          <Footer/>
        </div>
      </>
    )
  }
}

export default App;
