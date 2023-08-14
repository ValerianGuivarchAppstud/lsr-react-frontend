import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {IconType} from "react-icons";

interface CharacterButtonProps {
    cardDisplay: boolean;
    description?: string;
    column?: boolean;
    name: string;
    selected?: boolean;
    value?: number;
    maxValue?: number;
    bonusValue? : number;
    icon?: IconType;
    onClickDecr?: () => void;
    onClickBtn?: () => void;
    onClickIncr?: () => void;
}

export function CharacterButton(props: CharacterButtonProps) {
    const shouldDisplayIcon = props.value === 0 && props.icon;
    return (
        <MainContainer card={props.cardDisplay}>
            {props.onClickDecr && (
                <Change card={props.cardDisplay} left={true} onClick={props.onClickDecr}>
                    <FaMinus />
                </Change>
            )}
            <ButtonSelectable
                columnDisplay={props.column || false}
                cardDisplay={props.cardDisplay}
                selected={props.selected}
                title={props.description}
                onClick={props.onClickBtn}
            >
                {shouldDisplayIcon ? (
                    <IconContainer>
                        <span>&nbsp;</span>{React.createElement(props.icon!)}<span>&nbsp;</span></IconContainer>
                ) : (
                    <>
                    <ButtonName>{props.name}&nbsp;</ButtonName>
                        {props.value !== undefined && (
                            <div>
                                {props.value}
                                {props.bonusValue ? ` (+${props.bonusValue})` : ''}
                                {props.maxValue && ` / ${props.maxValue}`}
                            </div>
                        )}
                    </>
                )}
            </ButtonSelectable>
            {props.onClickIncr && (
                <Change card={props.cardDisplay} left={false} onClick={props.onClickIncr}>
                    <FaPlus />
                </Change>
            )}
        </MainContainer>
    );
}


const MainContainer = styled.div<{ card: boolean }>`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.card ? '0' : '0 6px 0 6px;')};
`;

const Change = styled.div<{ card: boolean, left: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.card ? '8px' : '24px')};
  height: ${(props) => (props.card ? '8px' : '24px')};
  border-radius: 50%;
  background-color: #f0f0f0;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: perspective(1px) scale(1.02);
  transition: transform 0.3s ease;
  margin-right: ${(props) => (props.card ? (props.left ? '0px' : '4px') : (props.left ? '4px' : '8px'))};
  margin-left: ${(props) => (props.card ? (props.left ? '4px' : '0px') : (props.left ? '8px' : '4px'))};

  &:hover {
    transform: perspective(1px) scale(1.05);
  }
`;




const ButtonSelectable = styled.div<{ cardDisplay: boolean, columnDisplay: boolean, selected?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.cardDisplay && props.columnDisplay ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: ${(props) => (props.cardDisplay ? '2px' : '8px')};
  border-radius: 4px;
  margin: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: perspective(1px) scale(1.02);
  transition: transform 0.3s ease;

  ${({ selected }) => selected && `background-color: #ccc;`}

  &:hover {
    transform: perspective(1px) scale(1.05);
  }
`;

const ButtonName = styled.div`
  font-weight: bold;
  margin: 2px 0 2px 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;