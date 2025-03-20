import type { Character, CharacterResult, Question } from "./types";

// 10 questions with 5 answer options each
export const questions: Question[] = [
  {
    id: "q1",
    text: "Wie würdest du dich in einer finanziellen Notlage verhalten?",
    answers: [
      {
        id: "q1a",
        text: "Ich würde jede Chance ergreifen, auch wenn es riskant ist - das Leben ist ohnehin ungerecht.",
        character: "gi-hun",
      },
      {
        id: "q1b",
        text: "Ich würde auf meine eigenen Fähigkeiten vertrauen und einen Weg finden, alleine durchzukommen.",
        character: "sae-byeok",
      },
      {
        id: "q1c",
        text: "Ich würde meine Intelligenz und mein Wissen nutzen, um einen strategischen Ausweg zu finden.",
        character: "sang-woo",
      },
      {
        id: "q1d",
        text: "Ich würde andere um Hilfe bitten - gemeinsam ist man stärker.",
        character: "ali",
      },
      {
        id: "q1e",
        text: "Ich würde skrupellos handeln - in schwierigen Zeiten muss man hart sein.",
        character: "deok-su",
      },
    ],
  },
  {
    id: "q2",
    text: "Wie verhältst du dich in einem Teamwettbewerb?",
    answers: [
      {
        id: "q2a",
        text: "Ich bin loyal zu meinem Team, auch wenn es mich selbst gefährdet.",
        character: "gi-hun",
      },
      {
        id: "q2b",
        text: "Ich helfe dem Team, behalte aber immer meine eigenen Interessen im Auge.",
        character: "sae-byeok",
      },
      {
        id: "q2c",
        text: "Ich analysiere die Situation und treffe rationale Entscheidungen, selbst wenn sie unpopulär sind.",
        character: "sang-woo",
      },
      {
        id: "q2d",
        text: "Ich übernehme die Führung und setze mich wenn nötig mit Gewalt durch.",
        character: "deok-su",
      },
      {
        id: "q2e",
        text: "Ich beobachte alles genau und dokumentiere, was passiert.",
        character: "jun-ho",
      },
    ],
  },
  {
    id: "q3",
    text: "Was treibt dich hauptsächlich an?",
    answers: [
      {
        id: "q3a",
        text: "Der Wunsch, für meine Familie zu sorgen und meine Fehler wiedergutzumachen.",
        character: "gi-hun",
      },
      {
        id: "q3b",
        text: "Der Wunsch, meine Familie zu retten und ein besseres Leben zu ermöglichen.",
        character: "sae-byeok",
      },
      {
        id: "q3c",
        text: "Erfolg und gesellschaftliche Anerkennung, koste es, was es wolle.",
        character: "sang-woo",
      },
      {
        id: "q3d",
        text: "Die Suche nach einem tieferen Sinn oder einer letzten Herausforderung im Leben.",
        character: "il-nam",
      },
      {
        id: "q3e",
        text: "Gerechtigkeit und der Wunsch, die Wahrheit aufzudecken.",
        character: "jun-ho",
      },
    ],
  },
  {
    id: "q4",
    text: "Wie gehst du mit Vertrauen um?",
    answers: [
      {
        id: "q4a",
        text: "Ich vertraue anderen leicht und glaube an das Gute im Menschen.",
        character: "ali",
      },
      {
        id: "q4b",
        text: "Ich misstraue den meisten Menschen, aber kann echte Freundschaften schließen, wenn jemand es verdient.",
        character: "sae-byeok",
      },
      {
        id: "q4c",
        text: "Ich bin bereit, Vertrauen zu brechen, wenn es meinen Interessen dient.",
        character: "sang-woo",
      },
      {
        id: "q4d",
        text: "Ich manipuliere das Vertrauen anderer zu meinem Vorteil.",
        character: "deok-su",
      },
      {
        id: "q4e",
        text: "Ich baue tiefe, bedeutungsvolle Verbindungen auf, auch wenn die Zeit begrenzt ist.",
        character: "ji-yeong",
      },
    ],
  },
  {
    id: "q5",
    text: "Wie würdest du in einer lebensbedrohlichen Situation reagieren?",
    answers: [
      {
        id: "q5a",
        text: "Ich würde versuchen, sowohl mich als auch andere zu retten.",
        character: "gi-hun",
      },
      {
        id: "q5b",
        text: "Ich würde mich auf meine Überlebensinstinkte verlassen und improvisieren.",
        character: "sae-byeok",
      },
      {
        id: "q5c",
        text: "Ich würde einen kühlen Kopf bewahren und die effizienteste Lösung finden.",
        character: "sang-woo",
      },
      {
        id: "q5d",
        text: "Ich würde die Situation als Spiel oder Experiment betrachten.",
        character: "il-nam",
      },
      {
        id: "q5e",
        text: "Ich würde alles tun, um zu überleben, egal wie verzweifelt oder laut ich werden muss.",
        character: "mi-nyeo",
      },
    ],
  },
  {
    id: "q6",
    text: "Wie stehst du zu Regeln und Autorität?",
    answers: [
      {
        id: "q6a",
        text: "Ich hinterfrage Regeln, folge aber meinem moralischen Kompass.",
        character: "gi-hun",
      },
      {
        id: "q6b",
        text: "Ich beuge Regeln, wenn sie mir im Weg stehen oder ungerecht erscheinen.",
        character: "sae-byeok",
      },
      {
        id: "q6c",
        text: "Ich kenne die Regeln und nutze ihre Schwächen zu meinem Vorteil.",
        character: "sang-woo",
      },
      {
        id: "q6d",
        text: "Ich setze Regeln durch und sorge für Ordnung.",
        character: "front-man",
      },
      {
        id: "q6e",
        text: "Ich respektiere Regeln generell, vor allem wenn sie fair erscheinen.",
        character: "ali",
      },
    ],
  },
  {
    id: "q7",
    text: "Wie verhältst du dich in einer Konkurrenzsituation?",
    answers: [
      {
        id: "q7a",
        text: "Ich versuche, fair zu bleiben, auch wenn es um viel geht.",
        character: "gi-hun",
      },
      {
        id: "q7b",
        text: "Ich nutze meine Stärken und lasse mich nicht unterkriegen.",
        character: "sae-byeok",
      },
      {
        id: "q7c",
        text: "Ich plane voraus und bin bereit, Opfer zu bringen, um zu gewinnen.",
        character: "sang-woo",
      },
      {
        id: "q7d",
        text: "Ich zeige keine Gnade und setze auf Einschüchterung.",
        character: "deok-su",
      },
      {
        id: "q7e",
        text: "Ich versuche, Bündnisse zu schließen und andere zu manipulieren.",
        character: "mi-nyeo",
      },
    ],
  },
  {
    id: "q8",
    text: "Was würdest du mit einem plötzlichen Geldgewinn machen?",
    answers: [
      {
        id: "q8a",
        text: "Ich würde meine Schulden bezahlen und für meine Familie sorgen.",
        character: "gi-hun",
      },
      {
        id: "q8b",
        text: "Ich würde es für einen Neuanfang und die Sicherheit meiner Familie nutzen.",
        character: "sae-byeok",
      },
      {
        id: "q8c",
        text: "Ich würde es investieren und vermehren.",
        character: "sang-woo",
      },
      {
        id: "q8d",
        text: "Ich würde es für meine Familie nach Hause schicken.",
        character: "ali",
      },
      {
        id: "q8e",
        text: "Ich würde es für Vergnügungen ausgeben - das Leben ist kurz!",
        character: "mi-nyeo",
      },
    ],
  },
  {
    id: "q9",
    text: "Wie gehst du mit deinen Gefühlen um?",
    answers: [
      {
        id: "q9a",
        text: "Ich zeige meine Gefühle offen und emotionale Reaktionen sind normal für mich.",
        character: "gi-hun",
      },
      {
        id: "q9b",
        text: "Ich verberge meine Gefühle meist, öffne mich aber gegenüber wenigen Vertrauten.",
        character: "sae-byeok",
      },
      {
        id: "q9c",
        text: "Ich verdränge Gefühle zugunsten rationaler Entscheidungen.",
        character: "sang-woo",
      },
      {
        id: "q9d",
        text: "Ich teile meine innersten Gedanken, wenn ich eine echte Verbindung spüre.",
        character: "ji-yeong",
      },
      {
        id: "q9e",
        text: "Ich halte mich distanziert und beobachte lieber die Gefühle anderer.",
        character: "front-man",
      },
    ],
  },
  {
    id: "q10",
    text: "Was ist deine größte Stärke in schwierigen Situationen?",
    answers: [
      {
        id: "q10a",
        text: "Meine Menschlichkeit und Fähigkeit, auch in dunklen Zeiten das Richtige zu tun.",
        character: "gi-hun",
      },
      {
        id: "q10b",
        text: "Meine Unabhängigkeit und Anpassungsfähigkeit.",
        character: "sae-byeok",
      },
      {
        id: "q10c",
        text: "Meine Intelligenz und strategisches Denken.",
        character: "sang-woo",
      },
      {
        id: "q10d",
        text: "Meine Beharrlichkeit und Loyalität.",
        character: "ali",
      },
      {
        id: "q10e",
        text: "Meine Fähigkeit, die Wahrheit zu erkennen und aufzudecken.",
        character: "jun-ho",
      },
    ],
  },
];

