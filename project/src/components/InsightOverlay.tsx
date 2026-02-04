import { useState, useEffect, useRef } from 'react';
import { Insight } from '../types/insights';
import { InsightStory } from './InsightStory';

interface InsightOverlayProps {
  insights: Insight[];
  onClose: () => void;
  onMarkSeen: () => void;
}

export function InsightOverlay({ insights, onClose, onMarkSeen }: InsightOverlayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<Record<string, 'spot_on' | 'miss' | null>>({});
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentInsight = insights[currentIndex];

  useEffect(() => {
    if (currentIndex === insights.length - 1) {
      onMarkSeen();
    }
  }, [currentIndex, insights.length, onMarkSeen]);

  const handleFeedback = (insightId: string, feedbackValue: 'spot_on' | 'miss') => {
    setFeedback(prev => ({ ...prev, [insightId]: feedbackValue }));
  };

  const goToNext = () => {
    if (currentIndex < insights.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / 3) {
      goToPrevious();
    } else if (x > (2 * width) / 3) {
      goToNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };

    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;

    if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 50) {
      onClose();
    }

    setTouchStart(null);
  };

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 z-50 animate-fade-in"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-full flex flex-col">
        <div className="flex gap-1 p-4 pb-2">
          {insights.map((_, index) => (
            <div
              key={index}
              className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <div
                className={`h-full bg-purple-600 transition-all duration-300 ${
                  index < currentIndex
                    ? 'w-full'
                    : index === currentIndex
                    ? 'w-full animate-progress'
                    : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex-1 overflow-hidden">
          <InsightStory
            insight={currentInsight}
            onFeedback={(feedbackValue) => handleFeedback(currentInsight.id, feedbackValue)}
            selectedFeedback={feedback[currentInsight.id] || null}
          />
        </div>
      </div>
    </div>
  );
}
