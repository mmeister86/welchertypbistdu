import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Funktion für die FAQ-Seite
const FAQ = () => {
  // Liste der verfügbaren Tests
  const availableTests = [
    { name: "Squid Game", path: "/tests/squid-game" },
    { name: "Game of Thrones", path: "/tests/game-of-thrones" },
    { name: "Pokemon", path: "/tests/pokemon" },
    { name: "SpongeBob", path: "/tests/spongebob" },
    { name: "Star Wars", path: "/tests/star-wars" },
    { name: "TV Charaktere", path: "/tests/tv-characters" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-6xl px-10 mx-auto font-bold mb-8 text-center text-foreground">
        Häufig gestellte Fragen (FAQ)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Linke Spalte - Testübersicht */}
        <div className="md:col-span-1">
          <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Unsere Tests
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Entdecke alle verfügbaren Persönlichkeitstests:
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {availableTests.map((test) => (
                <li key={test.path}>
                  <Link
                    href={test.path}
                    className="block p-2 rounded hover:bg-accent transition-colors text-foreground"
                  >
                    {test.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rechte Spalte - FAQ Akkordeon */}
        <div className="md:col-span-3">
          <div className="bg-card rounded-lg shadow p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground">
                  Wie funktioniert diese Website?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Unsere Website bietet eine Vielzahl an unterhaltsamen
                  Persönlichkeitstests. Wähle einfach einen Test aus, beantworte
                  die gestellten Fragen und erhalte sofort dein Ergebnis! Du
                  kannst so viele Tests machen, wie du möchtest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-foreground">
                  Sind die Tests kostenlos?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Ja, alle Tests auf unserer Plattform sind komplett kostenlos!
                  Wir finanzieren uns ausschließlich durch Werbung, sodass du
                  uneingeschränkten Zugang zu allen Tests genießen kannst, ohne
                  jemals etwas bezahlen zu müssen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-foreground">
                  Wie werden meine Daten geschützt?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Deine Privatsphäre ist uns wichtig. Wir speichern nur die
                  Daten, die für das Funktionieren der Website notwendig sind.
                  Deine Testergebnisse werden nicht mit deinen persönlichen
                  Daten verknüpft oder an Dritte weitergegeben.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-foreground">
                  Wie kann ich meine Ergebnisse teilen?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Nach Abschluss eines Tests hast du die Möglichkeit, deine
                  Ergebnisse über verschiedene soziale Medien zu teilen. Klicke
                  einfach auf die entsprechenden Teilen-Buttons, die dir nach
                  dem Test angezeigt werden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-foreground">
                  Wie wissenschaftlich sind diese Tests?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Unsere Tests dienen in erster Linie der Unterhaltung und
                  sollten nicht als wissenschaftliche Persönlichkeitsanalysen
                  verstanden werden. Sie basieren auf populären Themen und
                  Charakteren und sollen vor allem Spaß machen!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-foreground">
                  Kann ich eigene Testvorschläge einreichen?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Wir freuen uns über deine Ideen! Wenn du Vorschläge für neue
                  Tests hast, kannst du uns gerne über das Kontaktformular
                  erreichen. Wir prüfen alle Vorschläge und setzen interessante
                  Ideen möglicherweise um.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-foreground">
                  Wie oft werden neue Tests hinzugefügt?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Wir bemühen uns, regelmäßig neue Tests hinzuzufügen, um das
                  Angebot frisch und interessant zu halten. Die Häufigkeit
                  variiert je nach Themenaktualität und Nutzerinteresse. Schau
                  regelmäßig vorbei, um die neuesten Tests zu entdecken!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-foreground">
                  Warum sehe ich Werbung?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Werbung ist unsere einzige Einnahmequelle und ermöglicht es
                  uns, alle Tests komplett kostenlos anzubieten. Dank der
                  Werbeeinnahmen können wir die Website weiterentwickeln und
                  neue Tests erstellen, ohne von unseren Nutzern Gebühren
                  verlangen zu müssen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-foreground">
                  Funktioniert die Website auch auf dem Smartphone?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Ja, unsere Website ist vollständig responsiv und für mobile
                  Geräte optimiert. Du kannst unsere Tests problemlos auf deinem
                  Smartphone, Tablet oder Computer durchführen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-foreground">
                  Wie viel Zeit benötige ich für einen Test?
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Die meisten unserer Tests dauern zwischen 3 und 5 Minuten. Die
                  genaue Dauer hängt vom jeweiligen Test ab und wird vor Beginn
                  des Tests angezeigt.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
