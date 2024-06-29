import type { Question } from "./question";

export class Form {

    public id: number
    public title: string
    public description: string
    public questions: Question[]

    public isAcceptingResponses: boolean
    public userId: number

    constructor(formData: any) {
        this.id = formData.id
        this.title = formData.title
        this.description = formData.description
        this.questions = formData.questions
        this.isAcceptingResponses = formData.isAcceptingResponses
        this.userId = formData.userId

    }
}
