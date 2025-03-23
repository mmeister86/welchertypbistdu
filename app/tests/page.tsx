import Link from "next/link";
import { Sparkles, Star } from "lucide-react";
import Pagination from "@/components/Pagination";

// Define all available tests with their metadata
const availableTests = [
  {
    id: "star-wars",
    title: "Welcher Star Wars Charakter bist du?",
    description:
      "Finde heraus, ob du mehr wie Luke Skywalker, Darth Vader oder Yoda bist.",
    image: "/images/landscape/star-wars-landscape.jpeg", // Bildpfad für Star Wars
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "marvel",
    title: "Welcher Marvel Charakter bist du?",
    description:
      "Entdecke, ob du mehr wie Iron Man, Captain America oder Spider-Man bist.",
    image: "/images/landscape/marvel-landscape.jpeg", // Bildpfad für Marvel
    color: "from-red-500 to-blue-500",
  },
  {
    id: "dc-universe",
    title: "Welcher DC Superheld bist du?",
    description:
      "Finde heraus, ob du mehr wie Batman, Superman oder Wonder Woman bist.",
    image: "/images/landscape/dceu-landscape.jpeg", // Bildpfad für DC Extended Universe
    color: "from-blue-600 to-red-600",
  },
  {
    id: "berufe",
    title: "Welcher Beruf passt zu dir?",
    description:
      "Finde heraus, welcher der beliebtesten Berufe in Deutschland wirklich zu deiner Persönlichkeit passt.",
    image: "/images/landscape/job-landscape.jpeg", // Bildpfad für Berufe
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "spongebob",
    title: "Welcher Spongebob Charakter bist du?",
    description:
      "Entdecke, ob du mehr wie Spongebob, Patrick oder Thaddäus bist.",
    image: "/images/landscape/spongebob-landscape.jpeg", // Bildpfad für SpongeBob
    color: "from-blue-400 to-yellow-400",
  },
  {
    id: "game-of-thrones",
    title: "Welcher Game of Thrones Charakter bist du?",
    description:
      "Finde heraus, ob du mehr wie Jon Snow, Daenerys Targaryen oder Tyrion Lannister bist.",
    image: "/images/landscape/got-landscape.jpeg", // Bildpfad für Game of Thrones
    color: "from-gray-700 to-gray-900",
  },
  {
    id: "squid-game",
    title: "Welcher Squid Game Charakter bist du?",
    description:
      "Entdecke, ob du mehr wie Seong Gi-hun, Kang Sae-byeok oder Cho Sang-woo bist.",
    image: "/images/landscape/squid-game-landscape.jpeg", // Bildpfad für Squid Game
    color: "from-pink-500 to-red-600",
  },
  {
    id: "dog-personality",
    title: "Welche Hunderasse passt zu dir?",
    description:
      "Finde heraus, welche Hunderasse am besten zu deinem Lebensstil und deiner Persönlichkeit passt mit unserem unterhaltsamen Test.",
    image: "/images/landscape/dog-landscape.jpeg", // Bildpfad für Hunderassen
    color: "from-amber-400 to-amber-600",
    path: "/tests/dog-personality", // Expliziter Pfad zur Testseite
  },
  {
    id: "tv-characters",
    title: "Welcher TV-Serienfigur ähnelst du?",
    description:
      "Entdecke, welcher beliebten TV-Serienfigur du am meisten ähnelst.",
    image: "/images/landscape/tv-landscape.jpeg", // Bildpfad für TV-Serien
    color: "from-purple-600 to-blue-600",
  },
  {
    id: "pokemon",
    title: "Welches Pokémon bist du?",
    description:
      "Finde heraus, welches Pokémon am besten zu deiner Persönlichkeit passt.",
    image: "/images/landscape/pokemon-landscape.jpeg", // Bildpfad für Pokémon
    color: "from-blue-500 to-green-500",
  },
  {
    id: "youtube",
    title: "Welcher YouTuber bist du?",
    description:
      "Entdecke, welchem berühmten YouTuber du am meisten ähnelst, basierend auf deiner Persönlichkeit und deinen Interessen.",
    image: "/images/landscape/youtube-landscape.jpeg", // Bildpfad für YouTuber
    color: "from-red-600 to-red-400", // YouTube-typische Farbgebung
  },
  {
    id: "automarken",
    title: "Welche Automarke passt zu dir?",
    description:
      "Finde heraus, welche Automarke am besten zu deiner Persönlichkeit und deinem Fahrstil passt.",
    image: "/images/landscape/automarken-landscape.jpeg", // Bildpfad für Automarken
    color: "from-gray-500 to-blue-500",
  },
];

// Server Component
export default async function TestsOverviewPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Get current page from URL or default to 1
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const testsPerPage = 9;
  const totalPages = Math.ceil(availableTests.length / testsPerPage);

  // Calculate which tests to show on current page
  const startIndex = (currentPage - 1) * testsPerPage;
  const endIndex = startIndex + testsPerPage;
  const currentTests = availableTests.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Unsere Persönlichkeitstests
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Entdecke mehr über dich selbst mit unseren unterhaltsamen und
            aufschlussreichen Persönlichkeitstests! Wähle einen Test und finde
            heraus, welcher Charakter du bist.
          </p>
        </div>

        {/* Ad Banner */}
        <div className="w-full py-3 bg-white shadow-md mb-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
              Werbung - Advertisement
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTests.map((test) => (
            <TestCard
              key={test.id}
              title={test.title}
              description={test.description}
              image={test.image}
              color={test.color}
              href={`/tests/${test.id}`}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination currentPage={currentPage} totalPages={totalPages} />

        {/* Bottom Ad Banner */}
        <div className="w-full py-3 bg-white shadow-md mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
              Werbung - Advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Test Card Component
function TestCard({
  title,
  description,
  image,
  color,
  href,
}: {
  title: string;
  description: string;
  image: string;
  color: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full">
        <div className={`h-2 bg-gradient-to-r ${color}`}></div>
        <div className="flex flex-col h-full w-full">
          {/* Landschaftsbild über der Beschreibung */}
          <div className="mb-2 h-40 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="text-gray-700 mb-4 flex-grow px-3 pt-4">
            {description}
          </p>
          <div className="flex items-center  text-purple-600 font-medium group-hover:text-purple-700 px-3 pb-4 mb-2">
            Test starten{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
