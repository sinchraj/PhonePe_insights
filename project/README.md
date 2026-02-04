# PhonePe-Style Financial Insights App

A React + TypeScript application that mimics the PhonePe interface with financial insights and history tracking.

## Features

### 🏠 Home Screen
- **PhonePe-inspired design** with clean white background
- **Money Transfer actions** with purple gradient buttons
- **Promotional cards** with horizontal scrolling
- **Recharge & Bills** section with service icons
- **Loans section** with call-to-action
- **Bottom navigation** with floating center button

### 📊 Insights System
- **Weekly insights** that track spending patterns
- **Monthly insights** that aggregate 4 weekly insights
- **Interactive story format** with expandable details
- **Feedback system** (Spot on / Miss buttons)
- **Swipeable interface** for navigation

### 📱 History Page
- **Weekly insights** organized by date ranges
- **Monthly insights** with aggregated data
- **Search functionality** for finding specific insights
- **Visual indicators** for insight types (Food, Shopping, Travel, Gym)
- **Replay functionality** to view past insights

## Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Mobile-first responsive design**

## Data Structure

### Insights
- Individual insights with timestamps, amounts, and categories
- Support for Food, Shopping, Travel, and Gym categories
- Expandable details and user feedback

### Weekly Insights
- Aggregate 7 days of insights
- Summary text and total amounts
- Date range tracking

### Monthly Insights
- Combine 4 weekly insights
- Top categories analysis
- Total spending summaries

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the app.

## Navigation

- **Home**: Main PhonePe-style interface
- **History**: View past weekly and monthly insights
- **Insights Bell**: Access current week's insights

## Future Enhancements

- Real transaction data integration
- Push notifications for new insights
- Advanced analytics and trends
- Export functionality
- User preferences and settings