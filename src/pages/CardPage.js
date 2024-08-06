import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const PageWrapper = styled.div`
  padding-top: 60px; /* Adjust this value based on your header height */
`;

const CardPage = () => {
  return (
    <PageWrapper>
      <h2>Card Component</h2>
      <Card>
        <p>This is a simple card component.</p>
      </Card>
    </PageWrapper>
  );
};

export default CardPage;
