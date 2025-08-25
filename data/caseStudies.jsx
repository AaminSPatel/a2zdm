import { FaChartLine, FaClock, FaGlobe, FaImage, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FiAward } from "react-icons/fi";

  export const caseStudies = [
    {
      id: 1,
      slug: "giggle-tree",
      client: "Giggle Tree",
      title:
        "From Invisible to AI-Cited: Google's Recommended Childcare Expert",
      overview:
        "Transformed from digital obscurity to being featured in Google's AI Overview as the authoritative source for childcare business consulting in Australia.",
      image: "/casestudy_giggletree.jpg",
      logo: "/gigglelogo.png",
      website: "https://www.giggletree.com.au",
      challenge:
        "Despite having valuable expertise, Giggle Tree was nearly invisible online - not showing up in search results, with low inconsistent traffic, and unknown to potential clients searching for childcare licensing help.",
      solution:
        "We implemented an AI-optimized SEO strategy combining technical fixes with authority-building content designed to be recognized by both search engines and AI systems. Our approach focused on E-E-A-T signals and question-answering content that Google's AI Overview prioritizes.",
      results: [
        {
          metric: "AI Overview Citation",
          value: "Featured",
          icon: <FiAward />,
        },
        { metric: "Page 1 Rankings", value: "12+", icon: <FaSearch /> },
        { metric: "Organic Traffic", value: "275%", icon: <FaChartLine /> },
        { metric: "Branded Searches", value: "400%", icon: <FaUsers /> },
        { metric: "Lead Quality", value: "190%", icon: <FaShoppingCart /> },
        { metric: "Visibility Time", value: "4 Months", icon: <FaClock /> },
      ],
      strategy: [
        {
          title: "AI-Optimized Content",
          description:
            "Developed expertise-focused content structured for AI comprehension and citation",
        },
        {
          title: "Technical SEO Foundation",
          description:
            "Fixed critical errors and improved crawlability for search systems",
        },
        {
          title: "Authority Signals",
          description:
            "Built authoritative backlinks from niche directories and publications",
        },
        {
          title: "Question-Focused Optimization",
          description:
            "Targeted 'how' and 'why' questions that AI Overviews prioritize",
        },
      ],
      testimonial: {
        quote:
          "Before working with A2ZDM, we knew we had valuable expertise—but no one could find us. In just months, we went from invisible to being cited by Google's AI as a trusted expert!",
        author: "Samantha",
        position: "Founder & CEO, Giggle Tree",
      },
      aiShowcase: {
        query: "childcare business consultant in Australia",
        screenshot: "/giggle2.png",
        impact:
          "Cited by name in Google's AI Overview above directories and high-authority sites",
      },
    },
   {
  id: 2,
  slug: "the-uniform-edit-seo",
  client: "The Uniform Edit",
  title: "How We Helped The Uniform Edit Dominate Google and Double Their Organic Leads in 6 Months",
  category: "SEO Transformation",
  overview: "Discover how The Uniform Edit boosted visibility, ranked nationally for 'corporate uniform suppliers', and doubled leads with SEO in just 6 months.",
  image: "/tue.jpg",
  logo: "/tue.jpg",
  website: "https://www.theuniformedit.com.au",
  challenge: "Despite having premium-quality uniforms and a stylish product line, The Uniform Edit wasn't showing up where customers were searching. Competitors and directories ranked higher, and their beautiful website wasn't SEO-friendly.",
  solution: "We implemented a comprehensive SEO strategy including technical fixes, keyword-rich content creation, local SEO optimization, industry-focused content, and strategic link building to transform their online presence.",
  results: [
    { metric: "Organic Traffic Growth", value: "240%", icon: <FaChartLine /> },
    { metric: "Quote Form Submissions", value: "2.4x", icon: <FaShoppingCart /> },
    { metric: "Top 3 Rankings", value: "12+", icon: <FaSearch /> },
    { metric: "Image Search Rankings", value: "#1", icon: <FaImage /> },
    { metric: "Implementation Time", value: "6 Months", icon: <FaClock /> },
    { metric: "National Ranking", value: "Position 4", icon: <FaGlobe /> }
  ],
  strategy: [
    {
      title: "Technical SEO Foundation",
      description: "Fixed broken links, improved site speed, and added structured data"
    },
    {
      title: "Content Optimization",
      description: "Built keyword-rich pillar pages and optimized service content"
    },
    {
      title: "Local SEO Expansion",
      description: "Created location pages for key cities with local optimization"
    },
    {
      title: "Industry-Focused Content",
      description: "Developed tailored content for hospitality, healthcare, and retail sectors"
    },
    {
      title: "Link Building",
      description: "Earned backlinks from directories and industry forums"
    },
    {
      title: "Performance Tracking",
      description: "Continuous monitoring and refinement using search data"
    }
  ],
  keywordWins: [
    { keyword: "Corporate uniform suppliers", position: 4 },
    { keyword: "Retail store uniforms", position: 2 },
    { keyword: "Chino uniform", position: 2 },
    { keyword: "Hospitality casual uniforms", position: 3 },
    { keyword: "Custom uniform suiting", position: 5 }
  ],
  testimonial: {
    quote: "Our handmade shirting was always second to none—but we needed to be discoverable online. This SEO partnership catapulted us into search success, delivering quality leads month after month, organically.",
    author: "Fiona Anchal",
    position: "Co-founder, The Uniform Edit"
  },
  seoData: {
    metaTitle: "SEO Case Study: The Uniform Edit | Corporate Uniform SEO",
    metaDescription: "Discover how The Uniform Edit boosted visibility, ranked nationally for 'corporate uniform suppliers', and doubled leads with SEO in just 6 months.",
    url: "https://www.a2zdm.com/case-studies/seo-case-study-theuniformedit/",
    altText: [
      "The Uniform Edit SEO case study",
      "Improve SEO Ranking"
    ]
  },
  visualResults: {
    imageRankings: [
      { query: "offices casual uniforms", position: 1 },
      { query: "Uniform supplier Brisbane", featured: true }
    ],
    trafficGraph: "/uniform-edit-traffic-growth.png"
  },
  nextSteps: [
    "Expansion into healthcare and trade sectors",
    "Trend-focused content development",
    "Eco-conscious workwear campaigns"
  ]
}
  ];