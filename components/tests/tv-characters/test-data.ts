import type { Character, CharacterResult, Question } from "./types"

export const questions: Question[] = [
  {
    id: "q1",
    text: "Wie würden Sie Ihren idealen Samstag verbringen?",
    answers: [
      {
        id: "q1a",
        text: "Mit meinen engsten Freunden zusammen sein und etwas Besonderes unternehmen.",
        character: "rachel",
      },
      {
        id: "q1b",
        text: "Den ganzen Tag entspannen, vielleicht ein gutes Buch lesen oder fernsehen.",
        character: "chandler",
      },
      {
        id: "q1c",
        text: "Etwas Aufregendes und Abenteuerliches erleben.",
        character: "leslie",
      },
      {
        id: "q1d",
        text: "Mich um meine Projekte kümmern und produktiv sein.",
        character: "monica",
      },
      {
        id: "q1e",
        text: "Die Ruhe genießen und mich meinen Hobbys widmen.",
        character: "ron",
      },
      {
        id: "q1f",
        text: "Eine Party mit vielen Leuten feiern.",
        character: "joey",
      },
    ],
  },
  {
    id: "q2",
    text: "Welche Eigenschaft beschreibt Sie am besten?",
    answers: [
      {
        id: "q2a",
        text: "Loyal",
        character: "mandalorian",
      },
      {
        id: "q2b",
        text: "Witzig",
        character: "chandler",
      },
      {
        id: "q2c",
        text: "Optimistisch",
        character: "leslie",
      },
      {
        id: "q2d",
        text: "Intelligent",
        character: "tyrion",
      },
      {
        id: "q2e",
        text: "Unabhängig",
        character: "arya",
      },
      {
        id: "q2f",
        text: "Exzentrisch",
        character: "phoebe",
      },
    ],
  },
  {
    id: "q3",
    text: "Was ist Ihnen bei Ihrer Arbeit oder Ihren Projekten am wichtigsten?",
    answers: [
      {
        id: "q3a",
        text: "Die Möglichkeit, mit anderen zusammenzuarbeiten und ein gutes Team zu haben.",
        character: "pam",
      },
      {
        id: "q3b",
        text: "Eine klare Struktur und Organisation.",
        character: "monica",
      },
      {
        id: "q3c",
        text: "Die Freiheit, meine eigenen Ideen zu verwirklichen.",
        character: "arya",
      },
      {
        id: "q3d",
        text: "Anerkennung und Erfolg.",
        character: "michael",
      },
      {
        id: "q3e",
        text: "Ein entspanntes Umfeld ohne viel Stress.",
        character: "joey",
      },
      {
        id: "q3f",
        text: "Die Möglichkeit, kreativ zu sein und Spaß zu haben.",
        character: "andy",
      },
    ],
  },
  {
    id: "q4",
    text: "Wie reagieren Sie auf unerwartete Veränderungen?",
    answers: [
      {
        id: "q4a",
        text: "Ich versuche, mich so schnell wie möglich anzupassen und das Beste daraus zu machen.",
        character: "pam",
      },
      {
        id: "q4b",
        text: "Ich bin eher gestresst und brauche Zeit, um mich daran zu gewöhnen.",
        character: "ross",
      },
      {
        id: "q4c",
        text: "Ich sehe es als eine neue Herausforderung und gehe sie mit Begeisterung an.",
        character: "leslie",
      },
      {
        id: "q4d",
        text: "Ich analysiere die Situation und entwickle einen neuen Plan.",
        character: "tyrion",
      },
      {
        id: "q4e",
        text: "Ich versuche, die Kontrolle zu behalten und alles wieder in Ordnung zu bringen.",
        character: "monica",
      },
      {
        id: "q4f",
        text: "Ich nehme es mit Humor und versuche, die positiven Seiten zu sehen.",
        character: "chandler",
      },
    ],
  },
  {
    id: "q5",
    text: "Was ist Ihr größter Wunsch?",
    answers: [
      {
        id: "q5a",
        text: "Eine glückliche und erfüllte Beziehung zu haben.",
        character: "rachel",
      },
      {
        id: "q5b",
        text: "Erfolgreich in meinem Beruf oder meinen Leidenschaften zu sein.",
        character: "dwight",
      },
      {
        id: "q5c",
        text: "Die Welt zu sehen und Abenteuer zu erleben.",
        character: "arya",
      },
      {
        id: "q5d",
        text: "Einen positiven Einfluss auf andere zu haben.",
        character: "leslie",
      },
      {
        id: "q5e",
        text: "Ein ruhiges und friedliches Leben zu führen.",
        character: "ron",
      },
      {
        id: "q5f",
        text: "Immer ich selbst sein zu können, ohne mich verstellen zu müssen.",
        character: "phoebe",
      },
    ],
  },
  {
    id: "q6",
    text: "Welche Rolle spielen Regeln und Traditionen in Ihrem Leben?",
    answers: [
      {
        id: "q6a",
        text: "Ich halte mich in der Regel an Regeln, aber bin bereit, sie zu brechen, wenn es nötig ist.",
        character: "jim",
      },
      {
        id: "q6b",
        text: "Regeln sind wichtig für Ordnung und Stabilität.",
        character: "monica",
      },
      {
        id: "q6c",
        text: "Ich hinterfrage Regeln und gehe oft meinen eigenen Weg.",
        character: "arya",
      },
      {
        id: "q6d",
        text: "Ich nutze Regeln, um meine Ziele zu erreichen.",
        character: "tyrion",
      },
      {
        id: "q6e",
        text: "Ich versuche, Konflikte mit Autoritäten zu vermeiden.",
        character: "grogu",
      },
      {
        id: "q6f",
        text: "Regeln sind eher Richtlinien für mich.",
        character: "phoebe",
      },
    ],
  },
  {
    id: "q7",
    text: "Welche Ihrer Eigenschaften würden Sie als Ihre größte Schwäche bezeichnen?",
    answers: [
      {
        id: "q7a",
        text: "Meine Unsicherheit.",
        character: "pam",
      },
      {
        id: "q7b",
        text: "Meine Tendenz zur Übertreibung.",
        character: "michael",
      },
      {
        id: "q7c",
        text: "Meine Ungeduld.",
        character: "arya",
      },
      {
        id: "q7d",
        text: "Mein Perfektionismus.",
        character: "monica",
      },
      {
        id: "q7e",
        text: "Meine Naivität.",
        character: "joey",
      },
      {
        id: "q7f",
        text: "Meine Unentschlossenheit.",
        character: "chandler",
      },
    ],
  },
  {
    id: "q8",
    text: "Was würden Sie am liebsten tun, wenn Sie sich einsam fühlen?",
    answers: [
      {
        id: "q8a",
        text: "Zeit mit Freunden oder Familie verbringen.",
        character: "rachel",
      },
      {
        id: "q8b",
        text: "Mich in meine Arbeit oder ein Hobby vertiefen.",
        character: "dwight",
      },
      {
        id: "q8c",
        text: "Etwas unternehmen, um mich abzulenken.",
        character: "andy",
      },
      {
        id: "q8d",
        text: "Nachdenken und versuchen, die Ursache meiner Einsamkeit zu finden.",
        character: "ross",
      },
      {
        id: "q8e",
        text: "Mich in meine eigenen vier Wände zurückziehen.",
        character: "ron",
      },
      {
        id: "q8f",
        text: "Mich mit etwas Besonderem verwöhnen.",
        character: "phoebe",
      },
    ],
  },
  {
    id: "q9",
    text: "Wie wichtig ist es Ihnen, von anderen gemocht zu werden?",
    answers: [
      {
        id: "q9a",
        text: "Es ist mir wichtig, aber ich verbiege mich nicht, um anderen zu gefallen.",
        character: "jim",
      },
      {
        id: "q9b",
        text: "Ich möchte von allen gemocht werden.",
        character: "michael",
      },
      {
        id: "q9c",
        text: "Mir ist es wichtiger, authentisch zu sein.",
        character: "phoebe",
      },
      {
        id: "q9d",
        text: "Ich suche nicht aktiv nach Anerkennung.",
        character: "tyrion",
      },
      {
        id: "q9e",
        text: "Ich bin zufrieden, wenn meine engsten Freunde mich mögen.",
        character: "pam",
      },
      {
        id: "q9f",
        text: "Ich mache mir nicht viele Gedanken darüber, was andere denken.",
        character: "ron",
      },
    ],
  },
  {
    id: "q10",
    text: "Wie würden Sie reagieren, wenn ein Freund Sie in einer wichtigen Sache enttäuscht?",
    answers: [
      {
        id: "q10a",
        text: "Ich wäre verletzt und würde das Gespräch suchen, um die Situation zu klären.",
        character: "rachel",
      },
      {
        id: "q10b",
        text: "Ich wäre wütend und würde mich distanzieren.",
        character: "april",
      },
      {
        id: "q10c",
        text: "Ich würde versuchen, die Gründe für sein Verhalten zu verstehen und ihm verzeihen.",
        character: "grogu",
      },
      {
        id: "q10d",
        text: "Ich würde die Situation analysieren und überlegen, wie ich in Zukunft damit umgehen kann.",
        character: "tyrion",
      },
      {
        id: "q10e",
        text: "Ich wäre traurig, würde es aber wahrscheinlich nicht direkt ansprechen.",
        character: "pam",
      },
      {
        id: "q10f",
        text: "Ich würde es mit Humor nehmen und versuchen, darüber hinwegzusehen.",
        character: "chandler",
      },
    ],
  },
]

