import { Question, type QuestionData } from "../question.svelte";

export class ParagraphAnswerQuestion extends Question {
    constructor(title?: string, description?: string, required?: boolean) {
        super(title, description, required);

        this.type = ParagraphAnswerQuestion.getQuestionType()    
    }

    public static getQuestionType(): string {
        return "paragraph-question"
    }
}
