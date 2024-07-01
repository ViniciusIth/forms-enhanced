
import { Question, type QuestionData } from "../question";

interface MultipleChoiceQuestionData extends QuestionData {
    options: string[]
}

export class MultipleChoiceQuestion extends Question {
    public options: string[];

    constructor(questionData: MultipleChoiceQuestionData) {
        super({ ...questionData })
        this.options = questionData.options
    }
}
