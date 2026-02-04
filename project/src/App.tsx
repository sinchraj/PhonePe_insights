import { useState } from 'react';
import { MobileViewport } from './components/MobileViewport';
import { HomeScreen } from './components/HomeScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { InsightOverlay } from './components/InsightOverlay';
import { insights } from './data/insights';

type Screen = 'home' | 'history';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showInsights, setShowInsights] = useState(false);
  const [hasUnseenInsights, setHasUnseenInsights] = useState(true);

  const handleInsightClick = () => {
    setShowInsights(true);
  };

  const handleCloseInsights = () => {
    setShowInsights(false);
  };

  const handleMarkSeen = () => {
    setHasUnseenInsights(false);
  };

  const handleHistoryClick = () => {
    setCurrentScreen('history');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <MobileViewport>
      {currentScreen === 'home' && (
        <HomeScreen
          hasUnseenInsights={hasUnseenInsights}
          onInsightClick={handleInsightClick}
          onHistoryClick={handleHistoryClick}
        />
      )}
      
      {currentScreen === 'history' && (
        <HistoryScreen onBack={handleBackToHome} />
      )}
      
      {showInsights && (
        <InsightOverlay
          insights={insights}
          onClose={handleCloseInsights}
          onMarkSeen={handleMarkSeen}
        />
      )}
    </MobileViewport>
  );
}

export default App;
