import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/silverdesignheader.png'; // Import the image

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  background: url(${heroImage}) no-repeat center center/cover;
  color: #1E0D31; /* Dark text color */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligns content to the start (left) */
  padding: 0 3rem; /* Add padding to ensure text doesn't touch the edges */
`;

const HeroText = styled.div`
  text-align: left;
  max-width: 40%; /* Limit width to prevent stretching */
`;

const MainHeading = styled.h1`
  font-size: 5rem;
  line-height:5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  line-height:2rem;
  font-weight: 400;
  margin: 0;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <MainHeading>Silver Design</MainHeading>
        <SubHeading>A design framework that supports senior user needs</SubHeading>
      </HeroText>
    </HeroContainer>
  );
};

export default HeroSection;
