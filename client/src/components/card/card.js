import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../home/Device';

const StyledCard = styled(Card)`
  margin: 0.5rem 1rem;
  text-align: left;
  
  //Tablets
  @media ${device.tablet} {
    width: 318px;
  }

  //Desktops and Laptops
  @media ${device.desktop} {
    width: 318px;
  }
`

const StyledCardImg = styled(CardImg)`
  @media ${device.mobileS} {
    height: 141px;
  }

  //Tablets
  @media ${device.tablet} {
    height: 180px;
  }

  //Desktops and Laptops
  @media ${device.desktop} {
    height: 180px;
  }
`

const StyledCardText = styled(CardText)`
  word-wrap: break-word;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: none;
    color: white;
  }
`

const CustomCard = (props) => {
  
  const { cardImg, cardImgAltText, cardTitle, cardSubtitle, cardText, buttonLink, buttonText } = props
  
  return (
    <div>
      <StyledCard>
        <StyledCardImg top src={cardImg} alt={cardImgAltText} />
        <CardBody>
          <CardTitle tag="h5">{cardTitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{cardSubtitle}</CardSubtitle>
          <StyledCardText>{cardText}</StyledCardText>
          <Button><StyledLink href={buttonLink} target="_blank">{buttonText}</StyledLink></Button>
        </CardBody>
      </StyledCard>
    </div>
  );
};

export default CustomCard;
