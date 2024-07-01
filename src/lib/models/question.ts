export class Question {
    public id: number
    public title: string
    public description?: string
    public required: boolean
    public order: number

    // public snippet: Snippet

    constructor(questionData: QuestionData) {
        this.id = questionData.id
        this.title = questionData.title
        this.description = questionData.description
        this.required = questionData.required
        this.order = questionData.order
        // this.snippet = questionData.snippet
    }

    public hasDescription() {
        return this.description != undefined && this.description.length > 0
    }

    public isRequired() {
        return this.required
    }

    public static getQuestionTypes() {
        return ["text", "number", "checkbox", "radio", "select", "textarea"]
    }
}

export interface QuestionData {
    id: number
    title: string
    description: string
    required: boolean
    order: number
// snippet: Snippet
}
