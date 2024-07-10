import { Question, type QuestionData } from "../question.svelte";

export interface DateQuestionData extends QuestionData { }

export class DateQuestion extends Question {
    constructor(title?: string, description?: string, required?: boolean) {
        super(title, description, required);

        this.type = DateQuestion.getQuestionType()
    }

    public static getQuestionType(): string {
        return "date-question"
    }
}
