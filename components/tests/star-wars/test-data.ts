import type { Character, CharacterResult, Question } from "./types"

export const questions: Question[] = [
  {
    id: "q1",
    text: "Wie würden Sie sich am ehesten in einer Gruppe von Freunden beschreiben?",
    answers: [
      {
        id: "q1a1",
        text: "Als derjenige, der die Initiative ergreift und Pläne schmiedet.",
        characterPoints: {
          luke: 2,
          anakin: 1,
          vader: 3,
          palpatine: 3,
          leia: 3,
          han: 1,
          chewbacca: 0,
          yoda: 1,
          grogu: 0,
          mandalorian: 1,
          maul: 1,
          obiwan: 2,
          padme: 2,
          rey: 2,
        },
      },
      {
        id: "q1a2",
        text: "Als derjenige, der für gute Stimmung sorgt und spontane Aktionen liebt.",
        characterPoints: {
          luke: 1,
          anakin: 2,
          vader: 0,
          palpatine: 0,
          leia: 1,
          han: 3,
          chewbacca: 2,
          yoda: 0,
          grogu: 2,
          mandalorian: 0,
          maul: 0,
          obiwan: 0,
          padme: 1,
          rey: 1,
        },
      },
      {
        id: "q1a3",
        text: "Als derjenige, der eher im Hintergrund agiert und beobachtet.",
        characterPoints: {
          luke: 0,
          anakin: 0,
          vader: 1,
          palpatine: 2,
          leia: 0,
          han: 0,
          chewbacca: 2,
          yoda: 3,
          grogu: 3,
          mandalorian: 3,
          maul: 2,
          obiwan: 1,
          padme: 0,
          rey: 0,
        },
      },
      {
        id: "q1a4",
        text: "Als derjenige, der versucht, bei Konflikten zu vermitteln und Harmonie zu schaffen.",
        characterPoints: {
          luke: 3,
          anakin: 0,
          vader: 0,
          palpatine: 0,
          leia: 2,
          han: 0,
          chewbacca: 1,
          yoda: 2,
          grogu: 1,
          mandalorian: 0,
          maul: 0,
          obiwan: 3,
          padme: 3,
          rey: 2,
        },
      },
    ],
  },
  {
    id: "q2",
    text: "Wie reagieren Sie, wenn Sie mit einer schwierigen Herausforderung konfrontiert werden?",
    answers: [
      {
        id: "q2a1",
        text: "Ich analysiere die Situation gründlich und entwickle einen strategischen Plan.",
        characterPoints: {
          luke: 1,
          anakin: 1,
          vader: 2,
          palpatine: 3,
          leia: 3,
          han: 0,
          chewbacca: 0,
          yoda: 3,
          grogu: 0,
          mandalorian: 2,
          maul: 2,
          obiwan: 3,
          padme: 2,
          rey: 1,
        },
      },
      {
        id: "q2a2",
        text: "Ich handle schnell und verlasse mich auf meine Intuition.",
        characterPoints: {
          luke: 2,
          anakin: 3,
          vader: 1,
          palpatine: 0,
          leia: 2,
          han: 3,
          chewbacca: 2,
          yoda: 1,
          grogu: 2,
          mandalorian: 1,
          maul: 2,
          obiwan: 1,
          padme: 1,
          rey: 3,
        },
      },
      {
        id: "q2a3",
        text: "Ich suche Rat bei erfahrenen Personen und wäge die Optionen ab.",
        characterPoints: {
          luke: 3,
          anakin: 0,
          vader: 0,
          palpatine: 1,
          leia: 1,
          han: 0,
          chewbacca: 1,
          yoda: 2,
          grogu: 1,
          mandalorian: 0,
          maul: 0,
          obiwan: 2,
          padme: 3,
          rey: 2,
        },
      },
      {
        id: "q2a4",
        text: "Ich werde leicht frustriert und brauche manchmal eine Pause, um mich neu zu sammeln.",
        characterPoints: {
          luke: 0,
          anakin: 3,
          vader: 0,
          palpatine: 0,
          leia: 0,
          han: 1,
          chewbacca: 2,
          yoda: 0,
          grogu: 3,
          mandalorian: 0,
          maul: 1,
          obiwan: 0,
          padme: 0,
          rey: 0,
        },
      },
    ],
  },
  {
    id: "q3",
    text: "Was ist Ihnen im Leben am wichtigsten?",
    answers: [
      {
        id: "q3a1",
        text: "Macht und Einfluss, um meine Ziele zu erreichen.",
        characterPoints: {
          luke: 0,
          anakin: 2,
          vader: 3,
          palpatine: 3,
          leia: 1,
          han: 0,
          chewbacca: 0,
          yoda: 0,
          grogu: 0,
          mandalorian: 0,
          maul: 3,
          obiwan: 0,
          padme: 0,
          rey: 0,
        },
      },
      {
        id: "q3a2",
        text: "Die Freiheit, mein eigenes Ding zu machen und Abenteuer zu erleben.",
        characterPoints: {
          luke: 2,
          anakin: 2,
          vader: 0,
          palpatine: 0,
          leia: 0,
          han: 3,
          chewbacca: 2,
          yoda: 0,
          grogu: 2,
          mandalorian: 1,
          maul: 0,
          obiwan: 0,
          padme: 0,
          rey: 1,
        },
      },
      {
        id: "q3a3",
        text: "Gerechtigkeit und das Wohl anderer.",
        characterPoints: {
          luke: 3,
          anakin: 1,
          vader: 0,
          palpatine: 0,
          leia: 3,
          han: 1,
          chewbacca: 2,
          yoda: 2,
          grogu: 1,
          mandalorian: 2,
          maul: 0,
          obiwan: 3,
          padme: 3,
          rey: 3,
        },
      },
      {
        id: "q3a4",
        text: "Wissen und Weisheit, um die Welt zu verstehen.",
        characterPoints: {
          luke: 1,
          anakin: 0,
          vader: 1,
          palpatine: 2,
          leia: 1,
          han: 0,
          chewbacca: 0,
          yoda: 3,
          grogu: 1,
          mandalorian: 0,
          maul: 1,
          obiwan: 2,
          padme: 1,
          rey: 1,
        },
      },
    ],
  },
  {
    id: "q4",
    text: "Wie würden Sie Ihre emotionale Seite beschreiben?",
    answers: [
      {
        id: "q4a1",
        text: "Ich zeige meine Gefühle offen und intensiv.",
        characterPoints: {
          luke: 1,
          anakin: 3,
          vader: 0,
          palpatine: 0,
          leia: 2,
          han: 2,
          chewbacca: 3,
          yoda: 0,
          grogu: 3,
          mandalorian: 0,
          maul: 1,
          obiwan: 0,
          padme: 1,
          rey: 2,
        },
      },
      {
        id: "q4a2",
        text: "Ich bin eher zurückhaltend und kontrolliert in meinem Gefühlsausdruck.",
        characterPoints: {
          luke: 1,
          anakin: 0,
          vader: 3,
          palpatine: 2,
          leia: 1,
          han: 0,
          chewbacca: 0,
          yoda: 2,
          grogu: 0,
          mandalorian: 3,
          maul: 2,
          obiwan: 3,
          padme: 2,
          rey: 0,
        },
      },
      {
        id: "q4a3",
        text: "Ich bin im Allgemeinen positiv gestimmt und lasse mich nicht leicht aus der Ruhe bringen.",
        characterPoints: {
          luke: 3,
          anakin: 0,
          vader: 0,
          palpatine: 1,
          leia: 2,
          han: 1,
          chewbacca: 1,
          yoda: 3,
          grogu: 2,
          mandalorian: 1,
          maul: 0,
          obiwan: 2,
          padme: 3,
          rey: 2,
        },
      },
      {
        id: "q4a4",
        text: "Meine Stimmung kann manchmal schwanken, und ich bin sehr empathisch für die Gefühle anderer.",
        characterPoints: {
          luke: 2,
          anakin: 2,
          vader: 0,
          palpatine: 0,
          leia: 1,
          han: 1,
          chewbacca: 2,
          yoda: 1,
          grogu: 1,
          mandalorian: 0,
          maul: 0,
          obiwan: 1,
          padme: 1,
          rey: 3,
        },
      },
    ],
  },
  {
    id: "q5",
    text: "Welche Rolle spielen Loyalität und Beziehungen in Ihrem Leben?",
    answers: [
      {
        id: "q5a1",
        text: "Loyalität ist mir sehr wichtig, und ich schätze enge Beziehungen zu meinen Freunden und meiner Familie.",
        characterPoints: {
          luke: 3,
          anakin: 3,
          vader: 1,
          palpatine: 0,
          leia: 3,
          han: 2,
          chewbacca: 3,
          yoda: 1,
          grogu: 2,
          mandalorian: 2,
          maul: 0,
          obiwan: 2,
          padme: 3,
          rey: 3,
        },
      },
      {
        id: "q5a2",
        text: "Ich bin unabhängig und stelle meine eigenen Bedürfnisse oft an erste Stelle.",
        characterPoints: {
          luke: 0,
          anakin: 1,
          vader: 2,
          palpatine: 3,
          leia: 0,
          han: 3,
          chewbacca: 0,
          yoda: 0,
          grogu: 1,
          mandalorian: 1,
          maul: 2,
          obiwan: 0,
          padme: 0,
          rey: 0,
        },
      },
      {
        id: "q5a3",
        text: "Ich bin loyal gegenüber meinen Überzeugungen und setze mich für das ein, was ich für richtig halte.",
        characterPoints: {
          luke: 2,
          anakin: 1,
          vader: 1,
          palpatine: 1,
          leia: 3,
          han: 1,
          chewbacca: 1,
          yoda: 3,
          grogu: 0,
          mandalorian: 1,
          maul: 1,
          obiwan: 3,
          padme: 3,
          rey: 2,
        },
      },
      {
        id: "q5a4",
        text: "Ich bin loyal gegenüber denen, die ich beschütze, und fühle mich für ihr Wohl verantwortlich.",
        characterPoints: {
          luke: 1,
          anakin: 2,
          vader: 1,
          palpatine: 0,
          leia: 2,
          han: 1,
          chewbacca: 2,
          yoda: 2,
          grogu: 3,
          mandalorian: 3,
          maul: 0,
          obiwan: 1,
          padme: 1,
          rey: 1,
        },
      },
    ],
  },
  {
    id: "q6",
    text: "Wie gehen Sie mit Regeln und Autoritäten um?",
    answers: [
      {
        id: "q6a1",
        text: "Ich respektiere Regeln und halte mich in der Regel daran.",
        characterPoints: {
          luke: 2,
          anakin: 0,
          vader: 2,
          palpatine: 0,
          leia: 1,
          han: 0,
          chewbacca: 1,
          yoda: 2,
          grogu: 1,
          mandalorian: 2,
          maul: 0,
          obiwan: 3,
          padme: 2,
          rey: 1,
        },
      },
      {
        id: "q6a2",
        text: "Ich sehe Regeln eher als Richtlinien und bin bereit, sie zu brechen, wenn es notwendig ist.",
        characterPoints: {
          luke: 1,
          anakin: 3,
          vader: 0,
          palpatine: 2,
          leia: 2,
          han: 3,
          chewbacca: 2,
          yoda: 1,
          grogu: 2,
          mandalorian: 1,
          maul: 2,
          obiwan: 1,
          padme: 1,
          rey: 2,
        },
      },
      {
        id: "q6a3",
        text: "Ich hinterfrage Autoritäten und bin bereit, gegen Ungerechtigkeit zu kämpfen.",
        characterPoints: {
          luke: 3,
          anakin: 2,
          vader: 0,
          palpatine: 1,
          leia: 3,
          han: 2,
          chewbacca: 1,
          yoda: 0,
          grogu: 0,
          mandalorian: 0,
          maul: 1,
          obiwan: 0,
          padme: 3,
          rey: 3,
        },
      },
      {
        id: "q6a4",
        text: "Ich versuche, mich anzupassen und Konflikte mit Autoritäten zu vermeiden.",
        characterPoints: {
          luke: 0,
          anakin: 0,
          vader: 1,
          palpatine: 3,
          leia: 0,
          han: 0,
          chewbacca: 2,
          yoda: 1,
          grogu: 3,
          mandalorian: 1,
          maul: 0,
          obiwan: 2,
          padme: 0,
          rey: 0,
        },
      },
    ],
  },
  {
    id: "q7",
    text: "Welche Ihrer Eigenschaften würden Sie als Ihre größte Stärke bezeichnen?",
    answers: [
      {
        id: "q7a1",
        text: "Meine Fähigkeit, strategisch zu denken und langfristige Pläne zu entwickeln.",
        characterPoints: {
          luke: 0,
          anakin: 1,
          vader: 2,
          palpatine: 3,
          leia: 2,
          han: 0,
          chewbacca: 0,
          yoda: 2,
          grogu: 0,
          mandalorian: 1,
          maul: 2,
          obiwan: 2,
          padme: 1,
          rey: 0,
        },
      },
      {
        id: "q7a2",
        text: "Meine Fähigkeit, mich schnell an neue Situationen anzupassen und improvisieren.",
        characterPoints: {
          luke: 2,
          anakin: 2,
          vader: 0,
          palpatine: 1,
          leia: 1,
          han: 3,
          chewbacca: 2,
          yoda: 1,
          grogu: 2,
          mandalorian: 2,
          maul: 1,
          obiwan: 1,
          padme: 1,
          rey: 2,
        },
      },
      {
        id: "q7a3",
        text: "Meine Entschlossenheit und mein unerschütterlicher Glaube an meine Ziele.",
        characterPoints: {
          luke: 3,
          anakin: 3,
          vader: 3,
          palpatine: 2,
          leia: 3,
          han: 1,
          chewbacca: 1,
          yoda: 1,
          grogu: 0,
          mandalorian: 1,
          maul: 3,
          obiwan: 1,
          padme: 2,
          rey: 3,
        },
      },
      {
        id: "q7a4",
        text: "Meine Weisheit und meine Fähigkeit, anderen zu helfen und sie zu führen.",
        characterPoints: {
          luke: 1,
          anakin: 0,
          vader: 1,
          palpatine: 0,
          leia: 2,
          han: 0,
          chewbacca: 1,
          yoda: 3,
          grogu: 1,
          mandalorian: 0,
          maul: 0,
          obiwan: 3,
          padme: 2,
          rey: 1,
        },
      },
    ],
  },
  {
    id: "q8",
    text: "Was würden Sie am liebsten in Ihrer Freizeit tun?",
    answers: [
      {
        id: "q8a1",
        text: "Mich in komplexe Probleme vertiefen und nach Lösungen suchen.",
        characterPoints: {
          luke: 1,
          anakin: 2,
          vader: 1,
          palpatine: 3,
          leia: 1,
          han: 0,
          chewbacca: 0,
          yoda: 3,
          grogu: 0,
          mandalorian: 0,
          maul: 1,
          obiwan: 2,
          padme: 1,
          rey: 1,
        },
      },
      {
        id: "q8a2",
        text: "Aufregende und abenteuerliche Aktivitäten unternehmen.",
        characterPoints: {
          luke: 3,
          anakin: 3,
          vader: 0,
          palpatine: 0,
          leia: 1,
          han: 3,
          chewbacca: 2,
          yoda: 0,
          grogu: 3,
          mandalorian: 1,
          maul: 2,
          obiwan: 0,
          padme: 0,
          rey: 2,
        },
      },
      {
        id: "q8a3",
        text: "Zeit mit meinen engsten Freunden und meiner Familie verbringen.",
        characterPoints: {
          luke: 2,
          anakin: 1,
          vader: 0,
          palpatine: 0,
          leia: 3,
          han: 2,
          chewbacca: 3,
          yoda: 1,
          grogu: 2,
          mandalorian: 1,
          maul: 0,
          obiwan: 1,
          padme: 3,
          rey: 2,
        },
      },
      {
        id: "q8a4",
        text: "Mich weiterbilden und neue Dinge lernen.",
        characterPoints: {
          luke: 2,
          anakin: 1,
          vader: 2,
          palpatine: 2,
          leia: 2,
          han: 0,
          chewbacca: 0,
          yoda: 3,
          grogu: 1,
          mandalorian: 2,
          maul: 1,
          obiwan: 3,
          padme: 2,
          rey: 1,
        },
      },
    ],
  },
  {
    id: "q9",
    text: "Wie wichtig ist es Ihnen, von anderen anerkannt und respektiert zu werden?",
    answers: [
      {
        id: "q9a1",
        text: "Es ist mir wichtig, aber ich lasse mich nicht davon definieren.",
        characterPoints: {
          luke: 2,
          anakin: 0,
          vader: 1,
          palpatine: 0,
          leia: 2,
          han: 1,
          chewbacca: 2,
          yoda: 2,
          grogu: 1,
          mandalorian: 2,
          maul: 0,
          obiwan: 3,
          padme: 2,
          rey: 2,
        },
      },
      {
        id: "q9a2",
        text: "Ich strebe nach Anerkennung und bin stolz auf meine Erfolge.",
        characterPoints: {
          luke: 1,
          anakin: 3,
          vader: 2,
          palpatine: 2,
          leia: 1,
          han: 2,
          chewbacca: 0,
          yoda: 0,
          grogu: 0,
          mandalorian: 0,
          maul: 3,
          obiwan: 0,
          padme: 1,
          rey: 1,
        },
      },
      {
        id: "q9a3",
        text: "Mir ist es wichtiger, meinen eigenen moralischen Kompass zu befolgen.",
        characterPoints: {
          luke: 3,
          anakin: 1,
          vader: 0,
          palpatine: 0,
          leia: 3,
          han: 1,
          chewbacca: 1,
          yoda: 3,
          grogu: 1,
          mandalorian: 2,
          maul: 0,
          obiwan: 2,
          padme: 3,
          rey: 3,
        },
      },
      {
        id: "q9a4",
        text: "Ich bin eher bescheiden und suche nicht aktiv nach Anerkennung.",
        characterPoints: {
          luke: 1,
          anakin: 0,
          vader: 0,
          palpatine: 0,
          leia: 0,
          han: 0,
          chewbacca: 3,
          yoda: 2,
          grogu: 3,
          mandalorian: 3,
          maul: 0,
          obiwan: 1,
          padme: 1,
          rey: 1,
        },
      },
    ],
  },
  {
    id: "q10",
    text: "Wie reagieren Sie auf Ungerechtigkeit oder Leid in der Welt?",
    answers: [
      {
        id: "q10a1",
        text: "Ich versuche, aktiv etwas dagegen zu unternehmen und zu helfen.",
        characterPoints: {
          luke: 3,
          anakin: 2,
          vader: 0,
          palpatine: 0,
          leia: 3,
          han: 1,
          chewbacca: 2,
          yoda: 2,
          grogu: 1,
          mandalorian: 2,
          maul: 0,
          obiwan: 2,
          padme: 3,
          rey: 3,
        },
      },
      {
        id: "q10a2",
        text: "Ich fühle mich davon sehr betroffen und ziehe mich manchmal zurück.",
        characterPoints: {
          luke: 0,
          anakin: 1,
          vader: 0,
          palpatine: 0,
          leia: 0,
          han: 0,
          chewbacca: 1,
          yoda: 0,
          grogu: 3,
          mandalorian: 0,
          maul: 1,
          obiwan: 0,
          padme: 0,
          rey: 0,
        },
      },
      {
        id: "q10a3",
        text: "Ich analysiere die Ursachen und überlege, wie man das System verändern könnte.",
        characterPoints: {
          luke: 1,
          anakin: 1,
          vader: 2,
          palpatine: 3,
          leia: 2,
          han: 1,
          chewbacca: 0,
          yoda: 3,
          grogu: 0,
          mandalorian: 1,
          maul: 2,
          obiwan: 3,
          padme: 2,
          rey: 1,
        },
      },
      {
        id: "q10a4",
        text: "Ich versuche, mich auf das Positive zu konzentrieren und das Beste aus der Situation zu machen.",
        characterPoints: {
          luke: 2,
          anakin: 0,
          vader: 0,
          palpatine: 0,
          leia: 1,
          han: 3,
          chewbacca: 2,
          yoda: 1,
          grogu: 2,
          mandalorian: 1,
          maul: 0,
          obiwan: 1,
          padme: 1,
          rey: 2,
        },
      },
    ],
  },
]

