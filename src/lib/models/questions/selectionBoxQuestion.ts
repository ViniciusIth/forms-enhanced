import { Question, type QuestionData } from "../question";

interface SelectionBoxQuestionData extends QuestionData {
    options: string[]
}

export class SelectionBoxQuestion extends Question {
    public options: string[];

    constructor(questionData: SelectionBoxQuestionData) {
        super({ ...questionData })
        this.options = questionData.options
    }
}
