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
  border-top: .5px solid ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

const MenuSection = styled.div`
  width: 250px;
  margin-right: 20px;
  border-top: 5px solid #4caf50;
`;

const Menu = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const MenuIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin-bottom: 5px;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background-color: #000;
    margin-top: 5px;
  }
`;

const Note = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  width: 250px;
`;

const NoteIcon = styled.div`
  height: 34px;
  margin-right: 10px;
  display:flex;
  flex-shrink: 0;
`;

const ComparisonSection = styled.div`
  width: 100px;
  padding-top: 10px;
  margin-left:100px;
  border-top: 5px solid #ff3e3e;
  display:flex;
  flex-direction:column;
  align-items:center;

`;

const ComparisonMenu = styled.div`
  border: 1px solid #ddd;
  padding: 30px 0 0 20px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 20px;
`;

const CognitiveGuidelines = () => {
  return (
    <PageContainer>
      <PageTitle>Cognitive Guidelines</PageTitle>
      <Section>
        <SectionTitle>Understandable Language</SectionTitle>
        <SectionContent>Use common and familiar language that is rooted more in real life than digital. Avoid using industry specific jargon. For large amounts of text, verify that the reading comprehension level does not exceed 9th grade. Use a tool like Readable.com to check this.</SectionContent>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Clear Labels</SectionTitle>
        <SectionContent>Icons, inputs, and other page elements should be clearly labeled. Avoid hiding important text, such as menus, especially on a page’s initial state.</SectionContent>
        <Container>
          <MenuSection>
            <Menu>
              <MenuItem>
                <Icon>
                  <MenuIcon />
                </Icon>
                <span>Menu</span>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <img src="https://img.icons8.com/ios/50/000000/airplane-take-off.png" alt="Flights" />
                </Icon>
                <span>Flights</span>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <img src="https://img.icons8.com/ios/50/000000/car--v2.png" alt="Car Rental" />
                </Icon>
                <span>Car Rental</span>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <img src="https://img.icons8.com/ios/50/000000/globe--v2.png" alt="Explore" />
                </Icon>
                <span>Explore</span>
              </MenuItem>
            </Menu>
            <Note>
              <NoteIcon>
                <img src="https://img.icons8.com/ios/50/4caf50/ok.png" alt="Check mark" />
              </NoteIcon>
              <span>The color contrast is 21:1 ratio, passing accessibility requirements and is easier to read for all users.</span>
            </Note>
          </MenuSection>
          <ComparisonSection>
            <ComparisonMenu>
              <MenuItem>
                <Icon>
                  <MenuIcon />
                </Icon>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <img src="https://img.icons8.com/ios/50/000000/airplane-take-off.png" alt="Flights" />
                </Icon>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <img src="https://img.icons8.com/ios/50/000000/car--v2.png" alt="Car Rental" />
                </Icon>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <img src="https://img.icons8.com/ios/50/000000/globe--v2.png" alt="Explore" />
                </Icon>
              </MenuItem>
            </ComparisonMenu>
            <Note>
              <NoteIcon>
                <img src="https://img.icons8.com/ios/50/ff3e3e/no-entry.png" alt="No Entry" />
              </NoteIcon>
              <span>Many sites collapse the navigation menu by default and use icons to help with navigation. Avoid collapsing the menu initially, and give the user the option to close it if they prefer.</span>
            </Note>
          </ComparisonSection>
        </Container>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Orient the User</SectionTitle>
        <SectionContent>Match links and menu labels to the page the user will be navigating to. Consider adding breadcrumbs and page titles; ensure URLs and page titles are consistent with what the user expects to see.</SectionContent>
        <ImagePlaceholder>[image example]</ImagePlaceholder>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Navigation</SectionTitle>
        <SectionContent>When applicable, allow for back and forward buttons. This allows for options if one forgets something on the previous page or makes a mistake, allowing for reduction of user error. Avoid deep navigation hierarchies. Keeping menus shallow, two labels deep at the most will make navigating the site easier.</SectionContent>
      </Section>
      <HorizontalRule />
      <Section>
        <SectionTitle>Understandability</SectionTitle>
        <SectionContent>Use common language that is easy to understand. Avoid technical or industry jargon. Consider using familiar terms that are rooted more in real life than digital.</SectionContent>
        <ImagePlaceholder>[image example]</ImagePlaceholder>
      </Section>
    </PageContainer>
  );
};

export default CognitiveGuidelines;
