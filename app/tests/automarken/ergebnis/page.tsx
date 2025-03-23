import { Metadata } from "next";
import { ResultContent } from "./result-content";
import { AdBanner } from "@/components/tests/automarken/ad-banner";
import { AutoBackground } from "@/components/tests/automarken/auto-background";
import { carBrandProfiles } from "@/components/tests/automarken/test-data";
import type { CarBrand } from "@/components/tests/automarken/types";

// Generate metadata for the results page
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { brand?: string };
}): Promise<Metadata> {
  // Await the searchParams object properly
  const params = await searchParams;
  const brand = params.brand as CarBrand;

  if (!brand || !carBrandProfiles[brand]) {
    return {
      title: "Automarkentest",
      description: "Finde heraus, welche Automarke zu dir passt!",
    };
  }

  const result = carBrandProfiles[brand];

  return {
    title: `Du bist ein ${result.name} | Automarkentest Ergebnis`,
    description: result.description,
    openGraph: {
      title: `Du bist ein ${result.name} | Automarkentest Ergebnis`,
      description: result.description,
      images: [
        {
          url: `/images/automarken/${brand.toLowerCase()}.jpg`,
          width: 800,
          height: 600,
          alt: result.name,
        },
      ],
    },
  };
}

// Generate static params for all possible brand results
export async function generateStaticParams() {
  return Object.keys(carBrandProfiles).map((brand) => ({
    brand,
  }));
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { brand?: string };
}) {
  // Await the searchParams object properly
  const params = await searchParams;
  const brand = params.brand as CarBrand;

  if (!brand || !carBrandProfiles[brand]) {
    // Redirect to the test page if no valid brand is provided
    return {
      redirect: {
        destination: "/tests/automarken",
        permanent: false,
      },
    };
  }

  // Get the car brand profile
  const brandProfile = carBrandProfiles[brand];

  // Add some mock data for alternative brands (in a real app, this would come from test results)
  const alternativeBrands = Object.keys(carBrandProfiles)
    .filter((b) => b !== brand)
    .slice(0, 3)
    .map((b) => ({
      brand: b as CarBrand,
      score: Math.floor(Math.random() * 30) + 60, // Random score between 60-90
    }));

  // Create the result object with the extended properties needed by ResultContent
  const result = {
    ...brandProfile,
    matchPercentage: 95, // Mock match percentage
    alternativeBrands,
  };

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <AutoBackground density={40} />
      <div className="max-w-6xl mx-auto relative z-10">
        <AdBanner />
        <ResultContent result={result} />
        <AdBanner />
      </div>
    </div>
  );
}
