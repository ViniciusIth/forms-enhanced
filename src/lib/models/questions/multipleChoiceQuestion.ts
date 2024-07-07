import makeid from "$lib/helpers/makeid";
import { Question, type QuestionData } from "../question.svelte";

interface MultipleChoiceQuestionData extends QuestionData {
    options: string[]
}

export class MultipleChoiceQuestion extends Question {
    public options: string[];

    constructor(questionData: MultipleChoiceQuestionData) {
        super({ ...questionData })
        this.options = questionData.options
    }

    public static generateDefault(): MultipleChoiceQuestion {
        const data: MultipleChoiceQuestionData = {
            id: makeid(5),
            title: "",
            description: "",
            required: false,
            options: [],
            order: 0,
            type: MultipleChoiceQuestion.getQuestionType()
        }

        return new MultipleChoiceQuestion(data)
    }

    public static getQuestionType(): string {
        return "multiple-choice-question"
    }
}
