import type { Question } from "./question.svelte";

export class Form {
    public id: number
    public title: string
    public description: string
    public questions: Question[]

    public isAcceptingResponses: boolean
    public userId: number

    constructor(formData: FormData) {
        this.id = formData.id
        this.title = formData.title
        this.description = formData.description
        this.questions = formData.questions
        this.isAcceptingResponses = formData.isAcceptingResponses
        this.userId = formData.userId
    }
}

export interface FormData {
    id: number
    title: string
    description: string
    questions: Question[]
    isAcceptingResponses: boolean
    userId: number
}
