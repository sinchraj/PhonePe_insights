import { useState } from 'react';
import { Insight } from '../types/insights';
import foodImg from '../assets/food.png';
import diningImg from '../assets/dining.png';
import shoppingClothesImg from '../assets/shopping_clothes.png';
import airplaneImg from '../assets/airplane.png';
import gymImg from '../assets/gym.png';
import quickcomImg from '../assets/quickcom.png';
import billsImg from '../assets/bills.png';
import autoImg from '../assets/auto.png';
import cashTransfersImg from '../assets/cash_transfers.png';
import vibesImg from '../assets/vibes.png';

interface InsightStoryProps {
  insight: Insight;
  onFeedback: (feedback: 'spot_on' | 'miss') => void;
  selectedFeedback: 'spot_on' | 'miss' | null;
}

export function InsightStory({ insight, onFeedback, selectedFeedback }: InsightStoryProps) {
  const [expanded, setExpanded] = useState(false);

  const getInsightImage = (type: string, category?: string, illustration?: string) => {
    // Handle monthly insights with specific illustrations
    if (type === 'monthly') {
      switch (illustration) {
        case 'sparkle':
          return vibesImg;
        case 'lightning':
          return quickcomImg;
        case 'hearts':
          return cashTransfersImg;
        case 'wifi':
          return billsImg;
        case 'airplane':
          return airplaneImg;
        default:
          return vibesImg;
      }
    }
    
    // Map by category first, then fall back to type
    switch (category) {
      case 'Quick Commerce':
        return quickcomImg;
      case 'Daily Commute':
        return autoImg;
      case 'Bills & Utilities':
        return gymImg;
      case 'Transfers':
        return cashTransfersImg;
      case 'Travel & Rides':
        return airplaneImg;
      case 'Subscriptions':
        return gymImg;
      case 'Food & Dining':
        return diningImg;
      default:
        // Fall back to type-based mapping
        switch (type) {
          case 'food':
            return foodImg;
          case 'shopping':
            return shoppingClothesImg;
          case 'travel':
            return airplaneImg;
          case 'gym':
            return gymImg;
          default:
            return foodImg;
        }
    }
  };

  const getQuirkyContent = (type: string, insight?: Insight) => {
    // For monthly insights, use the data directly
    if (type === 'monthly' && insight) {
      return {
        title: insight.title,
        subtitle: insight.subtitle,
        details: insight.details
      };
    }
    
    switch (type) {
      case 'food':
        return {
          title: "Comfort food vibes this week 🍜",
          subtitle: "Your taste buds had some adventures",
          details: "4 delicious orders this week! Looks like you discovered some great late-night spots. Food is one of life's pleasures!"
        };
      case 'shopping':
        return {
          title: "You found some great deals 🛍️",
          subtitle: "Smart shopping moves detected",
          details: "6 purchases this week - you've been exploring and treating yourself well. Everyone deserves nice things!"
        };
      case 'travel':
        return {
          title: "Adventure mode activated ✈️",
          subtitle: "Making moves around the city",
          details: "Evening rides and spontaneous trips show you're living life to the fullest. Keep exploring!"
        };
      case 'gym':
        return {
          title: "Fitness goals in progress 💪",
          subtitle: "You're building healthy habits",
          details: "4 gym sessions this week! Your commitment to health and wellness is inspiring. Keep up the great work!"
        };
      default:
        return {
          title: "Interesting patterns this week 📊",
          subtitle: "Your spending tells a story",
          details: "We noticed some interesting patterns in your spending this week."
        };
    }
  };

  const quirkyContent = getQuirkyContent(insight.type, insight);

  return (
    <div className="h-full flex flex-col items-center justify-between py-12 px-6">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-lg">
            <img 
              src={getInsightImage(insight.type, insight.category, insight.illustration)}
              alt={insight.category || insight.type}
              className="w-32 h-32 object-contain"
            />
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            {quirkyContent.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {quirkyContent.subtitle}
          </p>

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold mt-4 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-all duration-200"
            >
              Tell me more 📖
            </button>
          )}

          {expanded && (
            <div className="mt-6 p-4 bg-gray-50 rounded-2xl animate-expand">
              <p className="text-base text-gray-700 leading-relaxed">
                {quirkyContent.details}
              </p>
            </div>
          )}
        </div>

        {/* Feedback Buttons */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <button
            onClick={() => onFeedback('spot_on')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 ${
              selectedFeedback === 'spot_on'
                ? 'bg-green-500 text-white shadow-xl scale-105 shadow-green-500/30'
                : 'bg-green-50 text-green-600 hover:bg-green-100 hover:scale-105 border-2 border-green-200'
            }`}
          >
            <span className="text-xl">🎯</span>
            Spot on
          </button>
          <button
            onClick={() => onFeedback('miss')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 ${
              selectedFeedback === 'miss'
                ? 'bg-orange-500 text-white shadow-xl scale-105 shadow-orange-500/30'
                : 'bg-orange-50 text-orange-600 hover:bg-orange-100 hover:scale-105 border-2 border-orange-200'
            }`}
          >
            <span className="text-xl">🤔</span>
            Not quite
          </button>
        </div>
      </div>
    </div>
  );
}
