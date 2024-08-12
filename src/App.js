import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Changed from BrowserRouter to HashRouter
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import ChecklistPage from './pages/ChecklistPage';
import CognitiveGuidelines from './pages/CognitiveGuidelines';
import DesignGuidelines from './pages/DesignGuidelines';

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.main`
  padding: 20px;
  margin-top: 30px;
  width: 100%; /* Default to full width */
  transition: margin-left 0.3s ease, width 0.3s ease;
  background-color: ${({ isHomePage }) => (isHomePage ? 'lightblue' : 'white')};

  @media (min-width: 769px) {
    margin-left: ${({ isHomePage }) => (isHomePage ? '0' : '250px')}; /* No margin for Home page */
    width: ${({ isHomePage }) => (isHomePage ? '100%' : 'calc(100% - 250px)')}; /* Full width for Home page */
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename=""> {/* Using HashRouter instead of BrowserRouter */}
        <AppContainer>
          <Sidebar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/checklist" element={<ChecklistPage />} />
              <Route path="/guidelines/cognitive" element={<CognitiveGuidelines />} />
              <Route path="/guidelines/design" element={<DesignGuidelines />} />
              <Route path="/guidelines/checklist" element={<ChecklistPage />} />
            </Routes>
          </ContentContainer>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
