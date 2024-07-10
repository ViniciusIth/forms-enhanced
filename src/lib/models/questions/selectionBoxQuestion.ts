import { Question, type QuestionData } from "../question.svelte";

interface SelectionBoxQuestionData extends QuestionData {
    options: string[]
}

export class SelectionBoxQuestion extends Question {
    public options: string[];

    constructor(options?: string[], title?: string, description?: string, required?: boolean) {
        super(title, description, required);

        this.type = SelectionBoxQuestion.getQuestionType()
        this.options = options || []
    }


    public static getQuestionType(): string {
        return "selection-box-question"
    }
}
