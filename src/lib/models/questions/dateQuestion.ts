import { Question, type QuestionData } from "../question";

export interface DateQuestionData extends QuestionData {
    name: string
}

export class DateQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }
}
