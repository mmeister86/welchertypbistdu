import { Metadata } from "next";
import { ResultContent } from "./result-content";
import { AdBanner } from "@/components/tests/berufe/ad-banner";
import { CareerBackground } from "@/components/tests/berufe/career-background";
import { careerResults } from "@/components/tests/berufe/test-data";
import type { Career } from "@/components/tests/berufe/types";

// Generate metadata for the results page
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { career?: string };
}): Promise<Metadata> {
  // Await the searchParams object properly
  const params = await searchParams;
  const career = params.career as Career;

  if (!career || !careerResults[career]) {
    return {
      title: "Berufstest",
      description: "Finde heraus, welcher Beruf zu dir passt!",
    };
  }

  const result = careerResults[career];

  return {
    title: `Du bist ein ${result.name} | Berufstest Ergebnis`,
    description: result.description,
    openGraph: {
      title: `Du bist ein ${result.name} | Berufstest Ergebnis`,
      description: result.description,
      images: [
        {
          url: result.image,
          width: 800,
          height: 600,
          alt: result.name,
        },
      ],
    },
  };
}

// Generate static params for all possible career results
export async function generateStaticParams() {
  return Object.keys(careerResults).map((career) => ({
    career,
  }));
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { career?: string };
}) {
  // Await the searchParams object properly
  const params = await searchParams;
  const career = params.career as Career;

  if (!career || !careerResults[career]) {
    // Redirect to the test page if no valid career is provided
    return {
      redirect: {
        destination: "/tests/berufe",
        permanent: false,
      },
    };
  }

  const result = careerResults[career];

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <CareerBackground density={40} />
      <div className="max-w-6xl mx-auto relative z-10">
        <AdBanner />
        <ResultContent result={result} />
        <AdBanner />
      </div>
    </div>
  );
}
