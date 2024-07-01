
import { Question, type QuestionData } from "../question";

export class ParagraphAnswerQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }
}
