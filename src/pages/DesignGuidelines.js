import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  width: 80%;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 10px;
`;

const HorizontalRule = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 20px 0;
`;

const DesignGuidelines = () => {
  return (
    <PageContainer>
      <PageTitle>Design Guidelines</PageTitle>
      <Section>
        <SectionTitle>Color Contrast</SectionTitle>
        <SectionContent>Use a high color contrast; a 4.5:1 color ratio meets AA accessibility standards, and black on white text is always preferred. This includes in labels and form fields.</SectionContent>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Minimum Target Size</SectionTitle>
        <SectionContent>WCAG AAA standards ask for a minimum of 44px by 44px (CSS) for clickable area of a target. If fine motor control is an issue, going above the minimum makes it easy for the user to activate target. This includes buttons and inline links.</SectionContent>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Minimum Spacing</SectionTitle>
        <SectionContent>According to research, a minimum of 6.35 mm or 24 px (CSS) between selectable areas gives users freedom from being exact in their selection. Adhering to a standard of minimum spacing will decrease the chances of frustration and mental load to users who may have issues with dexterity, low-vision, or other impediments that may slow them down.</SectionContent>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Minimum Text Size</SectionTitle>
        <SectionContent>As per WCAG guidelines, anything less than 12pt size font is considered small.</SectionContent>
      </Section>
    </PageContainer>
  );
};

export default DesignGuidelines;
