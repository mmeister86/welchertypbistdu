export type Answer = {
  id: string;
  text: string;
  careers: Career[];
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Career =
  | "PF"
  | "KZ"
  | "KB"
  | "VK"
  | "EH"
  | "FI"
  | "MFA"
  | "IK"
  | "EL"
  | "SHK"
  | "ZFA"
  | "ARZT"
  | "POL"
  | "FW"
  | "LEH";

export type CareerResult = {
  id: Career;
  name: string;
  fullName: string;
  description: string;
  image: string;
  color: string;
  traits: string[];
  dailyTasks: string[];
  pros: string[];
  cons: string[];
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  result: Career | null;
  showResult: boolean;
};
