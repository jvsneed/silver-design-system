import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const PageWrapper = styled.div`
  padding-top: 60px; /* Adjust this value based on your header height */
`;

const ButtonPage = () => {
  return (
    <PageWrapper>
      <h2>Button Component</h2>
      <Button onClick={() => alert('Primary Button clicked!')}>Primary Button</Button>
    </PageWrapper>
  );
};

export default ButtonPage;
