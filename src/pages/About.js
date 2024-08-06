import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: ${props => props.theme.spacing(2)};
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0; /* Decrease margin-bottom, add margin-top for spacing */
`;

const LearnSection = styled.div`
  margin: 2rem 0; /* Add spacing above and below the section */
`;

const LearnLink = styled.a`
  display: block;
  color: ${props => props.theme.colors.secondary}; /* Different color for links */
  text-decoration: underline; /* Underline links */
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: none; /* Remove underline on hover for better UX */
    color: ${props => props.theme.colors.primary}; /* Optional: change color on hover */
  }
`;

const ToolkitSection = styled.div`
  margin: 2rem 0; /* Add spacing above and below the section */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 20px;

  li {
    position: relative;
    padding-left: 1.5rem; /* Adjust space for arrow */
    margin-bottom: 0.5rem; /* Adjust margin between list items */
    
    &::before {
      content: '➜';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.primary}; /* Adjust arrow color if needed */
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <PageTitle>About Silver Design</PageTitle>
      <p>
        SilverDesign is a tool aimed to help designers improve inclusivity of web experiences for seniors. By using a tablet-first approach to UI, you may be improving accessibility for a previously isolated digital user. This kit is made specifically for web experiences and other considerations for native mobile applications components may need to be made.
      </p>

      <LearnSection>
        <SectionTitle>Learn</SectionTitle>
        <p>
          This tool helps you incorporate accessibility for senior users before designs are made, but it's most useful for people who already know about things like WCAG, WAI-ARIA, form setup, and focus order. SilverDesign is only a small tool in the process, and you are responsible for ensuring your site meets web accessibility and any other compliance standards.
        </p>
        <List>
          <li><LearnLink href="#">Accessibility Fundamentals Overview</LearnLink></li>
          <li><LearnLink href="#">Web Content Accessibility Guidelines (WCAG) 2 Overview</LearnLink>
          </li>
          <li><LearnLink href="#">Accessibility and Inclusivity: Study Guide | Nielsen Norman Group</LearnLink></li>
        </List>



      </LearnSection>

      <ToolkitSection>
        <SectionTitle>In This Toolkit You’ll Find</SectionTitle>
        <List>
          <li>Usage Guidelines</li>
          <li>Design Checklist</li>
          <li>Reusable Components</li>
          <li>Usage Patterns</li>
          <li>Example Design</li>
        </List>
      </ToolkitSection>
    </AboutContainer>
  );
};

export default About;
