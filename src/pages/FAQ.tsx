import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Link } from "react-router-dom";
import { Search, Phone, HelpCircle, ShieldCheck, MapPin, Star, CreditCard, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        question: "What is RankLocal and how does it work?",
        answer: "RankLocal is a comprehensive smart comparison platform designed to revolutionize how you discover and evaluate local businesses in your area. Our platform aggregates verified data from multiple trusted sources, including official business registrations, customer reviews, industry certifications, and real-time service metrics. When you search for a business category—whether it's hospitals, restaurants, salons, or auto services—RankLocal presents you with a curated list of options ranked by our proprietary algorithm that considers quality, reliability, proximity, and value. You can then dive deep into each business profile to view detailed information including services offered, pricing ranges, customer testimonials, photos, and availability. Our side-by-side comparison feature allows you to evaluate up to 5 businesses simultaneously across dozens of criteria, helping you make the most informed decision possible. Whether you're looking for urgent medical care, planning a special dinner, or scheduling routine maintenance, RankLocal ensures you always choose the right local business for your specific needs."
      },
      {
        question: "Is RankLocal free to use?",
        answer: "Yes, RankLocal is completely free for all consumers, and we're committed to keeping it that way. You can perform unlimited searches, access comprehensive business profiles, read customer reviews, view photos and menus, check availability, and use our powerful comparison tools—all without paying a single penny. We don't have hidden fees, premium tiers, or paywalled features for consumers. Our business model is built on the principle that everyone deserves access to transparent, unbiased business information. We generate revenue through optional premium services for businesses who want enhanced profiles and analytics, but this never affects our search rankings or the information you see. Creating an account is also free and unlocks additional features like saving favorites, creating comparison lists, receiving personalized recommendations, and tracking your search history. We believe that by providing free, high-quality comparison tools, we help consumers make better decisions while encouraging businesses to improve their services—a win-win for everyone in the community."
      },
      {
        question: "How do I start comparing businesses?",
        answer: "Getting started with RankLocal's comparison feature is simple and intuitive. First, use our search bar on the homepage to enter what you're looking for—this could be a business category like 'dentist' or 'car repair,' a specific service like 'teeth whitening,' or even a business name. You can also select from our popular categories displayed on the homepage. Once you see your search results, you'll notice a 'Compare' button on each business card. Click this button to add businesses to your comparison tray, which appears at the bottom of your screen. You can add up to 5 businesses for side-by-side comparison. When you're ready, click 'Compare Now' to see a detailed comparison table that evaluates each business across multiple criteria including hourly rates, average ratings, total reviews, distance from your location, current offers and promotions, real-time availability, range of services, insurance acceptance, certifications, and even sample photos of their work. The comparison table highlights the best values in each category with green indicators, making it easy to identify which business excels in areas that matter most to you. You can also customize which criteria to display based on your priorities."
      },
      {
        question: "What categories of businesses can I find on RankLocal?",
        answer: "RankLocal covers an extensive range of local business categories to meet virtually any need you might have. Our healthcare section includes hospitals, clinics, dental offices, pharmacies, optical centers, physiotherapy clinics, mental health professionals, and veterinary services. For personal care and wellness, you'll find beauty salons, spas, barbershops, nail studios, massage therapists, fitness centers, yoga studios, and wellness coaches. Our food and dining category encompasses restaurants of all cuisines, cafes, bakeries, catering services, food delivery options, and specialty food stores. Automotive services include car repair shops, dealerships, car washes, tire centers, auto parts stores, and vehicle inspection stations. Home services cover plumbers, electricians, HVAC technicians, house cleaners, pest control, landscaping, interior designers, and moving companies. We also feature educational services like tutoring centers, music schools, driving schools, and language institutes. Retail categories include clothing stores, electronics shops, furniture stores, grocery markets, and specialty boutiques. Professional services such as lawyers, accountants, real estate agents, insurance providers, and financial advisors are also available. We're constantly expanding our database based on user demand and regional business landscapes."
      },
      {
        question: "How do I create an account and what benefits does it provide?",
        answer: "Creating a RankLocal account is quick, easy, and completely free. Simply click the 'Sign Up' button in the navigation bar and provide your email address, create a password, and optionally add your name and location preferences. You can also sign up instantly using your Google or Facebook account for added convenience. Once you have an account, you unlock a suite of powerful features that enhance your experience. First, you can save your favorite businesses to quickly access them later without searching again. Second, you can create and save multiple comparison lists for different needs—perhaps one for restaurants and another for healthcare providers. Third, you'll receive personalized recommendations based on your search history and preferences, helping you discover new businesses that match your interests. Fourth, your comparison history is saved, so you can revisit past research when making decisions. Fifth, you can write and manage your reviews, helping other community members make informed choices. Sixth, you'll receive notifications about special offers and updates from businesses you've saved. Finally, account holders can set up alerts for new businesses in specific categories or when a saved business receives significant new reviews. Your data is always protected and never sold to third parties."
      }
    ]
  },
  {
    category: "Trust & Verification",
    icon: ShieldCheck,
    questions: [
      {
        question: "How do you verify business information?",
        answer: "Our verification process is one of the most rigorous in the industry, designed to give you complete confidence in the information you see on RankLocal. When a business is added to our platform, we initiate a multi-layer verification protocol. First, we cross-reference the business details against official government business registration databases to confirm legal status and ownership. Second, we verify the physical address through postal service databases and satellite imagery confirmation. Third, we validate contact information by making test calls and sending verification emails. Fourth, for businesses in regulated industries like healthcare or legal services, we verify professional licenses, certifications, and accreditations with the relevant governing bodies. Fifth, we analyze the business's online presence across multiple platforms to ensure consistency and legitimacy. Sixth, we may conduct on-site visits for premium verification requests. Businesses that pass all checks receive our 'Verified' badge. This badge is reviewed annually, and businesses must maintain their credentials to keep it. We also have an ongoing monitoring system that flags any changes or red flags, prompting re-verification. If you ever notice incorrect information, you can report it through our platform, and our team will investigate within 48 hours."
      },
      {
        question: "Are the reviews on RankLocal authentic?",
        answer: "Authenticity is the cornerstone of our review system, and we employ a sophisticated multi-pronged approach to ensure every review you read reflects a genuine customer experience. Our first line of defense is algorithmic detection—we use machine learning models trained on millions of reviews to identify patterns associated with fake reviews, such as unusual timing, repetitive language, suspicious IP patterns, or anomalous user behavior. Flagged reviews are quarantined for manual inspection. Second, we require email verification for all reviewers, and accounts must be at least 48 hours old before posting reviews, preventing rapid-fire fake review campaigns. Third, we analyze reviewer history—accounts that only review businesses in the same category or with extreme ratings (all 5-stars or all 1-stars) receive additional scrutiny. Fourth, we've implemented a 'Verified Purchase' badge for reviews from users who booked or purchased through our platform, providing an extra layer of trust. Fifth, business owners can respond to reviews, creating accountability and allowing both sides of any story to be heard. Sixth, users can report suspicious reviews, which triggers an investigation by our Trust & Safety team. We remove approximately 15% of submitted reviews that fail our authenticity checks, ensuring the reviews you see are genuine, helpful, and trustworthy."
      },
      {
        question: "What does the 'Verified' badge mean?",
        answer: "The 'Verified' badge is our highest trust indicator, signifying that a business has successfully completed our comprehensive verification process and meets our standards for legitimacy and professionalism. To earn this badge, a business must first provide valid business registration documents that confirm legal operation in their jurisdiction. Second, they must verify ownership or authorized representation through a secure verification process that may include document submission or phone verification. Third, their physical address must be confirmed as a legitimate business location—we cross-reference with postal databases and may use visual verification. Fourth, contact information must be active and responsive—we test phone numbers and email addresses. Fifth, for regulated industries, we verify all required licenses and certifications with issuing authorities. For healthcare providers, this includes medical licenses, board certifications, and facility accreditations. Sixth, the business must have a clean record—no outstanding legal issues, regulatory violations, or unresolved customer complaints of a serious nature. The Verified badge is not permanent; it's reviewed annually, and businesses must maintain compliance to retain it. If a verified business receives multiple serious complaints or our monitoring detects issues, the badge may be suspended pending investigation. This ensures the Verified badge always represents current trustworthiness, not just past verification."
      },
      {
        question: "How do you handle fake or misleading business listings?",
        answer: "We take fake and misleading listings extremely seriously, as they undermine the trust that is fundamental to our platform's value. Our approach combines proactive detection with reactive investigation. Proactively, our automated systems continuously scan for red flags: businesses with no verifiable online presence, duplicate listings with slight variations, contact information associated with known fraudulent operations, or addresses that don't correspond to actual business locations. We also use image recognition to detect stock photos being used as business photos and natural language processing to identify copied or templated descriptions. Reactively, we provide easy reporting mechanisms for users who suspect a listing is fake or misleading—every business profile has a 'Report' button. When a report is submitted, our Trust & Safety team initiates an investigation within 24 hours. For urgent cases (e.g., suspected scams), we can temporarily suspend a listing while investigating. If a listing is confirmed to be fake or deliberately misleading, we remove it permanently and ban associated accounts. The business cannot re-list without going through our enhanced verification process and providing additional documentation. We also cooperate with local authorities when we uncover potential fraud. For less severe issues—like outdated information or minor inaccuracies—we work with the business to correct the listing rather than removing it. Our goal is to maintain a clean, trustworthy directory while being fair to legitimate businesses."
      },
      {
        question: "What security measures protect my personal data?",
        answer: "Protecting your personal data is a top priority at RankLocal, and we've implemented enterprise-grade security measures to ensure your information remains safe. All data transmitted between your device and our servers is encrypted using TLS 1.3, the latest and most secure transport layer protocol. Your password is never stored in plain text—we use bcrypt hashing with individual salts, making it virtually impossible for anyone (including us) to recover your password from our database. Our servers are hosted in SOC 2 Type II certified data centers with 24/7 physical security, redundant power, and advanced fire suppression systems. We employ multiple layers of firewalls, intrusion detection systems, and continuous security monitoring. Access to sensitive data is strictly limited to authorized personnel on a need-to-know basis, and all access is logged and audited. We conduct regular penetration testing by independent security firms to identify and address vulnerabilities before they can be exploited. Your personal information is never sold to third parties—we're explicit about this in our privacy policy. We only share data with service providers who are contractually bound to protect it and only for purposes directly related to providing our service. You have full control over your data: you can view, export, or delete your information at any time through your account settings. We also support two-factor authentication for an additional layer of account security, and we recommend all users enable this feature."
      }
    ]
  },
  {
    category: "Search & Location",
    icon: MapPin,
    questions: [
      {
        question: "How accurate is the location-based search?",
        answer: "Our location-based search system is designed to provide highly accurate results by leveraging multiple geolocation technologies and data sources. When you allow location access, we use your device's GPS coordinates, which are accurate to within approximately 10 meters in most conditions. This precise location data is combined with our comprehensive business address database, which includes verified latitude and longitude coordinates for each listing. When calculating distances, we use actual road distances rather than straight-line measurements, giving you realistic travel time estimates that account for local road networks. You can customize your search radius from as small as 1 kilometer to as large as 50 kilometers, with common presets for 5km, 10km, and 25km. Our system updates your location in real-time as you move, so if you're traveling, your search results automatically adjust. For businesses with multiple locations, we show you the nearest branch. We also account for traffic patterns when estimating travel times, with options to see estimates for current traffic, typical traffic, or no traffic. If GPS is unavailable, we fall back to IP-based geolocation, which is less precise but still provides regional accuracy. You can also manually enter any address to search from a different location. Our location data is continuously updated and validated to ensure addresses and coordinates remain accurate as businesses move or roads change."
      },
      {
        question: "Can I search for businesses in a different city?",
        answer: "Absolutely! RankLocal is designed to be flexible in how you search for businesses, whether they're around the corner or across the country. There are several ways to search in a different location. First, you can use the location dropdown in the search bar and type any city, neighborhood, or address—our autocomplete feature will suggest matching locations as you type. Second, you can enter a complete address to search from that specific point. Third, you can use our map view to pan and zoom to any area, then click 'Search this area' to find businesses there. This is particularly useful for exploring unfamiliar neighborhoods or planning trips. Fourth, you can save multiple location presets in your account—perhaps your home, office, and parents' house—and quickly switch between them. This feature is incredibly useful for various scenarios: planning a trip and want to research restaurants and attractions at your destination, moving to a new city and need to find healthcare providers before you arrive, looking for businesses near a specific venue for an event, comparing options in different neighborhoods before deciding where to live, or helping family members in other cities find local services. Our database covers businesses across numerous cities and regions, with continuous expansion to new areas. If you're searching in an area with limited coverage, we'll let you know and invite you to suggest businesses to add."
      },
      {
        question: "Why can't I find a specific business?",
        answer: "There are several reasons why a specific business might not appear in your search results, and we're continuously working to make our database as comprehensive as possible. First, the business may be new and not yet added to our database—our data aggregation process runs continuously, but there can be a lag of a few weeks for brand-new businesses. Second, the business might be listed under a different name than you're searching for—try searching for keywords related to their services instead of the exact business name. Third, the business may have closed, relocated, or changed names since our last data update. Fourth, very small businesses or sole proprietors sometimes fly under the radar of our aggregation systems, especially if they have limited online presence. Fifth, the business might be in a category we're still expanding coverage for in your region. If you can't find a business you're looking for, we encourage you to use our 'Suggest a Business' feature accessible from any search results page. Simply provide the business name, address, and any other details you know, and our team will research and add the listing, typically within 5-7 business days. For business owners, we offer a 'Claim Your Business' feature that allows you to add or update your listing directly. This not only ensures accuracy but also gives you control over your business profile. We're committed to having the most comprehensive local business database possible, and user suggestions are invaluable in achieving that goal."
      },
      {
        question: "How do I filter and sort my search results?",
        answer: "RankLocal offers extensive filtering and sorting options to help you quickly find exactly what you're looking for among potentially hundreds of results. After performing a search, you'll see filter options on the left side of the results page (or accessible via a filter button on mobile). Category filters let you narrow down to specific business types—for example, within 'restaurants,' you can filter by cuisine type (Italian, Indian, Chinese, etc.), dining style (fine dining, casual, fast food), or features (outdoor seating, delivery, vegan options). Rating filters allow you to set a minimum rating threshold—perhaps only showing businesses with 4 stars or above. Price range filters use a familiar $ to $$$$ system based on typical costs. Distance filters let you set a maximum travel radius. Availability filters show only businesses currently open or those with appointments available today. Feature filters vary by category—for healthcare, you might filter by insurance accepted; for salons, by specific services offered; for restaurants, by amenities like parking or WiFi. Sorting options appear at the top of results: sort by rating (highest first), distance (nearest first), popularity (most reviewed), price (low to high or high to low), or 'Best Match,' which uses our algorithm to balance multiple factors based on your search query and preferences. All filters can be combined, and your filter preferences are saved for future searches in the same category. You can clear all filters with one click to start fresh."
      },
      {
        question: "Does RankLocal work internationally?",
        answer: "RankLocal is currently focused on providing comprehensive coverage in select regions, with plans for international expansion. Our primary coverage areas include major metropolitan regions and their surrounding suburbs, with particularly strong coverage in areas where we've had longer presence. We're continuously expanding to new cities and regions based on user demand and partnership opportunities. When you access RankLocal from a location where we have coverage, you'll see full search results, verified business listings, and all platform features. In areas with developing coverage, you may see fewer results or businesses with less detailed profiles—we clearly indicate when coverage is limited and encourage users to suggest businesses to help us grow in those areas. For international travelers, you can use RankLocal to search for businesses in any area where we have coverage, regardless of your current location—simply enter the destination city in the location search. We support multiple languages for the platform interface, with the language automatically detected from your browser settings or manually selectable in your account preferences. Business listing content is typically in the local language of the business, though we're working on translation features. Our expansion roadmap prioritizes areas with high user demand, so if you'd like to see RankLocal in your country or region, let us know through our feedback form. We also welcome partnerships with local business directories and data providers to accelerate coverage in new markets."
      }
    ]
  },
  {
    category: "Ratings & Reviews",
    icon: Star,
    questions: [
      {
        question: "How is the overall rating calculated?",
        answer: "Our overall rating system goes far beyond a simple average of star ratings, employing a sophisticated weighted algorithm designed to give you the most accurate picture of business quality. The calculation considers multiple factors with different weights. Customer review scores form the foundation, but we apply temporal weighting—recent reviews count more heavily than older ones, reflecting the current state of the business. We also factor in review depth: detailed reviews with specific feedback are weighted more heavily than brief, generic ones, as they tend to be more reliable indicators of quality. Review volume matters too—a 4.8 rating from 500 reviews is more reliable than a 4.9 from 5 reviews, so we apply confidence adjustments based on sample size. Beyond reviews, we incorporate additional quality signals where available: response rate and time (how quickly and consistently the business responds to inquiries), resolution rate (for businesses where we can track if customer issues were resolved), repeat customer indicators, professional certifications and accreditations, and third-party quality metrics from industry-specific sources. For healthcare providers, this might include clinical quality measures; for restaurants, health inspection scores. The final rating is normalized on a 5-point scale but displayed with one decimal place for precision. We recalculate comprehensive scores weekly to ensure stability while still reflecting recent changes. This multi-factor approach means our ratings are more nuanced and reliable than simple review averages you might find elsewhere."
      },
      {
        question: "Can I leave a review for a business?",
        answer: "Yes, we encourage all users to share their genuine experiences by leaving reviews for businesses they've used. To leave a review, you'll need a free RankLocal account—this helps us maintain review quality and accountability while preventing anonymous spam reviews. Once logged in, navigate to the business profile page and click the 'Write a Review' button. You'll be prompted to provide a star rating (1-5 stars), write a detailed description of your experience, and optionally add photos. We encourage you to be specific and helpful: mention what services you used, what stood out (positively or negatively), and any tips for future customers. Reviews can cover any aspect of your experience—service quality, staff friendliness, wait times, cleanliness, value for money, and more. After submission, your review goes through our authenticity verification process, which typically takes 24-48 hours. Once approved, your review appears on the business profile and contributes to their overall rating. You can edit or update your review anytime from your account dashboard—perhaps to reflect a follow-up visit or if the business addressed an issue you mentioned. Business owners can respond to reviews publicly, creating a dialogue that benefits the entire community. We also have a helpful 'Photos from Customers' section where your images can help others see real examples of the business's work or atmosphere. Reviews that are found to be fake, incentivized, or violating our guidelines will be removed."
      },
      {
        question: "How often are ratings updated?",
        answer: "RankLocal employs a tiered update system that balances real-time responsiveness with rating stability. The simple star rating display, which shows the aggregate of all reviews, is updated in real-time—as soon as a new review passes verification (typically within 24-48 hours of submission), it's factored into this number. You'll see the most current rating whenever you view a business profile. However, our comprehensive weighted rating score—the one used for ranking businesses in search results and comparisons—is recalculated on a weekly basis, every Sunday night. This weekly cycle serves several important purposes: it prevents rating manipulation through sudden review-bombing, it provides stability so rankings don't fluctuate wildly day-to-day, and it allows us to apply our sophisticated weighting algorithms that require analyzing patterns over time. For trending indicators, we also track 30-day and 90-day rating trajectories, showing whether a business's ratings are improving, declining, or stable. This helps you identify businesses that are on an upward trajectory or those that may have experienced recent issues. Review counts are updated in real-time, so you always know how many reviews a rating is based on. If a business receives a significant number of new reviews (more than 10% of their total in a week), we may trigger an off-cycle recalculation to ensure current performance is accurately reflected. Our goal is to show you ratings that are both current and reliable."
      },
      {
        question: "What should I include in a helpful review?",
        answer: "A helpful review provides specific, actionable information that helps other users make informed decisions. Here's what makes a review valuable: First, context about your visit—mention when you visited (time of day, day of week), what service you used, and any special circumstances (was it during a busy period, were you a first-time customer, etc.). Second, specific observations—instead of saying 'service was good,' describe what made it good: 'The staff explained each step of the procedure, answered all my questions patiently, and the actual service was completed in 30 minutes as promised.' Third, cover multiple aspects of your experience: quality of the actual service or product, staff interactions and professionalism, wait times and scheduling process, cleanliness and ambiance of the location, pricing and value for money, and any follow-up or aftercare. Fourth, be balanced—even positive reviews are more credible when they mention minor imperfections, and negative reviews are more helpful when they acknowledge positives. Fifth, include photos when relevant—showing the actual results of a service, the food you ordered, or the atmosphere of the space provides invaluable visual context. Sixth, provide a summary verdict—would you return, would you recommend to others, and what type of customer would most appreciate this business. Finally, update your review if circumstances change—if the business addressed an issue you mentioned or if a product held up well over time, updating adds valuable long-term perspective."
      },
      {
        question: "Can businesses remove negative reviews?",
        answer: "No, businesses cannot directly remove any reviews—positive or negative. This policy is fundamental to maintaining the trust and integrity of our platform. If businesses could remove negative reviews, ratings would become meaningless and consumers would lose a vital tool for making informed decisions. However, we do have processes for addressing genuinely problematic reviews. Businesses can flag reviews that violate our content guidelines—for example, reviews containing hate speech, personal attacks on staff, false claims of fact (not opinions), conflicts of interest (such as a competitor leaving fake negative reviews), or reviews that describe experiences at the wrong business. Flagged reviews are investigated by our Trust & Safety team, and if violations are confirmed, the review is removed. Importantly, simply being negative or critical does not violate our guidelines—businesses cannot remove reviews just because they're unflattering. What businesses can and should do is respond professionally to negative reviews. This public response allows them to share their perspective, apologize if appropriate, explain how they've addressed the issue, or provide context that readers might find helpful. Studies show that thoughtful responses to negative reviews often improve consumer perception of a business. We also encourage direct resolution—if a business successfully resolves a customer's issue, that customer can update their review to reflect the positive resolution. Many negative reviews become neutral or positive once issues are addressed, benefiting everyone."
      },
      {
        question: "How do I report a suspicious or fake review?",
        answer: "If you encounter a review that seems suspicious or fake, we want to hear about it. Every review on RankLocal has a small flag icon or 'Report' link that you can use to alert our Trust & Safety team. When you click to report, you'll be asked to select the reason from common categories: suspected fake review, conflict of interest (e.g., competitor or friend of business owner), contains false statements of fact, harassment or personal attacks, spam or promotional content, or review of wrong business. You can also add specific details explaining why you believe the review is problematic. Once submitted, our team investigates—typically within 48 hours for standard cases, or within 24 hours if the review is particularly egregious. We analyze multiple data points: the reviewer's account history, IP and device patterns, linguistic analysis comparing to known fake review patterns, and any relationships between the reviewer and business. If we determine the review violates our guidelines, it's removed permanently. If we find it's legitimate, it remains—but we appreciate the report either way, as it helps train our automated detection systems. For businesses who believe they're being targeted by a fake review campaign, we have escalated investigation procedures. Contact our business support team with details, and we'll conduct a thorough analysis. We take review authenticity extremely seriously because the value of our platform depends entirely on users being able to trust the reviews they read."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    icon: CreditCard,
    questions: [
      {
        question: "Does RankLocal handle payments?",
        answer: "RankLocal is primarily a discovery and comparison platform—we help you find and evaluate businesses, but all transactions and payments are handled directly between you and the business you choose. When you book an appointment, make a reservation, or purchase a service through our platform, you may be directed to the business's own booking system or payment processor. This approach has several benefits: you're protected by the business's own payment security and refund policies, you can use whatever payment methods they accept, and there's a direct relationship between you and the service provider. That said, we're gradually introducing optional integrated booking features for certain categories, where you can book and pay directly through RankLocal. In these cases, payments are processed through our PCI-compliant payment partner, and we clearly indicate when you're using our integrated system versus being redirected to the business. For these integrated transactions, we provide additional protections including our RankLocal Booking Guarantee, which helps resolve disputes if a business fails to deliver the service as described. We never store your full credit card details on our servers—all payment data is handled by our secure payment partner. Currently, integrated booking is available for select categories in select markets, with plans to expand based on user demand and business participation."
      },
      {
        question: "Are the prices shown accurate?",
        answer: "We strive to provide the most accurate pricing information possible, but we want to be transparent about how pricing data works on our platform. Pricing information comes from multiple sources: direct input from businesses who manage their own profiles, aggregated data from official business websites and menus, and industry-standard price ranges for services where specific pricing isn't available. For businesses that actively manage their RankLocal profiles, prices are typically very accurate and updated regularly. We also display timestamps showing when pricing was last verified or updated, helping you gauge reliability. However, prices can change, and there may sometimes be a lag between a business updating their prices and that change appearing on our platform. Promotional pricing, seasonal variations, and market-based pricing (like some restaurants with market-price items) may not always be reflected. For services with highly variable pricing—like healthcare procedures, legal services, or custom work—we typically show ranges rather than specific prices, as actual costs depend on individual circumstances. Our recommendation is to always confirm pricing directly with the business before making decisions, especially for significant purchases or services. If you notice pricing that appears to be incorrect, you can report it through the business profile, and our team will investigate and update accordingly. Businesses are also notified when users report pricing discrepancies, encouraging them to keep their information current."
      },
      {
        question: "Do businesses pay to be listed higher?",
        answer: "No, absolutely not. This is a fundamental principle of RankLocal's platform integrity. Our search rankings are determined entirely by our algorithm, which considers factors like rating score, review quality and recency, relevance to your search query, distance from your location, and various quality signals. Businesses cannot pay for higher organic search ranking—this would fundamentally undermine the trust that makes our platform valuable to users. We do offer premium features for businesses, but these are clearly labeled and never affect search rankings. For example, businesses can pay for enhanced profiles with more photos and detailed information, featured placement in a clearly marked 'Sponsored' section separate from organic results, promotional offers that appear in our deals section, and analytics about their profile views and engagement. Any sponsored or promoted content is always clearly labeled as such, so you can distinguish between organic recommendations and paid promotions. Our business model is built on providing genuine value to both consumers and businesses: consumers get trustworthy, unbiased comparisons, and businesses get exposure to potential customers in a fair, merit-based system. If rankings could be bought, consumers would stop trusting our recommendations, and the platform would lose its value for everyone. We regularly audit our systems and publish transparency reports to demonstrate that organic rankings are never influenced by business payments."
      },
      {
        question: "How do businesses get featured on RankLocal?",
        answer: "There are several ways businesses can appear and get featured on RankLocal, ranging from automatic inclusion to premium visibility options. Basic listings are free and happen automatically—our data aggregation systems continuously scan business registries, online directories, and other sources to add new businesses to our database. Most businesses are listed without any action required on their part. Business owners can claim their listing for free, which allows them to verify accuracy, add details, respond to reviews, and access basic analytics. Claimed businesses often perform better because they have more complete, accurate profiles. Beyond this, we offer premium options for businesses wanting enhanced visibility. Premium Profiles allow businesses to add unlimited photos, detailed service descriptions, special offers, and staff profiles—richer content that helps them stand out and convert views into customers. Promoted Placement puts businesses in a clearly marked 'Sponsored' section at the top of relevant search results—this is paid advertising, but it's always labeled so users know. Featured Deals allow businesses to promote special offers that appear in our deals section and as badges on their profiles. Directory Partnerships give businesses in certain industries enhanced profile templates with industry-specific features. All premium features are transparently priced and available through our Business Portal. Importantly, whether a business uses free or premium features, their organic search ranking is always determined by our algorithm based on quality and relevance—never by payment."
      },
      {
        question: "Are there any hidden costs or premium features for consumers?",
        answer: "No, RankLocal is 100% free for consumers with no hidden costs, premium tiers, or paywalled features. Every feature described on our platform—searching, comparing, viewing business profiles, reading reviews, accessing photos and menus, using filters and sorting, saving favorites, creating comparison lists, receiving recommendations, writing reviews, and contacting businesses—is completely free to use without any limits. We don't have a 'freemium' model where basic features are free but advanced features cost money. We don't charge for additional searches or comparisons. We don't require payment to see full business details or contact information. Creating an account is free and provides additional convenience features, but you can use most of the platform without even signing up. Our business model is based on providing value to businesses through optional premium features and advertising—never by charging consumers. We believe that access to transparent business information is something everyone deserves, regardless of ability to pay. This also makes our platform more valuable, as wider consumer adoption means more value for businesses who want to reach those consumers. The only exception is if you book a service through our integrated booking system (currently available for select categories)—in that case, you're paying the business for their service, not paying RankLocal. Our platform facilitates the transaction but doesn't add fees. We're committed to maintaining this free consumer model indefinitely."
      }
    ]
  },
  {
    category: "Account & Support",
    icon: Clock,
    questions: [
      {
        question: "Do I need an account to use RankLocal?",
        answer: "No, you can use most of RankLocal's core features without creating an account. Anonymous users can perform unlimited searches, browse business profiles, read all reviews, view photos and detailed information, use comparison features, access contact information, and get directions to businesses. We believe in low-friction access to information, so we don't force you to sign up before finding what you need. However, creating a free account unlocks several valuable features that enhance your experience. First, you can save favorite businesses to quickly access them later without searching again—great for businesses you use regularly or want to remember. Second, you can create and save multiple comparison lists for different needs, keeping your research organized. Third, your search and comparison history is saved, so you can revisit past research. Fourth, you receive personalized recommendations based on your preferences and history. Fifth, you can write reviews to help other community members. Sixth, you can receive notifications about deals, updates, and new reviews for saved businesses. Seventh, your preferences (like default location and favorite categories) are remembered across sessions and devices. Creating an account takes less than a minute—just enter your email and create a password, or sign up instantly with Google or Facebook. Your data is protected and never sold, and you can delete your account at any time."
      },
      {
        question: "How can I contact RankLocal support?",
        answer: "We offer multiple channels for reaching our support team, designed to provide help in whatever way is most convenient for you. For general inquiries and non-urgent issues, email us at support@ranklocal.com—we typically respond within 24 hours during business days, often sooner. For faster responses, use the Contact form on our website, which routes your inquiry to the appropriate team and often results in same-day responses. For immediate assistance, we offer live chat support accessible via the chat bubble icon on our website—available 7 days a week from 8 AM to 10 PM local time, with AI-assisted responses available 24/7 for common questions. For business-related inquiries (claiming a listing, premium features, advertising), contact our Business Support team at business@ranklocal.com or through the dedicated contact form in our Business Portal. For urgent issues like reporting scams, safety concerns, or critical bugs, use our urgent report form which triggers immediate review. For general feedback and feature suggestions, visit our Feedback page where your ideas are reviewed by our product team. We also maintain active social media presence on Twitter, Facebook, and LinkedIn where you can reach us with questions or feedback. For self-service support, our Help Center contains hundreds of articles covering common questions and step-by-step guides. We're committed to providing excellent support because we know that when you're searching for a local business, you often need answers quickly."
      },
      {
        question: "Can I suggest new features?",
        answer: "Absolutely—user feedback is one of the most valuable inputs for our product development, and we actively encourage suggestions. We have a dedicated Feedback page on our platform where you can submit feature ideas, describe problems you've encountered, or share general thoughts about your experience. Each submission is reviewed by our product team, and we track all suggestions in our development planning system. Many of our current features originated from user suggestions: our comparison tool started as a user request, our dark mode was repeatedly requested before we built it, and our recently-added favorites organization with folders came directly from user feedback. When you submit a suggestion, you'll receive an acknowledgment email, and for popular suggestions that we decide to implement, we often reach out to the users who suggested them for input during development. You can also vote on other users' suggestions in our public feature request forum, helping us prioritize based on what matters most to our community. For real-time discussion of ideas, join our community Discord server where users and team members discuss features, share tips, and provide mutual support. While we can't implement every suggestion (some may conflict with our direction or have technical constraints), we genuinely value every piece of feedback. Even suggestions we can't act on immediately help us understand user needs and often influence future planning. Don't hesitate to share your ideas—you might see them become reality."
      },
      {
        question: "How do I update my account information or change my password?",
        answer: "Managing your account information on RankLocal is straightforward and can be done entirely through your Account Settings page. To access it, click on your profile icon in the top-right corner of any page and select 'Account Settings' from the dropdown menu. From your Account Settings, you can update your personal information including your name, email address, phone number, and profile photo. If you change your email address, you'll need to verify the new email before it becomes active. You can update your location preferences, including your default search location and any saved locations like home or work addresses. For password changes, there's a dedicated Security section where you can enter your current password and choose a new one. We recommend using a strong, unique password and enabling two-factor authentication (2FA) for additional security—this option is also in the Security section. You can manage notification preferences to control which emails and push notifications you receive, from marketing updates to review responses on your contributions. Privacy settings let you control profile visibility and data sharing preferences. If you've connected social accounts (Google, Facebook), you can manage these connections here as well. For complete data control, you can download a copy of all your data or permanently delete your account—both options are in the Privacy section. All changes are saved immediately, and sensitive changes (like email or password) require confirmation."
      },
      {
        question: "What should I do if I find incorrect information about a business?",
        answer: "If you spot incorrect information on a business listing, we want to know about it—accurate data is essential to our platform's value. There are several ways to report inaccuracies depending on the nature and severity of the issue. For minor corrections like wrong phone numbers, hours of operation, or address details, use the 'Suggest an Edit' button available on every business profile. You'll be able to specify what information is incorrect and provide the correct details. Our team reviews these suggestions and implements accurate updates, typically within 48-72 hours. For more significant issues—like a business that has closed, moved, or changed ownership—use the 'Report a Problem' option which triggers a more thorough investigation. If you believe a listing is entirely fraudulent or misleading, use the 'Report' button and select the appropriate category; these reports are prioritized for rapid investigation. Business owners and authorized representatives have additional options: they can claim their listing and directly update information through our Business Portal. Claimed businesses can edit their profiles immediately without waiting for review, though major changes may be verified. If you're a business owner and see incorrect information about your business, we recommend claiming your profile first—it's free and gives you ongoing control. For all reports, you can optionally provide your contact information so our team can follow up with questions or let you know when the issue is resolved. We appreciate every correction report as it helps us maintain the accuracy that users depend on."
      },
      {
        question: "How do I delete my RankLocal account?",
        answer: "We respect your right to control your data, including the right to delete your account entirely. While we'd be sad to see you go, we've made the process straightforward and transparent. To delete your account, go to Account Settings (accessible via your profile icon in the top-right corner), scroll to the Privacy & Data section, and click 'Delete Account.' You'll be asked to confirm your decision and may need to enter your password for security verification. Before confirming, you'll see a summary of what will be deleted: your profile information, saved favorites and comparison lists, search history, and account preferences. You'll also be reminded of what this means for your contributions: reviews you've written will be anonymized (attributed to 'Deleted User') rather than deleted, as they provide value to the community. If you want reviews deleted entirely, you can manually delete them from your Reviews section before deleting your account. Once you confirm deletion, the process is immediate and irreversible—your account cannot be recovered, and you'll need to create a new account if you wish to return. We retain certain anonymized, aggregated data for analytics purposes (like search pattern trends), but nothing that could identify you personally. If you're deleting your account due to a problem or frustration, we'd genuinely appreciate if you'd share feedback through our exit survey—your input helps us improve for other users. If you're concerned about specific data or have questions about what's retained, our support team can provide detailed information before you proceed with deletion."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 xs:pt-28 lg:pt-32 pb-12 xs:pb-16 lg:pb-20 bg-midnight relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="section-container relative">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-forest/20 text-forest px-4 py-2 rounded-full mb-6">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Help Center</span>
              </div>
              
              <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-cloud mb-4 xs:mb-6 leading-tight">
                Frequently Asked{" "}
                <span className="text-forest">Questions</span>
              </h1>
              
              <p className="text-cloud/70 text-sm xs:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about RankLocal. Can't find what you're looking for? 
                Our support team is always here to help.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 xs:py-16 lg:py-24 bg-cloud">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <ScrollAnimationWrapper key={categoryIndex}>
                <div className="mb-8 xs:mb-12">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 xs:mb-6">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                      <category.icon className="w-5 h-5 xs:w-6 xs:h-6 text-forest" />
                    </div>
                    <h2 className="text-lg xs:text-xl lg:text-2xl font-bold text-midnight">
                      {category.category}
                    </h2>
                  </div>
                  
                  {/* Questions Accordion */}
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-white rounded-xl border border-midnight/10 px-4 xs:px-6 overflow-hidden"
                      >
                        <AccordionTrigger className="text-left text-sm xs:text-base font-medium text-midnight hover:no-underline py-4 xs:py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-midnight/70 text-sm xs:text-base leading-relaxed pb-4 xs:pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 lg:py-24 bg-midnight relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 xs:w-20 xs:h-20 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 xs:w-10 xs:h-10 text-forest" />
              </div>
              
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-cloud mb-4 xs:mb-6">
                Resolved Your{" "}
                <span className="text-forest">Query?</span>
              </h2>
              
              <p className="text-cloud/70 mb-8 xs:mb-10 text-sm xs:text-base lg:text-lg leading-relaxed">
                If you found the answers you were looking for, start comparing local businesses today. 
                Still have questions? Our friendly support team is just a click away.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                <Link to="/search">
                  <button className="btn-forest px-6 xs:px-8 py-3.5 xs:py-4 text-sm xs:text-base lg:text-lg min-h-[48px] w-full xs:w-auto inline-flex items-center justify-center gap-2">
                    <Search className="w-4 h-4 xs:w-5 xs:h-5" />
                    Start Comparing
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-cloud/30 text-cloud rounded-full px-6 xs:px-8 py-3.5 xs:py-4 font-medium hover:bg-cloud/10 transition-colors text-sm xs:text-base lg:text-lg min-h-[48px] w-full xs:w-auto inline-flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 xs:w-5 xs:h-5" />
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
