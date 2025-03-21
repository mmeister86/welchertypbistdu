import type { Character, CharacterResult, Question } from "./types";

export const questions: Question[] = [
  {
    id: "q1",
    text: "Wie würdest du deinen idealen Arbeitstag beschreiben?",
    answers: [
      {
        id: "q1a",
        text: "Voller Begeisterung und Freude, ich liebe meinen Job über alles!",
        character: "spongebob",
      },
      {
        id: "q1b",
        text: "Arbeit? Nein danke, ich bin ein Experte im Nichtstun.",
        character: "patrick",
      },
      {
        id: "q1c",
        text: "Eine Qual, die ich ertragen muss, während ich von meiner künstlerischen Karriere träume.",
        character: "squidward",
      },
      {
        id: "q1d",
        text: "Produktiv und profitabel - jeder Tag ist eine Gelegenheit, mehr Geld zu verdienen!",
        character: "krabs",
      },
      {
        id: "q1e",
        text: "Voller wissenschaftlicher Entdeckungen und körperlicher Herausforderungen.",
        character: "sandy",
      },
    ],
  },
  {
    id: "q2",
    text: "Wie reagierst du, wenn dein bester Freund eine verrückte Idee hat?",
    answers: [
      {
        id: "q2a",
        text: "Ich bin sofort begeistert und mache mit vollem Enthusiasmus mit!",
        character: "spongebob",
      },
      {
        id: "q2b",
        text: "Klingt nach Spaß! Ich bin dabei, ohne nachzudenken!",
        character: "patrick",
      },
      {
        id: "q2c",
        text: "Ich rolle mit den Augen und versuche, mich so weit wie möglich davon fernzuhalten.",
        character: "squidward",
      },
      {
        id: "q2d",
        text: "Ich analysiere die Idee wissenschaftlich und verbessere sie mit meinem Wissen.",
        character: "sandy",
      },
      {
        id: "q2e",
        text: "Ich überlege, ob ich die Idee für meine eigenen Pläne nutzen kann.",
        character: "plankton",
      },
    ],
  },
  {
    id: "q3",
    text: "Was ist dein größtes Ziel im Leben?",
    answers: [
      {
        id: "q3a",
        text: "Glücklich sein und meine Freunde glücklich machen!",
        character: "spongebob",
      },
      {
        id: "q3b",
        text: "Reich werden und meinen Reichtum vermehren.",
        character: "krabs",
      },
      {
        id: "q3c",
        text: "Als Künstler oder Musiker Anerkennung finden.",
        character: "squidward",
      },
      {
        id: "q3d",
        text: "Neue Entdeckungen machen und mein Wissen erweitern.",
        character: "sandy",
      },
      {
        id: "q3e",
        text: "Erfolg haben und meinen Konkurrenten überlegen sein.",
        character: "plankton",
      },
    ],
  },
  {
    id: "q4",
    text: "Wie verbringst du am liebsten deine Freizeit?",
    answers: [
      {
        id: "q4a",
        text: "Mit Freunden draußen spielen und Abenteuer erleben!",
        character: "spongebob",
      },
      {
        id: "q4b",
        text: "Entspannen, schlafen und absolut nichts tun.",
        character: "patrick",
      },
      {
        id: "q4c",
        text: "Mich meinen künstlerischen Hobbys widmen, in Ruhe und allein.",
        character: "squidward",
      },
      {
        id: "q4d",
        text: "Sport treiben und neue Fähigkeiten erlernen.",
        character: "sandy",
      },
      {
        id: "q4e",
        text: "Lesen und intellektuelle Aktivitäten genießen.",
        character: "gary",
      },
    ],
  },
  {
    id: "q5",
    text: "Wie reagierst du, wenn etwas nicht nach Plan läuft?",
    answers: [
      {
        id: "q5a",
        text: "Ich bleibe optimistisch und versuche es immer wieder!",
        character: "spongebob",
      },
      {
        id: "q5b",
        text: "Ich werde schnell frustriert und gebe auf.",
        character: "squidward",
      },
      {
        id: "q5c",
        text: "Ich gerate in Panik und werde nervös.",
        character: "puff",
      },
      {
        id: "q5d",
        text: "Ich analysiere das Problem und finde eine wissenschaftliche Lösung.",
        character: "sandy",
      },
      {
        id: "q5e",
        text: "Ich schmieße sofort einen neuen, möglicherweise hinterhältigen Plan.",
        character: "plankton",
      },
    ],
  },
  {
    id: "q6",
    text: "Was ist dir bei Freundschaften am wichtigsten?",
    answers: [
      {
        id: "q6a",
        text: "Spaß haben und gemeinsame Abenteuer erleben!",
        character: "spongebob",
      },
      {
        id: "q6b",
        text: "Bedingungslose Loyalität und Unterstützung.",
        character: "patrick",
      },
      {
        id: "q6c",
        text: "Gegenseitiger Respekt und persönlicher Freiraum.",
        character: "squidward",
      },
      {
        id: "q6d",
        text: "Ehrlichkeit und direkte Kommunikation.",
        character: "karen",
      },
      {
        id: "q6e",
        text: "Gemeinsame Interessen und soziale Aktivitäten.",
        character: "pearl",
      },
    ],
  },
  {
    id: "q7",
    text: "Wie gehst du mit Geld um?",
    answers: [
      {
        id: "q7a",
        text: "Ich gebe es gerne für Spaß und Freunde aus!",
        character: "spongebob",
      },
      {
        id: "q7b",
        text: "Ich spare jeden Cent und gebe ungern etwas aus.",
        character: "krabs",
      },
      {
        id: "q7c",
        text: "Ich investiere in Dinge, die meine Lebensqualität verbessern.",
        character: "sandy",
      },
      {
        id: "q7d",
        text: "Ich gebe es für Trends und Shopping aus!",
        character: "pearl",
      },
      {
        id: "q7e",
        text: "Geld? Was ist das? Kann man das essen?",
        character: "patrick",
      },
    ],
  },
  {
    id: "q8",
    text: "Wie würdest du deinen Intellekt beschreiben?",
    answers: [
      {
        id: "q8a",
        text: "Ich bin naiv und kindlich, aber mit viel Herz!",
        character: "spongebob",
      },
      {
        id: "q8b",
        text: "Ich bin... äh... was war die Frage nochmal?",
        character: "patrick",
      },
      {
        id: "q8c",
        text: "Ich bin kultiviert und gebildet, umgeben von Idioten.",
        character: "squidward",
      },
      {
        id: "q8d",
        text: "Ich bin wissenschaftlich begabt und löse gerne komplexe Probleme.",
        character: "sandy",
      },
      {
        id: "q8e",
        text: "Ich bin berechnend und strategisch denkend.",
        character: "plankton",
      },
      {
        id: "q8f",
        text: "Ich bin überraschend klug, auch wenn andere das nicht immer bemerken.",
        character: "gary",
      },
    ],
  },
  {
    id: "q9",
    text: "Was ist dein Lieblingsgericht?",
    answers: [
      {
        id: "q9a",
        text: "Krabbenburger, natürlich! Die besten der Welt!",
        character: "spongebob",
      },
      {
        id: "q9b",
        text: "Alles, was essbar ist... und manchmal auch Dinge, die es nicht sind.",
        character: "patrick",
      },
      {
        id: "q9c",
        text: "Etwas Raffiniertes und Kultiviertes, keine Fast-Food-Burger.",
        character: "squidward",
      },
      {
        id: "q9d",
        text: "Hausmannskost aus Texas, am liebsten mit Eichhörnchen-Twist!",
        character: "sandy",
      },
      {
        id: "q9e",
        text: "Schneckenfutter... Miau!",
        character: "gary",
      },
    ],
  },
  {
    id: "q10",
    text: "Wie reagierst du auf Stress?",
    answers: [
      {
        id: "q10a",
        text: "Ich werde nervös, aber bleibe trotzdem optimistisch!",
        character: "spongebob",
      },
      {
        id: "q10b",
        text: "Stress? Was ist das? Ich bleibe entspannt.",
        character: "patrick",
      },
      {
        id: "q10c",
        text: "Ich werde sarkastisch und zynisch.",
        character: "squidward",
      },
      {
        id: "q10d",
        text: "Ich gerate in Panik und werde übermäßig besorgt.",
        character: "puff",
      },
      {
        id: "q10e",
        text: "Ich analysiere die Situation logisch und finde eine Lösung.",
        character: "karen",
      },
    ],
  },
];

