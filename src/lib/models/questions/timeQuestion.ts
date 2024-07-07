import makeid from "$lib/helpers/makeid";
import { Question, type QuestionData } from "../question.svelte";

export interface TimeQuestionData extends QuestionData { }

export class TimeQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }

    public static generateDefault(): TimeQuestion {
        const data: TimeQuestionData = {
            id: makeid(5),
            title: "",
            description: "",
            required: false,
            order: 0,
            type: TimeQuestion.getQuestionType()
        }

        return new TimeQuestion(data)
    }

    public static getQuestionType(): string {
        return "time-question"
    }
}
