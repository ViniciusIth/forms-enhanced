import type { Snippet } from "svelte";

export class Question {

    public id: number
    public title: string
    public required: boolean
    public order: number

    public snippet: Snippet

    constructor(questionData: any) {
        this.id = questionData.id
        this.title = questionData.title
        this.required = questionData.required
        this.order = questionData.order
        this.snippet = questionData.snippet
    }

}
