import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { TransactionHistory } from './TransactionHistory';
import { InsightsArchive } from './InsightsArchive';

interface HistoryScreenProps {
  onBack: () => void;
}

export function HistoryScreen({ onBack }: HistoryScreenProps) {
  const [activeTab, setActiveTab] = useState<'transactions' | 'insights'>('transactions');

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 rotate-180 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">History</h1>
          </div>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-600 text-lg">?</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex px-4 pb-3">
          <div className="flex bg-gray-100 rounded-lg p-1 w-full">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'transactions'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'insights'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Insights
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {activeTab === 'transactions' && <TransactionHistory />}
        {activeTab === 'insights' && <InsightsArchive />}
      </div>
    </div>
  );
}