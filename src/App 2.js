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
  margin-left: 250px; /* Adjust this value based on your sidebar width */
  padding: 20px;
  width: calc(100% - 250px);
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