export const characterResults: Record<Character, CharacterResult> = {
  rachel: {
    id: "rachel",
    name: "Rachel Green (Friends)",
    description:
      "Du bist stilvoll, fürsorglich und witzig. Wie Rachel hast du dich von einer eher verwöhnten Person zu einer unabhängigen und selbstbewussten Persönlichkeit entwickelt. Du legst Wert auf Beziehungen und bist bereit, für deine Träume zu kämpfen. Manchmal kannst du etwas eitel oder verantwortungslos sein, aber deine Warmherzigkeit und dein Charme machen das mehr als wett.",
    image: "/images/characters/tv/rachel.jpg",
    show: "Friends",
    color: "bg-green-600",
  },
  monica: {
    id: "monica",
    name: "Monica Geller (Friends)",
    description:
      "Du bist energiegeladen, organisiert und wettbewerbsorientiert. Wie Monica bist du vielleicht etwas kontrollierend und perfektionistisch, aber diese Eigenschaften machen dich auch zu einem verlässlichen Freund und einer kompetenten Person in allem, was du tust. Du kümmerst dich gerne um andere und schaffst ein gemütliches Umfeld für die Menschen, die dir wichtig sind.",
    image: "/images/characters/tv/monica.jpg",
    show: "Friends",
    color: "bg-blue-600",
  },
  chandler: {
    id: "chandler",
    name: "Chandler Bing (Friends)",
    description:
      "Du hast einen trockenen, sarkastischen Humor, den du oft als Abwehrmechanismus einsetzt. Wie Chandler bist du witzig, liebenswert und ein wenig unsicher. Du nutzt deinen Humor, um mit schwierigen Situationen umzugehen, und bist ein loyaler Freund, der immer zur Stelle ist, wenn man dich braucht. Unter deiner witzigen Fassade verbirgst du ein großes Herz.",
    image: "/images/characters/tv/chandler.jpg",
    show: "Friends",
    color: "bg-indigo-600",
  },
  joey: {
    id: "joey",
    name: "Joey Tribbiani (Friends)",
    description:
      "Du bist liebenswert, unkompliziert und manchmal etwas naiv. Wie Joey bist du charmant, lebensfroh und genießt die einfachen Dinge des Lebens. Du bist extrem loyal gegenüber deinen Freunden und betrachtest sie als deine Familie. Deine positive Einstellung und deine Fähigkeit, das Leben nicht zu ernst zu nehmen, machen dich zu einem angenehmen Begleiter.",
    image: "/images/characters/tv/joey.jpg",
    show: "Friends",
    color: "bg-red-600",
  },
  ross: {
    id: "ross",
    name: "Ross Geller (Friends)",
    description:
      "Du bist intelligent, leidenschaftlich und manchmal etwas ungeschickt in sozialen Situationen. Wie Ross bist du sehr engagiert in deinen Interessen und teilst dein Wissen gerne mit anderen. Du kannst manchmal etwas pedantisch oder melodramatisch sein, aber deine Loyalität und dein großes Herz machen dich zu einem wertvollen Freund und Partner.",
    image: "/images/characters/tv/ross.jpg",
    show: "Friends",
    color: "bg-yellow-600",
  },
  phoebe: {
    id: "phoebe",
    name: "Phoebe Buffay (Friends)",
    description:
      "Du bist exzentrisch, freigeistig und hast eine unkonventionelle Sicht auf die Welt. Wie Phoebe gehst du deinen eigenen Weg und lässt dich nicht von gesellschaftlichen Erwartungen einschränken. Du bist kreativ, mitfühlend und oft überraschend weise. Deine Authentizität und deine Fähigkeit, auch in schwierigen Zeiten positiv zu bleiben, machen dich zu einer inspirierenden Persönlichkeit.",
    image: "/images/characters/tv/phoebe.jpg",
    show: "Friends",
    color: "bg-purple-600",
  },
  michael: {
    id: "michael",
    name: "Michael Scott (The Office)",
    description:
      "Du bist enthusiastisch, aufmerksamkeitsbedürftig und hast ein großes Herz. Wie Michael möchtest du von allen gemocht werden und setzt manchmal den Fuß in den Mund. Du bist kreativ, optimistisch und legst großen Wert auf persönliche Beziehungen. Trotz deiner manchmal unbeholfenen Art hast du die besten Absichten und bist ein loyaler Freund und Kollege.",
    image: "/images/characters/tv/michael.jpg",
    show: "The Office",
    color: "bg-blue-500",
  },
  dwight: {
    id: "dwight",
    name: "Dwight Schrute (The Office)",
    description:
      "Du bist ehrgeizig, regelorientiert und nimmst dich selbst sehr ernst. Wie Dwight bist du extrem loyal gegenüber Autoritätspersonen und Institutionen, die du respektierst. Du hast ungewöhnliche Fähigkeiten und Interessen und bist stolz darauf. Deine Entschlossenheit und dein Engagement in allem, was du tust, machen dich zu einer beeindruckenden, wenn auch manchmal exzentrischen Persönlichkeit.",
    image: "/images/characters/tv/dwight.jpg",
    show: "The Office",
    color: "bg-yellow-700",
  },
  pam: {
    id: "pam",
    name: "Pam Beesly (The Office)",
    description:
      "Du bist freundlich, einfühlsam und anfangs vielleicht etwas zurückhaltend. Wie Pam entwickelst du dich jedoch zu einer selbstbewussteren Person, die für ihre Träume einsteht. Du bist künstlerisch begabt und hast ein gutes Gespür für die Gefühle anderer. Deine Wärme und deine Fähigkeit, andere zu unterstützen, machen dich zu einem wichtigen Anker für die Menschen um dich herum.",
    image: "/images/characters/tv/pam.jpg",
    show: "The Office",
    color: "bg-pink-500",
  },
  jim: {
    id: "jim",
    name: "Jim Halpert (The Office)",
    description:
      "Du bist charmant, witzig und manchmal ein bisschen gelangweilt von Routinen. Wie Jim bist du intelligent und hast eine entspannte Art. Du liebst es, Spaß zu haben und spielst gerne harmlose Streiche. Unter deiner lockeren Oberfläche bist du jedoch tiefgründig und strebst nach Erfüllung sowohl im Beruf als auch in persönlichen Beziehungen.",
    image: "/images/characters/tv/jim.jpg",
    show: "The Office",
    color: "bg-blue-600",
  },
  leslie: {
    id: "leslie",
    name: "Leslie Knope (Parks and Recreation)",
    description:
      "Du bist überaus optimistisch, ehrgeizig und fleißig. Wie Leslie glaubst du an das Gute in Menschen und Institutionen und arbeitest unermüdlich, um positive Veränderungen zu bewirken. Du bist loyal gegenüber deinen Freunden und unterstützt sie bedingungslos. Dein Enthusiasmus und deine Leidenschaft können manchmal überwältigend sein, aber sie inspirieren auch andere, ihr Bestes zu geben.",
    image: "/images/characters/tv/leslie.jpg",
    show: "Parks and Recreation",
    color: "bg-yellow-500",
  },
  ron: {
    id: "ron",
    name: "Ron Swanson (Parks and Recreation)",
    description:
      "Du bist unabhängig, praktisch veranlagt und hast einen trockenen Humor. Wie Ron schätzt du Einfachheit, Privatsphäre und Selbstständigkeit. Du bist handwerklich begabt und vertraust auf traditionelle Werte und Fähigkeiten. Unter deiner manchmal grimmigen Fassade verbirgst du ein loyales Herz und tiefe Zuneigung für die wenigen Menschen, die dir nahestehen.",
    image: "/images/characters/tv/ron.jpg",
    show: "Parks and Recreation",
    color: "bg-brown-600",
  },
  april: {
    id: "april",
    name: "April Ludgate (Parks and Recreation)",
    description:
      "Du bist sarkastisch, zynisch und gibst dich oft gelangweilt oder desinteressiert. Wie April verbirgst du unter dieser Fassade jedoch ein großes Herz und tiefe Loyalität gegenüber den Menschen, die dir wichtig sind. Du gehst deinen eigenen Weg und lässt dich nicht von gesellschaftlichen Erwartungen einschränken. Deine unkonventionelle Sichtweise und dein schwarzer Humor machen dich zu einer einzigartigen Persönlichkeit.",
    image: "/images/characters/tv/april.jpg",
    show: "Parks and Recreation",
    color: "bg-purple-800",
  },
  andy: {
    id: "andy",
    name: "Andy Dwyer (Parks and Recreation)",
    description:
      "Du bist liebenswert, enthusiastisch und manchmal etwas kindlich. Wie Andy siehst du das Gute in allem und jedem und gehst mit Begeisterung an neue Erfahrungen heran. Du bist kreativ, musikalisch und hast ein großes Herz. Deine positive Einstellung und deine Fähigkeit, auch in schwierigen Situationen Freude zu finden, machen dich zu einem wertvollen Freund und einer Bereicherung für jede Gruppe.",
    image: "/images/characters/tv/andy.jpg",
    show: "Parks and Recreation",
    color: "bg-red-500",
  },
  mandalorian: {
    id: "mandalorian",
    name: "Der Mandalorianer (The Mandalorian)",
    description:
      "Du bist stoisch, pflichtbewusst und ein fähiger Problemlöser. Wie der Mandalorianer bist du zurückhaltend und sprichst nicht viel über deine Gefühle, aber deine Handlungen zeigen deine wahre Natur. Du hast einen starken moralischen Kompass und bist bereit, große Risiken einzugehen, um diejenigen zu beschützen, die dir wichtig sind. Deine Loyalität und dein Ehrgefühl machen dich zu einer vertrauenswürdigen und respektierten Person.",
    image: "/images/characters/tv/mandalorian.jpg",
    show: "The Mandalorian",
    color: "bg-gray-700",
  },
  grogu: {
    id: "grogu",
    name: "Grogu (The Mandalorian)",
    description:
      "Du bist neugierig, liebenswert und hast eine sanfte Seele. Wie Grogu beobachtest du die Welt um dich herum mit Staunen und Interesse. Du bist intuitiv und spürst die Gefühle anderer. Obwohl du manchmal schüchtern oder zurückhaltend sein kannst, zeigst du große Tapferkeit und Loyalität, wenn es darauf ankommt. Deine unschuldige Art und deine Fähigkeit, das Beste in anderen zu sehen, machen dich zu einer besonderen Persönlichkeit.",
    image: "/images/characters/tv/grogu.jpg",
    show: "The Mandalorian",
    color: "bg-green-700",
  },
  tyrion: {
    id: "tyrion",
    name: "Tyrion Lannister (Game of Thrones)",
    description:
      "Du bist intelligent, witzig und hast einen scharfen Verstand. Wie Tyrion nutzt du deinen Intellekt und deinen Humor, um in schwierigen Situationen zu überleben und zu gedeihen. Du bist ein guter Beobachter menschlicher Natur und kannst komplexe Probleme lösen. Trotz möglicher Herausforderungen oder Nachteile findest du kreative Wege, um deine Ziele zu erreichen. Unter deiner zynischen Fassade verbirgst du ein mitfühlendes Herz und den Wunsch nach einer gerechteren Welt.",
    image: "/images/characters/tv/tyrion.jpg",
    show: "Game of Thrones",
    color: "bg-red-700",
  },
  arya: {
    id: "arya",
    name: "Arya Stark (Game of Thrones)",
    description:
      "Du bist unabhängig, mutig und entschlossen. Wie Arya gehst du deinen eigenen Weg und lässt dich nicht von gesellschaftlichen Erwartungen einschränken. Du bist anpassungsfähig und überlebensfähig, findest Wege, in schwierigen Situationen zu bestehen. Du hast einen starken Gerechtigkeitssinn und bist bereit, für diejenigen einzustehen, die dir wichtig sind. Deine Unabhängigkeit und dein Mut sind beeindruckend, aber manchmal könntest du zu sehr auf deine eigenen Ziele fixiert sein.",
    image: "/images/characters/tv/arya.jpg",
    show: "Game of Thrones",
    color: "bg-gray-600",
  },
}

