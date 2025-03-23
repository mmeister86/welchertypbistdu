import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Palette,
  Sparkles,
  Star,
  Dog,
  Gamepad,
  Film,
  Tv,
  Briefcase,
  Youtube,
} from "lucide-react";

// TestCard Component für jeden Test
function TestCard({
  title,
  description,
  icon,
  color,
  href,
  image,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  image: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className={`h-2 bg-gradient-to-r ${color}`}></div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold ml-3">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
            Test starten{" "}
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

// Haupt-Komponente für die beliebtesten Tests
export function FeaturedTests() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Unsere beliebtesten Tests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestCard
          title="Welcher SpongeBob Charakter bist du?"
          description="Finde heraus, ob du eher wie SpongeBob, Patrick, Squidward oder ein anderer Bewohner von Bikini Bottom bist."
          icon={<Star className="h-8 w-8 text-yellow-500" />}
          color="from-yellow-400 to-blue-500"
          href="/tests/spongebob"
          image="/images/landscape/spongebob-landscape-min.jpeg"
        />

        <TestCard
          title="Welcher Pokémon-Typ bist du?"
          description="Entdecke, welches Pokémon am besten zu deiner Persönlichkeit passt und was das über dich aussagt."
          icon={<Sparkles className="h-8 w-8 text-red-500" />}
          color="from-red-400 to-yellow-400"
          href="/tests/pokemon"
          image="/images/landscape/pokemon-landscape-min.jpeg"
        />

        <TestCard
          title="Welcher Game of Thrones Charakter bist du?"
          description="Bist du ein strategischer Tyrion, eine starke Daenerys oder ein ehrenhafter Jon Snow? Finde es heraus!"
          icon={<Film className="h-8 w-8 text-gray-700" />}
          color="from-gray-700 to-gray-900"
          href="/tests/game-of-thrones"
          image="/images/landscape/got-landscape-min.jpeg"
        />

        <TestCard
          title="Welcher Marvel-Held ähnelt dir?"
          description="Entdecke, ob du die Eigenschaften von Iron Man, Captain America, Black Widow oder einem anderen Marvel-Helden hast."
          icon={<Palette className="h-8 w-8 text-red-600" />}
          color="from-red-600 to-blue-600"
          href="/tests/marvel"
          image="/images/landscape/marvel-landscape-min.jpeg"
        />

        <TestCard
          title="Welcher Hunde-Persönlichkeitstyp bist du?"
          description="Ähnelst du einem verspielten Labrador, einem loyalen Schäferhund oder einem eigenständigen Husky?"
          icon={<Dog className="h-8 w-8 text-amber-600" />}
          color="from-amber-400 to-amber-700"
          href="/tests/dog-personality"
          image="/images/landscape/dog-landscape-min.jpeg"
        />

        <TestCard
          title="Welcher Beruf passt zu dir?"
          description="Basierend auf deiner Persönlichkeit und deinen Interessen: entdecke Berufe, die perfekt zu dir passen könnten."
          icon={<Briefcase className="h-8 w-8 text-blue-600" />}
          color="from-blue-400 to-indigo-600"
          href="/tests/berufe"
          image="/images/landscape/job-landscape-min.jpeg"
        />
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/tests"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition-colors"
        >
          Alle Tests anzeigen <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
