export interface WebsiteKnowledgeItem {
  id: string;
  title: string;
  route: string;
  keywords: string[];
  answer: string;
}

const WEBSITE_KNOWLEDGE: WebsiteKnowledgeItem[] = [
    {
        id: "booking guide",
        title: "Booking Guide",
        route: "/book",
        keywords: ["how to book", "booking process", "reservation steps", "how to reserve", "booking guide"],
        answer:
          "To book a safari, start by exploring our tour packages or contact us for a custom itinerary. Once you choose your preferred option, you can request a quote and finalize your reservation with a deposit.",
    },
    {
        id: "payment options",
        title: "Payment Options",
        route: "/contact",
        keywords: ["payment", "pay", "options", "methods", "how to pay"],
        answer:
          "While in your safari the main payment options available are cash and credit card. While booking your trip we only accept bank transfers as our main payment option. Specific payment instructions will be provided during the booking process.",
    },
  {
    id: "contact-main",
    title: "Contact Information",
    route: "/contact",
    keywords: ["contact", "phone", "email", "location", "arusha", "support"],
    answer:
      "You can contact Flexi Safaris via phone at +255 764 570 182, email info@flexisafaris.com, or visit the office in Moshono, Arusha, Tanzania.",
  },
  {
    id: "booking-timing",
    title: "Booking Advice",
    route: "/contact",
    keywords: ["book", "booking", "advance", "how early", "reservation"],
    answer:
      "The website recommends booking around 2-3 months in advance to get the best availability and pricing.",
  },
  {
    id: "custom-itineraries",
    title: "Custom Trips",
    route: "/book",
    keywords: ["custom", "tailor", "itinerary", "private", "trip plan", "personalized"],
    answer:
      "Yes. Trips are described as 100% tailor-made, and the booking page highlights custom planning with no-cost, no-commitment quotations.",
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    route: "/contact",
    keywords: ["cancel", "cancellation", "refund", "policy"],
    answer:
      "The FAQ states a flexible cancellation policy with a full refund when canceled 60+ days before travel.",
  },
  {
    id: "best-time",
    title: "Best Time To Visit",
    route: "/contact",
    keywords: ["best time", "season", "when to visit", "weather", "months"],
    answer:
      "The site notes June-October (dry season) as best for wildlife viewing, while safaris are available year-round.",
  },
  {
    id: "destinations",
    title: "Top Destinations",
    route: "/destinations",
    keywords: ["destination", "where", "places", "serengeti", "ngorongoro", "tarangire", "manyara", "kilimanjaro", "zanzibar"],
    answer:
      "Featured destinations include Serengeti, Ngorongoro, Tarangire, Lake Manyara, Kilimanjaro, and Zanzibar, each with highlights and recommended travel periods.",
  },
  {
    id: "tour-packages",
    title: "Tour Packages",
    route: "/tours",
    keywords: ["tour", "package", "days", "price", "cost", "itinerary", "safari"],
    answer:
      "Current tour options include 7-day, 9-day, 11-day, and 15-day Tanzania packages, with safari routes and some options including Zanzibar beach extensions.",
  },
  {
    id: "about-company",
    title: "About Flexi Safaris",
    route: "/aboutus",
    keywords: ["about", "company", "mission", "values", "experience", "why flexi"],
    answer:
      "Flexi Safaris is presented as a Tanzania-based safari and adventure operator focused on personalized travel, local expertise, safety, and responsible tourism.",
  },
  {
    id: "signature-experiences",
    title: "Signature Experiences",
    route: "/aboutus",
    keywords: ["signature", "experience", "migration", "balloon", "walking safari", "cultural visit"],
    answer:
      "Signature experiences include classic lodge and camp safaris, Great Migration journeys, cultural village visits, hot air balloon excursions, and walking safari add-ons.",
  },
  {
    id: "gallery",
    title: "Gallery",
    route: "/gallery",
    keywords: ["gallery", "photos", "images", "wildlife", "landscape", "adventure"],
    answer:
      "The gallery showcases wildlife, landscape, people, and adventure moments from safaris, including themes like lion pride, crater sunrise, and migration scenes.",
  },
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(" ").filter(Boolean);
}

export interface WebsiteAnswer {
  found: boolean;
  answer: string;
  sourceTitle?: string;
  sourceRoute?: string;
}

export function answerFromWebsite(question: string): WebsiteAnswer {
  const q = normalize(question);
  const tokens = new Set(tokenize(question));

  let bestItem: WebsiteKnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of WEBSITE_KNOWLEDGE) {
    let score = 0;
    for (const keyword of item.keywords) {
      const key = normalize(keyword);
      if (!key) continue;

      if (q.includes(key)) {
        score += key.includes(" ") ? 3 : 2;
      } else if (tokens.has(key)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  if (!bestItem || bestScore < 2) {
    return {
      found: false,
      answer:
        "I could not find that on the current website content yet. Try asking about tours, destinations, booking, contact details, or travel timing.",
    };
  }

  return {
    found: true,
    answer: bestItem.answer,
    sourceTitle: bestItem.title,
    sourceRoute: bestItem.route,
  };
}

export const websiteChatSuggestions = [
  "How can I contact Flexi Safaris?",
  "What destinations do you offer?",
  "Do you provide custom itineraries?",
  "What is the best time to visit Tanzania?",
  "What safari packages are available?",
];