export interface Insight {
  id: string;
  type: 'food' | 'shopping' | 'travel' | 'gym' | 'monthly';
  title: string;
  subtitle: string;
  details: string;
  illustration: string;
  date: string; // ISO date string
  amount?: number; // Optional amount for financial insights
  category?: string; // Optional category for grouping
}

export interface WeeklyInsight {
  id: string;
  weekStart: string; // ISO date string for start of week
  weekEnd: string; // ISO date string for end of week
  title: string;
  insights: Insight[];
  summary: string;
}

export interface MonthlyInsight {
  id: string;
  month: string; // Format: "2024-02" 
  title: string;
  weeklyInsights: WeeklyInsight[];
  insights?: Insight[]; // Monthly-specific insights (5 slides)
  summary: string;
  totalAmount?: number;
  totalTransactions?: number;
  topCategories: { category: string; amount: number; count: number }[];
}