// Character results with descriptions
export const characterResults: Record<Character, CharacterResult> = {
  "gi-hun": {
    id: "gi-hun",
    name: "Seong Gi-hun (Spieler 456)",
    description:
      "Du bist warmherzig und grundsätzlich gutmütig, auch wenn du manchmal Fehler machst. Deine Resilienz ist beeindruckend - egal wie oft du fällst, du stehst immer wieder auf. Familie und Freunde bedeuten dir alles, und du kämpfst für Gerechtigkeit, selbst wenn es dich in Gefahr bringt. Wie Gi-hun hast du vielleicht einen holprigen Lebensweg hinter dir, aber dein moralischer Kompass bleibt intakt.",
    image: "/images/gi-hun.jpg",
    color: "from-red-500 to-red-700",
  },
  "sae-byeok": {
    id: "sae-byeok",
    name: "Kang Sae-byeok (Spieler 067)",
    description:
      "Du bist unabhängig, widerstandsfähig und sehr anpassungsfähig. Nach außen wirkst du möglicherweise distanziert, aber im Inneren bist du fürsorglicher, als du zugeben möchtest. Wie Sae-byeok hast du gelernt, auf dich selbst aufzupassen, aber du bist bereit, tiefe Bindungen einzugehen, wenn du jemanden triffst, der dein Vertrauen verdient. Deine Entschlossenheit, deine Ziele zu erreichen, ist bewundernswert.",
    image: "/images/sae-byeok.jpg",
    color: "from-blue-500 to-green-700",
  },
  "sang-woo": {
    id: "sang-woo",
    name: "Cho Sang-woo (Spieler 218)",
    description:
      "Du bist äußerst intelligent und strategisch denkend. Du analysierst Situationen gründlich und triffst rationale Entscheidungen, selbst wenn sie emotional schwierig sein könnten. Wie Sang-woo bist du ehrgeizig und zielorientiert, manchmal sogar auf Kosten persönlicher Beziehungen. Du schätzt Erfolg und gesellschaftliche Anerkennung und bist bereit, für deine Ziele Opfer zu bringen.",
    image: "/images/sang-woo.jpg",
    color: "from-blue-800 to-blue-950",
  },
  "il-nam": {
    id: "il-nam",
    name: "Oh Il-nam (Spieler 001)",
    description:
      "Du hast einen besonderen Blick auf das Leben und schätzt echte menschliche Verbindungen. Wie Il-nam bist du möglicherweise von den typischen Lebenserfahrungen desillusioniert und suchst nach authentischen Erlebnissen. Du bist nachdenklich, philosophisch und hast eine gewisse Distanz zu den Ereignissen um dich herum. Deine Weisheit kommt von deinen Lebenserfahrungen, egal ob gut oder schlecht.",
    image: "/images/il-nam.jpg",
    color: "from-green-700 to-green-900",
  },
  "deok-su": {
    id: "deok-su",
    name: "Jang Deok-su (Spieler 101)",
    description:
      "Du bist durchsetzungsfähig, dominant und lässt dir von niemandem etwas sagen. Wie Deok-su neigst du dazu, in Konfliktsituationen aggressiv zu reagieren und die Kontrolle zu übernehmen. Du vertraust auf deine Stärke und Einschüchterung, um deinen Willen durchzusetzen. In Wettbewerbssituationen bist du kompromisslos und fokussiert auf den Sieg, egal zu welchem Preis.",
    image: "/images/deok-su.jpg",
    color: "from-orange-600 to-red-800",
  },
  ali: {
    id: "ali",
    name: "Ali Abdul (Spieler 199)",
    description:
      "Du bist freundlich, vertrauensvoll und hast ein großes Herz. Wie Ali bist du loyal und hilfsbereit, selbst wenn andere dein Vertrauen möglicherweise nicht verdienen. Deine Aufrichtigkeit und dein Optimismus sind deine größten Stärken, aber auch potenzielle Schwächen in einer harten Welt. Du glaubst an Fairness und behandelst andere mit Respekt, unabhängig von ihrem Status.",
    image: "/images/ali.jpg",
    color: "from-yellow-600 to-yellow-800",
  },
  "mi-nyeo": {
    id: "mi-nyeo",
    name: "Han Mi-nyeo (Spieler 212)",
    description:
      "Du bist laut, selbstbewusst und lässt dich nicht einschüchtern. Wie Mi-nyeo nutzt du alle verfügbaren Mittel, um zu überleben und deine Ziele zu erreichen, einschließlich deiner sozialen Fähigkeiten und Manipulation. Du bist anpassungsfähig und bildest strategische Allianzen, wenn es dir nützt. Deine Entschlossenheit, nicht ignoriert zu werden, treibt dich an.",
    image: "/images/mi-nyeo.jpg",
    color: "from-pink-500 to-pink-700",
  },
  "ji-yeong": {
    id: "ji-yeong",
    name: "Ji-yeong (Spieler 240)",
    description:
      "Du bist aufrichtig und tiefgründig. Wie Ji-yeong suchst du nach echten menschlichen Verbindungen und bedeutungsvollen Gesprächen. Du bist in der Lage, offen über deine Vergangenheit und deine Gefühle zu sprechen, wenn du jemandem vertraust. Trotz möglicherweise schwieriger Lebenserfahrungen bewahrst du dir eine gewisse Sanftmut und Selbstlosigkeit.",
    image: "/images/ji-yeong.jpg",
    color: "from-purple-400 to-purple-600",
  },
  "jun-ho": {
    id: "jun-ho",
    name: "Hwang Jun-ho",
    description:
      "Du bist entschlossen, mutig und verfolgst hartnäckig die Wahrheit. Wie Jun-ho bist du bereit, große Risiken einzugehen, um Gerechtigkeit zu erreichen oder um denen zu helfen, die du liebst. Du hast einen ausgeprägten Sinn für Moral und bist bereit, gegen korrupte Systeme anzukämpfen. Deine Beobachtungsgabe und deine Fähigkeit, unter Druck zu handeln, sind beeindruckend.",
    image: "/images/jun-ho.jpg",
    color: "from-gray-700 to-gray-900",
  },
  "front-man": {
    id: "front-man",
    name: "Der Frontmann (Hwang In-ho)",
    description:
      "Du bist methodisch, diszipliniert und behältst immer die Kontrolle. Wie der Frontmann hast du möglicherweise eine zynische Weltanschauung entwickelt und glaubst an klare Regeln und Hierarchien. Du bist ein geschickter Anführer, der Effizienz und Ordnung schätzt. Obwohl du nach außen hin kalt wirken magst, könnten unter der Oberfläche komplexe Emotionen und Konflikte verborgen sein.",
    image: "/images/front-man.jpg",
    color: "from-black to-gray-800",
  },
};
