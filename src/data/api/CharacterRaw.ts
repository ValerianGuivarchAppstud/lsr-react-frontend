import {SkillRaw} from "./SkillRaw";
import {ProficiencyRaw} from "./ProficiencyRaw";
import {ApotheoseRaw} from "./ApotheoseRaw";

export interface CharacterRaw {
    name: string
    controlledBy?: string
    classe: {
        name: string,
        display: string
    }
    bloodline: {
        name: string,
        display: string
    }
    rest: number
    longRest: number
    chair: number
    esprit: number
    essence: number
    chairBonus: number
    espritBonus: number
    essenceBonus: number
    pv: number
    pvMax: number
    pf: number
    pfMax: number
    pp: number
    ppMax: number
    dettes: number
    arcanes: number
    arcanesMax: number
    arcanePrimes: number
    arcanePrimesMax: number
    munitions: number
    munitionsMax: number
    niveau: number
    lux: string
    umbra: string
    secunda: string
    notes: string
    category: string
    apotheoseName: string | null
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
    apotheoseState: string
}