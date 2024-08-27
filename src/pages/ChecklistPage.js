import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './ChecklistPage.css'; // Import the CSS file

function ChecklistPage() {
  const [openSections, setOpenSections] = useState({});
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleAllSections = () => {
    const newState = {};
    sections.forEach((_, index) => {
      newState[index] = !allExpanded;
    });
    setOpenSections(newState);
    setAllExpanded(!allExpanded);
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
        "Are instructions clear and concise, guiding users on how to complete tasks correctly?",
        "Are complex tasks broken down into simple, step-by-step instructions?",
        "Are input fields validated in real-time to prevent errors (e.g., checking email format as it's entered)?",
        "Are clear and specific error messages provided if input is incorrect? Example: Please enter a valid email address",
        "Are dropdowns, radio buttons, or checkboxes used instead of open text fields where possible to limit incorrect entries?",
        "Are input fields clearly labeled with examples to show the correct format? Example:\"MM/DD/YYYY\" for dates",
        "Are buttons and options that are not available or applicable grayed out or hidden to prevent incorrect actions?",
        "Is contextual help provided near input fields and complex tasks to guide users? Examples: tooltips, help icons",
        "Are auditory cues provided for errors to assist users with visual impairments?",
        "Are tutorials, guides, or onboarding available to help users learn how to perform tasks correctly?"
        
      ]
    },
    {
      title: "6. Recognition rather than recall",
      description: "Minimize the user's memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another. Information required to use the design (e.g. field labels or menu items) should be visible or easily retrievable when needed.",
      items: [
        "Are all available options clearly visible to the user? Examples: buttons, menu items",
        "Are labels for buttons and controls descriptive and easily understood? Example: “Upload Photo” instead of “Upload”",
        "Is relevant information provided in the context where it is needed? Example: showing password requirements near the password field",
        "Are dropdown menus and lists used to display choices rather than requiring users to type in their responses?",
        "Are suggestions provided as users type to minimize the need to recall specific terms or items?",
        "Are recent actions or history easily accessible to allow users to pick up where they left off? Example: Recently Viewed Items",
        "Are visual cues and prompts used to indicate the next steps in a process?",
        "Are search and filter functions available to help users quickly find the information they need?"
      ]
    },
    {
      title: "7. Flexibility and efficiency of use",
      description: "Shortcuts — hidden from novice users — may speed up the interaction for the expert user so that the design can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.",
      items: [
        "Are settings easy to find and adjust, enhancing the user experience?",
        "Are keyboard shortcuts or other quick-access options available for experienced users?",
        "Are advanced features accessible but not intrusive, allowing experienced users to streamline their interactions?",
        "Are advanced features and options hidden until needed, keeping the interface clean and simple for novice users?",
        "Are common tasks streamlined to minimize the number of steps required? Example: one-click actions, bulk actions",
        "Does the system remember user preferences and settings, creating a personalized experience?"
      ]
    },
    {
      title: "8. Aesthetic and minimalist design",
      description: "Interfaces should not contain information that is irrelevant or rarely needed. Every extra unit of information in an interface competes with the relevant units of information and diminishes their relative visibility.",
      items: [
        "Is the layout clean and uncluttered, presenting only essential elements?",
        "Are unnecessary graphics, text, and decorative elements minimized to avoid distractions?",
        "Is sufficient whitespace used to separate content and make the interface easier to scan?",
        "Is a clear visual hierarchy established, guiding users' attention to the most important elements first?",
        "Are headings, subheadings, and body text styles consistent and easily distinguishable?",
        "Is a simple and consistent color scheme used throughout the interface?",
        "Are colors used purposefully to highlight important elements and actions without overwhelming the user?",
        "Are fonts easy to read, with appropriate size and spacing for senior users?",
        "Are icons simple, intuitive, and universally recognizable?",
        "Are icons used consistently, with clear labels when necessary to enhance understanding?",
        "Are interface elements and information grouped logically to reduce cognitive load?",
        "Is each element on the interface serving a clear purpose?"
      ]
    },
    {
      title: "9. Help users recognize, diagnose, and recover from errors",
      description: "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
      items: [
        "Do error messages clearly state what went wrong and provide specific guidance on how to fix the issue?",
        "Are error messages written in plain language that users can easily understand, avoiding technical jargon?",
        "Are error messages polite and supportive, encouraging users to correct mistakes without feeling frustrated?",
        "Are error messages displayed prominently and immediately when an error occurs?",
        "Is contextual help available near input fields or complex tasks to assist users in real-time?",
        "Are users able to undo or redo their last action to easily correct mistakes?",
        "Are mechanisms in place to help users recover from errors without starting over (e.g., saving progress, allowing corrections)?",
        "Are users prevented from proceeding with incorrect or incomplete information? Example: disabling the submit button until all required fields are correctly filled",
        "Are visual and auditory cues used to ensure that all users are aware of errors, regardless of their abilities?"
      ]
    },
    {
      title: "10. Help and documentation",
      description: "It’s best if the system doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.",
      items: [
        "Is help and documentation easily accessible from all parts of the interface? Example: a help button or link in the navigation menu",
        "Are help resources available in multiple formats? Example: chat, written guides, videos, FAQs",
        "Are topics covered in a logical order, from basic to advanced?",
        "Is there a search function available within the help documentation to allow users to quickly find specific information?",
        "Is the help content written in simple, clear language that is easy for all users to understand, avoiding technical jargon?"
      ]
    }
  ];
  

  return (
    <div className="page-container">
      <div>
        <h1 className="page-title">Design Checklist</h1>
        <p className="page-description">
          This checklist is created to assist designers in evaluating prototypes, focusing on senior users. It incorporates principles from the Nielsen Norman Group's design heuristics, accessibility best practices, and research-backed guidelines tailored to support senior users. By using this checklist, you can ensure that your designs are intuitive, accessible, and user-friendly, meeting the needs of senior individuals.
        </p>
        <button className="expand-collapse-button" onClick={toggleAllSections}>
          {allExpanded ? 'Collapse All' : 'Expand All'}
        </button>
        <div className="accordion">
          {sections.map((section, index) => (
            <div className="accordion-section" key={index}>
              <button className="accordion-header" onClick={() => toggleSection(index)}>
                <div className="header-top">
                  {section.title}
                  <span className="icon">
                    {openSections[index] ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <p className="description">{section.description}</p>
              </button>
              <div className={`accordion-content ${openSections[index] ? 'is-open' : ''}`}>
                {section.items.map((item, itemIndex) => (
                  <div className="checklist-item" key={itemIndex}>
                    <input type="checkbox" id={`${index}_${itemIndex}`} />
                    <label htmlFor={`${index}_${itemIndex}`}>{item}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChecklistPage;
