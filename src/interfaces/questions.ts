export interface AnswerOption {
  id: string;
  text: string;
  value: number;
}

export interface Question {
  id: string;
  text: string;
  type: string;
  answerOptions: AnswerOption[];
  selectedAnswer: string | string[];
}