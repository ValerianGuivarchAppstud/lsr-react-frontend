import {DisplayCategory} from "./DisplayCategory";
import {ApotheoseRaw} from "../../data/api/ApotheoseRaw";

export class Apotheose {
    name: string
    shortName: string
    displayCategory: DisplayCategory
    description?: string
    cost: number
    constructor(p: ApotheoseRaw) {
        this.name = p.name
        this.shortName = p.shortName
        this.displayCategory = DisplayCategory[p.displayCategory as keyof typeof DisplayCategory]
        this.description = p.description
        this.cost = p.cost
    }

}