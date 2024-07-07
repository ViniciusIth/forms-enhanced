import makeid from "$lib/helpers/makeid";
import { Question, type QuestionData } from "../question.svelte";

export interface DateQuestionData extends QuestionData { }

export class DateQuestion extends Question {
    constructor(questionData: QuestionData) {
        super(questionData)
    }

    public static generateDefault(): DateQuestion {
        const data: DateQuestionData = {
            id: makeid(5),
            title: "",
            description: "",
            required: false,
            order: 0,
            type: DateQuestion.getQuestionType()
        }

        return new DateQuestion(data)
    }

    public static getQuestionType(): string {
        return "date-question"
    }
}
