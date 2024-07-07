import makeid from "$lib/helpers/makeid";
import { Question, type QuestionData } from "../question.svelte";

export class ParagraphAnswerQuestion extends Question {
    constructor(questionData: QuestionData) {
        super({ ...questionData })
    }

    public static generateDefault(): ParagraphAnswerQuestion {
        const data: QuestionData = {
            id: makeid(5),
            title: "",
            description: "",
            required: false,
            order: 0,
            type: ParagraphAnswerQuestion.getQuestionType()
        }

        return new ParagraphAnswerQuestion(data)
    }

    public static getQuestionType(): string {
        return "paragraph-question"
    }
}
