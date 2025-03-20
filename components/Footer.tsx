import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 relative z-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">WelcherTypBistDu</h3>
          <p className="text-gray-300">
            Entdecke mehr über dich selbst mit unseren unterhaltsamen und
            aufschlussreichen Persönlichkeitstests.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Tests</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/tests/star-wars"
                className="text-gray-300 hover:text-white"
              >
                Star Wars Test
              </Link>
            </li>
            <li>
              <Link
                href="/tests/color"
                className="text-gray-300 hover:text-white"
              >
                Farben Test
              </Link>
            </li>
            <li>
              <Link
                href="/tests/personality"
                className="text-gray-300 hover:text-white"
              >
                Persönlichkeitstest
              </Link>
            </li>
            <li>
              <Link href="/tests" className="text-gray-300 hover:text-white">
                Alle Tests
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Über uns</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-300 hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-gray-300 hover:text-white">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-white">
                AGB
              </Link>
            </li>
            <li>
              <Link href="/imprint" className="text-gray-300 hover:text-white">
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} WelcherTypBistDu. Alle Rechte
          vorbehalten.
        </p>
      </div>
    </footer>
  );
}
