export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  level: "beginner" | "advanced";
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "what-is-digital-marketing",
    title: "What Is Digital Marketing and Why Does It Matter?",
    excerpt: "A plain-language introduction to digital marketing for business owners who want to understand the basics before investing.",
    category: "Marketing Basics",
    level: "beginner",
    readTime: "5 min",
    tags: ["Marketing", "Basics"],
  },
  {
    id: "first-100-customers",
    title: "How to Get Your First 100 Customers",
    excerpt: "Practical strategies for early-stage businesses to attract their first customers without a massive budget.",
    category: "Customer Growth",
    level: "beginner",
    readTime: "7 min",
    tags: ["Growth", "Startup"],
  },
  {
    id: "google-maps-guide",
    title: "Google Maps Optimization: The Complete Guide for Local Businesses",
    excerpt: "Step-by-step guide to getting your business found on Google Maps and building a strong review profile.",
    category: "Local Marketing",
    level: "beginner",
    readTime: "8 min",
    tags: ["Google", "Local", "Reviews"],
  },
  {
    id: "tourism-marketing-zambia",
    title: "Tourism Marketing in Zambia: What Actually Works",
    excerpt: "Insights from real campaigns — what drives bookings for lodges, tours, and hospitality businesses in Zambia.",
    category: "Tourism",
    level: "advanced",
    readTime: "10 min",
    tags: ["Tourism", "Zambia", "Strategy"],
  },
  {
    id: "restaurant-growth-playbook",
    title: "The Restaurant Growth Playbook",
    excerpt: "How restaurants can use digital marketing, reviews, and local visibility to fill more seats consistently.",
    category: "Restaurant Growth",
    level: "beginner",
    readTime: "6 min",
    tags: ["Restaurant", "Local", "Growth"],
  },
  {
    id: "creator-economy-explained",
    title: "The Creator Economy: How to Turn Content Into Income",
    excerpt: "Understanding how creators build sustainable businesses — and how Diyama supports that journey.",
    category: "Creator Economy",
    level: "beginner",
    readTime: "6 min",
    tags: ["Creator", "Income", "Content"],
  },
  {
    id: "web3-opportunities",
    title: "Onchain Opportunities: A Practical Guide for African Builders",
    excerpt: "What Web3 and onchain opportunities look like for entrepreneurs and communities in Africa.",
    category: "Web3 & Onchain",
    level: "advanced",
    readTime: "9 min",
    tags: ["Web3", "Africa", "Opportunity"],
  },
  {
    id: "how-diyama-thinks",
    title: "How Diyama Thinks: Our Approach to Business Growth",
    excerpt: "A look inside our methodology — why we prioritize clarity, practical action, and genuine partnership.",
    category: "Diyama Way",
    level: "beginner",
    readTime: "5 min",
    tags: ["Diyama", "Philosophy", "Strategy"],
  },
];