export const characterResults: Record<Character, CharacterResult> = {
  luke: {
    id: "luke",
    name: "Luke Skywalker",
    description:
      "Du bist idealistisch, hilfsbereit und lernbegierig. Wie Luke bist du von einem starken moralischen Kompass geleitet und glaubst an das Gute im Menschen. Du bist hoffnungsvoll, empathisch und hast einen starken Gerechtigkeitssinn.",
    image: "/images/characters/luke.jpg",
  },
  anakin: {
    id: "anakin",
    name: "Anakin Skywalker",
    description:
      "Du bist leidenschaftlich und hast starke Emotionen. Wie Anakin bist du entschlossen und loyal gegenüber den Menschen, die dir wichtig sind, kannst aber auch impulsiv und von deinen Emotionen überwältigt sein. Du bist talentiert und motiviert, aber manchmal ungeduldig.",
    image: "/images/characters/anakin.jpg",
  },
  vader: {
    id: "vader",
    name: "Darth Vader",
    description:
      "Du bevorzugst Struktur, Kontrolle und hast eine natürliche Autorität. Wie Vader legst du Wert auf Effizienz und kannst eine beeindruckende Kraft sein, wenn du an eine Sache glaubst. Du bist entschlossen und lässt dich nicht leicht von deinem Weg abbringen.",
    image: "/images/characters/vader.jpg",
  },
  palpatine: {
    id: "palpatine",
    name: "Kanzler Palpatine / Darth Sidious",
    description:
      "Du denkst strategisch, strebst nach Einfluss und hast die Fähigkeit, andere zu überzeugen. Wie Palpatine bist du intelligent, planst voraus und kannst sehr zielstrebig sein. Du verstehst es, Situationen zu deinem Vorteil zu nutzen.",
    image: "/images/characters/palpatine.jpg",
  },
  leia: {
    id: "leia",
    name: "Leia Organa",
    description:
      "Du hast Führungsqualitäten, Entschlossenheit und ein starkes Engagement für deine Überzeugungen. Wie Leia bist du inspirierend, loyal und bereit, für das zu kämpfen, woran du glaubst. Du bist mutig und stehst für andere ein.",
    image: "/images/characters/leia.jpg",
  },
  han: {
    id: "han",
    name: "Han Solo",
    description:
      "Du hast Witz, Risikobereitschaft und eine unabhängige Denkweise. Wie Han bist du charmant, abenteuerlustig und verlässt dich gerne auf deinen Verstand und deine Intuition. Du findest oft unkonventionelle Lösungen für Probleme.",
    image: "/images/characters/han.jpg",
  },
  chewbacca: {
    id: "chewbacca",
    name: "Chewbacca",
    description:
      "Du bist loyal, fürsorglich und hast eine starke emotionale Bindung zu deinen Freunden. Wie Chewbacca bist du ein verlässlicher und mutiger Freund, der seine Lieben beschützt. Du bist stark, tapfer und manchmal stur, aber immer mit guten Absichten.",
    image: "/images/characters/chewbacca.jpg",
  },
  yoda: {
    id: "yoda",
    name: "Yoda",
    description:
      "Du bist weise, besonnen und hast eine Liebe zum Lernen und Lehren. Wie Yoda bist du nachdenklich, gibst gerne Ratschläge und suchst stets nach tieferem Verständnis. Du bleibst auch in schwierigen Situationen ruhig und findest oft kreative Lösungen.",
    image: "/images/characters/yoda.jpg",
  },
  grogu: {
    id: "grogu",
    name: "Grogu",
    description:
      "Du bist gütig, unschuldig und hast ein starkes Bedürfnis, dich um andere zu kümmern. Wie Grogu bist du liebenswert, neugierig und hast ein großes Herz. Du bist intuitiv und spürst die Gefühle anderer, manchmal bist du auch ein wenig verspielt.",
    image: "/images/characters/grogu.jpg",
  },
  mandalorian: {
    id: "mandalorian",
    name: "Der Mandalorianer",
    description:
      "Du bist pflichtbewusst, hast einen Beschützerinstinkt und eine gewisse Zurückhaltung. Wie der Mandalorianer bist du loyal, zuverlässig und nimmst deine Verantwortung ernst. Du sprichst nicht viel, aber wenn du etwas sagst, hat es Gewicht.",
    image: "/images/characters/mandalorian.jpg",
  },
  maul: {
    id: "maul",
    name: "Darth Maul",
    description:
      "Du bist entschlossen, hast einen strategischen Geist und bist sehr fokussiert. Wie Darth Maul bist du zielstrebig und lässt dich nicht leicht von deinem Weg abbringen. Du kannst sehr beharrlich sein, wenn du etwas erreichen willst.",
    image: "/images/characters/maul.jpg",
  },
  obiwan: {
    id: "obiwan",
    name: "Obi-Wan Kenobi",
    description:
      "Du bist weise, ruhig und ein guter Mentor für andere. Wie Obi-Wan bist du besonnen, geduldig und hast eine natürliche Autorität. Du vermittelst oft bei Konflikten und findest diplomatische Lösungen.",
    image: "/images/characters/obiwan.jpg",
  },
  padme: {
    id: "padme",
    name: "Padmé Amidala",
    description:
      "Du bist idealistisch, ruhig unter Druck und glaubst an Verhandlungen. Wie Padmé bist du prinzipientreu, diplomatisch und setzt dich für deine Überzeugungen ein. Du behältst auch in schwierigen Situationen einen kühlen Kopf.",
    image: "/images/characters/padme.jpg",
  },
  rey: {
    id: "rey",
    name: "Rey",
    description:
      "Du bist entschlossen, mitfühlend und hast ein starkes Verlangen, das Richtige zu tun. Wie Rey bist du mutig, widerstandsfähig und hast ein ausgeprägtes Gerechtigkeitsempfinden. Du bist bereit, für deine Überzeugungen zu kämpfen.",
    image: "/images/characters/rey.jpg",
  },
}

