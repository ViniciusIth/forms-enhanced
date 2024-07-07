import makeid from "$lib/helpers/makeid";
import { Question, type QuestionData } from "../question.svelte";

interface SelectionBoxQuestionData extends QuestionData {
    options: string[]
}

export class SelectionBoxQuestion extends Question {
    public options: string[];

    constructor(questionData: SelectionBoxQuestionData) {
        super({ ...questionData })
        this.options = questionData.options
    }

    public static generateDefault(): SelectionBoxQuestion {
        const data: SelectionBoxQuestionData = {
            id: makeid(5),
            title: "",
            description: "",
            required: false,
            options: [],
            order: 0,
            type: SelectionBoxQuestion.getQuestionType()
        }

        return new SelectionBoxQuestion(data)
    }

    public static getQuestionType(): string {
        return "selection-box-question"
    }
}
