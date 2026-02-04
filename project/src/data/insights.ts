import { Insight, WeeklyInsight, MonthlyInsight } from '../types/insights';

// Week 1: Feb 01–07: Opening Week
const week1Insights: Insight[] = [
  {
    id: 'quick-commerce-1',
    type: 'shopping',
    title: 'The 10-minute saves ⚡',
    subtitle: 'Quick commerce became your best friend',
    details: '8 smart orders from Zepto and Blinkit this week. Those midnight snack runs and morning coffee emergencies? You turned convenience into an art form!',
    illustration: 'shopping',
    date: '2026-02-03T22:30:00Z',
    category: 'Quick Commerce'
  },
  {
    id: 'commute-1',
    type: 'travel',
    title: 'Navigating the Bangalore crawl 🛺',
    subtitle: 'Auto rides kept you moving smoothly',
    details: '12 rides that got you where you needed to be. Bangalore traffic is legendary, but your navigation game is even stronger!',
    illustration: 'travel',
    date: '2026-02-05T09:15:00Z',
    category: 'Daily Commute'
  },
  {
    id: 'food-1',
    type: 'food',
    title: 'The festive mood started early 🥘',
    subtitle: 'Food adventures were calling your name',
    details: '5 delicious discoveries this week. February started with some serious foodie exploration - you know how to celebrate life through great meals!',
    illustration: 'food',
    date: '2026-02-07T20:00:00Z',
    category: 'Food & Dining'
  }
];

// Week 2: Feb 08–14: Mid-Month Update
const week2Insights: Insight[] = [
  {
    id: 'bills-1',
    type: 'gym', // Using gym type for bills category
    title: 'The background hum of life 📱',
    subtitle: 'Your essentials stayed perfectly organized',
    details: 'WiFi, mobile, and rent - all the important stuff taken care of seamlessly. When your foundation is solid, everything else flows beautifully!',
    illustration: 'gym',
    date: '2026-02-10T10:00:00Z',
    category: 'Bills & Utilities'
  },
  {
    id: 'transfers-1',
    type: 'travel', // Using travel type for transfers
    title: 'Keeping it close to home 💜',
    subtitle: 'Your circle felt the love this week',
    details: '6 thoughtful transfers to friends and family. Whether splitting bills or helping out, you keep your relationships strong and meaningful!',
    illustration: 'travel',
    date: '2026-02-12T16:30:00Z',
    category: 'Transfers'
  },
  {
    id: 'quick-commerce-2',
    type: 'shopping',
    title: 'Stocking up the pantry 🛒',
    subtitle: 'Smart planning in action',
    details: 'Strategic bulk orders from Blinkit this week. Sometimes buying smart and buying ahead is the real life hack that saves time and energy!',
    illustration: 'shopping',
    date: '2026-02-14T11:45:00Z',
    category: 'Quick Commerce'
  }
];

// Week 3: Feb 15–21: Peak Week
const week3Insights: Insight[] = [
  {
    id: 'travel-1',
    type: 'travel',
    title: 'Full-on explorer mode ✈️',
    subtitle: 'Adventure was definitely the theme',
    details: '15 rides and trips that turned this week into something special. You transformed Bangalore into your personal playground - that\'s the spirit of living fully!',
    illustration: 'travel',
    date: '2026-02-18T14:20:00Z',
    category: 'Travel & Rides'
  },
  {
    id: 'food-2',
    type: 'food',
    title: 'Out-and-about dining 🍜',
    subtitle: 'Your foodie adventures reached new heights',
    details: '9 amazing dining experiences while exploring the city. Good food tastes even better when you\'re discovering new places and making memories!',
    illustration: 'food',
    date: '2026-02-19T19:30:00Z',
    category: 'Food & Dining'
  },
  {
    id: 'quick-commerce-3',
    type: 'shopping',
    title: 'Midnight saves during the adventure 🌙',
    subtitle: 'Even busy weeks need convenience',
    details: '4 perfectly-timed late-night orders that kept your energy up. Quick commerce really proves its worth during your most active weeks!',
    illustration: 'shopping',
    date: '2026-02-21T23:15:00Z',
    category: 'Quick Commerce'
  }
];

// Week 4: Feb 22–28: Closing Week
const week4Insights: Insight[] = [
  {
    id: 'subscriptions-1',
    type: 'gym', // Using gym type for subscriptions
    title: 'The entertainment foundation 🍿',
    subtitle: 'Your digital life investments are on point',
    details: 'Netflix, Spotify, and other subscriptions renewed seamlessly. Your entertainment setup is premium and you absolutely deserve that quality of life!',
    illustration: 'gym',
    date: '2026-02-24T12:00:00Z',
    category: 'Subscriptions'
  },
  {
    id: 'food-3',
    type: 'food',
    title: 'Comfort choices for busy days 🌙',
    subtitle: 'Smart decisions when time was tight',
    details: '7 perfectly-timed food deliveries that made those long days so much easier. Sometimes the best choice is the one that gives you more time for what matters!',
    illustration: 'food',
    date: '2026-02-26T21:45:00Z',
    category: 'Food & Dining'
  },
  {
    id: 'commute-2',
    type: 'travel',
    title: 'Back to your perfect rhythm 🛺',
    subtitle: 'Settling into the flow that works',
    details: '10 smooth commute rides that brought you back to your ideal routine. February ended with you finding that perfect balance between adventure and consistency!',
    illustration: 'travel',
    date: '2026-02-28T08:30:00Z',
    category: 'Daily Commute'
  }
];

