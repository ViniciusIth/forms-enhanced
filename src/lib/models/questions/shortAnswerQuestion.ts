import { Question, type QuestionData } from "../question.svelte";

export class ShortAnswerQuestion extends Question {
    constructor(title?: string, description?: string, required?: boolean) {
        super(title, description, required);

        this.type = ShortAnswerQuestion.getQuestionType()
    }

    public static getQuestionType(): string {
        return "short-question"
    }
}
