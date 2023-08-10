import {SkillRaw} from "./SkillRaw";
import {ProficiencyRaw} from "./ProficiencyRaw";
import {ApotheoseRaw} from "./ApotheoseRaw";

export interface CharacterRaw {
    name: string
    classe: {
        name: string,
        display: string
    }
    bloodline: {
        name: string,
        display: string
    }
    arcaneList: {
        name: string
        type: string
        use: string
    }[]
    rest: number
    longRest: number
    chair: number
    esprit: number
    essence: number
    pv: number
    pvMax: number
    pf: number
    pfMax: number
    pp: number
    ppMax: number
    dettes: number
    arcanes: number
    arcanesMax: number
    niveau: number
    lux: string
    umbra: string
    secunda: string
    notes: string
    category: string
    apotheoseName: string
    apotheoseImprovement?: string
    apotheoseImprovementList: string[]
    genre: string
    relance: number
    playerName?: string
    picture?: string
    pictureApotheose?: string
    background?: string
    buttonColor?: string
    textColor?: string
    battleState: string
    skills: SkillRaw[]
    proficiencies: ProficiencyRaw[]
    apotheoses: ApotheoseRaw[]
}