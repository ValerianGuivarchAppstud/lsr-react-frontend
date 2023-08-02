import {CharacterRaw} from "../../data/CharacterRaw";
import { Bloodline } from "./Bloodline";
import {Classe} from "./Classe";
import { Genre } from "./Genre";
import {BattleState} from "./BattleState";

export class Character {
    [key: string]: any
    name: string
    classe: Classe
    bloodline: Bloodline
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
    apotheose: string
    apotheoseImprovement?: string
    apotheoseImprovementList: string[]
    genre: Genre
    relance: number
    playerName?: string
    picture?: string
    pictureApotheose?: string
    background?: string
    buttonColor?: string
    textColor?: string
    battleState: BattleState

    constructor(p: CharacterRaw) {
        this.name = p.name
        this.classe = Classe[p.classe  as keyof typeof Classe]
        this.bloodline = Bloodline[p.bloodline  as keyof typeof Bloodline]
        this.chair = p.chair
        this.esprit = p.esprit
        this.essence = p.essence
        this.pv = p.pv
        this.pvMax = p.pvMax
        this.pf = p.pf
        this.pfMax = p.pfMax
        this.pp = p.pp
        this.ppMax = p.ppMax
        this.dettes = p.dettes
        this.arcanes = p.arcanes
        this.arcanesMax = p.arcanesMax
        this.niveau = p.niveau
        this.lux = p.lux
        this.umbra = p.umbra
        this.secunda = p.secunda
        this.notes = p.notes
        this.category = p.category
        this.apotheose = p.apotheose
        this.apotheoseImprovement = p.apotheoseImprovement
        this.apotheoseImprovementList = p.apotheoseImprovementList
        this.genre = Genre[p.genre  as keyof typeof Genre]
        this.relance = p.relance
        this.playerName = p.playerName
        this.picture = p.picture
        this.pictureApotheose = p.pictureApotheose
        this.background = p.background
        this.buttonColor = p.buttonColor
        this.textColor = p.textColor
        this.battleState = BattleState[p.battleState  as keyof typeof BattleState]
    }

    getDisplayName() : string {
        return this.name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    getDisplayNameAndDescription(): string {
        return this.getDisplayName() + ", " + this.getDescription() + " "
             + this.getBloodlineDescription() + ", niveau " + this.niveau;
    }
    getBloodlineDescription(): string {
        switch (this.bloodline) {
            case Bloodline.EAU:
                return "de l'Eau";
            case Bloodline.LUMIERE:
                return "de la Lumière";
            case Bloodline.TENEBRE:
                return "des Ténèbres";
            case Bloodline.FEU:
                return "du Feu";
            case Bloodline.VENT:
                return "du Vent";
            case Bloodline.TERRE:
                return "de la Terre";
            case Bloodline.FOUDRE:
                return "de la Foudre";
            case Bloodline.GLACE:
                return "de la Glace";
            case Bloodline.NAGA:
                return "Naga";
            case Bloodline.TROGLODYTE:
                return "Troglodyte";
            case Bloodline.LYCAN:
                return "Lycan";
            case Bloodline.GOULE:
                return "Goule";
            case Bloodline.SUCCUBE:
                return "Succube";
            case Bloodline.ILLITHIDE:
                return "Illithide";
            case Bloodline.ARBRE:
                return "de l'Arbre";
            case Bloodline.AUCUN:
                return "";
            case Bloodline.TERREUR:
                return "de la Terreur";
            case Bloodline.COLLECTIONNEUR:
                return "Collectionneuse";
            case Bloodline.GORGONNE:
                return "Gorgonne";
            case Bloodline.NECROMANCIE:
                return "de la Nécromancie";
            case Bloodline.VOYAGEUR:
                return "du Voyageur";
            case Bloodline.JUGE:
                return "du Juge";
            case Bloodline.VOLEUR:
                return "du Voleur";
            default:
                return "";
        }
    }
    getDescription() {
        switch (this.classe) {
            case Classe.CHAMPION:
                return this.genre === Genre.HOMME
                    ? "Champion"
                    : this.genre === Genre.FEMME
                        ? "Championne"
                        : "Champion.ne";
            case Classe.CORROMPU:
                return this.genre === Genre.HOMME
                    ? "Corrompu"
                    : this.genre === Genre.FEMME
                        ? "Corrompue"
                        : "Corrompu.e";
            case Classe.REJETE:
                return this.genre === Genre.HOMME
                    ? "Rejeté"
                    : this.genre === Genre.FEMME
                        ? "Rejetée"
                        : "Rejeté.e";
            case Classe.PACIFICATEUR:
                return this.genre === Genre.HOMME
                    ? "Pacificateur"
                    : this.genre === Genre.FEMME
                        ? "Pacificatrice"
                        : "Pacificateurice";
            case Classe.SPIRITE:
                return this.genre === Genre.HOMME
                    ? "Spirit"
                    : this.genre === Genre.FEMME
                        ? "Spirite"
                        : "Spirit.e";
            case Classe.ARCANISTE:
                return "Arcaniste";
            case Classe.CHAMPION_ARCANIQUE:
                return this.genre === Genre.HOMME
                    ? "Champion Arcanique"
                    : this.genre === Genre.FEMME
                        ? "Championne Arcanique"
                        : "Champion.ne Arcanique";
            case Classe.SOLDAT:
                return this.genre === Genre.HOMME
                    ? "Soldat"
                    : this.genre === Genre.FEMME
                        ? "Soldate"
                        : "Soldat.e";
            case Classe.INCONNU:
                return "Classe inconnue";
            case Classe.DRAGON:
                return "Dragon";
            case Classe.AVATAR:
                return this.genre === Genre.HOMME
                    ? "Avatar"
                    : this.genre === Genre.FEMME
                        ? "Avatar"
                        : "Avatar";
            case Classe.SKINWALKER:
                return "Skinwalker";
            case Classe.GAME_MASTER:
                return "MJ";
            case Classe.ROI:
                return "Roi";
            case Classe.PAROLIER:
                return "Parolier";
            default:
                return "";
        }
    }

    getNumberValueByFieldName(fieldName: string): number {
        return this[fieldName] as number
    }

    updateNumberValueByFieldName(fieldName: string, value: number) {
        this[fieldName] = value
    }
}