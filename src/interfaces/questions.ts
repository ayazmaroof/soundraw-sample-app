export interface AnswerOption {
    id: string;
    text: string;
    value: number;
}
export interface Question {
    id: number;
    text: string;
    type: string;
    answerOptions: AnswerOption[];
}