import { Phone, Building2, ArrowDown, Smartphone, Car, Lightbulb, Wallet, Home, Search, Grid3x3, Bell, Clock, ChevronRight, Zap, CreditCard, Repeat, DollarSign } from 'lucide-react';
import { InsightIcon } from './InsightIcon';

interface HomeScreenProps {
  hasUnseenInsights: boolean;
  onInsightClick: () => void;
  onHistoryClick: () => void;
}

export function HomeScreen({ hasUnseenInsights, onInsightClick, onHistoryClick }: HomeScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="bg-white sticky top-0 z-40 pt-3 pb-4 px-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center relative shadow-sm">
                <span className="text-xs font-bold text-black">QR</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600 text-lg">?</span>
              </button>
              <InsightIcon hasUnseen={hasUnseenInsights} onClick={onInsightClick} />
            </div>
          </div>
        </div>

        {/* Credit Card Promo */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mx-4 rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-12 h-12 bg-pink-400 rounded-lg transform -rotate-12" />
            <div className="absolute top-8 right-8 w-8 h-8 bg-purple-400 rounded-lg transform rotate-45" />
            <div className="absolute bottom-4 left-12 w-6 h-6 bg-yellow-400 rounded-sm transform rotate-12" />
            <div className="absolute bottom-8 right-4 w-10 h-10 bg-blue-400 rounded-lg transform -rotate-6" />
          </div>
          <div className="relative z-10">
            <p className="text-sm text-white/80 mb-1">Get Axis Bank My Zone Credit Card</p>
            <h2 className="text-2xl font-bold text-white mb-4">It's Lifetime free now!</h2>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Apply Here <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-2 pb-4">
            <div className="w-16 h-20 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-lg transform -rotate-12 backdrop-blur-sm" />
            <div className="w-16 h-24 bg-gradient-to-br from-pink-600/50 to-purple-600/50 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-gray-800" />
              </div>
            </div>
            <div className="w-16 h-20 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-lg transform rotate-12 backdrop-blur-sm" />
          </div>
        </div>

        {/* Money Transfers */}
        <div className="px-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Money Transfers</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2 relative">
                <Phone className="w-7 h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">To Mobile Number</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">To Bank & Self A/c</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2">
                <ArrowDown className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">Receive Money</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">Check Balance</span>
            </div>
          </div>
        </div>

        {/* Promo Cards */}
        <div className="px-4 mb-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex-shrink-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-4 min-w-[280px] text-white">
              <div className="flex items-center gap-2 mb-2">
                <Repeat className="w-5 h-5" />
                <span className="text-sm font-medium">Refer → ₹200</span>
              </div>
              <p className="text-sm opacity-90 mb-3">Invite your friends and family to PhonePe</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold text-sm">
                Invite a friend
              </button>
            </div>
            
            <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 min-w-[280px] text-white">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Get FREE credit score</span>
              </div>
              <p className="text-sm opacity-90 mb-3">Check your credit score for free</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
                Check Now
              </button>
            </div>
          </div>
        </div>

        {/* Recharge & Bills */}
        <div className="px-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recharge & Bills</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
                <Smartphone className="w-7 h-7 text-gray-700" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">Mobile Recharge</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
                <Car className="w-7 h-7 text-gray-700" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">Fastag Recharge</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
                <Lightbulb className="w-7 h-7 text-gray-700" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">Electricity Bill</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-2">
                <Wallet className="w-7 h-7 text-gray-700" />
              </div>
              <span className="text-xs text-gray-700 text-center font-medium">Loan Repayment</span>
            </div>
          </div>
          
          <div className="mt-4 bg-red-50 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-sm text-gray-700">Get new SIM. Delivery Free!</span>
            </div>
            <button className="text-red-600 font-semibold text-sm">More →</button>
          </div>
        </div>

        {/* Loans */}
        <div className="px-4 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Loans</h3>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Personal Loan</h4>
                <p className="text-sm text-gray-600">Get instant approval</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="flex-shrink-0 bg-white border-t border-gray-100 px-4 py-3 shadow-lg shadow-black/5">
        <div className="flex items-center justify-around max-w-sm mx-auto">
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors">
            <Home className="w-6 h-6 text-purple-600" />
            <span className="text-xs text-purple-600 font-medium">Home</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Search className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Search</span>
          </button>
          
          <button className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center -mt-6 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-200 active:scale-95">
            <Grid3x3 className="w-7 h-7 text-white" />
          </button>
          
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors relative">
            <Bell className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Alerts</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </button>
          
          <button 
            onClick={onHistoryClick}
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Clock className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">History</span>
          </button>
        </div>
      </div>
    </div>
  );
}