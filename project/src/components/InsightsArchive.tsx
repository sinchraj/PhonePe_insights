import { useState } from 'react';
import { Check } from 'lucide-react';
import { WeeklyInsight, MonthlyInsight } from '../types/insights';
import { weeklyInsights, monthlyInsights } from '../data/insights';
import { InsightOverlay } from './InsightOverlay';
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

export function InsightsArchive() {
  const [selectedInsight, setSelectedInsight] = useState<WeeklyInsight | MonthlyInsight | null>(null);
  const [showInsightOverlay, setShowInsightOverlay] = useState(false);

  const handleInsightClick = (insight: WeeklyInsight | MonthlyInsight) => {
    setSelectedInsight(insight);
    setShowInsightOverlay(true);
  };

  const getInsightsForOverlay = () => {
    if (!selectedInsight) return [];
    
    if ('weeklyInsights' in selectedInsight) {
      // Monthly insight - use monthly insights if available, otherwise combine weekly insights
      if (selectedInsight.insights && selectedInsight.insights.length > 0) {
        return selectedInsight.insights;
      }
      return selectedInsight.weeklyInsights.flatMap((w: WeeklyInsight) => w.insights);
    } else {
      // Weekly insight
      return selectedInsight.insights;
    }
  };

  const getCategoryIcon = (insights: any[]) => {
    if (!insights || insights.length === 0) return foodImg;
    
    // Check if this is a monthly insight with illustration
    const firstInsight = insights[0];
    if (firstInsight && firstInsight.type === 'monthly' && firstInsight.illustration) {
      switch (firstInsight.illustration) {
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
    
    // Get the dominant category by frequency
    const categories = insights.map(i => i.category || i.type);
    const categoryCount = categories.reduce((acc, cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const dominantCategory = Object.entries(categoryCount)
      .sort(([,a], [,b]) => (b as number) - (a as number))[0][0];
    
    // Map by category first
    switch (dominantCategory) {
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
      // Fall back to type-based mapping
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
  };

  const getWeekTitle = (weeklyInsight: WeeklyInsight) => {
    // Use the title directly from the data since it's already formatted correctly
    return weeklyInsight.title;
  };

  if (monthlyInsights.length === 0 && weeklyInsights.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <div className="text-6xl mb-4">😴</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Check back next week</h3>
        <p className="text-gray-500 text-center">Your insights will appear here once you have some spending activity</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f0ff] min-h-full">
      <div className="px-4 py-6 space-y-4">
        {/* Monthly Master Card - Pinned to top */}
        {monthlyInsights.map((monthlyInsight) => (
          <div 
            key={monthlyInsight.id}
            onClick={() => handleInsightClick(monthlyInsight)}
            className="bg-gradient-to-br from-[#5f259f] to-[#8b5cf6] rounded-xl p-6 text-white shadow-lg shadow-purple-500/20 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-xl font-bold mb-1">February: Monthly Unlocked</h2>
                <p className="text-purple-100 text-sm">Premium insights available</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            
            <p className="text-purple-100 mb-4">{monthlyInsight.summary}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-purple-200">{monthlyInsight.totalTransactions || 112} transactions</span>
                <span className="text-purple-200">•</span>
                <span className="text-purple-200">5 key insights</span>
              </div>
              <div className="text-purple-200 text-sm font-medium">Tap to explore</div>
            </div>
          </div>
        ))}

        {/* Weekly Log - Vertical List */}
        <div className="space-y-3">
          {weeklyInsights.map((weeklyInsight) => (
            <div 
              key={weeklyInsight.id}
              onClick={() => handleInsightClick(weeklyInsight)}
              className="bg-white rounded-xl p-4 border border-[#e6e6e6] cursor-pointer transform transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                {/* Left Column - Category Icon */}
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src={getCategoryIcon(weeklyInsight.insights)}
                    alt="Category"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                
                {/* Right Column - Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-[#333333] text-base">
                      {getWeekTitle(weeklyInsight)}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Check className="w-3 h-3" />
                      <span>Seen</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{weeklyInsight.summary}</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {weeklyInsight.insights.slice(0, 3).map((insight) => (
                        <div 
                          key={insight.id}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                            insight.type === 'food' ? 'bg-orange-100 text-orange-600' :
                            insight.type === 'shopping' ? 'bg-pink-100 text-pink-600' :
                            insight.type === 'travel' ? 'bg-blue-100 text-blue-600' :
                            'bg-green-100 text-green-600'
                          }`}
                        >
                          {insight.type.charAt(0).toUpperCase()}
                        </div>
                      ))}
                      {weeklyInsight.insights.length > 3 && (
                        <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-medium">
                          +{weeklyInsight.insights.length - 3}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {weeklyInsight.insights.length} insights
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insight Overlay */}
      {showInsightOverlay && selectedInsight && (
        <InsightOverlay
          insights={getInsightsForOverlay()}
          onClose={() => setShowInsightOverlay(false)}
          onMarkSeen={() => {}}
        />
      )}
    </div>
  );
}