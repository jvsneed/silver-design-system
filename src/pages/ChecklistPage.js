import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 20px;
  justify-content: center;
`;

const PageTitle = styled.h1`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
`;
const PageDescription = styled.p`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const Accordion = styled.div`
  width: 100%; 
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
`;

const AccordionSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey}; /* Thin border between sections */
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 15px 20px;
  text-align: left;
  background: transparent;
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.third};
    color: black;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  margin: 1px 0 10px 20px; // Remove top margin to avoid spacing between heading and description
`;

const Icon = styled.span`
  font-size: 1.5rem;
`;

const AccordionContent = styled.div`
  padding: 10px 20px;
  background: #f9f9f9;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ChecklistItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

function ChecklistPage() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: "1. Visibility of system status",
      description: "The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time. When users know the current system status, they learn the outcome of their prior interactions and determine next steps. Predictable interactions create trust in the product as well as the brand.",
      items: [
        "Does the system provide immediate feedback after an action is taken such as a button press or form submission?",
        "Are notifications or messages displayed to confirm completed actions? Example: Your changes have been saved",
        "Are status messages written in clear, simple language without technical jargon?",
        "Are status messages easy to read, using a font size, color, and contrast that is accessible for seniors?",
        "Is the placement of status indicators intuitive and easily noticeable or near the action that triggered the feedback?"
      ]
    },
    {
      title: "2. Match between the system and the real world",
      description: "The design should speak the users' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon. Follow real-world conventions, making information appear in a natural and logical order.",
      items: [
        "Are terms and phrases used in the interface familiar and easily understood by seniors?",
        "Are technical or industry-specific jargon avoided or clearly explained if necessary?",
        "Are real-world metaphor, analogies, and icons used where applicable, for example, trash icon for a delete function?",
        "Does the system follow a logical and natural order of tasks as they would occur in the real world? Are steps in a process clearly sequenced?",
        "Are any necessary real-world references or examples provided to aid understanding? Example: This is like filling out a paper form",
        "Are sentences kept short and straightforward, avoiding complex structures and ambiguous terms?",
        "Is active voice used to make instructions clear and direct? Example: \"Enter your name\" instead of \"Your name should be entered here\""
      ]
    },
    {
      title: "3. User control and freedom",
      description: "Users often perform actions by mistake. They need a clearly marked \"emergency exit\" to leave the unwanted action without having to go through an extended process.",
      items: [
        "Can users easily undo and redo actions, example, using \"Undo\" and \"Redo\" or \"Back\" buttons?",
        "Can users easily exit or cancel actions at any point (\"Cancel\" buttons)?",
        "Can users freely navigate to different sections without losing their place (breadcrumb navigation, back buttons)?",
        "Are confirmations clear and concise, explaining the consequences of the action?"
      ]
    },
    {
    title: "4. Consistency and standards",
    description: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.",
    items: [
      "Are the same terms and labels used consistently throughout the interface? Example: \"Submit\" always used instead of sometimes \"Submit\" and sometimes \"Send\"",
      "Are fonts, colors, and styles used consistently across the entire interface?",
      "Are icons and symbols used consistently, with each icon representing the same function or concept in every context?",
      "Are page layouts consistent across different sections of the interface? Example: navigation menus in the same place on every page",
      "Do interactive elements (e.g., buttons, links) behave consistently? Example: all clickable items change color on hover",
      "Are error messages and feedback provided in a consistent manner?",
      "Does the interface adhere to accessibility standards (e.g., WCAG) to ensure it is usable by seniors with varying abilities?",
      "Are text and background colors chosen to meet contrast standards, making content readable?"
    ]
  },
  {
    title: "5. Error prevention",
    description: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.",
    items: [
      "Are the same terms and labels used consistently throughout the interface? Example: \"Submit\" always used instead of sometimes \"Submit\" and sometimes \"Send\"",
      "Are fonts, colors, and styles used consistently across the entire interface?",
      "Are icons and symbols used consistently, with each icon representing the same function or concept in every context?",
      "Are page layouts consistent across different sections of the interface? Example: navigation menus in the same place on every page",
      "Do interactive elements (e.g., buttons, links) behave consistently? Example: all clickable items change color on hover",
      "Are error messages and feedback provided in a consistent manner?",
      "Does the interface adhere to accessibility standards (e.g., WCAG) to ensure it is usable by seniors with varying abilities?",
      "Are text and background colors chosen to meet contrast standards, making content readable?"
    ]
  }
  ];

  return (
    <PageContainer>
      <div style={{ width: '80%' }}>
        <PageTitle>Design Checklist</PageTitle>
        <PageDescription>This checklist is created to assist designers in evaluating prototypes, focusing on senior users. It incorporates principles from the Nielsen Norman Group's design heuristics, accessibility best practices, and research-backed guidelines tailored to support senior users. By using this checklist, you can ensure that your designs are intuitive, accessible, and user-friendly, meeting the needs of senior individuals. </PageDescription>
        <Accordion>
          {sections.map((section, index) => (
            <AccordionSection key={index}>
              <AccordionHeader onClick={() => toggleSection(index)}>
                <HeaderTop>
                  {section.title}
                  <Icon>{openSections[index] ? <FaChevronDown /> : <FaChevronRight />}</Icon>
                </HeaderTop>
                <Description>{section.description}</Description>
              </AccordionHeader>
              <AccordionContent isOpen={openSections[index]}>
                {section.items.map((item, itemIndex) => (
                  <ChecklistItem key={itemIndex}>
                    <input type="checkbox" id={`${index}_${itemIndex}`} />
                    <label htmlFor={`${index}_${itemIndex}`}>{item}</label>
                  </ChecklistItem>
                ))}
              </AccordionContent>
            </AccordionSection>
          ))}
        </Accordion>
      </div>
    </PageContainer>
  );
}

export default ChecklistPage;
