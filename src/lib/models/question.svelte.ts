export class Question {
    public id: string
    public title: string = $state('')
    public description: string = $state('')
    public required: boolean = $state(false)
    public order: number = $state(0)
    public type: string = $state('')

    // public snippet: Snippet

    constructor(questionData: QuestionData) {
        this.id = questionData.id
        this.title = questionData.title || "title"
        this.description = questionData.description
        this.required = questionData.required
        this.order = questionData.order
        this.type = questionData.type
    }

    public hasDescription() {
        return this.description != undefined && this.description.length > 0
    }

    public isRequired() {
        return this.required
    }
}

export interface QuestionData {
    id: string
    title: string
    description: string
    required: boolean
    order: number
    type: string
}
