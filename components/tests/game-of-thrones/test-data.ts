import type { Character, CharacterResult, Question } from "./types"

export const questions: Question[] = [
  {
    id: "q1",
    text: "Wie würden Sie sich am ehesten in einer Gruppe von Freunden beschreiben?",
    answers: [
      {
        id: "q1a",
        text: "Als derjenige, der die Gruppe zusammenhält und sich um das Wohl aller kümmert.",
        character: "ned",
      },
      {
        id: "q1b",
        text: "Als derjenige, der gerne im Mittelpunkt steht und für Unterhaltung sorgt.",
        character: "tyrion",
      },
      {
        id: "q1c",
        text: "Als derjenige, der eher im Hintergrund agiert und beobachtet, aber bei Bedarf mit Rat zur Seite steht.",
        character: "sansa",
      },
      {
        id: "q1d",
        text: "Als derjenige, der direkt sagt, was er denkt, auch wenn es unbequem ist.",
        character: "arya",
      },
      {
        id: "q1e",
        text: "Als derjenige, der loyal zu seinen Freunden steht und sie in jeder Situation unterstützt.",
        character: "jon",
      },
      {
        id: "q1f",
        text: "Als derjenige, der seine eigenen Interessen verfolgt, aber dennoch ein guter Freund sein kann.",
        character: "jaime",
      },
    ],
  },
  {
    id: "q2",
    text: "Wie reagieren Sie, wenn Sie mit einer schwierigen Entscheidung konfrontiert werden?",
    answers: [
      {
        id: "q2a",
        text: "Ich wäge alle Optionen sorgfältig ab und versuche, die ehrenhafteste Lösung zu finden.",
        character: "ned",
      },
      {
        id: "q2b",
        text: "Ich handle entschlossen und setze meinen Willen durch, auch wenn es Widerstand gibt.",
        character: "cersei",
      },
      {
        id: "q2c",
        text: "Ich versuche, eine Lösung zu finden, die für alle Beteiligten akzeptabel ist, auch wenn ich Kompromisse eingehen muss.",
        character: "jon",
      },
      {
        id: "q2d",
        text: "Ich nutze meinen Verstand und meine Überzeugungskraft, um die Situation zu meinen Gunsten zu beeinflussen.",
        character: "tyrion",
      },
      {
        id: "q2e",
        text: "Ich verlasse mich auf mein Bauchgefühl und handle instinktiv.",
        character: "arya",
      },
      {
        id: "q2f",
        text: "Ich analysiere die Situation strategisch und plane langfristig, um meine Ziele zu erreichen.",
        character: "daenerys",
      },
    ],
  },
  {
    id: "q3",
    text: "Was ist Ihnen im Leben am wichtigsten?",
    answers: [
      {
        id: "q3a",
        text: "Ehre und Integrität.",
        character: "ned",
      },
      {
        id: "q3b",
        text: "Macht und Einfluss.",
        character: "cersei",
      },
      {
        id: "q3c",
        text: "Gerechtigkeit und das Wohl meiner Lieben.",
        character: "daenerys",
      },
      {
        id: "q3d",
        text: "Wissen und Weisheit.",
        character: "tyrion",
      },
      {
        id: "q3e",
        text: "Unabhängigkeit und Freiheit.",
        character: "arya",
      },
      {
        id: "q3f",
        text: "Loyalität und Familie.",
        character: "sansa",
      },
    ],
  },
  {
    id: "q4",
    text: "Wie würden Sie Ihre emotionale Seite beschreiben?",
    answers: [
      {
        id: "q4a",
        text: "Ich zeige meine Gefühle offen und bin sehr mitfühlend.",
        character: "jon",
      },
      {
        id: "q4b",
        text: "Ich bin eher kontrolliert und lasse meine Emotionen nicht leicht nach außen dringen.",
        character: "ned",
      },
      {
        id: "q4c",
        text: "Ich bin im Allgemeinen optimistisch, aber ich kann auch sehr leidenschaftlich sein.",
        character: "daenerys",
      },
      {
        id: "q4d",
        text: "Ich bin pragmatisch und lasse mich nicht von meinen Gefühlen leiten.",
        character: "tyrion",
      },
      {
        id: "q4e",
        text: "Ich bin stolz und lasse mir meine Verletzlichkeit nicht anmerken.",
        character: "cersei",
      },
      {
        id: "q4f",
        text: "Ich bin widerstandsfähig und lasse mich von Rückschlägen nicht unterkriegen.",
        character: "sansa",
      },
    ],
  },
  {
    id: "q5",
    text: "Welche Rolle spielen Loyalität und Beziehungen in Ihrem Leben?",
    answers: [
      {
        id: "q5a",
        text: "Loyalität ist für mich von größter Bedeutung, und ich würde alles für meine Familie und Freunde tun.",
        character: "ned",
      },
      {
        id: "q5b",
        text: "Ich bin loyal gegenüber denen, die meine Macht und meinen Einfluss unterstützen.",
        character: "cersei",
      },
      {
        id: "q5c",
        text: "Ich schätze tiefe Verbindungen, aber ich bin auch bereit, diese zu opfern, wenn es dem größeren Wohl dient.",
        character: "daenerys",
      },
      {
        id: "q5d",
        text: "Ich bin loyal gegenüber meinen Überzeugungen und meinem Streben nach Wissen.",
        character: "tyrion",
      },
      {
        id: "q5e",
        text: "Ich bin unabhängig, aber ich schätze die Loyalität derer, die mir nahestehen.",
        character: "arya",
      },
      {
        id: "q5f",
        text: "Familie ist das Wichtigste, und ich werde sie immer beschützen.",
        character: "jaime",
      },
    ],
  },
  {
    id: "q6",
    text: "Wie gehen Sie mit Regeln und Autoritäten um?",
    answers: [
      {
        id: "q6a",
        text: "Ich respektiere Regeln und Gesetze, solange sie gerecht sind.",
        character: "ned",
      },
      {
        id: "q6b",
        text: "Ich sehe Regeln oft als Hindernisse und bin bereit, sie zu brechen, wenn es meinem Ziel dient.",
        character: "cersei",
      },
      {
        id: "q6c",
        text: "Ich hinterfrage Autoritäten, wenn ich glaube, dass sie falsch handeln.",
        character: "jon",
      },
      {
        id: "q6d",
        text: "Ich nutze Regeln und Autoritäten, um meine eigenen Ziele zu erreichen.",
        character: "tyrion",
      },
      {
        id: "q6e",
        text: "Ich bin eher rebellisch und lehne mich gegen Autoritäten auf, die meine Freiheit einschränken.",
        character: "arya",
      },
      {
        id: "q6f",
        text: "Ich halte mich an die Traditionen und Erwartungen meiner Familie und meines Standes.",
        character: "sansa",
      },
    ],
  },
  {
    id: "q7",
    text: "Welche Ihrer Eigenschaften würden Sie als Ihre größte Stärke bezeichnen?",
    answers: [
      {
        id: "q7a",
        text: "Meine Ehre und mein Gerechtigkeitssinn.",
        character: "ned",
      },
      {
        id: "q7b",
        text: "Meine Entschlossenheit und mein Ehrgeiz.",
        character: "cersei",
      },
      {
        id: "q7c",
        text: "Meine Fähigkeit, Menschen zu führen und zu inspirieren.",
        character: "daenerys",
      },
      {
        id: "q7d",
        text: "Meine Intelligenz und meine Fähigkeit, komplexe Situationen zu analysieren.",
        character: "tyrion",
      },
      {
        id: "q7e",
        text: "Meine Unabhängigkeit und meine Fähigkeit, mich selbst zu behaupten.",
        character: "arya",
      },
      {
        id: "q7f",
        text: "Meine Widerstandsfähigkeit und meine Fähigkeit, schwierige Zeiten zu überstehen.",
        character: "sansa",
      },
    ],
  },
  {
    id: "q8",
    text: "Was würden Sie am liebsten in Ihrer Freizeit tun?",
    answers: [
      {
        id: "q8a",
        text: "Zeit mit meiner Familie verbringen und mich um ihre Bedürfnisse kümmern.",
        character: "ned",
      },
      {
        id: "q8b",
        text: "Meine Macht und meinen Einfluss ausbauen.",
        character: "cersei",
      },
      {
        id: "q8c",
        text: "Mich für das Wohl anderer einsetzen und Ungerechtigkeiten bekämpfen.",
        character: "daenerys",
      },
      {
        id: "q8d",
        text: "Bücher lesen und mein Wissen erweitern.",
        character: "tyrion",
      },
      {
        id: "q8e",
        text: "Abenteuer erleben und die Welt erkunden.",
        character: "arya",
      },
      {
        id: "q8f",
        text: "Meine Fähigkeiten im Kampf oder in strategischer Planung verbessern.",
        character: "jaime",
      },
    ],
  },
  {
    id: "q9",
    text: "Wie wichtig ist es Ihnen, von anderen anerkannt und respektiert zu werden?",
    answers: [
      {
        id: "q9a",
        text: "Es ist mir wichtig, aber ich werde meine Prinzipien nicht für Anerkennung aufgeben.",
        character: "ned",
      },
      {
        id: "q9b",
        text: "Ich strebe nach Macht und Respekt und bin bereit, dafür zu kämpfen.",
        character: "cersei",
      },
      {
        id: "q9c",
        text: "Mir ist es wichtiger, das Richtige zu tun, auch wenn es nicht immer Anerkennung bringt.",
        character: "jon",
      },
      {
        id: "q9d",
        text: "Ich suche nicht aktiv nach Anerkennung, aber ich schätze den Respekt derer, die ich achte.",
        character: "tyrion",
      },
      {
        id: "q9e",
        text: "Ich pfeife auf die Meinung anderer, solange ich meine Freiheit behalte.",
        character: "arya",
      },
      {
        id: "q9f",
        text: "Der Respekt meiner Familie und meines Hauses ist mir sehr wichtig.",
        character: "jaime",
      },
    ],
  },
  {
    id: "q10",
    text: "Wie reagieren Sie auf Ungerechtigkeit oder Leid in der Welt?",
    answers: [
      {
        id: "q10a",
        text: "Ich fühle mich verpflichtet, einzugreifen und zu helfen, wo ich kann.",
        character: "ned",
      },
      {
        id: "q10b",
        text: "Ich nutze solche Situationen, um meine eigene Position zu stärken.",
        character: "cersei",
      },
      {
        id: "q10c",
        text: "Ich versuche, die Ursachen zu verstehen und langfristige Lösungen zu finden.",
        character: "daenerys",
      },
      {
        id: "q10d",
        text: "Ich suche nach Wissen, um die Welt besser zu verstehen und zukünftiges Leid zu verhindern.",
        character: "tyrion",
      },
      {
        id: "q10e",
        text: "Ich konzentriere mich auf mein eigenes Überleben und das meiner engsten Vertrauten.",
        character: "arya",
      },
      {
        id: "q10f",
        text: "Ich bin tief betroffen und suche nach Wegen, das Leid zu lindern, auch wenn es persönlich riskant ist.",
        character: "jon",
      },
    ],
  },
]

