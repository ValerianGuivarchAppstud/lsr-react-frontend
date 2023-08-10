import {SkillRaw} from "../../data/SkillRaw";
import {DisplayCategory} from "./DisplayCategory";

export class Skill {
    name: string
    displayCategory: DisplayCategory
    constructor(p: SkillRaw) {
        this.name = p.name
        this.displayCategory = DisplayCategory[p.displayCategory as keyof typeof DisplayCategory]
    }

}