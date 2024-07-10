import { Question, type QuestionData } from "../question.svelte";

interface MultipleChoiceQuestionData extends QuestionData {
    options: string[]
}

export class MultipleChoiceQuestion extends Question {
    public options: string[] = $state([]);

    constructor(options?: string[], title?: string, description?: string, required?: boolean) {
        super(title, description, required);

        this.type = MultipleChoiceQuestion.getQuestionType()

        for (const option of options || []) {
            if (option) {
                this.options.push(option)
            }
        }
    }

    public addOption(option: string) {
        this.options.push(option)
    }

    public static getQuestionType(): string {
        return "multiple-choice-question"
    }
}