// Current insights for the main app (Week 1)
export const insights: Insight[] = week1Insights;

// All weekly insights for February
export const weeklyInsights: WeeklyInsight[] = [
  {
    id: 'week-2026-02-01',
    weekStart: '2026-02-01T00:00:00Z',
    weekEnd: '2026-02-07T23:59:59Z',
    title: 'Feb 01–07: Opening Week',
    insights: week1Insights,
    summary: 'Smart convenience and thoughtful exploration set the perfect tone. The 10-minute saves became your superpower! ⚡'
  },
  {
    id: 'week-2026-02-08',
    weekStart: '2026-02-08T00:00:00Z',
    weekEnd: '2026-02-14T23:59:59Z',
    title: 'Feb 08–14: Mid-Month Update',
    insights: week2Insights,
    summary: 'Your foundation stayed solid while keeping your circle close. Everything important was beautifully organized! 📱'
  },
  {
    id: 'week-2026-02-15',
    weekStart: '2026-02-15T00:00:00Z',
    weekEnd: '2026-02-21T23:59:59Z',
    title: 'Feb 15–21: Peak Week',
    insights: week3Insights,
    summary: 'Pure explorer energy! Travel, dining, and smart convenience made this week absolutely legendary. ✈️'
  },
  {
    id: 'week-2026-02-22',
    weekStart: '2026-02-22T00:00:00Z',
    weekEnd: '2026-02-28T23:59:59Z',
    title: 'Feb 22–28: Closing Week',
    insights: week4Insights,
    summary: 'Quality entertainment and smart comfort choices. You ended February with the perfect balance of adventure and consistency! 🍿'
  }
];

// Monthly insights for February with stress-proof, narrative-first approach
const februaryMonthlyInsights: Insight[] = [
  {
    id: 'monthly-vibe',
    type: 'monthly',
    title: 'This month was high-energy ✨',
    subtitle: 'You balanced the festive rush with your usual Bangalore hustle',
    details: '112 moments that kept your February moving. Your spending rhythm stayed surprisingly consistent - showing you know how to navigate busy times while staying grounded.',
    illustration: 'sparkle',
    date: '2026-02-28T23:59:59Z',
    category: 'High-Energy Month'
  },
  {
    id: 'monthly-convenience',
    type: 'monthly',
    title: 'Convenience was your biggest ally ⚡',
    subtitle: 'Quick commerce and daily rides were your survival tools',
    details: '38 saves against the Bangalore crawl | 14 time-saving Zepto orders. These smart choices helped you navigate the busiest weeks without breaking your flow. Pure survival genius!',
    illustration: 'lightning',
    date: '2026-02-28T23:59:59Z',
    category: 'Convenience Partner'
  },
  {
    id: 'monthly-circles',
    type: 'monthly',
    title: 'Your circle was at the heart of it 💜',
    subtitle: 'Shared moments and connections defined your month',
    details: '45% of your month was spent on shared moments. Between group dinners and helping with rent, your spending shows you\'re the kind of person who invests in people. That\'s beautiful.',
    illustration: 'hearts',
    date: '2026-02-28T23:59:59Z',
    category: 'Sharing Circle'
  },
  {
    id: 'monthly-foundation',
    type: 'monthly',
    title: 'Your foundation stayed steady 📱',
    subtitle: 'The invisible essentials handled themselves perfectly',
    details: '8 essentials handled on autopilot. Your digital life, subscriptions, and bills renewed seamlessly in the background. When the basics are sorted, everything else flows better.',
    illustration: 'wifi',
    date: '2026-02-28T23:59:59Z',
    category: 'Digital Foundation'
  },
  {
    id: 'monthly-peak',
    type: 'monthly',
    title: 'Week 3 was your \'Peak Orbit\' ✈️',
    subtitle: 'This was your furthest week from routine all month',
    details: 'A week defined by moving around and new experiences. Those airport rides and spontaneous plans created memories that will last way longer than the transactions that made them possible.',
    illustration: 'airplane',
    date: '2026-02-28T23:59:59Z',
    category: 'Peak Orbit'
  }
];

// February Monthly Master
export const monthlyInsights: MonthlyInsight[] = [
  {
    id: 'month-2026-02',
    month: '2026-02',
    title: 'February: Monthly Unlocked',
    weeklyInsights: weeklyInsights,
    insights: februaryMonthlyInsights,
    summary: 'February was all about smart choices and meaningful connections ✨ Your rhythm stayed consistent while making room for the people and experiences that matter 💜',
    topCategories: [
      { category: 'Quick Commerce', amount: 0, count: 14 },
      { category: 'Travel & Rides', amount: 0, count: 38 },
      { category: 'Food & Dining', amount: 0, count: 21 },
      { category: 'Bills & Utilities', amount: 0, count: 3 },
      { category: 'Transfers', amount: 0, count: 6 },
      { category: 'Subscriptions', amount: 0, count: 5 }
    ],
    totalTransactions: 112
  }
];
