import { AutoTest } from "@/components/tests/automarken/auto-test";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welche Automarke passt zu dir? | WelcherTypBistDu",
  description:
    "Entdecke, welche Automarke am besten zu deiner Persönlichkeit passt mit unserem unterhaltsamen Persönlichkeitstest.",
};

export default function AutomarkenTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 text-gray-800">
      <AutoTest />
    </div>
  );
}