export const characterResults: Record<Character, CharacterResult> = {
  spongebob: {
    id: "spongebob",
    name: "SpongeBob Schwammkopf",
    description:
      "Du bist optimistisch, enthusiastisch und siehst in allem das Positive! Wie SpongeBob liebst du deinen Job, deine Freunde und das Leben im Allgemeinen. Du bist manchmal etwas naiv, aber deine Fröhlichkeit und dein Enthusiasmus sind ansteckend. Du findest Freude in den kleinen Dingen und bist immer bereit, anderen zu helfen.",
    image: "/images/characters/spongebob/spongebob.jpg",
    color: "bg-yellow-400",
  },
  patrick: {
    id: "patrick",
    name: "Patrick Star",
    description:
      "Du bist entspannt, sorglos und nimmst das Leben, wie es kommt. Wie Patrick bist du manchmal etwas vergesslich und nicht der Hellste, aber deine Loyalität zu deinen Freunden ist unerschütterlich. Du liebst es, zu entspannen und machst dir nicht zu viele Gedanken über die Zukunft.",
    image: "/images/characters/spongebob/patrick.jpg",
    color: "bg-pink-400",
  },
  squidward: {
    id: "squidward",
    name: "Thaddäus Tentakel",
    description:
      "Du bist künstlerisch, nachdenklich und manchmal etwas zynisch. Wie Thaddäus schätzt du Ruhe und Frieden und hast einen ausgeprägten Sinn für Ästhetik. Du fühlst dich oft missverstanden und sehnst dich nach Anerkennung für deine Talente. Trotz deiner manchmal grummeligen Art hast du ein gutes Herz.",
    image: "/images/characters/spongebob/squidward.jpg",
    color: "bg-teal-400",
  },
  krabs: {
    id: "krabs",
    name: "Mr. Krabs",
    description:
      "Du bist geschäftstüchtig, sparsam und hast ein Auge für Gelegenheiten. Wie Mr. Krabs liebst du Geld und bist bereit, hart dafür zu arbeiten. Du bist pragmatisch und lässt dich nicht leicht von deinen Zielen abbringen. Trotz deiner Liebe zum Geld, gibt es Menschen in deinem Leben, die dir noch wichtiger sind.",
    image: "/images/characters/spongebob/krabs.jpg",
    color: "bg-red-500",
  },
  sandy: {
    id: "sandy",
    name: "Sandy Cheeks",
    description:
      "Du bist intelligent, sportlich und abenteuerlustig. Wie Sandy bist du immer bereit, neue Herausforderungen anzunehmen und liebst es, dein Wissen zu erweitern. Du bist zielstrebig und gibst nicht auf, bis du deine Ziele erreicht hast. Deine Freunde schätzen dich für deine Klugheit und deinen Mut.",
    image: "/images/characters/spongebob/sandy.jpg",
    color: "bg-brown-400",
  },
  plankton: {
    id: "plankton",
    name: "Sheldon J. Plankton",
    description:
      "Du bist ehrgeizig, clever und lässt dich nicht unterkriegen. Wie Plankton hast du große Pläne und bist bereit, alles zu tun, um sie zu verwirklichen. Du bist ein strategischer Denker und gibst nicht auf, auch wenn du Rückschläge erlebst. Manchmal neigst du dazu, die Grenzen zu überschreiten, um deine Ziele zu erreichen.",
    image: "/images/characters/spongebob/plankton.jpg",
    color: "bg-green-500",
  },
  puff: {
    id: "puff",
    name: "Mrs. Puff",
    description:
      "Du bist geduldig, pflichtbewusst und manchmal etwas ängstlich. Wie Mrs. Puff nimmst du deine Verantwortung ernst und versuchst, dein Bestes zu geben, auch wenn die Umstände schwierig sind. Du sehnst dich nach einem ruhigen, stressfreien Leben, wirst aber oft in chaotische Situationen hineingezogen.",
    image: "/images/characters/spongebob/puff.jpg",
    color: "bg-blue-300",
  },
  pearl: {
    id: "pearl",
    name: "Pearl Krabs",
    description:
      "Du bist trendbewusst, sozial und emotional. Wie Pearl ist dir die Meinung deiner Freunde wichtig und du liebst es, im Mittelpunkt zu stehen. Du hast einen ausgeprägten Sinn für Mode und aktuelle Trends. Manchmal bist du etwas dramatisch, aber deine Leidenschaft und Energie sind ansteckend.",
    image: "/images/characters/spongebob/pearl.jpg",
    color: "bg-gray-300",
  },
  gary: {
    id: "gary",
    name: "Gary die Schnecke",
    description:
      "Du bist ruhig, besonnen und oft klüger, als die Leute denken. Wie Gary bist du ein guter Zuhörer und ein loyaler Freund. Du bist unkompliziert und zufrieden mit den einfachen Dingen im Leben. Obwohl du nicht viel sagst, sind deine Einsichten oft überraschend tiefgründig.",
    image: "/images/characters/spongebob/gary.jpg",
    color: "bg-blue-500",
  },
  karen: {
    id: "karen",
    name: "Karen Plankton",
    description:
      "Du bist intelligent, pragmatisch und direkt. Wie Karen bist du oft die Stimme der Vernunft und scheust dich nicht, deine ehrliche Meinung zu sagen. Du bist technisch versiert und analytisch, aber hast auch eine fürsorgliche Seite. Dein sarkastischer Humor und deine Fähigkeit, Situationen nüchtern zu betrachten, machen dich zu einer wertvollen Beraterin.",
    image: "/images/characters/spongebob/karen.jpg",
    color: "bg-teal-600",
  },
};
