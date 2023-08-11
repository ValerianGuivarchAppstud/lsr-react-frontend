import React, {useEffect} from 'react';
// @ts-ignore
import s from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setCharacter} from "../../data/store/character-slice";
import {setRolls} from "../../data/store/rolls-slice";
import RollCard from "../../components/RollCard/RollCard";
import {Roll} from "../../domain/models/Roll";
import {useSSERolls} from "../../data/useSSERolls";
import {ApiL7RProvider} from "../../data/api/ApiL7RProvider";
import { CharacterPanel } from '../../components/Character/CharacterPanel/CharacterPanel';
import {useSSECharacterByName} from "../../data/useSSECharacterByName";
import {CharacterBanner} from "../../components/Character/CharacterBanner/CharacterBanner";
import {CharacterNotes} from "../../components/Character/CharacterNotes/CharacterNotes";

export function CharacterSheet() {
    const dispatch = useDispatch();
    const {characterName} = useParams();

    async function fetchCurrentCharacter() {
        const currentCharacter = await ApiL7RProvider.getCharacterByName(characterName ? characterName : '');
        dispatch(setCharacter(currentCharacter));
    }

    async function fetchRolls(): Promise<void> {
        const rolls = await ApiL7RProvider.getRolls();
        dispatch(setRolls(rolls));
    }

    useEffect(() => {
        fetchCurrentCharacter().then(() => {
        });
        fetchRolls().then(() => {
        });
    }, []);

    useSSECharacterByName({
        name: characterName || ''
    });
    useSSERolls();


    const loadingCharacter: boolean = useSelector((store) =>
        // @ts-ignore
        store.CHARACTER.loading
    );
    const rolls: Roll[] = useSelector((store) =>
        // @ts-ignore
        store.ROLLS.rolls
    );

    return (
        <>
            {loadingCharacter ? (
                <p>Loading...</p>
            ) : (
                <div className={s.main_container}>
                    <CharacterBanner/>
                    <CharacterNotes/>
                    <CharacterPanel cardDisplay={false}/>

                    <div className={s.rolls}>
                        {rolls.map((roll: Roll) => (
                            <div key={roll.id}>
                                <RollCard roll={roll}/>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </>
    );
}
