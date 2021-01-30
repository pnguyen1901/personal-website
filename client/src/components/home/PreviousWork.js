import React from 'react';
import { CardGroup, Container } from 'reactstrap';
import styled from 'styled-components';
import candorinstitute from '../../images/candor_institute.png';
import foodit from '../../images/foodit.png';
import vietbooth from '../../images/vietbooth_1.png';
import CustomCard from '../card/card';
import { device } from './Device';

const PreviousWorkContainer = styled(Container)`
    background-color: rgb(27, 59, 238);
    padding: 5rem 1.5rem;
    margin-top: 2rem;
`;

const PreviousWorkText = styled.p`
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 6rem;

    @media ${device.mobileS} {
        font-size: 1.25rem;
        padding: 0;
    }
`;

const PreviousWorkHeading = styled.h2`
    color: #fff;
    margin-bottom: 2rem;

    @media ${device.mobileS} {
        font-size: 1.5rem;
    }

    // Desktops and laptops
    @media only screen and (min-width: 1224px) {
        font-size: 2rem;
    }
`;

const RoundedCardGroup = styled(CardGroup)`
    display: "flex";
    justify-content: center;
    margin: 0 auto;
`;


const vietboothDescription = `Vietbooth is a Houston-based business specializes in providing
fun and quality photobooth services for wedding, birthday party and more.
`;

const candorInstituteDescription = `Candor Institute is an active non-profit organization in Houston.
They focus on community services such as teaching English to older first generation Vietnamese immigrants,
raising funds for good causes and more.
`;

const foodItDescription = `iOS app for keeping tracking of your grocery so that you can indulge in the goodness of your tasty Chobani yogurt before it expires.
`

export default function PreviousWork () {
  return (
    <PreviousWorkContainer className="previousWork" fluid>
      <PreviousWorkHeading>Previous Work</PreviousWorkHeading>
      <RoundedCardGroup>
        <CustomCard
          cardImg={vietbooth}
          cardImgAltText={"vietbooth photo"}
          cardTitle="Vietbooth"
          cardSubtitle="Photobooth rental services"
          cardText={vietboothDescription}
          buttonLink="https://vietbooth.com/"
          buttonText="View more"
        />
        <CustomCard
          cardImg={candorinstitute}
          cardImgAltText={"candor institute photo"}
          cardTitle="Candor Institute"
          cardSubtitle="Non-profit organization"
          cardText={candorInstituteDescription}
          buttonLink="https://candorinstitute.org/"
          buttonText="View more"
        />
        <CustomCard
          cardImg={foodit}
          cardImgAltText={"foodit photo"}
          cardTitle="FoodIt"
          cardSubtitle="iOS mobile app"
          cardText={foodItDescription}
          buttonLink="https://github.com/pnguyen1901/FoodIt"
          buttonText="View more"
        />
      </RoundedCardGroup>
    </PreviousWorkContainer>
  )
}
