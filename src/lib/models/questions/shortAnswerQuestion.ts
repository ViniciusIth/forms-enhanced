import { Question, type QuestionData } from "../question";

export class ShortAnswerQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }
}
