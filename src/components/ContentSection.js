import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
`;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentSection = () => {
  return (
    <ContentContainer>
      <Heading>SilverDesign Overview</Heading>
      <Paragraph>
        SilverDesign is a tool aimed to help designers improve inclusivity of web experiences for seniors.
        By using a tablet-first approach to UI, you may be improving accessibility for a previously isolated digital user.
        This kit is made specifically for web experiences and other considerations for native mobile applications components may need to be made.
      </Paragraph>
      <Heading>Learn</Heading>
      <Paragraph>
        This tool helps you incorporate accessibility for senior users before designs are made, but it's most useful for people who already know about things like WCAG, WAI-ARIA, form setup, and focus order.
        SilverDesign is only a small tool in the process, and you are responsible for ensuring your site meets web accessibility and any other compliance standards.
      </Paragraph>
      <List>
        <ListItem><Link href="#">Accessibility Fundamentals Overview</Link></ListItem>
        <ListItem><Link href="#">Web Content Accessibility Guidelines (WCAG) 2 Overview</Link></ListItem>
        <ListItem><Link href="#">Accessibility and Inclusivity: Study Guide | Nielsen Norman Group</Link></ListItem>
      </List>
      <Heading>In This Toolkit You’ll Find</Heading>
      <List>
        <ListItem>Usage Guidelines</ListItem>
        <ListItem>Design Checklist</ListItem>
        <ListItem>Reusable Components</ListItem>
        <ListItem>Usage Patterns</ListItem>
        <ListItem>Example Design</ListItem>
      </List>
    </ContentContainer>
  );
};

export default ContentSection;
