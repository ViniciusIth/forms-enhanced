import { Question, type QuestionData } from "../question";

export interface TimeQuestionData extends QuestionData {
    name: string
}

export class TimeQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }
}
