"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { FaChartLine, FaClock, FaGlobe, FaImage, FaMobileAlt, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import {
  FiSearch,
  FiBarChart,
  FiTarget,
  FiDatabase,
  FiDollarSign,
  FiActivity,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const serviceData = [
    //seo
    {
      title: "Search Engine Optimization",
      slug: "search-engine-optimization",
      icon: "FiSearch",
      description:
        "Drive organic traffic and dominate search rankings with our comprehensive SEO strategies.",
      gradient: "from-cyan-400 to-blue-500",
      benefits: [
        "Increase qualified website traffic",
        "Improve search visibility",
        "Build domain authority",
        "Generate sustainable growth",
      ],
      services: {
        "technical-seo": {
          title: "Technical SEO",
          category: "SEO Services",
          icon: "<FiSearch className='w-8 h-8' />",
          heroImage: "/techseo.jpg",
          description:
            "Optimize your website's foundation to ensure seamless crawling, indexing, and user experience.",
          longDescription:
            "Our technical SEO services focus on the foundation of your website's search performance. We conduct thorough audits, fix technical issues, and implement best practices to ensure search engines can easily crawl, understand, and index your content.",
          features: [
            "Comprehensive technical audit",
            "Core Web Vitals optimization",
            "Structured data and schema implementation",
            "Mobile-first indexing fixes",
            "HTTPS and crawlability improvements",
          ],
          benefits: [
            "Improved search engine rankings",
            "Better user experience",
            "Faster page load times",
            "Enhanced mobile performance",
            "Increased organic traffic",
            "Better crawl efficiency",
          ],
          process: [
            {
              step: "1",
              title: "Technical Audit",
              description:
                "Comprehensive analysis of your website's technical health and performance.",
            },
            {
              step: "2",
              title: "Issue Identification",
              description:
                "Detailed report of technical issues affecting your SEO performance.",
            },
            {
              step: "3",
              title: "Implementation",
              description:
                "Strategic fixes and optimizations based on audit findings.",
            },
            {
              step: "4",
              title: "Monitoring",
              description:
                "Ongoing monitoring and maintenance to ensure optimal performance.",
            },
          ],
          pricing: {
            starter: {
              price: "₹12,000/month",
              features: [
                "Basic Technical Audit",
                "Core Issues Fix",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹20,000/month",
              features: [
                "Complete Technical Audit",
                "All Issues Fix",
                "Schema Implementation",
                "Weekly Reports",
              ],
            },
            enterprise: {
              price: "₹35,000/month",
              features: [
                "Advanced Technical Audit",
                "Custom Solutions",
                "Priority Support",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "E-commerce Store",
            challenge: "Poor site performance and low search rankings",
            solution:
              "Complete technical SEO overhaul including speed optimization and mobile improvements",
            results: [
              { metric: "Page Load Time", improvement: "-65%" },
              { metric: "Organic Traffic", improvement: "+180%" },
              { metric: "Search Rankings", improvement: "+45 positions" },
            ],
          },
        },
        "link-earning": {
          title: "Link-Earning",
          category: "SEO Services",
          icon: "<FiLink className='w-8 h-8' />",
          heroImage: "/link.jpg",
          description:
            "Boost your authority with high-quality backlinks through ethical and strategic outreach.",
          longDescription:
            "Our link-earning services help you build authoritative backlinks that improve your domain authority and search rankings through white-hat techniques and strategic digital PR campaigns.",
          features: [
            "Guest posting on niche blogs",
            "Broken link reclamation",
            "Resource page outreach",
            "Press mentions & digital PR",
            "Competitor backlink analysis",
          ],
          benefits: [
            "Increased domain authority",
            "Higher search rankings",
            "More referral traffic",
            "Improved brand visibility",
            "Trust signals for search engines",
            "Competitive advantage",
          ],
          process: [
            {
              step: "1",
              title: "Strategy Development",
              description:
                "Creating a customized link-building plan based on your niche and goals.",
            },
            {
              step: "2",
              title: "Outreach Preparation",
              description:
                "Identifying opportunities and preparing outreach materials.",
            },
            {
              step: "3",
              title: "Link Acquisition",
              description:
                "Executing outreach campaigns to earn high-quality backlinks.",
            },
            {
              step: "4",
              title: "Reporting",
              description:
                "Tracking progress and demonstrating ROI through detailed reports.",
            },
          ],
          pricing: {
            starter: {
              price: "₹15,000/month",
              features: [
                "Basic Link Building",
                "5 Quality Links",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹30,000/month",
              features: [
                "Strategic Link Building",
                "15 Quality Links",
                "Competitor Analysis",
                "Weekly Reports",
              ],
            },
            enterprise: {
              price: "₹50,000/month",
              features: [
                "Comprehensive Campaign",
                "30+ Quality Links",
                "Digital PR Integration",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "B2B SaaS Company",
            challenge: "Low domain authority and stagnant rankings",
            solution:
              "Strategic link-building campaign focusing on industry publications and resource pages",
            results: [
              { metric: "Domain Authority", improvement: "+25 points" },
              { metric: "Organic Traffic", improvement: "+220%" },
              { metric: "Top 3 Rankings", improvement: "+18 keywords" },
            ],
          },
        },
        "pr-industry-seo": {
          title: "PR & Industry SEO",
          category: "SEO Services",
          icon: "<FiMic className='w-8 h-8' />",
          heroImage: "/pr.jpg",
          description:
            "Increase brand credibility and recognition through targeted press and directory visibility.",
          longDescription:
            "Our PR & Industry SEO services combine traditional public relations with digital marketing to position your brand as an authority in your industry through media placements, expert positioning, and strategic content distribution.",
          features: [
            "Custom media outreach campaigns",
            "Expert commentary placement",
            "Directory & niche listing management",
            "Newsjacking & trend association",
            "Interview and feature pitching",
          ],
          benefits: [
            "Enhanced brand authority",
            "Increased media visibility",
            "Quality backlinks from authoritative sources",
            "Improved search rankings",
            "Greater industry recognition",
            "More business opportunities",
          ],
          process: [
            {
              step: "1",
              title: "Brand Positioning",
              description:
                "Developing your unique value proposition and expert positioning.",
            },
            {
              step: "2",
              title: "Media Targeting",
              description:
                "Identifying relevant publications and journalists in your industry.",
            },
            {
              step: "3",
              title: "Campaign Execution",
              description: "Pitching stories and securing media placements.",
            },
            {
              step: "4",
              title: "Amplification",
              description:
                "Leveraging earned media across digital channels for maximum impact.",
            },
          ],
          pricing: {
            starter: {
              price: "₹18,000/month",
              features: [
                "Basic Media Outreach",
                "3 Placements",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹35,000/month",
              features: [
                "Comprehensive PR Campaign",
                "10 Placements",
                "Expert Positioning",
                "Weekly Strategy Calls",
              ],
            },
            enterprise: {
              price: "₹60,000/month",
              features: [
                "Full-Scale Digital PR",
                "20+ Placements",
                "Crisis Management",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Healthcare Provider",
            challenge: "Lack of industry authority and media presence",
            solution:
              "Strategic PR campaign positioning executives as thought leaders through media placements",
            results: [
              { metric: "Media Mentions", improvement: "+15 in 3 months" },
              { metric: "Branded Searches", improvement: "+300%" },
              { metric: "Lead Quality", improvement: "+40% conversion rate" },
            ],
          },
        },
        "ecommerce-seo": {
          title: "Ecommerce SEO",
          category: "SEO Services",
          icon: "<FiShoppingBag className='w-8 h-8' />",
          heroImage: "/ecomseo.jpg",
          description:
            "Enhance visibility and drive conversions across your product and category pages.",
          longDescription:
            "Our eCommerce SEO services are specifically designed to help online stores rank higher for product and category searches, driving qualified traffic that converts into sales through comprehensive technical, on-page, and off-page optimizations.",
          features: [
            "Optimized product and category content",
            "Product schema integration",
            "Dynamic internal linking",
            "SEO for filters and pagination",
            "Merchant center feed optimization",
          ],
          benefits: [
            "Higher product page rankings",
            "Increased organic traffic",
            "Improved conversion rates",
            "Better shopping feed performance",
            "Enhanced user experience",
            "More qualified leads",
          ],
          process: [
            {
              step: "1",
              title: "Technical Audit",
              description:
                "Comprehensive analysis of your eCommerce site's technical foundation.",
            },
            {
              step: "2",
              title: "Keyword Strategy",
              description:
                "Developing search terms that match buyer intent at each funnel stage.",
            },
            {
              step: "3",
              title: "Content Optimization",
              description:
                "Enhancing product pages and category structures for search visibility.",
            },
            {
              step: "4",
              title: "Performance Tracking",
              description:
                "Monitoring traffic, rankings, and conversions to measure success.",
            },
          ],
          pricing: {
            starter: {
              price: "₹20,000/month",
              features: [
                "Basic Product Optimization",
                "50 Products",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹40,000/month",
              features: [
                "Complete Store Optimization",
                "200 Products",
                "Shopping Feed Setup",
                "Weekly Optimization",
              ],
            },
            enterprise: {
              price: "₹75,000/month",
              features: [
                "Enterprise eCommerce SEO",
                "Unlimited Products",
                "Advanced Schema",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Fashion Retailer",
            challenge: "Low organic visibility for product searches",
            solution:
              "Comprehensive eCommerce SEO strategy including technical fixes and content optimization",
            results: [
              { metric: "Product Page Traffic", improvement: "+320%" },
              { metric: "Organic Revenue", improvement: "+450%" },
              { metric: "Conversion Rate", improvement: "+35%" },
            ],
          },
        },
        "local-seo": {
          title: "Local SEO",
          category: "SEO Services",
          icon: "<FiMapPin className='w-8 h-8' />",
          heroImage: "/localseo.jpg",
          description:
            "Capture more foot traffic and phone calls with precision local search optimization.",
          longDescription:
            "Our Local SEO services help businesses with physical locations dominate local search results through Google Business Profile optimization, local citations, review management, and geo-targeted content strategies that drive more local customers to your door.",
          features: [
            "Google Business Profile setup and management",
            "NAP consistency & citation building",
            "Localized landing pages",
            "Review generation and management",
            "Hyperlocal content targeting",
          ],
          benefits: [
            "Higher local pack rankings",
            "More map views and directions",
            "Increased phone calls and visits",
            "Better online reputation",
            "Competitive local visibility",
            "Targeted local traffic",
          ],
          process: [
            {
              step: "1",
              title: "Local Audit",
              description:
                "Analyzing your current local search presence and identifying gaps.",
            },
            {
              step: "2",
              title: "Profile Optimization",
              description:
                "Enhancing your Google Business Profile and other local listings.",
            },
            {
              step: "3",
              title: "Citation Building",
              description:
                "Ensuring consistent NAP across local directories and platforms.",
            },
            {
              step: "4",
              title: "Review Management",
              description:
                "Generating and responding to customer reviews strategically.",
            },
          ],
          pricing: {
            starter: {
              price: "₹10,000/month",
              features: [
                "Basic GBP Optimization",
                "Citation Cleanup",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹20,000/month",
              features: [
                "Complete Local SEO",
                "Review Management",
                "Local Content Strategy",
                "Weekly Optimization",
              ],
            },
            enterprise: {
              price: "₹35,000/month",
              features: [
                "Multi-Location SEO",
                "Advanced Local Strategy",
                "Competitor Analysis",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Dental Clinic",
            challenge: "Low visibility in local searches for dental services",
            solution:
              "Comprehensive local SEO campaign including GBP optimization and review generation",
            results: [
              {
                metric: "Local Pack Rankings",
                improvement: "Top 3 for 15 keywords",
              },
              { metric: "Phone Calls", improvement: "+280%" },
              { metric: "New Patients", improvement: "+150%" },
            ],
          },
        },
        "home-services-seo": {
          title: "Home Services SEO",
          category: "SEO Services",
          icon: "<FiHome className='w-8 h-8' />",
          heroImage: "/homeseo.jpg",
          description:
            "Target high-intent homeowners and generate more service leads via organic search.",
          longDescription:
            "Our Home Services SEO specializes in helping contractors, cleaners, and service providers rank for high-intent local searches through optimized service pages, trust-building content, and conversion-focused strategies that turn searches into service calls.",
          features: [
            "Service-area-based keyword mapping",
            "Optimized emergency service pages",
            "Trust-building content (before/after, testimonials)",
            "Lead form conversion tracking",
            "Structured service data markup",
          ],
          benefits: [
            "More service inquiries",
            "Higher conversion rates",
            "Better local visibility",
            "Increased trust signals",
            "Competitive advantage",
            "Targeted lead generation",
          ],
          process: [
            {
              step: "1",
              title: "Service Analysis",
              description:
                "Identifying your most profitable services and search opportunities.",
            },
            {
              step: "2",
              title: "Local Strategy",
              description:
                "Developing geo-targeted content for your service areas.",
            },
            {
              step: "3",
              title: "Trust Building",
              description:
                "Creating content that establishes credibility and expertise.",
            },
            {
              step: "4",
              title: "Conversion Optimization",
              description: "Improving your site to turn visitors into leads.",
            },
          ],
          pricing: {
            starter: {
              price: "₹14,000/month",
              features: [
                "Basic Service Optimization",
                "5 Service Pages",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹28,000/month",
              features: [
                "Complete Home Services SEO",
                "15 Service Pages",
                "Review Management",
                "Weekly Optimization",
              ],
            },
            enterprise: {
              price: "₹45,000/month",
              features: [
                "Advanced Strategy",
                "Unlimited Services",
                "24/7 Support",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Plumbing Company",
            challenge: "Low online visibility for emergency plumbing searches",
            solution:
              "Targeted home services SEO focusing on emergency pages and local optimization",
            results: [
              { metric: "Emergency Service Calls", improvement: "+400%" },
              { metric: "Website Conversions", improvement: "+250%" },
              { metric: "Cost Per Lead", improvement: "-60%" },
            ],
          },
        },
        "cosmetics-seo": {
          title: "Cosmetics SEO",
          category: "SEO Services",
          icon: "<FiDroplet className='w-8 h-8' />",
          heroImage: "/cosmetic.jpg",
          description:
            "Rank higher in beauty-related searches by focusing on visual and product-driven strategies.",
          longDescription:
            "Our Cosmetics SEO services help beauty brands, salons, and skincare professionals stand out in a competitive market through visually-optimized content, ingredient-focused SEO, and beauty trend targeting that connects with your ideal customers.",
          features: [
            "Keyword research for beauty trends",
            "Before & after image optimization",
            "Skincare & ingredient-focused content",
            "Influencer backlink partnerships",
            "Pinterest and Instagram SEO alignment",
          ],
          benefits: [
            "Higher visibility for beauty searches",
            "More engagement with visual content",
            "Increased product sales",
            "Better social media integration",
            "Competitive edge in cosmetics",
            "Targeted beauty audience",
          ],
          process: [
            {
              step: "1",
              title: "Beauty Trend Analysis",
              description:
                "Identifying trending searches in the cosmetics industry.",
            },
            {
              step: "2",
              title: "Visual Optimization",
              description:
                "Enhancing images and videos for search and engagement.",
            },
            {
              step: "3",
              title: "Ingredient SEO",
              description:
                "Creating content around skincare ingredients and benefits.",
            },
            {
              step: "4",
              title: "Social Integration",
              description:
                "Leveraging visual platforms like Pinterest for SEO benefits.",
            },
          ],
          pricing: {
            starter: {
              price: "₹16,000/month",
              features: [
                "Basic Beauty SEO",
                "5 Product Optimizations",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹32,000/month",
              features: [
                "Complete Cosmetics SEO",
                "20 Product Optimizations",
                "Visual Content Strategy",
                "Weekly Updates",
              ],
            },
            enterprise: {
              price: "₹55,000/month",
              features: [
                "Advanced Beauty Strategy",
                "Unlimited Products",
                "Influencer Integration",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Organic Skincare Brand",
            challenge: "Low visibility for natural skincare searches",
            solution:
              "Ingredient-focused SEO strategy combined with visual optimization",
            results: [
              { metric: "Organic Traffic", improvement: "+350%" },
              { metric: "Product Sales", improvement: "+280%" },
              { metric: "Social Engagement", improvement: "+400%" },
            ],
          },
        },
        "lawyers-seo": {
          title: "Lawyers SEO",
          category: "SEO Services",
          icon: "<FiBriefcase className='w-8 h-8' />",
          heroImage: "/lawyers.jpg",
          description:
            "Acquire legal clients through trustworthy, practice-specific search optimization.",
          longDescription:
            "Our Lawyer SEO services help attorneys and law firms rank for high-value legal searches through authoritative content, local legal directory optimization, and trust signals that convert searchers into clients for your specific practice areas.",
          features: [
            "Local legal keyword targeting",
            "Attorney bio page optimization",
            "Content marketing with case examples",
            "Citations in legal directories",
            "GMB and reviews for legal credibility",
          ],
          benefits: [
            "More qualified legal leads",
            "Higher local search visibility",
            "Increased firm authority",
            "Better online reputation",
            "Competitive advantage",
            "Targeted practice area traffic",
          ],
          process: [
            {
              step: "1",
              title: "Practice Area Analysis",
              description:
                "Identifying your most profitable legal services and search terms.",
            },
            {
              step: "2",
              title: "Authority Building",
              description:
                "Creating content that establishes legal expertise and trust.",
            },
            {
              step: "3",
              title: "Local Legal SEO",
              description:
                "Optimizing for local legal searches and directories.",
            },
            {
              step: "4",
              title: "Conversion Optimization",
              description:
                "Improving your site to turn visitors into consultations.",
            },
          ],
          pricing: {
            starter: {
              price: "₹17,000/month",
              features: [
                "Basic Legal SEO",
                "1 Practice Area",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹35,000/month",
              features: [
                "Complete Law Firm SEO",
                "3 Practice Areas",
                "Legal Directory Management",
                "Weekly Updates",
              ],
            },
            enterprise: {
              price: "₹60,000/month",
              features: [
                "Full-Service Legal Marketing",
                "Unlimited Practice Areas",
                "Premium Legal Directories",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Personal Injury Firm",
            challenge: "Low visibility for accident-related searches",
            solution:
              "Practice-area focused SEO with case study content and local optimization",
            results: [
              { metric: "Organic Traffic", improvement: "+300%" },
              { metric: "Case Inquiries", improvement: "+250%" },
              { metric: "Case Value", improvement: "+40% average" },
            ],
          },
        },
        "restaurants-seo": {
          title: "Restaurants SEO",
          category: "SEO Services",
          icon: "<FiCoffee className='w-8 h-8' />",
          heroImage: "/restaurant.jpg",
          description:
            "Make your eatery the go-to choice with a powerful local and visual SEO strategy.",
          longDescription:
            "Our Restaurant SEO services help food establishments attract more diners through mouth-watering image optimization, local search domination, menu SEO, and review management that turns food searches into reservations and orders.",
          features: [
            "Menu SEO and keyword-rich descriptions",
            "Google Maps and delivery app presence",
            "Visual SEO for food images",
            "Blogger and influencer outreach",
            "Event-based seasonal optimization",
          ],
          benefits: [
            "More online orders",
            "Higher local search visibility",
            "Increased foot traffic",
            "Better online reputation",
            "Competitive advantage",
            "Targeted foodie audience",
          ],
          process: [
            {
              step: "1",
              title: "Culinary Keyword Research",
              description:
                "Identifying what food lovers are searching for in your area.",
            },
            {
              step: "2",
              title: "Visual Content Creation",
              description:
                "Creating mouth-watering images optimized for search and social.",
            },
            {
              step: "3",
              title: "Local Listings Optimization",
              description:
                "Ensuring your restaurant appears everywhere hungry customers look.",
            },
            {
              step: "4",
              title: "Seasonal Promotion",
              description:
                "Capitalizing on holidays and events to drive more traffic.",
            },
          ],
          pricing: {
            starter: {
              price: "₹9,000/month",
              features: [
                "Basic Restaurant SEO",
                "Menu Optimization",
                "Monthly Report",
              ],
            },
            professional: {
              price: "₹18,000/month",
              features: [
                "Complete Restaurant SEO",
                "Visual Content Strategy",
                "Review Management",
                "Weekly Updates",
              ],
            },
            enterprise: {
              price: "₹30,000/month",
              features: [
                "Premium Restaurant Marketing",
                "Influencer Partnerships",
                "Event Promotion",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Italian Restaurant",
            challenge: "Low visibility for local Italian food searches",
            solution:
              "Comprehensive restaurant SEO focusing on visual content and local optimization",
            results: [
              { metric: "Online Orders", improvement: "+350%" },
              { metric: "Foot Traffic", improvement: "+180%" },
              { metric: "Average Ticket Size", improvement: "+25%" },
            ],
          },
        },
        "retail-seo": {
          title: "Retail SEO",
          category: "Ecommerce & Retail",
          icon: "<FiShoppingCart className='w-8 h-8' />",
          heroImage: "/retail.jpg",
          description:
            "Drive more foot traffic and online sales with retail-specific search optimization strategies.",
          longDescription:
            "Our Retail SEO services combine eCommerce and local SEO tactics to help brick-and-mortar and online retailers appear for high-intent product searches, seasonal trends, and local shopping queries that convert browsers into buyers.",
          features: [
            "Product page optimization for retail",
            "Seasonal trend targeting",
            "Local inventory ads integration",
            "Retail schema markup implementation",
            "Omnichannel search strategy",
          ],
          benefits: [
            "Increased in-store foot traffic",
            "Higher online product visibility",
            "Better seasonal search performance",
            "Improved local shopping presence",
            "Competitive retail search advantage",
          ],
          process: [
            {
              step: "1",
              title: "Retail Audit",
              description:
                "Comprehensive analysis of your current retail search presence",
            },
            {
              step: "2",
              title: "Product Optimization",
              description:
                "Enhancing product pages for both online and local search",
            },
            {
              step: "3",
              title: "Seasonal Strategy",
              description: "Planning for holiday and seasonal shopping trends",
            },
            {
              step: "4",
              title: "Omnichannel Integration",
              description: "Connecting online and offline shopping experiences",
            },
          ],
          pricing: {
            starter: {
              price: "₹18,000/month",
              features: [
                "Basic Product Optimization",
                "Monthly Trend Report",
                "50 Products",
              ],
            },
            professional: {
              price: "₹35,000/month",
              features: [
                "Complete Retail SEO",
                "Seasonal Campaigns",
                "Local Inventory Integration",
                "500 Products",
              ],
            },
            enterprise: {
              price: "₹60,000/month",
              features: [
                "Enterprise Retail Solution",
                "Advanced Analytics",
                "Custom Integrations",
                "Unlimited Products",
              ],
            },
          },
          caseStudy: {
            client: "National Apparel Chain",
            challenge:
              "Low online-to-offline conversion and poor seasonal visibility",
            solution:
              "Integrated retail SEO strategy with local inventory feeds and trend targeting",
            results: [
              { metric: "Store Locator Searches", improvement: "+320%" },
              { metric: "Seasonal Product Sales", improvement: "+410%" },
              { metric: "Omnichannel Conversions", improvement: "+230%" },
            ],
          },
        },

        "food-beverages-seo": {
          title: "Food & Beverages SEO",
          category: "CPG & FMCG",
          icon: "<FiCoffee className='w-8 h-8' />",
          heroImage: "/food.jpg",
          description:
            "Increase shelf presence and digital discoverability for your food and beverage products.",
          longDescription:
            "Specialized SEO for food manufacturers, beverage companies, and CPG brands to rank for ingredient searches, recipe terms, and product-related queries that influence purchase decisions at grocery and online retailers.",
          features: [
            "Ingredient-focused content strategy",
            "Recipe SEO and rich snippets",
            "Product finder optimization",
            "Nutritional information markup",
            "Retailer partnership linking",
          ],
          benefits: [
            "Higher search visibility for product terms",
            "Increased recipe-driven purchases",
            "Better digital shelf presence",
            "Enhanced rich snippet appearances",
            "Competitive FMCG advantage",
          ],
          process: [
            {
              step: "1",
              title: "Product Keyword Mapping",
              description: "Identifying how consumers search for your products",
            },
            {
              step: "2",
              title: "Content Development",
              description: "Creating recipe and ingredient-focused content",
            },
            {
              step: "3",
              title: "Retailer Integration",
              description: "Optimizing for retailer search algorithms",
            },
            {
              step: "4",
              title: "Performance Tracking",
              description: "Measuring search impact on offline sales",
            },
          ],
          pricing: {
            starter: {
              price: "₹20,000/month",
              features: ["Basic Product SEO", "10 Products", "Monthly Reports"],
            },
            professional: {
              price: "₹40,000/month",
              features: [
                "Complete F&B Strategy",
                "Recipe Content Development",
                "Retailer SEO",
                "50 Products",
              ],
            },
            enterprise: {
              price: "₹75,000/month",
              features: [
                "Enterprise CPG Solution",
                "Advanced Schema",
                "Sales Correlation Analysis",
                "Unlimited Products",
              ],
            },
          },
          caseStudy: {
            client: "Organic Snack Brand",
            challenge: "Low visibility for healthy snack searches",
            solution:
              "Ingredient-focused SEO with recipe content and retailer optimization",
            results: [
              { metric: "Organic Visibility", improvement: "+380%" },
              {
                metric: "Retailer Page Rankings",
                improvement: "Top 3 for 25+ products",
              },
              { metric: "Website-to-Store Conversions", improvement: "+190%" },
            ],
          },
        },

        "jewelry-seo": {
          title: "Jewelry SEO",
          category: "Luxury Goods",
          icon: "<FiStar className='w-8 h-8' />",
          heroImage: "/jewelry.jpg",
          description:
            "Sparkle in search results with luxury-focused optimization for jewelry brands and retailers.",
          longDescription:
            "Specialized SEO services for jewelry stores, luxury brands, and independent designers focusing on high-value search terms, visual search optimization, and rich snippets that appeal to luxury shoppers and gift buyers.",
          features: [
            "Luxury keyword targeting",
            "Visual search optimization",
            "Product schema for jewelry",
            "Gift guide content strategy",
            "Pinterest and Instagram SEO",
          ],
          benefits: [
            "Higher visibility for luxury terms",
            "Increased engagement with visual content",
            "Better rich snippet appearances",
            "Competitive advantage in luxury space",
            "More qualified high-value traffic",
          ],
          process: [
            {
              step: "1",
              title: "Luxury Audience Research",
              description: "Understanding high-value buyer search behavior",
            },
            {
              step: "2",
              title: "Visual Optimization",
              description: "Enhancing product images for visual search",
            },
            {
              step: "3",
              title: "Gift Strategy",
              description: "Targeting seasonal and occasion-based searches",
            },
            {
              step: "4",
              title: "Authority Building",
              description: "Establishing brand as luxury authority",
            },
          ],
          pricing: {
            starter: {
              price: "₹25,000/month",
              features: ["Basic Jewelry SEO", "10 Products", "Monthly Reports"],
            },
            professional: {
              price: "₹50,000/month",
              features: [
                "Complete Luxury SEO",
                "Visual Search Optimization",
                "Gift Content Strategy",
                "100 Products",
              ],
            },
            enterprise: {
              price: "₹90,000/month",
              features: [
                "Enterprise Luxury Solution",
                "Advanced Visual SEO",
                "International Targeting",
                "Unlimited Products",
              ],
            },
          },
          caseStudy: {
            client: "Diamond Jewelry Designer",
            challenge: "Poor visibility for custom jewelry searches",
            solution:
              "Luxury-focused SEO with visual search optimization and rich snippets",
            results: [
              { metric: "High-Value Traffic", improvement: "+450%" },
              { metric: "Visual Search Impressions", improvement: "+600%" },
              { metric: "Average Order Value", improvement: "+35%" },
            ],
          },
        },

        "childcare-seo": {
          title: "Childcare SEO",
          category: "Family Services",
          icon: "<FiHeart className='w-8 h-8' />",
          heroImage: "/childcare.jpg",
          description:
            "Connect with parents through trusted, local search visibility for childcare services.",
          longDescription:
            "Specialized SEO for daycare centers, preschools, and childcare providers focusing on local search dominance, parent trust signals, and educational content that reassures and converts searching parents.",
          features: [
            "Parent-focused keyword strategy",
            "Local directory dominance",
            "Trust signal optimization",
            "Educational content marketing",
            "Review generation and management",
          ],
          benefits: [
            "More inquiries from local parents",
            "Higher trust and credibility",
            "Better local search visibility",
            "Competitive advantage in childcare",
            "Increased enrollment conversions",
          ],
          process: [
            {
              step: "1",
              title: "Parent Intent Research",
              description: "Understanding how parents search for childcare",
            },
            {
              step: "2",
              title: "Trust Building",
              description: "Optimizing trust signals and credentials",
            },
            {
              step: "3",
              title: "Local Dominance",
              description: "Securing top positions in local directories",
            },
            {
              step: "4",
              title: "Content Development",
              description: "Creating reassuring educational content",
            },
          ],
          pricing: {
            starter: {
              price: "₹15,000/month",
              features: [
                "Basic Childcare SEO",
                "Local Listings",
                "Monthly Reports",
              ],
            },
            professional: {
              price: "₹30,000/month",
              features: [
                "Complete Childcare Strategy",
                "Review Management",
                "Educational Content",
                "Multi-Location",
              ],
            },
            enterprise: {
              price: "₹55,000/month",
              features: [
                "Enterprise Solution",
                "Full Funnel Tracking",
                "Competitor Replacement",
                "Daily Monitoring",
              ],
            },
          },
          caseStudy: {
            client: "Montessori Preschool",
            challenge: "Low visibility for local preschool searches",
            solution:
              "Trust-focused SEO with educational content and local directory dominance",
            results: [
              { metric: "Parent Inquiries", improvement: "+380%" },
              {
                metric: "Local Pack Rankings",
                improvement: "Top 3 for 12 keywords",
              },
              { metric: "Enrollment Rate", improvement: "+45%" },
            ],
          },
        },
      },
    },
    // digital marketing industry
    /*  {
  title: "Digital Marketing",
  slug: "digital-marketing",
  icon: "FiGlobe",
  description:
    "Boost your brand's online presence through multi-channel digital strategies tailored for growth and engagement.",
  gradient: "from-purple-500 to-pink-500",
  benefits: [
    "Reach your target audience across platforms",
    "Enhance brand visibility and recognition",
    "Increase website traffic and conversions",
    "Track and optimize campaign performance"
  ],
 services: {
     

}
  }, */
    //digital Analytics
    {
      title: "Digital Analytics",
      icon: "FiBarChart",
      description: "Actionable insights from your marketing data",
      gradient: "from-blue-500 to-teal-500",
      benefits: [
        "Track user behavior across channels",
        "Understand traffic sources",
        "Improve customer journey",
        "Enable data-backed decisions",
      ],

      services: {
        "ga4-analytics": {
          title: "GA4 Analytics",
          category: "Data & Analytics",
          icon: "<FiBarChart2 className='w-8 h-8' />",
          heroImage: "/ga4.jpg",
          description:
            "Master the new analytics standard with comprehensive GA4 implementation and insights.",
          longDescription:
            "Our GA4 services include complete migration from Universal Analytics, custom implementation, event tracking setup, and ongoing analysis to help you navigate the new analytics paradigm and extract meaningful insights from your data.",
          features: [
            "GA4 migration from Universal Analytics",
            "Custom event and parameter tracking",
            "Enhanced measurement configuration",
            "Cross-device and cross-platform tracking",
            "Custom reporting and dashboards",
          ],
          benefits: [
            "Future-proof analytics setup",
            "Deeper customer journey insights",
            "Improved attribution modeling",
            "Better cross-platform visibility",
            "Actionable data-driven decisions",
          ],
          process: [
            {
              step: "1",
              title: "Assessment",
              description: "Reviewing current analytics setup and needs",
            },
            {
              step: "2",
              title: "Implementation",
              description: "Configuring GA4 with custom tracking",
            },
            {
              step: "3",
              title: "Data Validation",
              description: "Ensuring accurate data collection",
            },
            {
              step: "4",
              title: "Insights Development",
              description: "Creating actionable reports and dashboards",
            },
          ],
          pricing: {
            starter: {
              price: "₹25,000",
              features: [
                "Basic GA4 Setup",
                "Standard Event Tracking",
                "Implementation Report",
              ],
            },
            professional: {
              price: "₹50,000",
              features: [
                "Complete GA4 Migration",
                "Custom Event Tracking",
                "Enhanced Measurement",
                "Basic Dashboard",
              ],
            },
            enterprise: {
              price: "₹90,000",
              features: [
                "Enterprise Implementation",
                "Advanced Configurations",
                "Custom Connectors",
                "Training Sessions",
              ],
            },
          },
          caseStudy: {
            client: "Ecommerce Platform",
            challenge: "Losing visibility with Universal Analytics sunset",
            solution:
              "Comprehensive GA4 migration with custom eCommerce tracking",
            results: [
              {
                metric: "Tracked Conversions",
                improvement: "+40% more events",
              },
              {
                metric: "Attribution Accuracy",
                improvement: "+65% better insights",
              },
              { metric: "Reporting Efficiency", improvement: "50% time saved" },
            ],
          },
        },

        "google-tag-manager": {
          title: "Google Tag Manager",
          category: "Data & Analytics",
          icon: "<FiCode className='w-8 h-8' />",
          heroImage: "/gtm.jpg",
          description:
            "Take control of your tracking and marketing tags without constant developer reliance.",
          longDescription:
            "Our GTM services help you implement, manage, and optimize your tag management system to streamline tracking implementations, improve site performance, and maintain better control over your marketing technologies.",
          features: [
            "GTM container setup and configuration",
            "Custom tag implementation",
            "Variable and trigger creation",
            "Data layer implementation",
            "Performance optimization",
          ],
          benefits: [
            "Reduced developer dependency",
            "Faster tracking implementations",
            "Improved site performance",
            "Better tag organization",
            "Enhanced data collection",
          ],
          process: [
            {
              step: "1",
              title: "Audit",
              description: "Reviewing current tracking and needs",
            },
            {
              step: "2",
              title: "Implementation",
              description: "Setting up GTM container and data layer",
            },
            {
              step: "3",
              title: "Tag Deployment",
              description: "Configuring marketing and tracking tags",
            },
            {
              step: "4",
              title: "Validation",
              description: "Testing and ensuring proper functionality",
            },
          ],
          pricing: {
            starter: {
              price: "₹20,000",
              features: [
                "Basic GTM Setup",
                "Standard Tags",
                "Implementation Report",
              ],
            },
            professional: {
              price: "₹40,000",
              features: [
                "Complete GTM Implementation",
                "Custom Data Layer",
                "Advanced Triggers",
                "Basic Training",
              ],
            },
            enterprise: {
              price: "₹75,000",
              features: [
                "Enterprise Solution",
                "Complex Configurations",
                "Custom JavaScript",
                "Ongoing Support",
              ],
            },
          },
          caseStudy: {
            client: "Media Publisher",
            challenge: "Tag bloat slowing site and complicating tracking",
            solution: "GTM implementation with data layer and tag organization",
            results: [
              { metric: "Page Load Time", improvement: "-35%" },
              { metric: "Tracking Accuracy", improvement: "+90%" },
              { metric: "Implementation Speed", improvement: "5x faster" },
            ],
          },
        },

        "digital-analytics": {
          title: "Digital Analytics",
          category: "Data Services",
          icon: "<FiBarChart2 className='w-8 h-8' />",
          heroImage: "/digi.jpg",
          description:
            "Transform raw data into actionable insights to drive business growth and optimization.",
          longDescription:
            "Our Digital Analytics services help you implement, configure, and leverage analytics platforms to track user behavior, measure campaign performance, and uncover opportunities for conversion rate optimization across all digital channels.",
          features: [
            "Google Analytics 4 implementation",
            "Custom dashboard development",
            "Conversion funnel analysis",
            "Cross-channel attribution modeling",
            "Real-time reporting solutions",
          ],
          benefits: [
            "Data-driven decision making",
            "Improved marketing ROI",
            "Enhanced user experience insights",
            "Identification of high-value customer segments",
            "Automated reporting workflows",
            "Competitive benchmarking",
          ],
          process: [
            {
              step: "1",
              title: "Audit & Planning",
              description:
                "Comprehensive review of current analytics setup and business objectives.",
            },
            {
              step: "2",
              title: "Implementation",
              description:
                "Proper tracking configuration and data layer setup.",
            },
            {
              step: "3",
              title: "Dashboarding",
              description: "Custom reporting tailored to stakeholder needs.",
            },
            {
              step: "4",
              title: "Insights Delivery",
              description:
                "Regular analysis sessions with actionable recommendations.",
            },
          ],
          pricing: {
            starter: {
              price: "₹25,000/month",
              features: [
                "Basic Analytics Setup",
                "Standard Dashboards",
                "Monthly Insights Report",
              ],
            },
            professional: {
              price: "₹45,000/month",
              features: [
                "Advanced Tracking",
                "Custom Dashboards",
                "Weekly Analysis",
                "Conversion Optimization",
              ],
            },
            enterprise: {
              price: "₹75,000/month",
              features: [
                "Multi-channel Attribution",
                "Predictive Analytics",
                "Executive Briefings",
                "Data Governance",
              ],
            },
          },
          caseStudy: {
            client: "E-commerce Platform",
            challenge:
              "Lack of visibility into customer journey and drop-off points",
            solution:
              "Implemented enhanced tracking with funnel visualization and segmentation",
            results: [
              { metric: "Checkout Completion", improvement: "+28%" },
              { metric: "Ad Spend Efficiency", improvement: "+35% ROI" },
              {
                metric: "Data Accuracy",
                improvement: "100% reliable tracking",
              },
            ],
          },
        },
        // Additional services would continue in the same format...
        "piwikpro-analytics": {
          title: "Piwik PRO Analytics",
          category: "Data & Analytics",
          icon: "<FiShield className='w-8 h-8' />",
          heroImage: "/piwikpro.jpg",
          description:
            "Privacy-compliant analytics alternative with enterprise-grade features and data ownership.",
          longDescription:
            "Implementation and management of Piwik PRO Analytics Suite for organizations needing GDPR-compliant analytics with full data ownership, combining powerful insights with strict privacy compliance.",
          features: [
            "Piwik PRO implementation",
            "GDPR-compliant configuration",
            "Custom data retention policies",
            "Consent management integration",
            "On-premise/hosted solutions",
          ],
          benefits: [
            "Full data ownership",
            "GDPR/CCPA compliance",
            "No data sampling",
            "Enterprise-grade features",
            "Customizable deployment",
          ],
          process: [
            {
              step: "1",
              title: "Requirements Analysis",
              description: "Understanding compliance and business needs",
            },
            {
              step: "2",
              title: "Implementation",
              description: "Configuring Piwik PRO instance",
            },
            {
              step: "3",
              title: "Integration",
              description: "Connecting with other systems",
            },
            {
              step: "4",
              title: "Training",
              description: "Educating teams on platform use",
            },
          ],
          pricing: {
            starter: {
              price: "₹30,000",
              features: [
                "Basic Implementation",
                "Standard Configuration",
                "Initial Training",
              ],
            },
            professional: {
              price: "₹60,000",
              features: [
                "Complete Setup",
                "Custom Dimensions",
                "Basic Integrations",
                "Extended Training",
              ],
            },
            enterprise: {
              price: "₹120,000",
              features: [
                "Enterprise Deployment",
                "Advanced Configuration",
                "Custom Development",
                "Ongoing Support",
              ],
            },
          },
          caseStudy: {
            client: "European Healthcare Provider",
            challenge:
              "Need for GDPR-compliant analytics without US data transfer",
            solution: "Piwik PRO implementation with strict data governance",
            results: [
              { metric: "Compliance Level", improvement: "100% GDPR aligned" },
              {
                metric: "Data Ownership",
                improvement: "Full control achieved",
              },
              { metric: "Insight Quality", improvement: "Comparable to GA360" },
            ],
          },
        },

        "performance-marketing": {
          title: "Performance Marketing",
          category: "Digital Marketing",
          icon: "<FiTrendingUp className='w-8 h-8' />",
          heroImage: "/performance.jpg",
          description:
            "Data-driven marketing strategies focused on measurable ROI and conversion optimization.",
          longDescription:
            "Full-funnel performance marketing services combining paid media, conversion rate optimization, and analytics to drive qualified traffic that converts, with transparent reporting and continuous optimization.",
          features: [
            "Paid search and social campaigns",
            "Conversion rate optimization",
            "Landing page testing",
            "Advanced audience targeting",
            "Multi-touch attribution",
          ],
          benefits: [
            "Measurable ROI",
            "Lower customer acquisition costs",
            "Higher conversion rates",
            "Data-driven decisions",
            "Continuous optimization",
          ],
          process: [
            {
              step: "1",
              title: "Audit",
              description: "Analyzing current performance and opportunities",
            },
            {
              step: "2",
              title: "Strategy",
              description: "Developing data-driven marketing plan",
            },
            {
              step: "3",
              title: "Implementation",
              description: "Launching and optimizing campaigns",
            },
            {
              step: "4",
              title: "Optimization",
              description: "Continuous testing and improvement",
            },
          ],
          pricing: {
            starter: {
              price: "₹30,000/month",
              features: [
                "Basic Campaign Management",
                "2 Channels",
                "Monthly Reporting",
              ],
            },
            professional: {
              price: "₹75,000/month",
              features: [
                "Complete Performance Marketing",
                "5 Channels",
                "Conversion Optimization",
                "Weekly Optimization",
              ],
            },
            enterprise: {
              price: "₹150,000/month",
              features: [
                "Enterprise Solution",
                "Full Funnel Management",
                "Advanced Attribution",
                "Dedicated Team",
              ],
            },
          },
          caseStudy: {
            client: "Fintech Startup",
            challenge: "High CAC with low conversion rates",
            solution: "Full-funnel performance marketing strategy with CRO",
            results: [
              { metric: "Customer Acquisition Cost", improvement: "-55%" },
              { metric: "Conversion Rate", improvement: "+220%" },
              { metric: "ROI", improvement: "5.8x return" },
            ],
          },
        },

        "cookie-consent-management": {
          title: "Cookie Consent Management",
          category: "Compliance",
          icon: "<FiLock className='w-8 h-8' />",
          heroImage: "/cookies.jpg",
          description:
            "Achieve GDPR and global privacy compliance with enterprise-grade consent management.",
          longDescription:
            "Implementation of cookie consent solutions that adapt to regional privacy laws, providing compliance for GDPR, CCPA, and other global regulations while maintaining marketing capabilities.",
          features: [
            "Cookie audit and classification",
            "Consent banner implementation",
            "Preference center setup",
            "Region-specific rule sets",
            "Consent logging and reporting",
          ],
          benefits: [
            "Regulatory compliance",
            "Reduced legal risk",
            "Maintained marketing capabilities",
            "User trust through transparency",
            "Automated policy updates",
          ],
          process: [
            {
              step: "1",
              title: "Audit",
              description: "Identifying all tracking technologies",
            },
            {
              step: "2",
              title: "Classification",
              description: "Categorizing cookies by purpose and necessity",
            },
            {
              step: "3",
              title: "Implementation",
              description: "Deploying consent management platform",
            },
            {
              step: "4",
              title: "Testing",
              description: "Ensuring proper functionality across regions",
            },
          ],
          pricing: {
            starter: {
              price: "₹25,000",
              features: [
                "Basic Implementation",
                "Standard Banner",
                "Cookie Audit",
              ],
            },
            professional: {
              price: "₹50,000",
              features: [
                "Complete Solution",
                "Custom Branding",
                "Region Rules",
                "Basic Reporting",
              ],
            },
            enterprise: {
              price: "₹100,000",
              features: [
                "Enterprise Platform",
                "Advanced Rules",
                "Consent Analytics",
                "Ongoing Updates",
              ],
            },
          },
          caseStudy: {
            client: "Multinational Retailer",
            challenge: "Non-compliant tracking across 15 countries",
            solution:
              "Enterprise consent management with region-specific rules",
            results: [
              { metric: "Compliance Level", improvement: "100% compliant" },
              { metric: "Opt-in Rates", improvement: "+35% maintained" },
              { metric: "Legal Risk", improvement: "Significantly reduced" },
            ],
          },
        },

        "tag-monitoring": {
          title: "Tag Monitoring",
          category: "Data Quality",
          icon: "<FiMonitor className='w-8 h-8' />",
          heroImage: "/tag.jpg",
          description:
            "Continuous monitoring of your tracking technologies to ensure data accuracy and site performance.",
          longDescription:
            "Proactive monitoring and alerting for your marketing tags, pixels, and tracking scripts to prevent data loss, identify broken implementations, and maintain optimal website performance.",
          features: [
            "24/7 tag monitoring",
            "Real-time alerts",
            "Performance impact analysis",
            "Change detection",
            "Compliance auditing",
          ],
          benefits: [
            "Prevent data loss",
            "Maintain accurate analytics",
            "Improve site performance",
            "Reduce marketing waste",
            "Ensure compliance",
          ],
          process: [
            {
              step: "1",
              title: "Discovery",
              description: "Identifying all existing tags and trackers",
            },
            {
              step: "2",
              title: "Baseline",
              description: "Establishing normal operation parameters",
            },
            {
              step: "3",
              title: "Monitoring",
              description: "Implementing continuous oversight",
            },
            {
              step: "4",
              title: "Alerting",
              description: "Configuring real-time notifications",
            },
          ],
          pricing: {
            starter: {
              price: "₹15,000/month",
              features: ["Basic Monitoring", "10 Tags", "Email Alerts"],
            },
            professional: {
              price: "₹35,000/month",
              features: [
                "Advanced Monitoring",
                "Unlimited Tags",
                "Slack/SMS Alerts",
                "Performance Analysis",
              ],
            },
            enterprise: {
              price: "₹65,000/month",
              features: [
                "Enterprise Monitoring",
                "Custom Rules",
                "Historical Analysis",
                "Dedicated Support",
              ],
            },
          },
          caseStudy: {
            client: "Travel Booking Platform",
            challenge: "Lost $250k in ad spend from broken tracking",
            solution: "Enterprise tag monitoring with real-time alerts",
            results: [
              {
                metric: "Tracking Downtime",
                improvement: "-100% (zero incidents)",
              },
              { metric: "Data Accuracy", improvement: "+99.9% reliable" },
              { metric: "Ad Waste", improvement: "Eliminated" },
            ],
          },
        },
      },
    },
    //Predictive Analytics
    {
      title: "Predictive Analytics",
      icon: "FiActivity",
      description: "Forecast outcomes using historical data & AI",
      gradient: "from-indigo-500 to-purple-500",
      benefits: [
        "Identify future trends",
        "Optimize marketing strategies",
        "Increase customer lifetime value",
        "Reduce churn through early detection",
      ],
      services: {
        "customer-segmentation": {
          title: "Customer Segmentation",
          category: "Data Science & Analytics",
          icon: "<FiUsers className='w-8 h-8' />",
          heroImage: "/customer.jpg",
          description:
            "Divide your customer base into strategic groups for targeted marketing, personalized experiences, and efficient resource allocation.",
          longDescription:
            "Our advanced customer segmentation services use behavioral, demographic, and transactional data to create meaningful customer cohorts. We employ machine learning (RFM, clustering algorithms) and business rules to identify high-value segments, at-risk customers, and untapped opportunities - enabling hyper-targeted strategies that boost retention and LTV.",
          features: [
            "RFM (Recency-Frequency-Monetary) analysis",
            "Behavioral clustering (k-means, hierarchical)",
            "Predictive segmentation models",
            "Persona development",
            "Segment-specific performance tracking",
            "Lookalike audience modeling",
            "Churn-risk segmentation",
            "CLV-based tiering",
          ],
          benefits: [
            "20-40% higher campaign response rates",
            "Reduced marketing waste",
            "Improved customer retention",
            "Personalized experiences at scale",
            "Data-driven product development",
            "Optimal resource allocation",
          ],
          process: [
            {
              step: "1",
              title: "Data Integration",
              description: "Unifying customer data from all touchpoints",
            },
            {
              step: "2",
              title: "Exploratory Analysis",
              description: "Identifying natural groupings and patterns",
            },
            {
              step: "3",
              title: "Model Development",
              description: "Building statistical/machine learning segments",
            },
            {
              step: "4",
              title: "Activation",
              description: "Implementing segments in marketing systems",
            },
          ],
          pricing: {
            starter: {
              price: "₹45,000",
              features: [
                "Basic RFM Segmentation",
                "3-5 Customer Segments",
                "Static Reporting",
                "Manual Implementation Guide",
              ],
            },
            professional: {
              price: "₹95,000",
              features: [
                "Advanced Clustering Models",
                "8-12 Dynamic Segments",
                "Automated Refresh",
                "CRM/MAP Integration",
                "Basic Predictive Scoring",
              ],
            },
            enterprise: {
              price: "₹180,000",
              features: [
                "AI-Driven Segmentation",
                "Real-Time Updates",
                "Custom ML Algorithms",
                "Full Tech Stack Integration",
                "Ongoing Optimization",
              ],
            },
          },
          caseStudy: {
            client: "E-commerce Fashion Retailer",
            challenge:
              "Generic marketing leading to 22% email unsubscribe rates",
            solution:
              "12 dynamic segments based on style preferences + purchase cadence",
            results: [
              { metric: "Email CTR", improvement: "+37%" },
              { metric: "Unsubscribe Rate", improvement: "-68%" },
              { metric: "Segment-Specific ROAS", improvement: "3.2x average" },
            ],
          },
        },

        "sales-forecasting": {
          title: "Sales Forecasting",
          category: "Revenue Intelligence",
          icon: "<FiTrendingUp className='w-8 h-8' />",
          heroImage: "/sales.jpg",
          description:
            "Predict future revenue with 90%+ accuracy using AI-driven models that factor in market trends, seasonality, and leading indicators.",
          longDescription:
            "Our sales forecasting solutions combine time-series analysis, machine learning (Prophet, ARIMA), and economic indicators to generate accurate, granular predictions. We account for pipeline health, market shifts, and organizational factors to reduce forecast error by 40-60% compared to spreadsheet methods.",
          features: [
            "Multi-model ensemble forecasting",
            "Pipeline velocity analysis",
            "Seasonality decomposition",
            "External factor integration (weather, econ)",
            "Scenario modeling",
            "SKU-level predictions",
            "Sales team weighting",
            "Anomaly detection",
          ],
          benefits: [
            "85-95% forecast accuracy",
            "Reduced stockouts/overstocks",
            "Optimized staffing/resources",
            "Improved cash flow planning",
            "Data-driven quota setting",
            "Early warning signals",
          ],
          process: [
            {
              step: "1",
              title: "Data Preparation",
              description: "Cleaning historical sales/pipeline data",
            },
            {
              step: "2",
              title: "Model Selection",
              description: "Choosing optimal forecasting techniques",
            },
            {
              step: "3",
              title: "Validation",
              description: "Backtesting against historical periods",
            },
            {
              step: "4",
              title: "Deployment",
              description: "Integrating forecasts into business systems",
            },
          ],
          pricing: {
            starter: {
              price: "₹50,000",
              features: [
                "Basic Time-Series Model",
                "Monthly Forecasts",
                "3 Key Metrics",
                "Excel Integration",
              ],
            },
            professional: {
              price: "₹110,000",
              features: [
                "Advanced ML Forecasting",
                "Weekly Updates",
                "10+ KPIs",
                "CRM Integration",
                "Scenario Planning",
              ],
            },
            enterprise: {
              price: "₹220,000",
              features: [
                "AI-Driven Ensemble Models",
                "Real-Time Adjustments",
                "SKU/Region-Level Granularity",
                "ERP/BI System Integration",
                "Anomaly Detection",
              ],
            },
          },
          caseStudy: {
            client: "Automotive Parts Distributor",
            challenge: "35% forecast error causing ₹8M in excess inventory",
            solution:
              "ML model incorporating weather, repair trends, and economic data",
            results: [
              { metric: "Forecast Accuracy", improvement: "92% (from 65%)" },
              {
                metric: "Inventory Costs",
                improvement: "-₹5.2M annual savings",
              },
              { metric: "Stockout Rate", improvement: "-81%" },
            ],
          },
        },
      },
    },
    //Business Intelligence
    {
      title: "Business Intelligence",
      icon: "FiDatabase",
      description: "Transform data into strategic insights",
      gradient: "from-green-400 to-cyan-400",
      benefits: [
        "Centralize data sources",
        "Create actionable reports",
        "Enable data-driven decisions",
        "Visualize key metrics",
      ],
      services: {
        "looker-studio": {
          title: "Looker Studio",
          category: "Data Visualization",
          icon: "<FiPieChart className='w-8 h-8' />",
          heroImage: "/looker.jpg",
          description:
            "Transform your data into insightful, interactive dashboards with Google's powerful visualization tool.",
          longDescription:
            "Our Looker Studio (formerly Google Data Studio) services help you create custom, visually compelling dashboards that connect to hundreds of data sources, enabling better decision-making through accessible data storytelling and real-time reporting.",
          features: [
            "Custom dashboard development",
            "Multi-source data blending",
            "Interactive report design",
            "Automated report scheduling",
            "Team collaboration setup",
            "White-labeling and branding",
            "Advanced calculated fields",
            "Dashboard performance optimization",
          ],
          benefits: [
            "Centralized data visualization",
            "Real-time reporting",
            "Reduced manual reporting work",
            "Improved data accessibility",
            "Customizable for all business units",
            "Cost-effective BI solution",
          ],
          process: [
            {
              step: "1",
              title: "Requirement Gathering",
              description: "Understanding your key metrics and reporting needs",
            },
            {
              step: "2",
              title: "Data Source Configuration",
              description: "Connecting and blending your data sources",
            },
            {
              step: "3",
              title: "Dashboard Design",
              description: "Creating intuitive, actionable visualizations",
            },
            {
              step: "4",
              title: "Deployment & Training",
              description: "Launching dashboards and educating your team",
            },
          ],
          pricing: {
            starter: {
              price: "₹25,000",
              features: [
                "2 Basic Dashboards",
                "3 Data Sources",
                "Standard Visualizations",
                "Initial Training",
              ],
            },
            professional: {
              price: "₹55,000",
              features: [
                "5 Custom Dashboards",
                "Unlimited Data Sources",
                "Advanced Calculations",
                "Scheduled Reporting",
                "4 Hours Training",
              ],
            },
            enterprise: {
              price: "₹120,000",
              features: [
                "Unlimited Dashboards",
                "Custom Data Connectors",
                "White-label Solutions",
                "API Integrations",
                "Ongoing Support",
              ],
            },
          },
          caseStudy: {
            client: "E-commerce Marketplace",
            challenge:
              "Disparate reports across 8 platforms causing decision delays",
            solution:
              "Unified Looker Studio dashboard blending Google Analytics, Shopify, and ad platform data",
            results: [
              { metric: "Reporting Time", improvement: "-80%" },
              { metric: "Data Accuracy", improvement: "100% consistency" },
              {
                metric: "Meeting Efficiency",
                improvement: "+65% faster decisions",
              },
            ],
          },
        },

        bigquery: {
          title: "BigQuery",
          category: "Data Warehousing",
          icon: "<FiDatabase className='w-8 h-8' />",
          heroImage: "/bigquery.jpg",
          description:
            "Unlock the power of serverless, petabyte-scale analytics with Google's enterprise data warehouse.",
          longDescription:
            "Our BigQuery services include architecture design, implementation, and optimization of Google's cloud data warehouse solution, enabling SQL-based analysis of massive datasets with blazing-fast performance and seamless integration with the Google Cloud ecosystem.",
          features: [
            "Data warehouse architecture",
            "ETL pipeline development",
            "Query optimization",
            "Partitioning and clustering strategy",
            "ML integration (BigQuery ML)",
            "Cost monitoring setup",
            "Data governance implementation",
            "Real-time analytics configuration",
          ],
          benefits: [
            "Analyze terabytes in seconds",
            "Serverless architecture",
            "Built-in machine learning",
            "Seamless GCP integration",
            "Cost-effective scaling",
            "Enterprise-grade security",
          ],
          process: [
            {
              step: "1",
              title: "Data Assessment",
              description: "Evaluating your current data landscape and needs",
            },
            {
              step: "2",
              title: "Schema Design",
              description: "Creating optimized data structures and pipelines",
            },
            {
              step: "3",
              title: "Implementation",
              description: "Migrating data and setting up processes",
            },
            {
              step: "4",
              title: "Optimization",
              description: "Tuning for performance and cost efficiency",
            },
          ],
          pricing: {
            starter: {
              price: "₹50,000",
              features: [
                "Basic Implementation",
                "Standard Schema Design",
                "2 Data Source Connections",
                "Query Optimization",
              ],
            },
            professional: {
              price: "₹120,000",
              features: [
                "Complete Warehouse Setup",
                "Custom ETL Pipelines",
                "5 Data Source Connections",
                "Basic ML Models",
                "Cost Monitoring",
              ],
            },
            enterprise: {
              price: "₹250,000",
              features: [
                "Enterprise Architecture",
                "Advanced Data Modeling",
                "Real-time Analytics",
                "Custom ML Integration",
                "Ongoing Optimization",
              ],
            },
          },
          caseStudy: {
            client: "Telecom Provider",
            challenge:
              "Unable to analyze 2+ years of call detail records (20TB+)",
            solution:
              "BigQuery implementation with partitioned tables and optimized queries",
            results: [
              { metric: "Query Speed", improvement: "100x faster" },
              { metric: "Storage Costs", improvement: "-70%" },
              {
                metric: "Analytics Capability",
                improvement: "Enabled advanced churn prediction",
              },
            ],
          },
        },

        "power-bi": {
          title: "Power BI",
          category: "Business Intelligence",
          icon: "<FiBarChart className='w-8 h-8' />",
          heroImage: "/powerbi.jpg",
          description:
            "Microsoft's leading BI platform for enterprise-grade data modeling, visualization, and embedded analytics.",
          longDescription:
            "End-to-end Power BI services including data modeling, DAX formula development, premium workspace setup, and embedded analytics solutions that transform your raw data into actionable business insights with Microsoft's powerful BI ecosystem.",
          features: [
            "Power BI Desktop development",
            "Premium capacity optimization",
            "Advanced DAX formulas",
            "Data gateway configuration",
            "Row-level security setup",
            "Paginated reports",
            "Embedded analytics",
            "Performance optimization",
          ],
          benefits: [
            "Enterprise-grade BI solution",
            "Deep Microsoft ecosystem integration",
            "Self-service analytics",
            "AI-powered insights",
            "Mobile accessibility",
            "Governance and security",
          ],
          process: [
            {
              step: "1",
              title: "Data Modeling",
              description: "Designing star schemas and relationships",
            },
            {
              step: "2",
              title: "Measure Development",
              description: "Creating business logic with DAX",
            },
            {
              step: "3",
              title: "Visualization Design",
              description: "Building intuitive, interactive reports",
            },
            {
              step: "4",
              title: "Deployment",
              description: "Publishing to service with proper governance",
            },
          ],
          pricing: {
            starter: {
              price: "₹30,000",
              features: [
                "Basic Dashboard",
                "3 Data Sources",
                "Standard Visuals",
                "Initial Training",
              ],
            },
            professional: {
              price: "₹70,000",
              features: [
                "Advanced Reports",
                "Custom DAX Measures",
                "Data Gateway Setup",
                "Scheduled Refresh",
                "8 Hours Training",
              ],
            },
            enterprise: {
              price: "₹150,000",
              features: [
                "Enterprise Deployment",
                "Premium Capacity Optimization",
                "Row-Level Security",
                "Embedded Analytics",
                "Ongoing Support",
              ],
            },
          },
          caseStudy: {
            client: "National Retail Chain",
            challenge: "300+ Excel reports causing version control issues",
            solution:
              "Centralized Power BI solution with 50+ interactive dashboards",
            results: [
              { metric: "Report Creation Time", improvement: "-90%" },
              {
                metric: "Data Consistency",
                improvement: "Single source of truth",
              },
              { metric: "Executive Decisions", improvement: "2x faster" },
            ],
          },
        },

        "python-for-bi": {
          title: "Python for BI",
          category: "Data Services",
          icon: "<FiCode className='w-8 h-8' />",
          heroImage: "/pythonbi.jpg",
          description:
            "Leverage Python's powerful data ecosystem to supercharge your business intelligence capabilities.",
          longDescription:
            "We implement Python-based BI solutions that go beyond traditional tools, enabling advanced data manipulation, predictive analytics, and automated reporting workflows that scale with your business needs.",
          features: [
            "Custom ETL pipelines",
            "Automated reporting systems",
            "Predictive modeling integration",
            "Interactive dashboard development",
            "Data quality monitoring",
            "ML-powered insights",
          ],
          benefits: [
            "Handle larger datasets than traditional BI tools",
            "Custom analytics tailored to your business",
            "Reduced manual reporting work",
            "Future-proof analytics infrastructure",
            "Integration with data science workflows",
            "Open-source cost savings",
          ],
          process: [
            {
              step: "1",
              title: "Requirement Analysis",
              description: "Understanding current workflows and pain points.",
            },
            {
              step: "2",
              title: "Data Pipeline Design",
              description:
                "Architecting efficient data transformation processes.",
            },
            {
              step: "3",
              title: "Solution Development",
              description:
                "Building custom Python applications for your BI needs.",
            },
            {
              step: "4",
              title: "Deployment & Training",
              description:
                "Implementation and knowledge transfer to your team.",
            },
          ],
          pricing: {
            starter: {
              price: "₹30,000/month",
              features: [
                "Basic Automation",
                "Standard Reports",
                "Monthly Maintenance",
              ],
            },
            professional: {
              price: "₹55,000/month",
              features: [
                "Custom Dashboards",
                "Advanced Analytics",
                "Weekly Updates",
                "API Integrations",
              ],
            },
            enterprise: {
              price: "₹90,000/month",
              features: [
                "End-to-End BI System",
                "Predictive Models",
                "24/7 Support",
                "Team Training",
              ],
            },
          },
          caseStudy: {
            client: "Financial Services Firm",
            challenge: "Manual reporting processes consuming 40+ hours weekly",
            solution:
              "Developed Python-based automated reporting system with anomaly detection",
            results: [
              { metric: "Reporting Time", improvement: "-90%" },
              { metric: "Insight Discovery", improvement: "3x faster" },
              { metric: "Data Errors", improvement: "Reduced to near-zero" },
            ],
          },
        },
      },
    },

    //Pay Per Click Management
    {
      title: "Pay Per Click Management",
      icon: "FiDollarSign",
      description: "Strategic paid advertising campaigns",
      gradient: "from-orange-400 to-red-500",
      benefits: [
        "Increase qualified traffic",
        "Improve conversion rates",
        "Lower acquisition costs",
        "Maximize advertising ROI",
      ],
      services: {
        "performance-measurement": {
          title: "Performance Measurement",
          category: "Marketing Analytics",
          icon: "<FiTarget className='w-8 h-8' />",
          heroImage: "/performance-measurement.jpg",
          description:
            "Advanced frameworks to quantify and optimize marketing effectiveness across channels and tactics.",
          longDescription:
            "Implementation of sophisticated measurement frameworks including MMM (Media Mix Modeling), MTA (Multi-Touch Attribution), incrementality testing, and unified analytics to properly assess marketing ROI and optimize budget allocation.",
          features: [
            "Media Mix Modeling (MMM)",
            "Multi-Touch Attribution (MTA)",
            "Incrementality testing",
            "Unified measurement framework",
            "Test & learn design",
            "ROI optimization models",
            "Budget allocation scenarios",
            "Custom KPI development",
          ],
          benefits: [
            "Accurate marketing ROI",
            "Optimal budget allocation",
            "Channel performance clarity",
            "Data-driven decisions",
            "Testing methodology",
            "Executive-level insights",
          ],
          process: [
            {
              step: "1",
              title: "Framework Design",
              description: "Selecting proper measurement methodology",
            },
            {
              step: "2",
              title: "Data Integration",
              description: "Connecting all marketing and business data",
            },
            {
              step: "3",
              title: "Model Development",
              description: "Building statistical measurement models",
            },
            {
              step: "4",
              title: "Insight Generation",
              description:
                "Translating results into actionable recommendations",
            },
          ],
          pricing: {
            starter: {
              price: "₹60,000",
              features: [
                "Basic Attribution Setup",
                "3 Data Sources",
                "Standard Reports",
                "Monthly Insights",
              ],
            },
            professional: {
              price: "₹150,000",
              features: [
                "Advanced MTA/MMM",
                "Unlimited Data Sources",
                "Custom Models",
                "Quarterly Optimization",
                "Executive Dashboards",
              ],
            },
            enterprise: {
              price: "₹300,000",
              features: [
                "Enterprise Measurement",
                "Custom Framework",
                "Incrementality Testing",
                "Ongoing Model Refinement",
                "Dedicated Analyst",
              ],
            },
          },
          caseStudy: {
            client: "Consumer Electronics Brand",
            challenge: "$5M digital budget with unclear ROI by channel",
            solution: "MMM+MTA hybrid model with incrementality testing",
            results: [
              { metric: "Marketing Efficiency", improvement: "+40%" },
              { metric: "Waste Reduction", improvement: "$1.2M saved" },
              {
                metric: "ROI Clarity",
                improvement: "Channel-level visibility",
              },
            ],
          },
        },
      },
    },
  ];

  const logoUrl = "https://yourdomain.com/logo.png"; // Replace with your actual logo URL
  const siteUrl = "https://yourdomain.com"; // Replace with your actual domain

  const WORDPRESS_API = "https://a2zdm.com/wp-json/wp/v2";
  const mobile_number = "9826739671";
  // Fetch wrapper with error handling
  const wpFetch = async (endpoint, method = "GET", body = null) => {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body && { body: JSON.stringify(body) }),
    };

    try {
      const response = await fetch(`${WORDPRESS_API}${endpoint}`, options);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("WordPress API Error:", error);
      throw error;
    }
  };

  // Process and enrich blog data
  const processBlogData = async (posts) => {
    return await Promise.all(
      posts.map(async (post) => {
        // Get featured media
        let imageUrl = "/search.jpg";
        let altText = post.title.rendered || "Blog post image";

        if (post.featured_media) {
          try {
            const media = await wpFetch(`/media/${post.featured_media}`);
            imageUrl = media.source_url;
            altText = media.alt_text || altText;
          } catch (error) {
            console.error("Error fetching media:", error);
          }
        }

        // Get category names
        const categoryNames = await Promise.all(
          (post.categories || []).map(async (catId) => {
            try {
              const category = await wpFetch(`/categories/${catId}`);
              return category.name;
            } catch (error) {
              console.error("Error fetching category:", error);
              return "Uncategorized";
            }
          })
        );

        // Get tag names
        const tagNames = await Promise.all(
          (post.tags || []).map(async (tagId) => {
            try {
              const tag = await wpFetch(`/tags/${tagId}`);
              return tag.name;
            } catch (error) {
              console.error("Error fetching tag:", error);
              return "";
            }
          })
        ).then((tags) => tags.filter(Boolean));

        return {
          ...post,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, ""),
          content: post.content.rendered,
          image: imageUrl,
          altText: altText,
          categories: categoryNames,
          primaryCategory: categoryNames[0] || "Uncategorized",
          tags: tagNames,
          author: post._embedded?.author?.[0]?.name || "Admin",
          date: new Date(post.date).toLocaleDateString(),
          readTime: calculateReadTime(post.content.rendered),
        };
      })
    );
  };

  // Calculate read time
  const calculateReadTime = (content) => {
    const wordCount = content.split(" ").length;
    return `${Math.ceil(wordCount / 200)} min read`;
  };

  // Fetch all initial data
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // Fetch posts with embedded data
        const posts = await wpFetch("/posts?_embed");
        const processedBlogs = await processBlogData(posts);
        setBlogs(processedBlogs);

        // Fetch all categories
        const allCategories = await wpFetch("/categories");
        setCategories(allCategories);

        // Fetch all tags
        const allTags = await wpFetch("/tags");
        setTags(allTags);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);
  const caseStudies = [
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
        author: "Emily Richardson",
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

  return (
    <TechContext.Provider
      value={{
        blogs,
        categories,
        tags,
        caseStudies,
        loading,
        error,
        logoUrl,
        siteUrl,
        serviceData,
        mobile_number,
        // Helper functions
        getBlogBySlug: (slug) => blogs.find((blog) => blog.slug === slug),
        getRelatedPosts: (currentBlogId) => {
          const currentBlog = blogs.find((b) => b.id === currentBlogId);
          if (!currentBlog) return [];

          return blogs
            .filter(
              (blog) =>
                blog.id !== currentBlogId &&
                blog.categories.some((cat) =>
                  currentBlog.categories.includes(cat)
                )
            )
            .slice(0, 3);
        },
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTech = () => {
  const context = useContext(TechContext);
  if (!context) {
    throw new Error("useTech must be used within a TechProvider");
  }
  return context;
};
