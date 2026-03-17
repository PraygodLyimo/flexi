import { NextResponse } from "next/server";
import { answerFromWebsite } from "@/lib/websiteKnowledge";

interface ChatAnswerResponse {
  answer: string;
  sourceType: "website" | "online" | "fallback";
  sourceTitle?: string;
  sourceUrl?: string;
  sourceRoute?: string;
}

async function fetchWikipediaAnswer(question: string): Promise<ChatAnswerResponse | null> {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(
    question,
  )}&limit=1&namespace=0&format=json`;

  const searchRes = await fetch(searchUrl, {
    headers: { "User-Agent": "FlexiWebsiteAssistant/1.0" },
    next: { revalidate: 3600 },
  });

  if (!searchRes.ok) return null;

  const data = (await searchRes.json()) as [string, string[]];
  const firstTitle = data?.[1]?.[0];
  if (!firstTitle) return null;

  const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(firstTitle)}`;
  const summaryRes = await fetch(summaryUrl, {
    headers: { "User-Agent": "FlexiWebsiteAssistant/1.0" },
    next: { revalidate: 3600 },
  });
  if (!summaryRes.ok) return null;

  const summary = (await summaryRes.json()) as {
    title?: string;
    extract?: string;
    content_urls?: { desktop?: { page?: string } };
  };

  if (!summary.extract) return null;

  return {
    sourceType: "online",
    answer: summary.extract,
    sourceTitle: summary.title ?? firstTitle,
    sourceUrl: summary.content_urls?.desktop?.page,
  };
}

async function fetchDuckDuckGoAnswer(question: string): Promise<ChatAnswerResponse | null> {
  const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(
    question,
  )}&format=json&no_html=1&skip_disambig=1`;

  const res = await fetch(ddgUrl, {
    headers: { "User-Agent": "FlexiWebsiteAssistant/1.0" },
    next: { revalidate: 1800 },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    Heading?: string;
    AbstractText?: string;
    AbstractURL?: string;
  };

  if (!data.AbstractText) return null;

  return {
    sourceType: "online",
    answer: data.AbstractText,
    sourceTitle: data.Heading || "DuckDuckGo",
    sourceUrl: data.AbstractURL,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { question?: string };
    const question = body.question?.trim();

    if (!question) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }

    const websiteResult = answerFromWebsite(question);
    if (websiteResult.found) {
      return NextResponse.json({
        answer: websiteResult.answer,
        sourceType: "website",
        sourceTitle: websiteResult.sourceTitle,
        sourceRoute: websiteResult.sourceRoute,
      } satisfies ChatAnswerResponse);
    }

    const wiki = await fetchWikipediaAnswer(question);
    if (wiki) {
      return NextResponse.json(wiki);
    }

    const ddg = await fetchDuckDuckGoAnswer(question);
    if (ddg) {
      return NextResponse.json(ddg);
    }

    return NextResponse.json({
      answer:
        "I could not find a reliable answer from the website or online sources right now. Please try rephrasing your question.",
      sourceType: "fallback",
    } satisfies ChatAnswerResponse);
  } catch {
    return NextResponse.json(
      {
        answer:
          "I hit a temporary issue while checking online sources. Please try again in a moment.",
        sourceType: "fallback",
      } satisfies ChatAnswerResponse,
      { status: 200 },
    );
  }
}