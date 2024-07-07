import makeid from "$lib/helpers/makeid";
import { Question, type QuestionData } from "../question.svelte";

export class ShortAnswerQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }

    public static generateDefault(): ShortAnswerQuestion {
        const data: QuestionData = {
            id: makeid(5),
            title: "",
            description: "",
            required: false,
            order: 0,
            type: ShortAnswerQuestion.getQuestionType()
        }

        return new ShortAnswerQuestion(data)
    }

    public static getQuestionType(): string {
        return "short-question"
    }
}
