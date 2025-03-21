"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Test {
  id: number;
  slug: string;
  title: string;
}

interface RandomTestButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function RandomTestButton({
  className = "inline-flex items-center px-8 py-3 rounded-full bg-white text-purple-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200",
  children = "Zufälliger Test",
}: RandomTestButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [tests, setTests] = useState<Test[]>([]);

  // Fetch available tests on component mount
  useEffect(() => {
    const fetchTests = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/tests");
        if (response.ok) {
          const data = await response.json();
          setTests(data);
        }
      } catch (error) {
        console.error("Failed to fetch tests:", error);
      }
    };

    fetchTests();
  }, []);

  const handleRandomTest = () => {
    setIsLoading(true);

    // Use the fetched tests if available, otherwise fallback to defaults
    if (tests.length > 0) {
      const randomTest = tests[Math.floor(Math.random() * tests.length)];
      router.push(`/test/${randomTest.id}/${randomTest.slug}`);
    } else {
      // Fallback logic if no tests are fetched
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const fallbackSlugs = ["marvel-quiz", "personality-test", "iq-challenge"];
      const randomSlug =
        fallbackSlugs[Math.floor(Math.random() * fallbackSlugs.length)];
      router.push(`/test/${randomId}/${randomSlug}`);
    }
  };

  return (
    <button
      onClick={handleRandomTest}
      disabled={isLoading}
      className={`${className} ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-5 w-5 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Wird geladen...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
