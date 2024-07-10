import makeid from "$lib/helpers/makeid"

export class Question {
    public id: string
    public title: string = $state('')
    public description: string = $state('')
    public required: boolean = $state(false)
    public type: string = $state('')

    // public snippet: Snippet

    constructor(title?: string, description?: string, required?: boolean) {
        this.id = this.type + makeid(5)
        this.title = title || ""
        this.description = description || ""
        this.required = required || false
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