export const characterResults: Record<Character, CharacterResult> = {
  ned: {
    id: "ned",
    name: "Eddard (Ned) Stark",
    description:
      "Du bist ehrenhaft, gerecht und loyal. Wie Ned Stark legst du großen Wert auf Integrität und bist bereit, für deine Prinzipien einzustehen, selbst wenn es schwierig ist. Du bist pflichtbewusst und setzt das Wohl deiner Familie und deiner Gemeinschaft über deine eigenen Bedürfnisse. Deine Aufrichtigkeit und dein Gerechtigkeitssinn machen dich zu einem vertrauenswürdigen Anführer, aber manchmal könntest du in einer Welt voller Intrigen als zu gutgläubig erscheinen.",
    image: "/images/characters/got/ned.jpg",
    house: "Haus Stark",
    color: "bg-gray-700",
  },
  cersei: {
    id: "cersei",
    name: "Cersei Lannister",
    description:
      "Du bist entschlossen, machtbewusst und strategisch. Wie Cersei Lannister bist du bereit, alles zu tun, um deine Ziele zu erreichen und deine Lieben zu schützen. Du bist intelligent und manipulativ, weißt genau, wie du andere beeinflussen kannst, um deinen Willen durchzusetzen. Dein Stolz und deine Entschlossenheit sind beeindruckend, aber manchmal kannst du rücksichtslos sein und die Konsequenzen deiner Handlungen nicht vollständig bedenken.",
    image: "/images/characters/got/cersei.jpg",
    house: "Haus Lannister",
    color: "bg-red-800",
  },
  tyrion: {
    id: "tyrion",
    name: "Tyrion Lannister",
    description:
      "Du bist intelligent, witzig und scharfsinnig. Wie Tyrion Lannister nutzt du deinen Verstand, um in komplexen Situationen zu überleben und zu gedeihen. Du hast ein tiefes Verständnis für menschliche Natur und kannst Menschen gut einschätzen. Trotz möglicher Herausforderungen oder Nachteile findest du kreative Lösungen und behältst deinen Humor. Du hast ein gutes Herz und Mitgefühl für Außenseiter, bist aber auch pragmatisch und realistisch in deiner Weltanschauung.",
    image: "/images/characters/got/tyrion.jpg",
    house: "Haus Lannister",
    color: "bg-yellow-700",
  },
  daenerys: {
    id: "daenerys",
    name: "Daenerys Targaryen",
    description:
      "Du bist entschlossen, idealistisch und eine geborene Anführerin. Wie Daenerys Targaryen hast du eine klare Vision für eine bessere Welt und die Entschlossenheit, diese Vision zu verwirklichen. Du bist mutig und widerstandsfähig, hast Widrigkeiten überwunden und bist dadurch stärker geworden. Du kämpfst für Gerechtigkeit und bist bereit, für deine Überzeugungen einzustehen. Deine Leidenschaft und dein Charisma inspirieren andere, dir zu folgen, aber deine Entschlossenheit kann manchmal in Unbarmherzigkeit umschlagen.",
    image: "/images/characters/got/daenerys.jpg",
    house: "Haus Targaryen",
    color: "bg-red-600",
  },
  jon: {
    id: "jon",
    name: "Jon Snow",
    description:
      "Du bist ehrenhaft, pflichtbewusst und selbstlos. Wie Jon Snow bist du bereit, persönliche Opfer zu bringen, um andere zu schützen und das Richtige zu tun. Du bist mutig und loyal, stehst zu deinen Überzeugungen, auch wenn es schwierig ist. Du hast ein starkes Gefühl für Gerechtigkeit und setzt dich für die Schwachen ein. Obwohl du manchmal mit deiner Identität und deinem Platz in der Welt kämpfst, bleibst du deinen Werten treu und handelst mit Integrität.",
    image: "/images/characters/got/jon.jpg",
    house: "Haus Stark/Targaryen",
    color: "bg-black",
  },
  arya: {
    id: "arya",
    name: "Arya Stark",
    description:
      "Du bist unabhängig, mutig und entschlossen. Wie Arya Stark gehst du deinen eigenen Weg und lässt dich nicht von konventionellen Erwartungen einschränken. Du bist anpassungsfähig und überlebensfähig, findest Wege, in schwierigen Situationen zu bestehen. Du hast einen starken Gerechtigkeitssinn und bist bereit, für diejenigen einzustehen, die dir wichtig sind. Deine Unabhängigkeit und dein Mut sind beeindruckend, aber manchmal könntest du zu sehr auf Rache oder persönliche Ziele fixiert sein.",
    image: "/images/characters/got/arya.jpg",
    house: "Haus Stark",
    color: "bg-gray-600",
  },
  jaime: {
    id: "jaime",
    name: "Jaime Lannister",
    description:
      "Du bist komplex, fähig und durchlebst eine persönliche Entwicklung. Wie Jaime Lannister könntest du anfangs arrogant oder selbstsüchtig erscheinen, aber du hast die Fähigkeit, zu wachsen und dich zu verändern. Du bist loyal gegenüber denen, die du liebst, und bereit, große Risiken einzugehen, um sie zu schützen. Du bist ein fähiger Stratege und Kämpfer, aber lernst auch den Wert von Ehre und Mitgefühl. Deine Reise ist eine der Selbstentdeckung und Erlösung, während du mit deiner Vergangenheit und deinen Entscheidungen ringst.",
    image: "/images/characters/got/jaime.jpg",
    house: "Haus Lannister",
    color: "bg-yellow-600",
  },
  sansa: {
    id: "sansa",
    name: "Sansa Stark",
    description:
      "Du bist widerstandsfähig, anpassungsfähig und klug. Wie Sansa Stark hast du gelernt, in einer harten und oft ungerechten Welt zu überleben. Du hast dich von Naivität zu strategischem Denken entwickelt und nutzt deine Erfahrungen, um zu wachsen und zu lernen. Du bist höflich und würdevoll, aber auch stark und entschlossen. Du verstehst die Bedeutung von Diplomatie und politischem Geschick. Trotz der Herausforderungen und Traumata, die du vielleicht erlebt hast, behältst du deine Menschlichkeit und deinen Sinn für Gerechtigkeit.",
    image: "/images/characters/got/sansa.jpg",
    house: "Haus Stark",
    color: "bg-blue-800",
  },
}

