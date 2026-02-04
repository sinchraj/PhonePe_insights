import { useState } from 'react';
import { Search, Filter, X, Repeat } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'paid' | 'payment' | 'received';
  recipient: string;
  amount: number;
  time: string;
  icon: string;
  category?: string;
}

const sampleTransactions: Transaction[] = [
  {
    id: '1',
    type: 'paid',
    recipient: 'SUNILKUMAR N S',
    amount: 92,
    time: '5 hours ago',
    icon: '↗',
    category: 'Transfer'
  },
  {
    id: '2',
    type: 'payment',
    recipient: 'Jar Gold',
    amount: 10,
    time: '8 hours ago',
    icon: '🏔️',
    category: 'Investment'
  },
  {
    id: '3',
    type: 'paid',
    recipient: 'SRIDHAR S R',
    amount: 80,
    time: '1 day ago',
    icon: '↗',
    category: 'Transfer'
  },
  {
    id: '4',
    type: 'paid',
    recipient: 'Swiggy',
    amount: 245,
    time: '2 days ago',
    icon: '🍽️',
    category: 'Food'
  },
  {
    id: '5',
    type: 'received',
    recipient: 'AMIT SHARMA',
    amount: 500,
    time: '3 days ago',
    icon: '↙',
    category: 'Transfer'
  }
];

export function TransactionHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPromo, setShowPromo] = useState(true);

  const filteredTransactions = sampleTransactions.filter(transaction =>
    transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-full">
      {/* My Statements Button */}
      <div className="px-4 pt-4 pb-2">
        <button className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm border border-gray-100 w-full">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-sm">📄</span>
          </div>
          <span className="font-medium text-gray-900">My Statements</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-100"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Promo Card */}
      {showPromo && (
        <div className="px-4 pb-4">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-4 text-white relative overflow-hidden">
            <button 
              onClick={() => setShowPromo(false)}
              className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Repeat className="w-5 h-5" />
                  <span className="font-semibold">Refer and earn ₹200</span>
                </div>
                <p className="text-sm opacity-90 mb-3">Invite your friends and family to PhonePe</p>
                <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold text-sm">
                  Invite a friend
                </button>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🎁</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transactions List */}
      <div className="px-4 space-y-3">
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.category === 'Investment' ? 'bg-purple-100' :
                  transaction.category === 'Food' ? 'bg-orange-100' :
                  'bg-gray-100'
                }`}>
                  <span className="text-lg">{transaction.icon}</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 capitalize">{transaction.type} to</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{transaction.recipient}</h3>
                  <p className="text-sm text-gray-500">{transaction.time}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className={`text-lg font-bold ${
                    transaction.type === 'received' ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {transaction.type === 'received' ? '+' : ''}₹{transaction.amount}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span>Debited from</span>
                  <div className="w-4 h-3 bg-purple-600 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTransactions.length === 0 && searchQuery && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No transactions found</h3>
          <p className="text-gray-500 text-center">Try searching with a different keyword</p>
        </div>
      )}
    </div>
  );
}