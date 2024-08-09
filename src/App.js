import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  margin-left:40px;
  width: 100%; /* Default to full width */
  transition: margin-left 0.3s ease, width 0.3s ease;

  @media (min-width: 769px) {
    margin-left: 250px; /* Space for the sidebar on larger screens */
    width: calc(100% - 250px); /* Adjust content width to fit beside the sidebar */
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename="/silver-design-system">
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
